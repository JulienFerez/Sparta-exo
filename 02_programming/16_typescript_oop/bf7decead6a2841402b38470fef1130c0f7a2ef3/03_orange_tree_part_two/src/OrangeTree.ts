import { allowedNodeEnvironmentFlags } from "process";
import { Tree } from "./Tree";

// Code your class here.
class OrangeTree extends Tree {
  oranges: string[];

  constructor(age: number, oranges: [] = []) {
    super(age);
    this.oranges = oranges;
  }

  isAlive(): boolean {
    if (this.age <= 50) {
      return true;
    } else if (this.age > 50 || this.age <= 99) {
      return true;
    } else {
      return false;
    }
  }

  ageOneYear(): number {
    if (this.alive === true) {
      this.Calculeheight();
      this.growOranges();
      return this.age++;
    }
  }
  growOranges(): number | string {
    if (this.age >= 0 || this.age <= 4) {
      return this.oranges;
    } else if (this.age >= 5 || this.age <= 10) {
      return this.oranges + 10;
    } else if (this.age >= 11 || this.age <= 20) {
      return this.oranges + 20;
    } else if (this.age >= 21 || this.age <= 40) {
      return this.oranges + 5;
    }
    return this.oranges;
  }

  pickAnOrange(): boolean {
    return;
  }
}
// Leave the line below for tests to work properly.
export { OrangeTree };
