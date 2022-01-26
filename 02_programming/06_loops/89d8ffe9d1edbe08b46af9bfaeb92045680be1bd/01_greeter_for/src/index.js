function greeter(people) {
  for (let i=0 ; i < people.length ; i++) {
    console.log(`Hello ${people[i]}!`);
  }

}
const listeOfPeople = ["Julien", "Estelle", "Julien", "Hugo"];
console.log(greeter(listeOfPeople));



// Do not remove the following lines, it is for tests
module.exports = greeter;
