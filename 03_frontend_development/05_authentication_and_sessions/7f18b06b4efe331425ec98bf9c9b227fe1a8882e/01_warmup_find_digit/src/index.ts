// Code here

function findDigit(numberArray: number[], numberToFind: number): number[] {
  const arrayfiltred: number[] = [];
  numberArray.filter((number) => {
    if (number.toString().includes(numberToFind.toString())) {
      arrayfiltred.push(number);
    }
  });
  return arrayfiltred;
}

export { findDigit };
