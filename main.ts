function makeHexBuffer(arr: number[], format: NumberFormat) {
    const wordSize = pins.sizeOf(format);
    const buff = control.createBuffer(arr.length * wordSize);

    for (let i = 0; i < arr.length; i++) {
        buff.setNumber(format, i * wordSize, arr[i]);
    }

    let out = "hex`";

    for (let i = 0; i < buff.length; i++) {
        out += formatHexByte(buff[i]);
    }
    return out + "`";
}

function formatHexByte(value: number) {
    const hexChars = "0123456789ABCDEF"

    const lower = hexChars[value & 0xf];
    const upper = hexChars[(value >> 4) & 0xf];

    return upper + lower;
}


console.log(makeHexBuffer([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], NumberFormat.Int8LE));
