// Message de bienvenue

console.log("Welcome!");
console.log("You have to find the right number, between 1 and 100!");
console.log("Good luck!!");

// Formule du nombre aléatoire 

function numberRandom(min, max)
{
  return Math.round(Math.random() * (max - min)) + min;
}


// Function principale 

function numberGame(reader, min = 1, max = 100) {




  const numberServer = numberRandom(min,max);
  console.log(numberServer);


  function question (){

    reader.question("Enter a number" , (numberClient)=> {
      let userNumber = parseInt(numberClient);


      if (!Number.isInteger(userNumber)){
        console.log("This was not a number");
        question();

      } else if (userNumber > max || userNumber < min){
        console.log(`The number is between ${min} and ${max}`);
        question();
      }

      else if (userNumber < numberServer){
        console.log("Too low");
        question();

      } else if (userNumber > numberServer ) {
        console.log("Too high");
        question();

      } else {
        console.log("You won!");
        reader.close();
      }

      //console.log(numberClient);
    });
  }
  question();
}









module.exports = numberGame;
