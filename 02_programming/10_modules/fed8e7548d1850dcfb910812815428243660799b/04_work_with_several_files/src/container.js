// There should be no import in this file. Only exports!

function literOfCoffeeExpresso (liters){
  if (liters > 0.08){
    return this.serveACup(0.08);
  } else { console.log("Il faut que tu remplisses la machine!");}
}

function literOfCoffeeLongCoffee (liters){
  if (liters > 0.15){
    return this.serveACup(0.15);
  } else { console.log("Il faut que tu remplisses la machine!");}
}


export { literOfCoffeeExpresso, literOfCoffeeLongCoffee};
