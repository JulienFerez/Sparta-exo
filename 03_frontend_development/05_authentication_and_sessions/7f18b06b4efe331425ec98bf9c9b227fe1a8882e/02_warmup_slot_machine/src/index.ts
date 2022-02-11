// Code here
function slotMachine(
  array: [string, string, string] | [number, number, number] | [boolean, boolean, boolean],
): boolean {
  if (array[0] === array[1] && array[1] === array[2]) {
    return true;
  } else {
    return false;
  }
}

export { slotMachine };
