function letterCount(string, letter) {
  let counter = 0 ;
  console.log(counter , "Line3");
  for (let i = 0; i < string.length; i++) {
    console.log(counter, "line5");
    if (letter === string[i]){
      counter++ ;
      console.log(counter, "line7");
    }

  }
  return counter ;
}

letterCount("effqdsffd", "f");

// Do not remove the following line, it is for tests
module.exports = letterCount;
