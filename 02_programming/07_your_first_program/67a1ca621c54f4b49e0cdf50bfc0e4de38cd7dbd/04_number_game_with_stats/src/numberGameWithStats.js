// Message de bienvenue

console.log("Welcome!");
console.log("You have to find the right number, between 1 and 100!");
console.log("Good luck!!");

// Formule du nombre aléatoire

function numberRandom(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

// Function principale

function numberGameWithStats(reader, min = 1, max = 100) {
  const numberServer = numberRandom(min, max);
  console.log(numberServer);

  function question(counter = 0) {
    let functionCounter = counter;
    console.log(functionCounter);
    reader.question("Enter a number ", (numberClient) => {
      let userNumber = parseInt(numberClient);
      functionCounter++;

      if (!Number.isInteger(userNumber)) {
        console.log("This was not a number");

        question(functionCounter);
      } else if (userNumber > max || userNumber < min) {
        console.log(`The number is between ${min} and ${max}`);

        question(functionCounter);
      } else if (userNumber < numberServer) {
        console.log("Too low");

        question(functionCounter);
      } else if (userNumber > numberServer) {
        console.log("Too high");

        question(functionCounter);
      } else {
        console.log("You won!");


        if (functionCounter > 1) {
          console.log(`Vous avez reussi en ${functionCounter} fois`);
        } else {
          console.log("Félictation vous avec reussi du premier coup");
        }

        reader.close();
      }

      //console.log(numberClient);
    });
  }
  question();
}

module.exports = numberGameWithStats;
