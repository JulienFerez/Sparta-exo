// Code the class here.
class Hero {
  // Properties member.
  name: string;

  // Constructor member.
  constructor(name: string) {
    this.name = name;
  }
  // Methods member.
  sayHi(): string {
    return `Je suis ${this.name}!`;
  }
}

const batman = new Hero("batman");
console.log(batman);

// Leave the line below for tests to work properly.
export { Hero };
