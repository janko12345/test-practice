const reverseString = require("../src/reverse-string");

it("reverses the string", () => {
    expect(reverseString("reverse this sentence.")).toBe(
        ".ecnetnes siht esrever"
    );
});
