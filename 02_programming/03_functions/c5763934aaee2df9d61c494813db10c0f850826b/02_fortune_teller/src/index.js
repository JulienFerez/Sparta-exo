function tellFortune(job,city,name,numberofyears) {
  console.log(`You will be ${job} in ${city}, and married to ${name} in ${numberofyears} years.`);
}
tellFortune("webdevelopper","lille","estelle",2);

// Do not remove last lines, it is for tests
module.exports = tellFortune;
