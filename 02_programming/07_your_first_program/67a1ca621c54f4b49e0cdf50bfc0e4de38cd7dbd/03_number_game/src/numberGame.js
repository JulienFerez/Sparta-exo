console.log("Welcome!");
console.log("You have to find the right number, between 1 and 100!");
console.log("Good luck!!");


function numberRandom(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function numberGame(reader, min = 1, max = 100) {




  const numberServer = numberRandom(min,max);
  console.log(numberServer);



  reader.question("Enter a number" , (numberClient)=> {



    if (numberClient != Number.isInteger){
      console.log("This was not a number");
      numberGame(reader);
    } else if (numberClient < numberServer){
      console.log("Too low");
      numberGame(reader);
    } else if (numberClient > numberServer ) {
      console.log("Too high");
      numberGame(reader);
    } else if ( numberClient < min){
      console.log("The number is between 1 and 100");
      numberGame(reader);
    } else if (numberClient > max){
      console.log("The number is between 1 and 100");
      numberGame(reader);
    } else {
      console.log("You won!");
      reader.close();
    }

    //console.log(numberClient);
  });
}








module.exports = numberGame;
