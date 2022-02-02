// Paste your previous `Tree` class here.

class Tree {
  // Properties member.
  age: number;
  height: number;
  alive: boolean = true;
  oranges: string[];

  // Constructor member.
  constructor(age: number) {
    this.age = age;
    this.height = this.Calculeheight();
  }

  // Methods member.
  Calculeheight(): number {
    if (this.age <= 9) {
      return this.age * 25;
    } else if (this.age <= 20) {
      return 9 * 25 + (this.age - 9) * 10;
    } else {
      return 9 * 25 + 11 * 10;
    }
  }

  seed(age: number, height: number, living: boolean): any {
    this.age = 0;
    this.height = 0;
    this.alive = true;
  }
}

// Leave the line below for tests to work properly.
export { Tree };
