function caesar(s, shiftBy) {
    let splitS = s.split("");
    let shifted = splitS
        .map((char) => {
            if (isLetter(char)) {
                return shiftLetter(char, shiftBy);
            } else return char;
        })
        .join("");
    return shifted;
}

function isLetter(inp) {
    let regex = /[a-zA-Z]/;
    return regex.test(inp);
}

function shiftLetter(char, shiftBy) {
    let charCode = char.charCodeAt(0);
    let isLowercase = charCode >= 97;
    let firstLetterCode = isLowercase ? 97 : 65;
    let newCharCode = (charCode - firstLetterCode + shiftBy) % 26;

    return String.fromCharCode(newCharCode + firstLetterCode);
}

module.exports = caesar;
