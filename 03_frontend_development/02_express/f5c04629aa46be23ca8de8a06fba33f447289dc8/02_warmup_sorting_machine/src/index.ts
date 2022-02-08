// Code here
function sortingMachine(arrayNumber: number[], bool: boolean): number[] {
  if (bool === true) {
    return arrayNumber.sort((a, b) => a - b);
  } else {
    return arrayNumber.sort((a, b) => b - a);
  }
}

export { sortingMachine };
