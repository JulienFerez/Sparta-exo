

// Creation d'un Stream

const { ReadStream } = require("fs");
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


// Création des varaibles Pierre, feuille, ciseau

const moove = [
  [
    "    ________        ",
    "---'   _ ,  |       ",
    "      (__(__)       ",
    "      (_____)       ",
    "      (____)        ",
    "---.__(___)         ",
  ],



  [
    "      _______       ",
    "----'    ____)____  ",
    "            _______)",
    "            _______)",
    "           _______) ",
    "----.__________)    ",
  ],


  [
    "    ____           ",
    "---'    |________  ",
    "     (__)________) ",
    "        _________) ",
    "      (____)       ",
    "---.__(___)        ",
  ],
];


const clear = () => console.log("\x1B[2J\x1B[0f");

// Presentation du Game
console.log("Welcome to the ShiFuMi! \n");
console.log();
console.log();


// Création de l'entrée utilisateur

reader.question(
  `Choose a move: \n
Rock Paper Scissors? [0, 1, 2] \n 0 = Rock \n 1 = Paper \n 2 = Scissors \n`, (numberPlayer) => {
    console.log(`Vous avez choisi ${numberPlayer}`);
    console.log(moove[numberPlayer]);

    console.log(moove[numberRandom()]);

    comparer ();


    // Function Comparer les choix

    function comparer (numberPlayer, numberRandom) {
      if (numberPlayer === numberRandom)
        return console.log("Vous avez fait une egalité !");
      else if ((numberPlayer === 0 && numberRandom === 2) || (numberPlayer === 1 && numberRandom === 0) || (numberPlayer === 2 && numberRandom === 1))
        return console.log("Vous avez gagné !!");
      else
        return console.log("Vous avez perdu !");
    };
    reader.close();

  });

// Générer le choix de L'IA

function numberRandom(){
  let a = Math.random();
  let b = a * 2 ;
  let c = Math.round(b);
  return c ;

};


console.log(numberRandom());





