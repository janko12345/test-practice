const capitalize = require("../src/capitalize");

test("capitalize 1", () => {
    expect(capitalize("hi everyone")).toBe("Hi everyone");
});

test("capitalize 2", () => {
    expect(capitalize("Hi everyone")).toBe("Hi everyone");
});

test("capitalize 3", () => {
    expect(capitalize("12 years of Bitcoin")).toBe("12 Years of Bitcoin");
});
