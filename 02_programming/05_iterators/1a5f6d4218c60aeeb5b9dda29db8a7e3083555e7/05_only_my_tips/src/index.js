function onlyMyTips(invoices) {
  const arrayFiltre = [];
  invoices.forEach((object)=> { if (object.waiter === "Yourself"){
    arrayFiltre.push(object.type);
  });
  return arrayFiltre;
}

const todaysInvoices = [
  { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
  { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
  { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
];

// Do not remove the following line, it is for tests
module.exports = onlyMyTips;
