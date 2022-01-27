function theEFilter(arraySentences){
  const arrayfiltred = arraySentences.filter((sentence)=> {
    return sentence.includes("e") || sentence.includes("E");
  });
  return arrayfiltred;
}

console.log(theEFilter(["Tst", "test", "TEST", "tast"]));

// Do not remove the following line, it is for tests
module.exports = theEFilter;

