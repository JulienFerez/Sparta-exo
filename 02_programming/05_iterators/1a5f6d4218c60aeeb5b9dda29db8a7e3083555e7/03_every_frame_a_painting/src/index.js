function canTakeArtPieces(pieces) {

  const arrayfiltre = [];
  pieces.forEach((piece) => {
    arrayfiltre.push(piece.type);
  });

  return arrayfiltre.every((type)=>{
    return type === "painting";
  });


}




// Do not remove the following line, it is for tests
module.exports = canTakeArtPieces;
