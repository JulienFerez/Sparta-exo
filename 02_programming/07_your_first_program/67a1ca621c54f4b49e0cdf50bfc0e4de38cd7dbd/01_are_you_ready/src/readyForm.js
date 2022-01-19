const readyForm = (reader) => {


  reader.question("Hello user! Are you ready for today ??!",(reponse) => {
    console.log(`WoW, ${reponse}! ??!! Really Nice! Let's goo !!.`);
    reader.close();

  });

};

// Leave line below for tests to work
module.exports = readyForm;
