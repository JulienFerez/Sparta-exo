function forEachLoop(array, funct){
  for (let i = O ; i < array.length ; i++){
    funct(array[i]);
  }
}

// Do not remove the following lines, it is for tests
module.exports = forEachLoop;
