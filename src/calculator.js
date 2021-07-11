const calculator = {
    add,
    subtract,
    multiply,
    divide,
};

function add(...numbers) {
    return numbers.reduce((first, next) => first + next);
}

function subtract(...numbers) {
    return numbers.reduce((first, next) => first - next);
}

function multiply(...numbers) {
    return numbers.reduce((first, next) => first * next);
}

function divide(...numbers) {
    return numbers.reduce((first, next) => first / next);
}

module.exports = calculator;
