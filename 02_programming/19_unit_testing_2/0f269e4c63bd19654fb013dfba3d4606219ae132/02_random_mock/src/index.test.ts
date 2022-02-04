import { getRandomUser } from "./index";

describe("Testing with fixed values of random", () => {
  test("verif premier index ", () => {
    expect.assertions(1);
    const fakeRandom = jest.spyOn(Math, "random");
    fakeRandom.mockImplementation(() => 0);
    const fakeGeneratedNumber = getRandomUser(["Frieda", "Francis", "Frederic"]);
    expect(fakeGeneratedNumber).toBe("Frieda");
  });

  test("verification dernier index", () => {
    expect.assertions(1);
    const fakeRandom = jest.spyOn(Math, "random");
    fakeRandom.mockImplementation(() => 1);
    const fakeGeneratedNumber = getRandomUser(["Frieda", "Francis", "Frederic"]);
    expect(fakeGeneratedNumber).toBe("Frederic");
  });

  test("La fonction renvoi toujours quelques choses d'aléatoire", () => {
    const arrayName = [];
    let isRandom = false;
    for (let i = 0; i < 500; i++) {
      arrayName.push(getRandomUser(["james", "lars", "robert", "kirk"]));
    }
    for (let j = 0; j < arrayName.length; j++) {
      if (arrayName[j + 1] === arrayName[j]) {
        isRandom = false;
      } else {
        isRandom = true;
      }
    }
    expect(isRandom).toBe(true);
  });
});
