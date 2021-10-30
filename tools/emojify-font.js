import { BLANK_SPACE, EMOJI_CHAR } from '../fonts/font-data-chars.js';

const CONTAINS_EMOJI_REGEX = /\p{Extended_Pictographic}/u;;

/**
 * Verifies if the string contains an emoji
 *
 * @param {string} string - String that should contain an emoji
 * @returns {boolean} True if string contains an emoji, false if not
 */
const hasValidEmoji = str => CONTAINS_EMOJI_REGEX.test(str);

/**
 * Returns the first available emoji in a string
 *
 * @param {string} str - string that should contain an emoji
 * @returns {Array}
 */
const getFirstEmoji = str => str.match(CONTAINS_EMOJI_REGEX)[0];

/**
 * Returns the first available emoji in a string.
 * If no emoji is found, it will return a fallback character
 *
 * @param {string} str - String that should contain an emoji
 * @param {string} fallback - String that will be returned if no emoji is found 
 * @returns First available emoji found in the string. Returns fallback char if none is found
 */
const getFirstEmojiFallback = (str, fallback = '') => {
    return hasValidEmoji(str) ? str.match(CONTAINS_EMOJI_REGEX) : fallback;
};

/**
 * Emojifies font JSON data 
 *
 * @param {JSON} fontJson - Raw font data from /fonts
 * @param {char} emoji - Emoji to use for letters
 * @param {char} space - Space emoji character to use in the font
 * @param {char} newline - Newline emoji character to use in the font
 * @returns {JSON} Emojified font data if emoji is valid. Returns { invalid: true } if not. 
 */
const emojifyFont = (fontJson, emoji, space = ' ', newline = '')  => {
    if (hasValidEmoji(emoji)) {
        const emojiChar = getFirstEmoji(emoji);
        const spaceChar = getFirstEmojiFallback(space, ' ');
        const newlineChar = getFirstEmojiFallback(newline);
        const emojifiedJson = {};

        Object.keys(fontJson).forEach(k => {
            emojifiedJson[k] = fontJson[k].map(x => {
                if (x === BLANK_SPACE) {
                    return `${spaceChar}`;
                } else if (x === EMOJI_CHAR) {
                    return `${emojiChar}`;
                }
                return `${newlineChar}`;
            });
        });

        return emojifiedJson;
    }
    return { invalid: true };
}

export { emojifyFont };
