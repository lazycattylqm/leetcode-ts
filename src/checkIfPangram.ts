

export default function checkIfPangram (sentence: string): boolean {
  
  return new Set(sentence.split("")).size === 26


};