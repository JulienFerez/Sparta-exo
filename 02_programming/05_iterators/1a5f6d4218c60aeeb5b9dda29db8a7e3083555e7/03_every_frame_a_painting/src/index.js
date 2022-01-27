function canTakeArtPieces(pieces) {
  const arrayFiltre = [];
  pieces.forEach((object)=>{
    arrayFiltre.push(object.type);
  });
  return arrayFiltre.every((type)=>{
    return type === "painting";
  });
}




// Do not remove the following line, it is for tests
module.exports = canTakeArtPieces;
