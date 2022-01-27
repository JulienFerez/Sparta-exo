function howMuchDidIMake(invoices) {
  const arrayFilte = [];
  invoices.forEach((object)=>{if (object.waiter === "Yourself"){
    arrayFilte.push(object.tip);
  }});
  const arrayTipTotal = arrayFilte.reduce((tip, curentValue)=>{
    return tip + curentValue ;
  });
  return arrayTipTotal;
}
// Do not remove the following line, it is for tests
module.exports = howMuchDidIMake;




