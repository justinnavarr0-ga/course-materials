const isEven = require('./isEven')

test("It should return true when called with an even number", () => {
  expect(isEven(2)).toBe(true);
});

test("It should return false when called with an odd number", () => {
  expect(isEven(5)).toBe(false);
});

test("It should return Stop trolling when called with the string 'matthew is awesome!' ", () => {
  expect(isEven('matthew is awesome!!!')).toBe('Stop trolling');
});

test("It should return Stop trolling when called with the string [1, 2, 3] ", () => {
  expect(isEven([1, 2, 3])).toBe('Stop trolling');
});

test("It should return ??? when called with two parameters 55, 33 ", () => {
  expect(isEven(54, 33)).toBe('Stop trolling');
});
