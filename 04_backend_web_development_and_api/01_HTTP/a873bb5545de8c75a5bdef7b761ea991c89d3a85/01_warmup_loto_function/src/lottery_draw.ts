type Draw = number[];

export function lottery_draw(): Draw {
  const arrayNumbers = [];
  for (let i = 0; i <  6; i++) {
    arrayNumbers.push(Math.round(Math.random() * (100 - 0) + 0));
  }

  return arrayNumbers;
}
