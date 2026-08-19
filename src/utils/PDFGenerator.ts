import { jsPDF } from 'jspdf';
import type { Question, VocabularyItem } from '../data/questions';
import type { QuestionDetail } from '../data/questionDetails';
import { generateCrossword } from './CrosswordGenerator';
import type { CrosswordResult } from './CrosswordGenerator';
import { generateWordSearch } from './WordSearchGenerator';
import type { WordSearchResult } from './WordSearchGenerator';


const MASK = '______________';

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** "deal-breaker" is written with a hyphen and said without one. */
const loosenHyphens = (s: string) => s.replace(/-/g, '[-\\s]?');

/** Slot words: the bank writes "put someone at ease", the sentence says
 *  "puts people at ease". These stand for whatever the sentence puts there. */
const SLOT = /^(?:someone|somebody|something|oneself|myself|yourself|himself|herself|ourselves|themselves|one|my|your|his|her|our|their|its)('s)?$/i;
const ARTICLE = /^(?:a|an|the)$/i;

/** A leading verb inflects: "pay" -> "pays", "paid"; "rub" -> "rubbed". */
const inflected = (w: string) => {
    // Strip a trailing "e" so "bite" also reaches "biting"/"bites" — and list
    // bare "e" among the endings so it can still match "bite" itself.
    const base = escapeRe(w.replace(/e$/, ''));
    return `${base}(?:e|es|ed|ing|s|d|[bdgklmnprt](?:ed|ing))?`;
};

/**
 * Blank out a vocabulary phrase inside its example sentence.
 *
 * A gap-fill exercise whose sentence contains no gap is worse than useless, so
 * this works through four increasingly forgiving strategies and the test suite
 * asserts that every phrase in the bank produces a gap.
 */
export const smartMask = (sentence: string, phrase: string): string => {
    // 1. Verbatim.
    const exact = sentence.replace(new RegExp(escapeRe(phrase), 'gi'), MASK);
    if (exact !== sentence) return exact;

    // 2. Rebuild the phrase as a pattern that tolerates the ways a real
    //    sentence bends it: slot words, article swaps, a conjugated leading
    //    verb, and an object pushed between a separable verb and its particle
    //    ("sum up" -> "sum you up").
    const words = phrase.split(/\s+/).filter(Boolean);
    const parts = words.map((w, i) => {
        const bare = w.replace(/[^\w'-]/g, '');
        if (!bare) return '';
        // A slot in the middle can span a short noun phrase because the next
        // literal word anchors it. A trailing slot must take exactly one token,
        // or it runs on and swallows the rest of the sentence.
        if (SLOT.test(bare)) {
            return i === words.length - 1 ? "[\\w']+" : "[\\w']+(?:\\s+[\\w']+){0,2}?";
        }
        if (ARTICLE.test(bare)) return '(?:a|an|the|my|your|his|her|their|our|its)';
        return loosenHyphens(i === 0 ? inflected(bare) : escapeRe(bare));
    }).filter(Boolean);

    if (parts.length) {
        const body = parts.length > 1
            ? `${parts[0]}(?:\\s+[\\w']+)?\\s+${parts.slice(1).join("\\s+")}`
            : parts[0];
        try {
            const flexible = sentence.replace(new RegExp(`\\b${body}\\b`, 'gi'), MASK);
            // Guard against a pattern so loose it eats the whole sentence.
            if (flexible !== sentence && flexible.replace(/_/g, '').trim().length >= sentence.length * 0.25) {
                return flexible;
            }
        } catch {
            // A phrase can still produce an invalid pattern; fall through.
        }
    }

    // 3. Blank the longest word of the phrase that actually appears, allowing
    //    for inflection. Slot words are skipped — they never appear literally.
    const candidates = words
        .map(w => w.replace(/[^\w'-]/g, ''))
        .filter(w => w.length >= 3 && !SLOT.test(w) && !ARTICLE.test(w))
        .sort((a, b) => b.length - a.length);

    for (const w of candidates) {
        try {
            const hit = sentence.replace(new RegExp(`\\b${loosenHyphens(inflected(w))}\\b`, 'gi'), '_______');
            if (hit !== sentence) return hit;
        } catch {
            // try the next candidate
        }
    }

    return sentence;
};
type FullVocabularyItem = VocabularyItem & { example: string };
type FullQuestion = Omit<Question, 'vocabulary'> & {
    vocabulary: FullVocabularyItem[];
    guidedQuestions: string[];
};

export const generatePDF = (base: Question, detail: QuestionDetail) => {
    // Examples and prompts arrive separately so they can stay out of the
    // initial bundle; stitch them back together for the worksheet.
    const question: FullQuestion = {
        ...base,
        vocabulary: base.vocabulary.map((v, i) => ({ ...v, example: detail.examples[i] ?? '' })),
        guidedQuestions: detail.guidedQuestions,
    };
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
    checkPageBreak(60);
    addText('V. SENTENCE UNSCRAMBLE', margin, yPos, 12, 'helvetica', 'bold');
    yPos += 8;
    addText('Unscramble the words to recreate sentences from the lesson.', margin, yPos, 9, 'helvetica', 'italic', 'left', [100, 100, 100]);
    yPos += 10;

    const unscrambleItems = shuffle(question.vocabulary.slice(0, 4));
    unscrambleItems.forEach((item: FullVocabularyItem, index: number) => {
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
    checkPageBreak(60);
    addText('VI. CONTEXTUAL GAP FILL', margin, yPos, 12, 'helvetica', 'bold');
    yPos += 8;
    addText('Complete the sentences using the vocabulary from Part I.', margin, yPos, 9, 'helvetica', 'italic', 'left', [100, 100, 100]);
    yPos += 10;

    question.vocabulary.forEach((item: FullVocabularyItem, index: number) => {
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
    unscrambleItems.forEach((item: FullVocabularyItem, index: number) => {
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

    doc.save(`Worksheet_${question.category.replace(/\s+/g, '_')}_${question.id}.pdf`);
};

