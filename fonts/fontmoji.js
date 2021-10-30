import { BLANK_SPACE, EMOJI_CHAR, NEWLINE } from './font-data-chars.js';

// Encapsulate for better readability
const X = EMOJI_CHAR;
const O = BLANK_SPACE;
const n = NEWLINE;

const font = {
    "a": [
        X,X,X,X,n,
        X,O,O,X,n,
        X,X,X,X,n,
        X,O,O,X,n,
        X,O,O,X,n
    ],
    "b": [
        X,X,X,O,n,
        X,O,O,X,n,
        X,X,X,O,n,
        X,O,O,X,n,
        X,X,X,O,n
    ],
    "c": [
        X,X,X,X,n,
        X,O,O,O,n,
        X,O,O,O,n,
        X,O,O,O,n,
        X,X,X,X,n
    ],
    // "d": [

    // ],
    // "e": [

    // ],
    // "f": [

    // ],
    // "g": [

    // ],
    // "h": [

    // ],
    // "i": [

    // ],
    // "j": [

    // ],
    // "k": [

    // ],
    // "l": [

    // ],
    // "m": [

    // ],
    // "n": [

    // ],
    // "o": [

    // ],
    // "p": [

    // ],
    // "q": [

    // ],
    // "r": [

    // ],
    // "s": [

    // ],
    // "t": [

    // ],
    // "u": [

    // ],
    // "v": [

    // ],
    // "w": [

    // ],
    // "x": [

    // ],
    // "y": [

    // ],
    // "z": [

    // ],
    // "0": [

    // ],
    // "1": [

    // ],
    // "2": [

    // ],
    // "3": [

    // ],
    // "4": [

    // ],
    // "5": [

    // ],
    // "6": [

    // ],
    // "7": [

    // ],
    // "8": [

    // ],
    // "9": [

    // ],
    // ".": [

    // ],
    // ",": [

    // ],
    // "'": [

    // ],
    // "\"": [

    // ],
    // "?": [

    // ],
    // "!": [

    // ]
};

export { font };
