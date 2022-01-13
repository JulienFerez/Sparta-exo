function helloSpartan(name = "soldier") {


  if (name != "soldier") {
    console.log(`Hello ${name}: glad to know your name!`);
  } else {
    console.log(`Hello ${name}; not very talkative uh?`);
  }
}
helloSpartan("Julien");
helloSpartan();

// Do not remove last lines, it is for tests
module.exports = helloSpartan;
