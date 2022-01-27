function theEFilter(arraySentences){
  const arrayFiltred = arraySentences.filter((sentence)=> {
    return sentence.includes("E") || sentence.includes("e");
  });
  return arrayFiltred;
}

console.log(theEFilter(["Tst", "test", "TEST", "tast"]));

// Do not remove the following line, it is for tests
module.exports = theEFilter;

