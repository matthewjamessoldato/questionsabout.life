import { describe, it, expect } from 'vitest';
import { questions, categories } from '../data/questions';
import { questionDetails } from '../data/questionDetails';
import { refersTo } from './phraseMatch';

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
const soft = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

describe('question bank integrity', () => {
  it('has no duplicate ids', () => {
    // A pair of ad-hoc merge scripts once left 59 duplicate ids here, which
    // silently broke #q= share links and made one "seen" mark count for two.
    const seen = new Map<number, string>();
    const dupes: string[] = [];
    for (const q of questions) {
      if (seen.has(q.id)) dupes.push(`id ${q.id}: "${seen.get(q.id)}" / "${q.question}"`);
      else seen.set(q.id, q.question);
    }
    expect(dupes).toEqual([]);
  });

  it('has no duplicate question text', () => {
    const seen = new Set<string>();
    const dupes: string[] = [];
    for (const q of questions) {
      const k = norm(q.question);
      if (seen.has(k)) dupes.push(q.question);
      else seen.add(k);
    }
    expect(dupes).toEqual([]);
  });

  it('gives every question a depth level of 1-4', () => {
    const bad = questions.filter(q => !(q.depthLevel >= 1 && q.depthLevel <= 4));
    expect(bad.map(q => `${q.id}: ${q.depthLevel}`)).toEqual([]);
  });

  it('gives every question at least four vocabulary items', () => {
    const thin = questions.filter(q => q.vocabulary.length < 4);
    expect(thin.map(q => `${q.id} has ${q.vocabulary.length}`)).toEqual([]);
  });

  it('gives every vocabulary item a phrase, type and translation', () => {
    const bad: string[] = [];
    for (const q of questions) {
      for (const v of q.vocabulary) {
        if (!v.phrase?.trim()) bad.push(`${q.id}: empty phrase`);
        if (!v.type?.trim()) bad.push(`${q.id} [${v.phrase}]: no type`);
        if (!v.translation?.trim()) bad.push(`${q.id} [${v.phrase}]: no translation`);
      }
    }
    expect(bad).toEqual([]);
  });

  it('does not repeat a phrase within one question', () => {
    const bad: string[] = [];
    for (const q of questions) {
      const seen = new Set<string>();
      for (const v of q.vocabulary) {
        const k = soft(v.phrase);
        if (seen.has(k)) bad.push(`${q.id}: "${v.phrase}" twice`);
        seen.add(k);
      }
    }
    expect(bad).toEqual([]);
  });

  it('exposes a non-empty category for every question', () => {
    expect(questions.every(q => !!q.category?.trim())).toBe(true);
    expect(categories.length).toBeGreaterThan(0);
    expect(new Set(categories).size).toBe(categories.length);
  });

  it('keeps every category usable — a lone question makes the category pointless', () => {
    const counts = new Map<string, number>();
    for (const q of questions) counts.set(q.category, (counts.get(q.category) ?? 0) + 1);
    const starved = [...counts].filter(([, n]) => n < 5).map(([c, n]) => `${c}: ${n}`);
    expect(starved).toEqual([]);
  });
});

describe('question details', () => {
  it('has a record for every question and no orphans', () => {
    const missing = questions.filter(q => !questionDetails[q.id]).map(q => q.id);
    expect(missing).toEqual([]);

    const ids = new Set(questions.map(q => q.id));
    const orphans = Object.keys(questionDetails).map(Number).filter(id => !ids.has(id));
    expect(orphans).toEqual([]);
  });

  it('keeps examples index-parallel with vocabulary', () => {
    // The split stores examples positionally; a length drift would silently
    // attach the wrong sentence to a phrase.
    const bad = questions
      .filter(q => questionDetails[q.id].examples.length !== q.vocabulary.length)
      .map(q => `${q.id}: ${q.vocabulary.length} phrases vs ${questionDetails[q.id].examples.length} examples`);
    expect(bad).toEqual([]);
  });

  it('gives every question at least three guided prompts', () => {
    const bad = questions
      .filter(q => (questionDetails[q.id].guidedQuestions?.length ?? 0) < 3)
      .map(q => `${q.id}: ${questionDetails[q.id].guidedQuestions?.length ?? 0}`);
    expect(bad).toEqual([]);
  });

  it('contains the phrase verbatim in its example', () => {
    // The worksheet gap-fill masks the phrase by exact match. An inflected
    // example ("had a blast" for "have a blast") yields a gap-fill with no gap.
    const bad: string[] = [];
    for (const q of questions) {
      questionDetails[q.id].examples.forEach((ex, i) => {
        const phrase = q.vocabulary[i]?.phrase ?? '';
        const head = soft(phrase.split(' ')[0]);
        if (!ex?.trim()) bad.push(`${q.id} [${phrase}]: empty example`);
        else if (head.length > 3 && !soft(ex).includes(head))
          bad.push(`${q.id} [${phrase}] -> "${ex}"`);
      });
    }
    expect(bad).toEqual([]);
  });

  it('only bolds this question\'s own vocabulary in guided prompts', () => {
    const bad: string[] = [];
    for (const q of questions) {
      for (const g of questionDetails[q.id].guidedQuestions) {
        for (const m of g.matchAll(/\*\*(.+?)\*\*/g)) {
          if (!q.vocabulary.some(v => refersTo(m[1], v.phrase)))
            bad.push(`${q.id}: "${m[1]}" — vocab is [${q.vocabulary.map(v => v.phrase).join(', ')}]`);
        }
      }
    }
    expect(bad).toEqual([]);
  });
});
