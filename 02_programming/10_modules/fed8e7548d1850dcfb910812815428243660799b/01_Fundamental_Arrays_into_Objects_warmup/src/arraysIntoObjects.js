const arraysIntoObjects = (keysArray, valuesArray) => {
  const objet = {};
  keysArray.forEach((key,value)=> {
    objet[key] = valuesArray[value];
  });
  return objet ;


};

// Don't change this line for tests to run properly
export default arraysIntoObjects;
