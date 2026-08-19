import { describe, it, expect } from 'vitest';
import { refersTo } from './phraseMatch';

describe('refersTo', () => {
  it('accepts a first-person phrase addressed in the second person', () => {
    expect(refersTo('center yourself', 'center myself')).toBe(true);
    expect(refersTo('trust your gut', 'trust my gut')).toBe(true);
    expect(refersTo('pat yourself on the back', 'pat myself on the back')).toBe(true);
  });

  it('accepts natural verb inflection', () => {
    expect(refersTo('lashed out', 'lash out')).toBe(true);
    expect(refersTo('clicked with', 'click with')).toBe(true);
    expect(refersTo('outgrown', 'outgrow')).toBe(true);
    expect(refersTo('pigeonholed', 'pigeonhole')).toBe(true);
    expect(refersTo('consequences', 'consequence')).toBe(true);
    expect(refersTo('has it all figured out', 'have it all figured out')).toBe(true);
  });

  it('accepts a pronoun the phrase itself omits', () => {
    expect(refersTo('showed you the ropes', 'show the ropes')).toBe(true);
    expect(refersTo('gives you the cold shoulder', 'give the cold shoulder')).toBe(true);
  });

  it('treats every pronoun form as the same slot', () => {
    expect(refersTo('fend for yourself', 'fend for oneself')).toBe(true);
    expect(refersTo('boost our ego', "boost someone's ego")).toBe(true);
    expect(refersTo('rubs you the wrong way', 'rub someone the wrong way')).toBe(true);
  });

  it('undoes a consonant doubled for the suffix', () => {
    expect(refersTo('blurred the lines', 'blur the lines')).toBe(true);
    expect(refersTo('stopped short', 'stop short')).toBe(true);
    // but a root that genuinely ends doubled keeps both letters
    expect(refersTo('spilled the beans', 'spill the beans')).toBe(true);
    expect(refersTo('rolls off the tongue', 'roll off the tongue')).toBe(true);
    expect(refersTo('small talk', 'smal talk')).toBe(false);
  });

  it('rejects a term that is not the phrase at all', () => {
    expect(refersTo('hidden talent', 'exceeded expectations')).toBe(false);
    expect(refersTo('silver lining', 'break the ice')).toBe(false);
    expect(refersTo('', 'break the ice')).toBe(false);
  });

  it('does not strip a suffix that is the whole word', () => {
    // "wing" must not lose its own "-ing" and collapse to "w"
    expect(refersTo('winging it', 'wing it')).toBe(true);
    expect(refersTo('wing it', 'sing along')).toBe(false);
    expect(refersTo('strikes a chord', 'struck a chord')).toBe(true);
  });

  it('does not let a short irregular corrupt an unrelated word', () => {
    // "is" -> "be" must not rewrite the tail of "this"
    expect(refersTo('this', 'be')).toBe(false);
    expect(refersTo('bias', 'be')).toBe(false);
  });
});
