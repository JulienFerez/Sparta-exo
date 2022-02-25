export function line(numberOfStars: number): string {
  let line: string = "";
  for (let i = 0; i < numberOfStars; i++) {
    line += "*";
  }
  return line;
}
