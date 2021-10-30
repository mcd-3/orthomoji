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
    "d": [
        X,X,X,O,n,
        X,O,O,X,n,
        X,O,O,X,n,
        X,O,O,X,n,
        X,X,X,O,n
    ],
    "e": [
        X,X,X,X,n,
        X,O,O,O,n,
        X,X,X,X,n,
        X,O,O,O,n,
        X,X,X,X,n
    ],
    "e": [
        X,X,X,X,n,
        X,O,O,O,n,
        X,X,X,X,n,
        X,O,O,O,n,
        X,O,O,O,n
    ],
    "g": [
        X,X,X,X,n,
        X,O,O,O,n,
        X,O,X,X,n,
        X,O,O,X,n,
        X,X,X,X,n
    ],
    "h": [
        X,O,O,X,n,
        X,O,O,X,n,
        X,X,X,X,n,
        X,O,O,X,n,
        X,O,O,X,n
    ],
    "i": [
        O,X,X,O,n,
        O,X,X,O,n,
        O,X,X,O,n,
        O,X,X,O,n,
        O,X,X,O,n
    ],
    "j": [
        X,X,X,X,n,
        O,O,X,O,n,
        O,O,X,O,n,
        O,O,X,O,n,
        X,X,X,O,n
    ],
    "k": [
        X,O,O,X,n,
        X,O,X,O,n,
        X,X,O,O,n,
        X,O,X,O,n,
        X,O,O,X,n
    ],
    "l": [
        X,O,O,O,n,
        X,O,O,O,n,
        X,O,O,O,n,
        X,O,O,O,n,
        X,X,X,X,n
    ],
    "m": [
        X,O,O,X,n,
        X,X,X,X,n,
        X,X,X,X,n,
        X,O,O,X,n,
        X,O,O,X,n
    ],
    "n": [
        X,O,O,X,n,
        X,X,O,X,n,
        X,X,X,X,n,
        X,O,X,X,n,
        X,O,O,X,n
    ],
    "o": [
        X,X,X,X,n,
        X,O,O,X,n,
        X,O,O,X,n,
        X,O,O,X,n,
        X,X,X,X,n
    ],
    "p": [
        X,X,X,X,n,
        X,O,O,X,n,
        X,X,X,X,n,
        X,O,O,O,n,
        X,O,O,O,n
    ],
    "q": [
        X,X,X,X,n,
        X,O,O,X,n,
        X,O,O,X,n,
        X,O,X,X,n,
        X,X,X,X,n
    ],
    "r": [
        X,X,X,X,n,
        X,O,O,X,n,
        X,X,X,X,n,
        X,O,X,O,n,
        X,O,O,X,n
    ],
    "s": [
        O,X,X,X,n,
        X,O,O,O,n,
        O,X,X,O,n,
        O,O,O,X,n,
        X,X,X,O,n
    ],
    "t": [
        X,X,X,X,n,
        O,X,X,O,n,
        O,X,X,O,n,
        O,X,X,O,n,
        O,X,X,O,n
    ],
    "u": [
        X,O,O,X,n,
        X,O,O,X,n,
        X,O,O,X,n,
        X,O,O,X,n,
        X,X,X,X,n
    ],
    "v": [
        X,O,O,X,n,
        X,O,O,X,n,
        X,O,O,X,n,
        O,X,X,O,n,
        O,X,X,O,n
    ],
    "w": [
        X,O,O,X,n,
        X,O,O,X,n,
        X,X,X,X,n,
        X,X,X,X,n,
        X,O,O,X,n
    ],
    "x": [
        X,O,O,X,n,
        X,O,O,X,n,
        O,X,X,O,n,
        X,O,O,X,n,
        X,O,O,X,n
    ],
    "y": [
        X,O,O,X,n,
        X,O,O,X,n,
        O,X,X,O,n,
        O,X,X,O,n,
        O,X,X,O,n
    ],
    "z": [
        X,X,X,X,n,
        O,O,O,X,n,
        O,X,X,O,n,
        X,O,O,O,n,
        X,X,X,X,n
    ],
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
