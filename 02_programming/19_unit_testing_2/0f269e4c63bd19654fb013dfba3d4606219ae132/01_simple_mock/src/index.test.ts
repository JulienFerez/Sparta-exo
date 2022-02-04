import { helloSailor } from "./index";

test("a function", () => {
  const fakeLog = jest.spyOn(console, "log");
  helloSailor();
  expect(fakeLog).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");
});

test("a function", () => {
  const fakeLog = jest.spyOn(console, "log");
  helloSailor("Captain Blackbeard");
  expect(fakeLog).toHaveBeenCalledWith("Howdy Captain Blackbeard!");
});
