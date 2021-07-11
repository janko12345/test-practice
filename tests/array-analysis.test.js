const anaylzeArray = require("../src/array-analysis");

test("shows array length, max, min and average", () => {
    let analyzed = {
        min: -2,
        max: 10,
        average: 4,
        length: 5,
    };
    expect(anaylzeArray([-2, 8, 10, 4, 0])).toEqual(analyzed);
});

test("shows array length, max, min and average", () => {
    let analyzed = {
        min: -2,
        max: 10,
        average: 4.2,
        length: 5,
    };
    expect(anaylzeArray([-2, 8, 10, 4, 1])).toEqual(analyzed);
});
