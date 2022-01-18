
function mapLoop(array, double) {
  const doubledNumbers = [];

  for  (let i = 0; i < array.length; i++) {
    doubledNumbers.push(double(array[i]));
  }  return doubledNumbers;}



// Do not remove the following lines, it is for tests
module.exports = mapLoop;
