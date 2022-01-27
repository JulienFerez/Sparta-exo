function tellFortune(job,city,name,numberOfyears){
  console.log(`You will be ${job} in ${city}, and married to ${name} in ${numberOfyears} years.`);
}

tellFortune("dev","lille","estelle",2);

// Do not remove last lines, it is for tests
module.exports = tellFortune;


