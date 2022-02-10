import { sentenceJoiner } from "./sentenceJoiner";
import { sentenceSplitter } from "./sentenceSplitter";

export const context = (sentence: string): string => {
  // Code your function for context here
  const arrayTemp = sentenceSplitter(sentence);
  const arrayFinal = [];
  arrayTemp.filter((word) => {
    if (
      word.charAt(0).toLowerCase() !== "a" &&
      word.charAt(0).toLowerCase() !== "e" &&
      word.charAt(0).toLowerCase() !== "i" &&
      word.charAt(0).toLowerCase() !== "o" &&
      word.charAt(0).toLowerCase() !== "u"
    ) {
      arrayFinal.push(word);
    }
  });
  return sentenceJoiner(arrayFinal);
};
