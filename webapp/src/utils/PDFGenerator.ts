import { jsPDF } from 'jspdf';
import type { Question, VocabularyItem } from '../data/questions';
import { generateCrossword } from './CrosswordGenerator';
import type { CrosswordResult } from './CrosswordGenerator';
import { generateWordSearch } from './WordSearchGenerator';
import type { WordSearchResult } from './WordSearchGenerator';


// Helper for masking phrases in sentences (handling pronouns/conjugations)
export const smartMask = (sentence: string, phrase: string): string => {
    // 1. Try exact match (case insensitive)
    const escapedPhrase = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Use a standard length mask that isn't too long to cause wrapping issues
    let masked = sentence.replace(new RegExp(escapedPhrase, 'gi'), '______________');
    if (masked !== sentence) return masked;

    // 2. Try handling pronouns (myself -> yourself, etc.)
    const pronouns = ['myself', 'yourself', 'himself', 'herself', 'ourselves', 'themselves', 'oneself', 'one\'s', 'my', 'your', 'his', 'her', 'our', 'their', 'someone', 'somebody', 'something'];
    let regexPattern = phrase;
    let hasPronoun = false;

    // Replace pronouns in the phrase with a wildcard regex
    pronouns.forEach(p => {
        if (new RegExp(`\\b${p}\\b`, 'i').test(regexPattern)) {
            regexPattern = regexPattern.replace(new RegExp(`\\b${p}\\b`, 'gi'), '\\S+');
            hasPronoun = true;
        }
    });

    if (hasPronoun) {
        try {
            masked = sentence.replace(new RegExp(regexPattern, 'gi'), '______________');
            if (masked !== sentence) return masked;
        } catch (e) { console.warn('Regex error in smartMask', e); }
    }

    // 3. Fallback: Mask the longest word (if > 3 chars) to avoid giving away the key concept
    const words = phrase.split(/[\s-]+/);
    const longestWord = words.reduce((a, b) => a.length > b.length ? a : b, '');
    if (longestWord.length > 3) {
        masked = sentence.replace(new RegExp(longestWord, 'gi'), '_______');
        return masked;
    }

    // 4. Ultimate Fallback: Just return the sentence (or could mask everything?)
    // For now, let's just return it, but maybe verify script will catch this.
    return sentence;
};

export const generatePDF = (question: Question) => {
    console.log('Generating PDF for:', question.question);
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    let yPos = 20;

    // Helpers
    const addText = (text: string, x: number, y: number, fontSize: number = 10, font: string = 'helvetica', style: string = 'normal', align: 'left' | 'center' | 'right' = 'left', color: [number, number, number] = [0, 0, 0]) => {
        doc.setFont(font, style);
        doc.setFontSize(fontSize);
        doc.setTextColor(color[0], color[1], color[2]);
        doc.text(text, x, y, { align });
    };

    const drawLine = (x1: number, y1: number, x2: number, y2: number, color: [number, number, number] = [200, 200, 200], thickness: number = 0.2) => {
        doc.setDrawColor(color[0], color[1], color[2]);
        doc.setLineWidth(thickness);
        doc.line(x1, y1, x2, y2);
    };

    const checkPageBreak = (neededSpace: number) => {
        if (yPos + neededSpace > pageHeight - margin) {
            doc.addPage();
            yPos = 20;
            return true;
        }
        return false;
    };

    const wrapText = (text: string, x: number, y: number, maxWidth: number, lineHeight: number) => {
        const lines = doc.splitTextToSize(text, maxWidth) as string[];
        doc.text(lines, x, y);
        return lines.length * lineHeight;
    };

    const shuffle = <T>(array: T[]): T[] => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // --- STUDENT INFO ---
    addText('NAME: ____________________________', margin, yPos, 9, 'helvetica', 'normal', 'left', [150, 150, 150]);
    addText(`DATE: ${new Date().toLocaleDateString()}`, pageWidth - margin, yPos, 9, 'helvetica', 'normal', 'right', [150, 150, 150]);
    yPos += 10;

    // --- HEADER ---
    doc.setFillColor(26, 25, 24); // Dark charcoal
    doc.rect(margin, yPos, pageWidth - margin * 2, 35, 'F');

    addText(question.category.toUpperCase(), pageWidth / 2, yPos + 10, 10, 'helvetica', 'normal', 'center', [180, 180, 180]);

    doc.setFont('times', 'italic');
    doc.setFontSize(22);
    doc.setTextColor(255, 255, 255);
    const titleLines = doc.splitTextToSize(question.question, pageWidth - margin * 2 - 20) as string[];
    doc.text(titleLines, pageWidth / 2, yPos + 22, { align: 'center' });

    yPos += 45;

    // --- LESSON BOX ---
    doc.setDrawColor(200, 200, 200);
    doc.setFillColor(245, 245, 245);
    doc.rect(margin, yPos, pageWidth - margin * 2, 20, 'F');
    addText('TEACHER\'S NOTES:', margin + 5, yPos + 7, 8, 'helvetica', 'bold', 'left', [100, 100, 100]);
    addText(`This lesson focuses on the topic of "${question.category}". Practice the vocabulary through interactive exercises and reflective discussion.`, margin + 5, yPos + 13, 9, 'helvetica', 'italic', 'left', [50, 50, 50]);
    yPos += 25;

    // --- VOCABULARY LIST ---
    addText('I. VOCABULARY & PHRASES', margin, yPos, 12, 'helvetica', 'bold');
    drawLine(margin, yPos + 2, pageWidth - margin, yPos + 2, [26, 25, 24], 0.5);
    yPos += 10;

    question.vocabulary.forEach((item, index) => {
        checkPageBreak(25);
        addText(`${index + 1}. ${item.phrase}`, margin, yPos, 11, 'helvetica', 'bold');
        const typeText = item.type ? ` (${item.type})` : '';
        addText(typeText, margin + doc.getTextWidth(`${index + 1}. ${item.phrase}`), yPos, 10, 'helvetica', 'italic', 'left', [100, 100, 100]);

        yPos += 6;
        const exampleText = `"${item.example}"`;
        const addedHeight = wrapText(exampleText, margin + 5, yPos, pageWidth - margin * 2 - 5, 5);
        yPos += addedHeight + 6;
    });

    yPos += 5;

    // --- LANGUAGE TIP ---
    const allTypes = question.vocabulary.map(v => v.type || '');
    let languageTip = "PRO TIP: Try to use these new phrases in your daily conversations to internalize them!";
    if (allTypes.some(t => t.includes('Phrasal'))) {
        languageTip = "PRO TIP: Phrasal verbs are very common in spoken English. Try to learn them as whole units rather than individual words!";
    } else if (allTypes.some(t => t.includes('Idiom'))) {
        languageTip = "PRO TIP: Idioms add color to your language. Be careful with the context, as they are often informal!";
    }

    doc.setDrawColor(200, 200, 200);
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 5;
    addText(languageTip, margin, yPos, 8, 'helvetica', 'italic', 'left', [100, 100, 100]);
    yPos += 10;


    // --- MATCHING EXERCISE ---
    checkPageBreak(80);
    addText('II. MATCHING EXERCISE', margin, yPos, 12, 'helvetica', 'bold');
    yPos += 8;
    addText('Match the English phrase on the left with its translation/meaning on the right.', margin, yPos, 9, 'helvetica', 'italic', 'left', [100, 100, 100]);
    yPos += 10;

    const terms = question.vocabulary.map(v => v.phrase);
    const meanings = shuffle(question.vocabulary.map((v, i) => ({ text: v.translation || 'Define this', originalIndex: i })));

    terms.forEach((term, i) => {
        checkPageBreak(12);
        // Column A (Term)
        addText(`${String.fromCharCode(65 + i)}. ${term}`, margin + 5, yPos, 10, 'helvetica', 'normal');

        // Column B (Meaning)
        addText(`${i + 1}. ${meanings[i].text}`, pageWidth / 2 + 10, yPos, 10, 'helvetica', 'normal');

        // Match line/box
        drawLine(pageWidth / 2 - 15, yPos - 1, pageWidth / 2 - 5, yPos - 1);
        yPos += 10;
    });

    yPos += 10;

    // --- CROSSWORD PUZZLE ---
    let cw: CrosswordResult | null = null;
    try {
        cw = generateCrossword(question.vocabulary, 'translation');
    } catch (err) {
        console.error('PDF: Crossword generation crashed:', err);
    }

    if (cw && cw.grid.length > 0) {
        const estGridHeight = cw.height * 8;
        const estClueHeight = Math.max(cw.clues.across.length, cw.clues.down.length) * 5 + 10;
        const totalNeeded = estGridHeight + estClueHeight + 35;

        checkPageBreak(Math.min(totalNeeded, 150));

        addText('III. CROSSWORD (MEANING)', margin, yPos, 12, 'helvetica', 'bold');
        yPos += 8;
        addText('Use the translations from Part II to complete this crossword.', margin, yPos, 9, 'helvetica', 'italic', 'left', [100, 100, 100]);
        yPos += 10;

        // Dynamic Scaling
        const availableWidth = pageWidth - margin * 2;
        const availableHeight = pageHeight - yPos - margin - 40;
        const cellSize = Math.min(8, availableWidth / cw.width, availableHeight / cw.height);

        const startX = (pageWidth - cw.width * cellSize) / 2;

        // Draw Grid
        cw.grid.forEach((row, rIdx) => {
            row.forEach((cell, cIdx) => {
                if (cell) {
                    const cx = startX + cIdx * cellSize;
                    const cy = yPos + rIdx * cellSize;
                    doc.setDrawColor(0);
                    doc.rect(cx, cy, cellSize, cellSize);
                    if (cell.number) {
                        doc.setFontSize(cellSize * 0.7);
                        doc.text(cell.number.toString(), cx + 1, cy + (cellSize * 0.35));
                    }
                }
            });
        });

        yPos += (cw.height * cellSize) + 12;

        // Draw Clues
        const clueCol1 = margin + 5;
        const clueCol2 = pageWidth / 2 + 5;
        let clueY = yPos;

        addText('ACROSS', clueCol1, clueY, 10, 'helvetica', 'bold');
        addText('DOWN', clueCol2, clueY, 10, 'helvetica', 'bold');
        clueY += 6;

        const startClueY = clueY;
        cw.clues.across.forEach(c => {
            const lines = doc.splitTextToSize(`${c.number}. ${c.clue}`, (pageWidth / 2) - margin - 5) as string[];
            doc.text(lines, clueCol1, clueY);
            clueY += lines.length * 5;
        });

        clueY = startClueY;
        cw.clues.down.forEach(c => {
            const lines = doc.splitTextToSize(`${c.number}. ${c.clue}`, (pageWidth / 2) - margin - 5) as string[];
            doc.text(lines, clueCol2, clueY);
            clueY += lines.length * 5;
        });

        yPos = Math.max(clueY, yPos + 20) + 10;
    }

    // --- WORD SEARCH ---
    let ws: WordSearchResult | null = null;
    try {
        ws = generateWordSearch(question.vocabulary);
    } catch (err) {
        console.error('PDF: Word Search generation crashed:', err);
    }

    if (ws) {
        checkPageBreak(120);
        addText('IV. WORD SEARCH CHALLENGE', margin, yPos, 12, 'helvetica', 'bold');
        yPos += 8;
        addText('Find the key phrases hidden in the grid below.', margin, yPos, 9, 'helvetica', 'italic', 'left', [100, 100, 100]);
        yPos += 10;

        const cellSize = 7;
        const startX = (pageWidth - ws.width * cellSize) / 2;

        doc.setFont('courier', 'bold');
        doc.setFontSize(10);
        ws.grid.forEach((row, rIdx) => {
            row.forEach((char, cIdx) => {
                const cx = startX + cIdx * cellSize + cellSize / 2;
                const cy = yPos + rIdx * cellSize + cellSize / 2;
                doc.text(char, cx, cy, { align: 'center' });
            });
        });

        yPos += (ws.height * cellSize) + 10;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        const wordList = question.vocabulary.map(v => v.phrase.toUpperCase()).join('  •  ');
        wrapText(wordList, margin, yPos, pageWidth - margin * 2, 5);
        yPos += 15;
    }

    // --- SENTENCE UNSCRAMBLE ---
    console.log(`PDF: Entering Part V (Unscramble) at yPos: ${yPos}`);
    checkPageBreak(60);
    addText('V. SENTENCE UNSCRAMBLE', margin, yPos, 12, 'helvetica', 'bold');
    yPos += 8;
    addText('Unscramble the words to recreate sentences from the lesson.', margin, yPos, 9, 'helvetica', 'italic', 'left', [100, 100, 100]);
    yPos += 10;

    const unscrambleItems = shuffle(question.vocabulary.slice(0, 4));
    unscrambleItems.forEach((item: VocabularyItem, index: number) => {
        checkPageBreak(30);
        const originalWords = item.example.replace(/[.!?,]/g, '').split(' ');
        const shuffledWords = shuffle(originalWords);

        addText(`${index + 1}. [ ${shuffledWords.join(' / ')} ]`, margin + 5, yPos, 10, 'helvetica', 'normal');
        yPos += 8;
        drawLine(margin + 5, yPos, pageWidth - margin, yPos);
        yPos += 10;
    });

    yPos += 5;

    // --- GAP FILL ---
    console.log(`PDF: Entering Part VI (Gap Fill) at yPos: ${yPos}`);
    checkPageBreak(60);
    addText('VI. CONTEXTUAL GAP FILL', margin, yPos, 12, 'helvetica', 'bold');
    yPos += 8;
    addText('Complete the sentences using the vocabulary from Part I.', margin, yPos, 9, 'helvetica', 'italic', 'left', [100, 100, 100]);
    yPos += 10;

    question.vocabulary.forEach((item: VocabularyItem, index: number) => {
        checkPageBreak(20);
        // Use smart masking
        const maskedSentence = smartMask(item.example, item.phrase);

        addText(`${index + 1}.`, margin, yPos, 10, 'helvetica', 'bold', 'left', [150, 150, 150]);
        const addedHeight = wrapText(maskedSentence, margin + 8, yPos, pageWidth - margin * 2 - 8, 6);
        yPos += addedHeight + 6;
    });

    yPos += 5;

    // --- DISCUSSION & JOURNALING ---
    if (question.guidedQuestions && question.guidedQuestions.length > 0) {
        console.log(`PDF: Entering Part VIII (Discussion) at yPos: ${yPos}`);
        doc.addPage();
        yPos = 25;
        addText('VIII. PERSONAL REFLECTION & DISCUSSION', margin, yPos, 12, 'helvetica', 'bold');
        drawLine(margin, yPos + 2, pageWidth - margin, yPos + 2, [26, 25, 24], 0.5);
        yPos += 10;
        addText('Answer the following questions using the new vocabulary where possible.', margin, yPos, 9, 'helvetica', 'italic', 'left', [100, 100, 100]);
        yPos += 12;

        question.guidedQuestions.forEach((q: string, index: number) => {
            checkPageBreak(40);
            addText(`Q${index + 1}: ${q.replace(/\*\*/g, '')}`, margin, yPos, 11, 'helvetica', 'bold');
            yPos += 10;

            // Draw writing lines
            for (let l = 0; l < 3; l++) {
                drawLine(margin + 5, yPos, pageWidth - margin, yPos);
                yPos += 8;
            }
            yPos += 6;
        });
    }

    // --- ANSWER KEY ---
    console.log(`PDF: Entering Answer Key at yPos: ${yPos}`);
    doc.addPage();
    yPos = 25;
    addText('ANSWER KEY', pageWidth / 2, yPos, 16, 'helvetica', 'bold', 'center');
    drawLine(margin, yPos + 4, pageWidth - margin, yPos + 4);
    yPos += 15;

    // Matching Key
    addText('Part II: Matching', margin, yPos, 12, 'helvetica', 'bold');
    yPos += 8;
    terms.forEach((term: string, i: number) => {
        const correctLetter = String.fromCharCode(65 + i);
        const findIndexInMeanings = meanings.findIndex(m => m.originalIndex === i);
        addText(`${correctLetter} (${term}) matches ${findIndexInMeanings + 1}`, margin + 5, yPos, 10);
        yPos += 6;
    });

    yPos += 10;

    // Crossword Key
    if (cw && cw.grid.length > 0) {
        addText('Part III: Crossword', margin, yPos, 12, 'helvetica', 'bold');
        yPos += 8;
        cw.clues.across.forEach((c: { number: number; answer: string }) => {
            addText(`Across ${c.number}: ${c.answer}`, margin + 5, yPos, 10);
            yPos += 5;
        });
        cw.clues.down.forEach((c: { number: number; answer: string }) => {
            addText(`Down ${c.number}: ${c.answer}`, margin + 5, yPos, 10);
            yPos += 5;
        });
        yPos += 10;
    }

    // Word Search Key
    if (ws) {
        checkPageBreak(30);
        addText('Part IV: Word Search', margin, yPos, 12, 'helvetica', 'bold');
        yPos += 8;
        const wsWords = ws.words.map(w => w.word).join(', ');
        wrapText(wsWords, margin + 5, yPos, pageWidth - margin * 2, 5);
        yPos += 12;
    }

    // Unscramble Key
    addText('Part V: Sentence Unscramble', margin, yPos, 12, 'helvetica', 'bold');
    yPos += 8;
    unscrambleItems.forEach((item: VocabularyItem, index: number) => {
        const addedHeight = wrapText(`${index + 1}. ${item.example}`, margin + 5, yPos, pageWidth - margin * 2 - 5, 5);
        yPos += addedHeight + 2;
    });

    yPos += 10;

    // Gap Fill Key
    addText('Part VI: Gap Fill', margin, yPos, 12, 'helvetica', 'bold');
    yPos += 8;
    question.vocabulary.forEach((item, index) => {
        addText(`${index + 1}. ${item.phrase}`, margin + 5, yPos, 10);
        yPos += 6;
    });

    // --- SELF ASSESSMENT ---
    checkPageBreak(30);
    yPos += 10;
    addText('SELF-ASSESSMENT', margin, yPos, 12, 'helvetica', 'bold');
    yPos += 8;
    const items = [
        'I can translate the target phrases.',
        'I can use the phrases in a sentence.',
        'I can talk about this topic for 2 minutes.'
    ];
    items.forEach(item => {
        doc.rect(margin + 2, yPos - 3, 4, 4);
        addText(item, margin + 10, yPos, 10);
        yPos += 8;
    });

    // FOOTER (Applied to all pages)
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        const footerText = `Questions About Life | ${question.category} | Page ${i} of ${pageCount}`;
        doc.text(footerText, pageWidth / 2, pageHeight - 12, { align: 'center' });
        doc.text(`© ${new Date().getFullYear()} Matthew James Soldato - All Rights Reserved`, pageWidth / 2, pageHeight - 8, { align: 'center' });
    }

    console.log(`PDF: Generation complete. Total pages: ${doc.getNumberOfPages()}`);
    doc.save(`Worksheet_${question.category.replace(/\s+/g, '_')}_${question.id}.pdf`);
};

