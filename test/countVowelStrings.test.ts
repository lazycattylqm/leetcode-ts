import countVowelStrings from "../src/countVowelStrings";

describe('test countVowelStrings', () => {
  test('case 1', () => {
    expect(countVowelStrings(1)).toBe(5);
  })
  test('case 2', () => {
    expect(countVowelStrings(2)).toBe(15);
  })
  test('case 3', () => {
    expect(countVowelStrings(33)).toBe(66045);
  })
});