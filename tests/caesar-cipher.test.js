const caesar = require("../src/caesar-cipher");

test("caesar cipher 2", () => {
    expect(
        caesar("BTC gonna change the world with the help of zap strike!", 0)
    ).toBe("BTC gonna change the world with the help of zap strike!");
});

test("caesar cipher", () => {
    expect(
        caesar("BTC gonna change the world with the help of zap strike!", 2)
    ).toBe("DVE iqppc ejcpig vjg yqtnf ykvj vjg jgnr qh bcr uvtkmg!");
});

test("caesar cipher", () => {
    expect(
        caesar("BTC gonna change the world with the help of zap strike!", 33)
    ).toBe("IAJ nvuuh johunl aol dvysk dpao aol olsw vm ghw zayprl!");
});
