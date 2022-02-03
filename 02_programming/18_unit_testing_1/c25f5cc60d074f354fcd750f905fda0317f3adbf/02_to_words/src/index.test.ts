import { toWords } from "./index";

describe("toWords devrait renvoyer une liste de mots dans un tableau", () => {
  // expect.assertions(2);
  test("Vérifier une phrase classique", () => {
    expect(toWords("TroTro est meilleur que PepaPig")).toStrictEqual(["TroTro", "est", "meilleur", "que", "PepaPig"]);
  });

  test("Vérifier une phrase avec des caractère spéciaux", () => {
    expect(toWords("TroTro@- - est; meilleur que PepaPig!")).toStrictEqual([
      "TroTro@-",
      "-",
      "est;",
      "meilleur",
      "que",
      "PepaPig!",
    ]);
  });

  // done();
});
