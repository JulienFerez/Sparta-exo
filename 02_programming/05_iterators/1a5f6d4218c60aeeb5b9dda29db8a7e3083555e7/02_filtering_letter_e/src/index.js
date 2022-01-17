function theEFilter(sentences) {
  const arrayFiltered = sentences.filter((phrase) =>
  { return phrase.includes("E") || phrase.includes("e");
  });
  return arrayFiltered; }


// Do not remove the following line, it is for tests
module.exports = theEFilter;
