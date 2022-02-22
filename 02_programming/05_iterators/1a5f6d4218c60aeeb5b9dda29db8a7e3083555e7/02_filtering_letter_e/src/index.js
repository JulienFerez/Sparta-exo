function theEFilter(arrayOfSentences) {
  const arrayFiltred = [];
  arrayOfSentences.filter((sentence)=> {
  (sentence.includes("e") || sentence.includes("E"))
    arrayFiltred.push(sentence)
  return arrayFiltred
  )}

}
console.log(theEFilter(["Tst", "test", "TEST", "tast"]));

// Do not remove the following line, it is for tests
module.exports = theEFilter;
