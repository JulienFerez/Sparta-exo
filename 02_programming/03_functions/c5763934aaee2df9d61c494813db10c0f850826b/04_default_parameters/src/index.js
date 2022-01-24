function helloSpartan(name = "soldier") {
  if (name === "soldier"){console.log("Hello soldier; not very talkative uh?");} else {console.log(`Hello ${name}: glad to know your name!`);}

}

helloSpartan();
helloSpartan("Julien");

// Do not remove last lines, it is for tests
module.exports = helloSpartan;
