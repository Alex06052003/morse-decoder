const MORSE_TABLE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
};

// 10 = .
// 11 = -
// me
// m = -- = 0000001111
//                      => 0000001111_0000000010
// e = . = 0000000010
//
// Наоброт! Вводят строку из "0" и "1" нужно преобразовать в текст
function decode(expr) {
    let arr = [];
    let str = "";
    for (let i = 0; i < expr.length; i += 10) {
        if (expr[i] === '*') {
            arr.push(' ');
            continue;
        }
        for (let j = i; j < i + 10; j++) {
            if (expr[j] === "1") {
                let dec = expr[j] + expr[j + 1];
                str += dec === "10" ? "." : "-";
                j++;
            }
        }
        arr.push(str);
        str = '';
    }
    for (let word of arr) {
        for(let key in MORSE_TABLE) {
            if (word === key) {
                str += MORSE_TABLE[key];
                break;
            }
            if (word === ' ') {
                str += ' ';
                break;
            }
        }
    }
    return str;
}

module.exports = {
    decode,
};
