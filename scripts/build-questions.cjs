#!/usr/bin/env node
/**
 * Builds the runtime question data.
 *
 *   src/data/expansion/*.ts   authored content (examples inline)
 *              +
 *   the existing bank         read back out of the generated files
 *              ↓
 *   src/data/questions.ts        core — what the screen renders
 *   src/data/questionDetails.ts  examples + worksheet prompts, loaded lazily
 *
 * Re-runnable: an authored question that is already in the bank is replaced,
 * not duplicated. Run with `npm run data`.
 *
 * A previous pair of ad-hoc merge scripts double-inserted a block and left 59
 * duplicate ids in the bank, which silently broke #q= share links. Hence the
 * validation pass below — it refuses to write anything that would repeat it.
 */
const fs = require('fs');
const path = require('path');

const CORE = 'src/data/questions.ts';
const DETAILS = 'src/data/questionDetails.ts';
const EXPANSION = 'src/data/expansion';

/** Slice out one literal by matching brackets, skipping over string contents.
 *  lastIndexOf() is not safe here: the file has other literals after this one. */
const readLiteral = (file, marker, kind) => {
  const src = fs.readFileSync(file, 'utf8');
  const eq = src.indexOf('=', src.indexOf(marker));
  const openCh = kind === 'object' ? '{' : '[';
  const closeCh = openCh === '{' ? '}' : ']';
  const open = src.indexOf(openCh, eq);

  let depth = 0, quote = null;
  for (let i = open; i < src.length; i++) {
    const ch = src[i];
    if (quote) {
      if (ch === '\\') i++;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') { quote = ch; continue; }
    if (ch === openCh) depth++;
    else if (ch === closeCh && --depth === 0) return eval(`(${src.slice(open, i + 1)})`);
  }
  throw new Error(`unbalanced literal for ${marker} in ${file}`);
};

// ── reassemble the current bank into authored form ──────────────────────────
const core = readLiteral(CORE, 'export const questions', 'array');
const details = readLiteral(DETAILS, 'export const questionDetails', 'object');
const existing = core.map(q => ({
  ...q,
  vocabulary: q.vocabulary.map((v, i) => ({ ...v, example: details[q.id]?.examples[i] ?? '' })),
  guidedQuestions: details[q.id]?.guidedQuestions ?? [],
}));

// ── load authored batches ───────────────────────────────────────────────────
const files = fs.existsSync(EXPANSION)
  ? fs.readdirSync(EXPANSION).filter(f => f.endsWith('.ts')).sort()
  : [];
let incoming = [];
for (const f of files) {
  const t = fs.readFileSync(path.join(EXPANSION, f), 'utf8');
  const arr = eval(t.slice(t.indexOf('['), t.lastIndexOf('];') + 1));
  arr.forEach(q => { q.__src = f; });
  incoming = incoming.concat(arr);
}

const norm = s => s.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
const soft = s => s.toLowerCase().replace(/[^a-z0-9]/g, '');

const incomingKeys = new Set(incoming.map(q => norm(q.question)));
const base = existing.filter(q => !incomingKeys.has(norm(q.question)));

// ── validate ────────────────────────────────────────────────────────────────
const errs = [];
const seen = new Set(base.map(q => norm(q.question)));
const ids = new Set(base.map(q => q.id));
for (const q of incoming) {
  const k = norm(q.question);
  if (seen.has(k)) errs.push(`duplicate question [${q.__src}] ${q.question}`); else seen.add(k);
  if (!q.category) errs.push(`missing category: ${q.question}`);
  if (!(q.depthLevel >= 1 && q.depthLevel <= 4)) errs.push(`depthLevel must be 1-4: ${q.question}`);
  if (!q.vocabulary || q.vocabulary.length < 4) errs.push(`needs 4+ vocabulary items: ${q.question}`);
  if (!q.guidedQuestions || q.guidedQuestions.length < 3) errs.push(`needs 3+ guided prompts: ${q.question}`);
  for (const v of q.vocabulary || []) {
    if (!v.phrase || !v.translation || !v.type || !v.example)
      errs.push(`incomplete vocabulary "${v.phrase}" in: ${q.question}`);
    // The worksheet gap-fill masks the phrase verbatim, so an inflected example
    // silently produces a sentence with no gap in it.
    const head = soft(v.phrase.split(' ')[0]);
    if (head.length > 3 && !soft(v.example).includes(head))
      errs.push(`example must contain "${v.phrase}" verbatim → "${v.example}"`);
  }
  const phrases = (q.vocabulary || []).map(v => soft(v.phrase));
  for (const g of q.guidedQuestions || []) {
    for (const m of g.matchAll(/\*\*(.+?)\*\*/g)) {
      const b = soft(m[1]);
      if (!phrases.some(p => p.includes(b) || b.includes(p)))
        errs.push(`bolded "${m[1]}" is not vocabulary of: ${q.question}`);
    }
  }
}
if (errs.length) {
  console.error(`\nRefusing to write — ${errs.length} problem(s):\n`);
  console.error(errs.map(e => '  ' + e).join('\n') + '\n');
  process.exit(1);
}

// ── assign ids above the current maximum and emit ───────────────────────────
let nextId = (ids.size ? Math.max(...ids) : 0) + 1;
const merged = base.concat(incoming.map(({ __src, ...rest }) => ({ id: nextId++, ...rest })));

const outCore = [], outDetails = {};
for (const q of merged) {
  outDetails[q.id] = {
    examples: q.vocabulary.map(v => v.example),
    guidedQuestions: q.guidedQuestions || [],
  };
  outCore.push({
    id: q.id, question: q.question, category: q.category, depthLevel: q.depthLevel,
    vocabulary: q.vocabulary.map(v => ({ phrase: v.phrase, type: v.type, translation: v.translation })),
  });
}

const ser = o => JSON.stringify(o, null, 2).split('\n').map((l, i) => (i === 0 ? l : '  ' + l)).join('\n');
const GEN = '/* Generated by scripts/build-questions.cjs — run `npm run data` after editing src/data/expansion. */';

fs.writeFileSync(CORE, `export interface VocabularyItem {
  phrase: string;
  type?: string; // e.g. "Phrasal Verb", "Idiom", "Noun"
  translation?: string;
}

export interface Question {
  id: number;
  question: string;
  category: string;
  depthLevel: number;
  vocabulary: VocabularyItem[];
}

/**
 * The core bank — everything the app paints on screen.
 *
 * Example sentences and guided prompts live in ./questionDetails and load
 * lazily: examples only show inside an expanded term, and the prompts are used
 * solely by the PDF worksheet.
 */
${GEN}
export const questions: Question[] = ${ser(outCore)};

export const categories = [...new Set(questions.map(q => q.category))];
`, 'utf8');

fs.writeFileSync(DETAILS, `export interface QuestionDetail {
  /** Parallel to the matching Question.vocabulary array, index for index. */
  examples: string[];
  guidedQuestions: string[];
}

/** Lazily-loaded companion to ./questions, kept out of the initial bundle. */
${GEN}
export const questionDetails: Record<number, QuestionDetail> = ${ser(outDetails)};
`, 'utf8');

const cats = {};
for (const q of merged) cats[q.category] = (cats[q.category] || 0) + 1;
const kb = f => (fs.statSync(f).size / 1024).toFixed(0);
console.log(`${merged.length} questions (${incoming.length} authored in ${files.length} batch file(s))`);
console.log(`  ${CORE}  ${kb(CORE)} kB`);
console.log(`  ${DETAILS}  ${kb(DETAILS)} kB  (lazy)`);
console.log(`  categories: ${Object.keys(cats).length}, from ${Math.min(...Object.values(cats))} to ${Math.max(...Object.values(cats))} questions each`);
