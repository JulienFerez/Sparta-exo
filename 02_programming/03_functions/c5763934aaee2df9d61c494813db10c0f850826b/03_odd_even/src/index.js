function oddEven (number) {
  if (Number.isInteger(number)){
    return number % 2 === 0 ? `${number} is an even number.` : `${number} is an odd number.`;
  } else {
    console.log(`${number} is not a number.`);
  }
}

oddEven(2);
oddEven(3);

// Do not remove last lines, it is for tests
module.exports = oddEven;



