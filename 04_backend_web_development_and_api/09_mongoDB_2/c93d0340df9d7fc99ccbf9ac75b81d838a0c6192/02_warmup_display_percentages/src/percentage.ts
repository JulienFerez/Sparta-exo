export function humanPercentage(percentages: number[]): string[] {
  const map1 = percentages.map((number) => `${Math.round(number * 100)}%`);
  return map1;
}
