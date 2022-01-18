function forEachLoop(array,func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}


// Do not remove the following lines, it is for tests
module.exports = forEachLoop;
