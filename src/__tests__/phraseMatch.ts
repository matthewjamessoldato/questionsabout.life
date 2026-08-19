/**
 * Does a bolded term in a guided prompt refer to one of the question's
 * vocabulary items?
 *
 * Deliberately not a string match. Two things vary legitimately:
 *
 *  - Person. Vocabulary is stored first-person ("center myself", "trust my
 *    gut"); prompts address the learner ("center yourself", "trust your gut").
 *  - Inflection. "lash out" appears as "lashed out", "outgrow" as "outgrown",
 *    "consequence" as "consequences".
 *
 * Both are correct English teaching, so person and inflection are normalised
 * away before comparing. What the check actually enforces is that a bolded
 * term is one of *this* question's phrases and not a stray or invented one.
 */

/** Every pronoun collapses to one token. The distinction between possessive,
 *  reflexive and object forms does no work here — what matters is that a
 *  pronoun slot exists, so "boost someone's ego" and "boost our ego" agree. */
const PRONOUNS = new Set([
  'my', 'your', 'mine', 'yours', 'their', 'theirs', 'his', 'her', 'hers', 'our', 'ours', 'its',
  'myself', 'yourself', 'yourselves', 'themselves', 'himself', 'herself', 'ourselves', 'oneself',
  'me', 'you', 'them', 'him', 'us', 'it',
  'i', 'we', 'they', 'he', 'she', 'one', 'someone', 'somebody', 'something',
]);
const PRON = '~pron';

/** Irregular forms, longest first. Short ones must match the whole word —
 *  otherwise "this" would be rewritten through "is". Longer ones may match a
 *  word ending, so compounds like "outgrown" reduce to "outgrow". */
const IRREGULAR: [string, string][] = [
  ['gotten', 'get'], ['brought', 'bring'], ['thought', 'think'], ['taught', 'teach'],
  ['caught', 'catch'], ['bought', 'buy'], ['showed', 'show'], ['shown', 'show'],
  ['grown', 'grow'], ['taken', 'take'], ['given', 'give'], ['known', 'know'],
  ['been', 'be'], ['done', 'do'], ['gone', 'go'], ['grew', 'grow'], ['knew', 'know'],
  ['held', 'hold'], ['kept', 'keep'], ['left', 'leave'], ['lost', 'lose'],
  ['made', 'make'], ['paid', 'pay'], ['said', 'say'], ['told', 'tell'],
  ['felt', 'feel'], ['took', 'take'], ['gave', 'give'], ['went', 'go'],
  ['were', 'be'], ['does', 'do'], ['have', 'have'],
  ['struck', 'strike'], ['seen', 'see'], ['written', 'write'], ['wrote', 'write'],
  ['broken', 'break'], ['broke', 'break'], ['spoken', 'speak'], ['spoke', 'speak'],
  ['drawn', 'draw'], ['drew', 'draw'], ['blown', 'blow'], ['blew', 'blow'],
];
const IRREGULAR_EXACT: Record<string, string> = {
  has: 'have', had: 'have', is: 'be', are: 'be', was: 'be',
  did: 'do', saw: 'see', got: 'get', met: 'meet',
};

/** Strip a suffix only when enough word survives it. Without the floor,
 *  "wing" loses its own "-ing" and collapses to "w". */
const MIN_STEM = 3;
const trim = (w: string, re: RegExp, replacement = '') => {
  const out = w.replace(re, replacement);
  return out !== w && out.length < MIN_STEM ? w : out;
};

const stem = (w: string) => {
  let out = trim(w, /ies$/, 'y');

  const beforeVerb = out;
  out = trim(out, /(?:ed|ing)$/);
  // A consonant doubled to take the suffix ("blur" -> "blurred") comes back
  // down. l, s and z are excluded: "spill" and "roll" genuinely end doubled,
  // and only -ed/-ing cause the doubling, never a plural -s.
  if (out !== beforeVerb) out = out.replace(/([^aeioulsz])\1$/, '$1');

  out = trim(out, /(?:es|s)$/);
  return trim(out, /e$/);
};

function normalise(raw: string): string {
  const w = raw.toLowerCase();
  if (PRONOUNS.has(w)) return PRON;
  if (w === 's') return ''; // leftover of a possessive: "someone's" -> someone + s
  if (IRREGULAR_EXACT[w]) return stem(IRREGULAR_EXACT[w]);
  for (const [form, base] of IRREGULAR) {
    if (w.length > 3 && w.endsWith(form)) return stem(w.slice(0, -form.length) + base);
  }
  return stem(w);
}

export const tokens = (s: string): string[] =>
  (s.toLowerCase().match(/[a-z]+/g) ?? [])
    .map(normalise)
    .filter(Boolean)
    // collapse a run of pronouns so "someone's" and "your" line up
    .filter((t, i, a) => !(t === PRON && a[i - 1] === PRON));

/** Is `needle` an in-order subsequence of `haystack`? */
const isSubsequence = (needle: string[], haystack: string[]) => {
  let i = 0;
  for (const h of haystack) if (i < needle.length && h === needle[i]) i++;
  return i === needle.length;
};

export function refersTo(bold: string, phrase: string): boolean {
  const b = tokens(bold), p = tokens(phrase);
  if (!b.length || !p.length) return false;
  // Either direction: a prompt may add a pronoun the phrase omits
  // ("show the ropes" -> "showed you the ropes"), or trim one it includes.
  return isSubsequence(p, b) || isSubsequence(b, p);
}
