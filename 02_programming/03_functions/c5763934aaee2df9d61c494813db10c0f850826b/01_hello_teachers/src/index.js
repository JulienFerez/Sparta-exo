function sayHelloToTeachers (array){
  console.log(`Hello, ${spartaTeachers[0]}`);
  console.log(`Hello, ${spartaTeachers[1]}`);
  console.log(`Hello, ${spartaTeachers[2]}`);
  console.log(`Hello, ${spartaTeachers[3]}`);
  console.log(`Hello, ${spartaTeachers[4]}`);

}

sayHelloToTeachers();

// Do not remove last lines, it is for tests
const spartaTeachers = ["Thomas", "Fenn", "Florian", "Martin", "Louis"];
module.exports = sayHelloToTeachers;
