
function humanFactory(){
  const human = humanFactory();
  firstName = "John",
  lastName = "Doe",
  genre = "male",
  job = "unemployed",
  human.fullname(); // "John Doe"
  human.introduction(); // "Hello! My name is John Doe."
  return humanFactory;
}

function createHumans(aarrayObjct){
  const human = humanFactory({ genre: "female" });
  human.firstName; // "Jane"
  human.lastName; // "Doe"
  human.genre; // "female"
  human.job; // "unemployed"
  human.fullname(); // "Jane Doe"
  human.introduction(); // "Hello! My name is Jane Doe."
}

humanFactory();

module.exports = {
  humanFactory,
  createHumans,
};
