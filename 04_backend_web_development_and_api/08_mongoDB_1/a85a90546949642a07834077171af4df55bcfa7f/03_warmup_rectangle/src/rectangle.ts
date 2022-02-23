export function rectangle(width: number, height: number): string {
  let star: string = "";
  for (let i = 0; i < height; i++) {
    for (let i = 0; i < width; i++) {
      star += "*";
    }

    star += "\n";
  }

  return star;
}
