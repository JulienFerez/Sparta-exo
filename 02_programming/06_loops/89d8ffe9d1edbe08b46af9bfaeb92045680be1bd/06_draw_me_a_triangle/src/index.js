function triangle(height) {
  let line = "";
  for (let i= 0 ; i < height ; i++){
    line += "*" ;
    console.log(line);
  }
}
// Do not remove the following line, it is for tests
module.exports = triangle;
