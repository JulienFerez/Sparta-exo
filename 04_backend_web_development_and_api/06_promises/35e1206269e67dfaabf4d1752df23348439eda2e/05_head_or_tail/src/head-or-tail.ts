import { getRandomFace } from "./random-face";

function headOrTail(word: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (getRandomFace() === word) {
      resolve("Well done.");
    } else {
      reject("Nope.");
    }
  });
}

export { headOrTail };
