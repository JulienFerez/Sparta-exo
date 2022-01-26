// There should be no import in this file. Only exports!
function expresso (){
  return this.serveACup(0.08);
}

function longCoffe (){
  return this.serveACup(0.15);
}


export { expresso, longCoffe};
