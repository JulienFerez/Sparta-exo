import readline from "readline";
import {calculator} from "./calculator.js";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


calculator(reader);



// Etape 1, allumer la calculatrice
function start () {
  reader.question("To turn on the calculator enter ON , \n ", (string) => {
    if (string === "On"){
      return numberOne ;
    }
  });


};

// Etape 2, L'utilisateur rentre son premier nombre

function numberOne (){
  reader.question("Waiting for first number, \n", (number)=> {
    if (Number.isInteger(number)){ return chooseOperation(); } else {console.log ("Unknow operation..");}
  });

};

// Etape 3, L'utilisateur choisis son opération
function chooseOperation () {
  reader.question("Choose an operation: [ + - * / ] \n", (operator)=> {
    if (operator){return numberTwo();};
  });

};

// Etape 4, L'utilisateur choisis son deuxième nombre
function numberTwo () {
  reader.question("Waiting for second number, \n" , (number)=> {
    if (Number.isInteger(number)){ return calculateOperation(); } else {console.log ("Unknow operation..");}
  });
};

// Etape 5, La calculette effectue l'opération
function calculateOperation () {

};





