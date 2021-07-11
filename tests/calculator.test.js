const { add, subtract, multiply, divide } = require("../src/calculator");

test("add: 3 + 4 = 7", () => {
    expect(add(3, 4)).toBe(7);
});
test("add: 3 + 4 + 3 = 10", () => {
    expect(add(3, 4, 3)).toBe(10);
});

test("subtract: 3 - 4 = -1", () => {
    expect(subtract(3, 4, 10)).toBe(-11);
});
test("multiply: 3 * 4 = 12", () => {
    expect(multiply(3, 4)).toBe(12);
});
test("divide: 4 / 2 = 2", () => {
    expect(divide(4, 2)).toBe(2);
});

test("divide 2: 12.5 / 4 = 2", () => {
    expect(divide(12.5, 4)).toBeCloseTo(3.125);
});
