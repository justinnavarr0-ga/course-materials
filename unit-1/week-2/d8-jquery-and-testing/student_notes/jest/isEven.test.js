const isEven = require('./isEven')

test("It should return true when called with an even number", () => {
    expect(isEven(2)).toBe(true);
  });

test("It should return false when called with an odd number", () => {
    expect(isEven(5)).toBe(false);
  });
test("It should return ??? when called with the string matthew is awesome", () => {
    expect(isEven("matthew is awesome")).toBe(true);
  });