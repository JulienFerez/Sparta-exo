import { greet } from "./index";

describe("Le test vérifie que les 2 fonctions salue un utilisateur", () => {
  test("test 1 : Hello WORLD ! ", () => {
    expect(greet()).toBe("Hello WORLD!");
  });

  test("test 2 : Hello FRANCIS !", () => {
    expect(greet("Francis")).toBe("Hello FRANCIS!");
  });
});
