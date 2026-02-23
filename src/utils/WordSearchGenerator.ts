export type WordSearchGrid = string[][];

export type WordSearchResult = {
    grid: WordSearchGrid;
    words: { word: string; start: [number, number]; end: [number, number] }[];
    width: number;
    height: number;
};

export function generateWordSearch(vocabulary: { phrase: string }[]): WordSearchResult {
    const rawWords = vocabulary.map(v => v.phrase.toUpperCase().replace(/[^A-Z]/g, ''));
    const words = [...new Set(rawWords)].filter(w => w.length > 1);

    const size = Math.max(12, ...words.map(w => w.length)) + 2;
    const grid: WordSearchGrid = Array(size).fill(null).map(() => Array(size).fill(''));
    const placedWords: { word: string; start: [number, number]; end: [number, number] }[] = [];

    const directions: [number, number][] = [
        [1, 0],   // Horizontal
        [0, 1],   // Vertical
        [1, 1],   // Diagonal Down-Right
        [-1, 1],  // Diagonal Down-Left
    ];

    for (const word of words) {
        let placed = false;
        let attempts = 0;
        while (!placed && attempts < 100) {
            attempts++;
            const dir = directions[Math.floor(Math.random() * directions.length)];
            const startX = Math.floor(Math.random() * size);
            const startY = Math.floor(Math.random() * size);

            const endX = startX + dir[0] * (word.length - 1);
            const endY = startY + dir[1] * (word.length - 1);

            if (endX >= 0 && endX < size && endY >= 0 && endY < size) {
                let canPlace = true;
                for (let i = 0; i < word.length; i++) {
                    const cx = startX + dir[0] * i;
                    const cy = startY + dir[1] * i;
                    if (grid[cy][cx] !== '' && grid[cy][cx] !== word[i]) {
                        canPlace = false;
                        break;
                    }
                }

                if (canPlace) {
                    for (let i = 0; i < word.length; i++) {
                        const cx = startX + dir[0] * i;
                        const cy = startY + dir[1] * i;
                        grid[cy][cx] = word[i];
                    }
                    placedWords.push({ word, start: [startX, startY], end: [endX, endY] });
                    placed = true;
                }
            }
        }
    }

    // Fill with random letters
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if (grid[y][x] === '') {
                grid[y][x] = alphabet[Math.floor(Math.random() * alphabet.length)];
            }
        }
    }

    return {
        grid,
        words: placedWords,
        width: size,
        height: size
    };
}
