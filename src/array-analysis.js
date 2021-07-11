function analyzeArray(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let average = arr.reduce((first, next) => first + next) / arr.length;
    let length = arr.length;

    let arrData = {
        min,
        max,
        average,
        length,
    };
    return arrData;
}

module.exports = analyzeArray;
