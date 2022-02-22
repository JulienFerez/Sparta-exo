function sumTwoSmallestNumbers(listOfNumbers: number[]): number {
  listOfNumbers.sort((a: number, b: number) => a - b);

  console.log(listOfNumbers, "Tableau dans le bonne ordre");

  return listOfNumbers[0] + listOfNumbers[1];
}

export { sumTwoSmallestNumbers };
