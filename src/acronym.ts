function isAcronym (words: string[], s: string): boolean {
  return words.map(v => v[0]).reduce((a, b) => a + b) === s

};