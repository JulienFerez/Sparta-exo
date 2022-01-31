
function mapLoop(array, double) {
  const doubleArray = [];
  for (let i = 0 ; i < array.length ; i ++){
    doubleArray.push((number)=>{
      return double(number);
    });
  }
  return doubleArray;
}





// Do not remove the following lines, it is for tests
module.exports = mapLoop;
