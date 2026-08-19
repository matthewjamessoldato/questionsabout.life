import type { Question } from './questions';

/**
 * The shape content is written in — one object per question, with example
 * sentences sitting next to the phrase they belong to.
 *
 * This is deliberately not the runtime shape. scripts/build-questions.cjs
 * splits authored questions into ./questions (what the screen renders) and
 * ./questionDetails (examples and worksheet prompts, loaded lazily).
 */
export interface AuthoredVocabularyItem {
  phrase: string;
  type: string;
  translation: string;
  example: string;
}

export type AuthoredQuestion = Omit<Question, 'id' | 'vocabulary'> & {
  vocabulary: AuthoredVocabularyItem[];
  guidedQuestions: string[];
};
