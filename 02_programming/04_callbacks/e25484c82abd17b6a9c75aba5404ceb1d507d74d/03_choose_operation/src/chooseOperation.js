function addition(numberOne,numberTwo){
  return numberOne + numberTwo;
}

function substraction(numberOne,numberTwo){
  return numberOne - numberTwo;
}

function multiplication(numberOne,numberTwo){
  return numberOne * numberTwo;
}

function division(numberOne,numberTwo){
  return numberOne / numberTwo;
}

function chooseOperation(numberOne,numberTwo,operator){
  if (Number.isInteger(numberOne) && Number.isInteger(numberTwo)) {
    return operator(numberOne,numberTwo);
  } else {
    throw new Error("It's not a number integer");
  }
}
// Leave the line below for tests to work
module.exports = { chooseOperation, addition, substraction, multiplication, division };
