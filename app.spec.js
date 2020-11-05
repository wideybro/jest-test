const multiply = require("./app");

describe("testing app.js", () => {
  it("check that two times two equals four", () => {
    expect(multiply(2, 2)).toBe(4);
  });
  it("check if no arguments are passed then return zero", () => {
    expect(multiply()).toBe(0);
  });
});
