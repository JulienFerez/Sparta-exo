function theEFilter(sentences) {
  const arrayFiltered = sentences.filter((sentence) =>
  { return sentence.includes("E") || sentence.includes("e");
  });
  return arrayFiltered; }



// Do not remove the following line, it is for tests
module.exports = theEFilter;
