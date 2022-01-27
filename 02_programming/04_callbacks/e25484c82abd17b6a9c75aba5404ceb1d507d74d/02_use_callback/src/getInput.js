// A function getInput that takes two parameters, an input (the first one) and a callback function

// code the function here
function getInput (object, callback){
  return callback(object.key);
}

// Leave the line below for tests to work
(module.exports = getInput);
