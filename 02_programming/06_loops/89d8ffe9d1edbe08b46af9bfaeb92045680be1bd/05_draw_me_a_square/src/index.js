function square(squareSize) {

  // Code
  let line = "";

  for (let i = 0 ; i < squareSize ; i++){
    line += "*";
  }
  for (let i = 0 ; i < squareSize ; i++){
    console.log(line);
  }

}

// Do not remove the following line, it is for tests
module.exports = square;
