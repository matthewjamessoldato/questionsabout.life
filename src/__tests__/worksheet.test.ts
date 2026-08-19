import { describe, it, expect } from 'vitest';
import { generateCrossword } from '../utils/CrosswordGenerator';
import { generateWordSearch } from '../utils/WordSearchGenerator';
import { smartMask } from '../utils/PDFGenerator';
import { questions } from '../data/questions';
import { questionDetails } from '../data/questionDetails';

/** The generators shuffle. Seed Math.random so a layout is reproducible. */
function seeded<T>(seed: number, fn: () => T): T {
  const real = Math.random;
  let a = seed;
  Math.random = () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  try { return fn(); } finally { Math.random = real; }
}

const withExamples = (id: number) => {
  const q = questions.find(x => x.id === id)!;
  return q.vocabulary.map((v, i) => ({ ...v, example: questionDetails[id].examples[i] }));
};

describe('smartMask', () => {
  it('replaces the phrase with a blank', () => {
    const out = smartMask('Do you prefer to wind down with a book?', 'wind down');
    expect(out).not.toContain('wind down');
    expect(out).toContain('______');
  });

  it('is case-insensitive', () => {
    expect(smartMask('Wind down before bed.', 'wind down')).toContain('______');
  });

  it('leaves the sentence alone when the phrase is absent', () => {
    const sentence = 'Nothing to mask in here.';
    expect(smartMask(sentence, 'wind down')).toBe(sentence);
  });

  it('produces a gap for every phrase in the bank', () => {
    // A worksheet whose gap-fill has no gap is silently broken. This is the
    // runtime counterpart to the "example contains its phrase" data rule.
    const broken: string[] = [];
    for (const q of questions) {
      q.vocabulary.forEach((v, i) => {
        const example = questionDetails[q.id].examples[i];
        if (!smartMask(example, v.phrase).includes('___'))
          broken.push(`${q.id} [${v.phrase}] -> "${example}"`);
      });
    }
    expect(broken).toEqual([]);
  });

  it('always leaves some sentence around the gap', () => {
    // A short sentence can be almost entirely the phrase, which is fine, but
    // the learner still needs context words to work from.
    const bare: string[] = [];
    for (const q of questions) {
      q.vocabulary.forEach((v, i) => {
        const masked = smartMask(questionDetails[q.id].examples[i], v.phrase);
        const words = masked.replace(/_+/g, ' ').trim().split(/\s+/).filter(Boolean);
        if (words.length < 2) bare.push(`${q.id} [${v.phrase}] -> "${masked}"`);
      });
    }
    expect(bare).toEqual([]);
  });
});

describe('generateCrossword', () => {
  it('returns an empty grid rather than throwing on no usable words', () => {
    const r = generateCrossword([]);
    expect(r.grid).toEqual([]);
    expect(r.width).toBe(0);
    expect(r.clues.across).toEqual([]);
  });

  it('places words and numbers every clue', () => {
    const r = seeded(1, () => generateCrossword(withExamples(1)));
    const all = [...r.clues.across, ...r.clues.down];
    expect(all.length).toBeGreaterThan(1);
    expect(all.every(c => c.number > 0)).toBe(true);
    expect(all.every(c => c.answer.length > 1)).toBe(true);
    expect(r.width).toBeGreaterThan(0);
    expect(r.height).toBeGreaterThan(0);
  });

  it('writes each answer into the grid where its clue says it starts', () => {
    const r = seeded(7, () => generateCrossword(withExamples(111)));
    const at = (x: number, y: number) => r.grid[y]?.[x]?.char ?? null;
    for (const dir of ['across', 'down'] as const) {
      for (const clue of r.clues[dir]) {
        // find the numbered cell for this clue
        let sx = -1, sy = -1;
        for (let y = 0; y < r.height; y++)
          for (let x = 0; x < r.width; x++)
            if (r.grid[y]?.[x]?.number === clue.number) { sx = x; sy = y; }
        expect(sx, `clue ${clue.number} has no numbered cell`).toBeGreaterThanOrEqual(0);
        const read = [...clue.answer].map((_, i) =>
          dir === 'across' ? at(sx + i, sy) : at(sx, sy + i)).join('');
        expect(read).toBe(clue.answer);
      }
    }
  });

  it('uses the translation as the clue by default', () => {
    const vocab = withExamples(1);
    const r = seeded(3, () => generateCrossword(vocab, 'translation'));
    const translations = new Set(vocab.map(v => v.translation));
    for (const c of [...r.clues.across, ...r.clues.down])
      expect(translations.has(c.clue) || c.clue === 'Define this').toBe(true);
  });

  it('masks the phrase when clued from the example sentence', () => {
    const r = seeded(3, () => generateCrossword(withExamples(1), 'target'));
    for (const c of [...r.clues.across, ...r.clues.down])
      expect(c.clue.toLowerCase()).not.toContain(c.answer.toLowerCase());
  });
});

describe('generateWordSearch', () => {
  it('hides every placed word in the grid', () => {
    const r = seeded(11, () => generateWordSearch(withExamples(1)));
    const size = r.grid.length;
    const lines: string[] = [];
    for (let i = 0; i < size; i++) {
      lines.push(r.grid[i].join(''));                                  // rows
      lines.push(r.grid.map(row => row[i]).join(''));                  // columns
    }
    for (let d = -size; d < size; d++) {                               // diagonals
      let a = '', b = '';
      for (let i = 0; i < size; i++) {
        if (r.grid[i]?.[i + d]) a += r.grid[i][i + d];
        if (r.grid[i]?.[size - 1 - i + d]) b += r.grid[i][size - 1 - i + d];
      }
      lines.push(a, b);
    }
    const haystack = lines.concat(lines.map(l => [...l].reverse().join(''))).join(' ');
    for (const { word } of r.words) expect(haystack, `"${word}" is not in the grid`).toContain(word);
  });

  it('fills the grid with letters only', () => {
    const r = seeded(5, () => generateWordSearch(withExamples(111)));
    expect(r.grid.every(row => row.every(c => /^[A-Z]$/.test(c)))).toBe(true);
  });
});
