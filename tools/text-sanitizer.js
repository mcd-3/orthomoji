const VALID_CHARS_REGEX = /[^a-z0-9 ,.?!]/ig;

/**
 * Sanitizes a string by removing all invalid characters and making all letters uppercase
 *
 * @param {string} str - String to sanitize
 * @returns {string} Sanitized string with only valid characters
 */
const sanitizeText = (str) => {
    const newStr = str.toUpperCase();
    return newStr.replace(VALID_CHARS_REGEX, '');
};

export { sanitizeText };
