// Copy your function greetEveryone here
type ParamRest = string[];

export function greetEveryone(...people: string[]): void {
  // Code your function here
  people.forEach((person) => {
    console.log(`Welcome to ${person}`);
  });
}
