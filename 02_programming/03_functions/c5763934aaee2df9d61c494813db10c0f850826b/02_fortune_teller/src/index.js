function tellFortune(job,city,name,numberYears){
  return console.log(`You will be ${job} in ${city}, and married to ${name} in ${numberYears} years.`);
}
tellFortune("dev","lille","estelle",2024);

// Do not remove last lines, it is for tests
module.exports = tellFortune;


