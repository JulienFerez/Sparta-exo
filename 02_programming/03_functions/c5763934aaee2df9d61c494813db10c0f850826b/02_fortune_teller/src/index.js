function tellFortune(job,city,name,years){
  console.log(`You will be ${job} in ${city}, and married to ${name} in ${years} years.`);
}

tellFortune("dev","lille","little",2);

// Do not remove last lines, it is for tests
module.exports = tellFortune;


