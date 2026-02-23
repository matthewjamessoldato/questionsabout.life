export type CrosswordCell = {
    char: string;
    number?: number;
    isStartOfAcross?: boolean;
    isStartOfDown?: boolean;
};

export type CrosswordResult = {
    grid: (CrosswordCell | null)[][];
    clues: {
        across: { number: number; clue: string; answer: string }[];
        down: { number: number; clue: string; answer: string }[];
    };
    width: number;
    height: number;
};

interface PlacedWord {
    word: string;
    clue: string;
    x: number;
    y: number;
    direction: 'across' | 'down';
    number: number;
}

export function generateCrossword(vocabulary: { phrase: string; translation?: string; example?: string }[], clueType: 'translation' | 'target' = 'translation'): any {
    const allWords = vocabulary.map(v => {
        const answer = v.phrase.toUpperCase().replace(/[^A-Z]/g, '');
        let clue = v.translation || 'Define this';

        if (clueType === 'target' && v.example) {
            // Mask the phrase in the example sentence using smart logic
            // 1. Exact match
            const escapedPhrase = v.phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            let masked = v.example.replace(new RegExp(escapedPhrase, 'gi'), '__________');

            // 2. Pronoun handling if exact failed
            if (masked === v.example) {
                const pronouns = ['myself', 'yourself', 'himself', 'herself', 'ourselves', 'themselves', 'oneself', 'one\'s', 'my', 'your', 'his', 'her', 'our', 'their', 'someone', 'somebody', 'something'];
                let regexPattern = v.phrase;
                let hasPronoun = false;
                pronouns.forEach(p => {
                    if (new RegExp(`\\b${p}\\b`, 'i').test(regexPattern)) {
                        regexPattern = regexPattern.replace(new RegExp(`\\b${p}\\b`, 'gi'), '\\S+');
                        hasPronoun = true;
                    }
                });
                if (hasPronoun) {
                    try {
                        masked = v.example.replace(new RegExp(regexPattern, 'gi'), '__________');
                    } catch (e) { }
                }
            }

            // 3. Longest word fallback
            if (masked === v.example) {
                const words = v.phrase.split(/[\s-]+/);
                const longestWord = words.reduce((a, b) => a.length > b.length ? a : b, '');
                if (longestWord.length > 3) {
                    masked = v.example.replace(new RegExp(longestWord, 'gi'), '_______');
                }
            }

            clue = masked;
        }

        return {
            answer,
            original: v.phrase,
            clue
        };
    }).filter(v => v.answer.length > 1);

    if (allWords.length === 0) return { grid: [], clues: { across: [], down: [] }, width: 0, height: 0 };

    const gridSize = 30; // Larger grid for better placement
    let bestResult: any = null;

    // Try multiple times to find the best layout
    for (let attempt = 0; attempt < 15; attempt++) {
        const grid: (CrosswordCell | null)[][] = Array(gridSize).fill(null).map(() => Array(gridSize).fill(null));
        const placedWords: PlacedWord[] = [];
        let clueCounter = 1;

        // Shuffle words slightly to get different starting words/orders (except the first attempt which is sorted)
        const words = attempt === 0 ? [...allWords].sort((a, b) => b.answer.length - a.answer.length) : [...allWords].sort(() => Math.random() - 0.5);

        const canPlace = (word: string, x: number, y: number, direction: 'across' | 'down') => {
            // Boundary checks
            if (x < 0 || y < 0 || (direction === 'across' ? x + word.length : x) >= gridSize || (direction === 'down' ? y + word.length : y) >= gridSize) return false;

            // Check each position of the word
            for (let i = 0; i < word.length; i++) {
                const cx = direction === 'across' ? x + i : x;
                const cy = direction === 'across' ? y : y + i;
                const centerCell = grid[cy][cx];

                // Check center (intersection or empty)
                if (centerCell) {
                    if (centerCell.char !== word[i]) return false; // Mismatch
                }

                // Check neighbors (surrounding the word)
                for (let j = -1; j <= 1; j += 2) { // j=-1 and j=1 (sides)
                    const nx = direction === 'across' ? cx : cx + j;
                    const ny = direction === 'across' ? cy + j : cy;

                    if (nx >= 0 && nx < gridSize && ny >= 0 && ny < gridSize) {
                        const neighbor = grid[ny][nx];
                        // If center is empty (new letter), neighbors MUST be empty.
                        // If center is occupied (intersection), neighbors are part of crossing word (allowed).
                        if (!centerCell && neighbor) return false;
                    }
                }
            }

            // Check Start (Before word)
            const sx = direction === 'across' ? x - 1 : x;
            const sy = direction === 'across' ? y : y - 1;
            if (sx >= 0 && sy >= 0 && grid[sy][sx]) return false;

            // Check End (After word)
            const ex = direction === 'across' ? x + word.length : x;
            const ey = direction === 'across' ? y : y + word.length;
            if (ex < gridSize && ey < gridSize && grid[ey][ex]) return false;

            return true;
        };

        const placeWord = (wordData: typeof allWords[0], x: number, y: number, direction: 'across' | 'down') => {
            const word = wordData.answer;
            const number = clueCounter++;
            for (let i = 0; i < word.length; i++) {
                const cx = direction === 'across' ? x + i : x;
                const cy = direction === 'across' ? y : y + i;
                if (!grid[cy][cx]) grid[cy][cx] = { char: word[i] };
                if (i === 0) {
                    grid[cy][cx]!.number = number;
                    if (direction === 'across') grid[cy][cx]!.isStartOfAcross = true;
                    else grid[cy][cx]!.isStartOfDown = true;
                }
            }
            placedWords.push({ word, clue: wordData.clue, x, y, direction, number });
        };

        // Place first word in middle
        const first = words[0];
        placeWord(first, Math.floor(gridSize / 2 - first.answer.length / 2), Math.floor(gridSize / 2), 'across');

        // Place remaining
        for (let i = 1; i < words.length; i++) {
            const current = words[i];
            let options: { x: number; y: number; dir: 'across' | 'down'; score: number }[] = [];

            for (let pw of placedWords) {
                for (let j = 0; j < pw.word.length; j++) {
                    for (let k = 0; k < current.answer.length; k++) {
                        if (pw.word[j] === current.answer[k]) {
                            const dir = pw.direction === 'across' ? 'down' : 'across';
                            const sx = dir === 'across' ? (pw.direction === 'across' ? pw.x + j : pw.x) - k : (pw.direction === 'across' ? pw.x + j : pw.x);
                            const sy = dir === 'across' ? (pw.direction === 'across' ? pw.y : pw.y + j) : (pw.direction === 'across' ? pw.y : pw.y + j) - k;

                            if (canPlace(current.answer, sx, sy, dir)) {
                                // Score based on how many letters intersect with existing words (not just this one)
                                // AND how close it is to the center (compactness)
                                let intersections = 0;
                                for (let c = 0; c < current.answer.length; c++) {
                                    const cx = dir === 'across' ? sx + c : sx;
                                    const cy = dir === 'across' ? sy : sy + c;
                                    if (grid[cy][cx]) intersections++;
                                }

                                const distFromCenter = Math.abs(sx - gridSize / 2) + Math.abs(sy - gridSize / 2);
                                options.push({ x: sx, y: sy, dir, score: (intersections * 10) - distFromCenter });
                            }
                        }
                    }
                }
            }

            if (options.length > 0) {
                // Pick best option (highest score)
                options.sort((a, b) => b.score - a.score);
                const best = options[0];
                placeWord(current, best.x, best.y, best.dir);
            }
        }

        // Calculate current area for "best result" selection
        let minX = gridSize, maxX = 0, minY = gridSize, maxY = 0;
        let cells = 0;
        grid.forEach((row, y) => row.forEach((cell, x) => {
            if (cell) {
                minX = Math.min(minX, x); maxX = Math.max(maxX, x);
                minY = Math.min(minY, y); maxY = Math.max(maxY, y);
                cells++;
            }
        }));
        const area = (maxX - minX + 1) * (maxY - minY + 1);

        if (!bestResult || placedWords.length > bestResult.placedWords.length ||
            (placedWords.length === bestResult.placedWords.length && area < bestResult.area)) {
            bestResult = { grid: JSON.parse(JSON.stringify(grid)), placedWords, area };
        }
        if (placedWords.length === allWords.length && area < 100) break; // Good enough
    }

    // Shrink and Format
    const { grid, placedWords } = bestResult;
    let minX = gridSize, maxX = 0, minY = gridSize, maxY = 0;
    grid.forEach((row: any, y: number) => row.forEach((cell: any, x: number) => {
        if (cell) {
            minX = Math.min(minX, x); maxX = Math.max(maxX, x);
            minY = Math.min(minY, y); maxY = Math.max(maxY, y);
        }
    }));


    console.log(`DEBUG: Bounds - minX:${minX}, maxX:${maxX}, minY:${minY}, maxY:${maxY}, Placed:${placedWords.length}`);

    const width = maxX - minX + 1;
    const height = maxY - minY + 1;
    const finalGrid = Array(height).fill(null).map(() => Array(width).fill(null));
    for (let y = minY; y <= maxY; y++) for (let x = minX; x <= maxX; x++) finalGrid[y - minY][x - minX] = grid[y][x];

    return {
        grid: finalGrid,
        clues: {
            across: placedWords.filter((w: any) => w.direction === 'across').map((w: any) => ({ number: w.number, clue: w.clue, answer: w.word })),
            down: placedWords.filter((w: any) => w.direction === 'down').map((w: any) => ({ number: w.number, clue: w.clue, answer: w.word })),
        },
        width, height
    };
}
