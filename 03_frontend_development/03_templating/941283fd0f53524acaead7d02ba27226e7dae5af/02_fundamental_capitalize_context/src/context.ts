import { capitalize } from "./capitalize";

export function context(sentence: string): string {
  // Code here and use the function `capitalize` from exercise one
  const word = sentence.split(" ");
  for (let i = 0; i < word.length; i++) {
    word[i] = capitalize(word[i]);
  }
  return word.join(" ");
}
