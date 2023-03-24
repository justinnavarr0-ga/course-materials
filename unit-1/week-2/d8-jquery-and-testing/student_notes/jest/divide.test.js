const divide = require('./divide')

test("it should return true when a and b are numbers", () => {
    expect(divide(10, 5)).toBe(true);
});

test("it should return undefined ", () => {
    expect(divide(10, 0)).toBe(undefined);
});
