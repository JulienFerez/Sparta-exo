const identityForm = (reader) => {
  reader.question("What is your first name? " , (reponseFirstName) =>
  { reader.question("What is your last name? " , (reponseLastName)=>
  {reader.question("age" , (reponseAge)=>
  {
    console.log(`Your name is ${reponseFirstName} ${reponseLastName} and you are ${reponseAge}.`);
    reader.close();
  });});});


};

// Leave line below for tests to work
module.exports = identityForm;


