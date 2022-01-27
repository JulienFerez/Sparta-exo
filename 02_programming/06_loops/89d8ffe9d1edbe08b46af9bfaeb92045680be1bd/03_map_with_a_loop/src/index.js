
function mapLoop(array, double) {
  const doubleArray = [];
  for(let i = 0; i < array.length; i++){
    doubleArray.push(double(array[i]));
  }
  return doubleArray ;
}





// Do not remove the following lines, it is for tests
module.exports = mapLoop;
