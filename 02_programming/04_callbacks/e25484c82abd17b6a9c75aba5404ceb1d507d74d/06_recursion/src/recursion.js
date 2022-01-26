




const findPosition = (listOfPerson, person, i) => {
//  console.log(`${i }Ligne7`);
  if(listOfPerson.every(checkIfString) && typeof person === "string" && Number.isInteger(i)){
    if (person === listOfPerson[i]){
      return `${person} is at position #${i+1} in this array.`;
    } else {
      if (i < listOfPerson.length ){
        return findPosition(listOfPerson, person, i+1);
      } else {
        return `${person} is not present in this array.`;
      };

    }
  } else {
    throw new Error("Error");
  }
};

function checkIfString (elementArray){
  return typeof elementArray === "string";
}


// Leave line below for tests to work properly
module.exports = findPosition;
