function forEachLoop(array, funct){
  for (let i = 0 ; i < array.length ; i++){
    funct(array[i]);
  }
}

// Do not remove the following lines, it is for tests
module.exports = forEachLoop;
