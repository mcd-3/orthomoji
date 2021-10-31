import pkg from 'node-canvas-with-twemoji';
const { fillTextWithTwemoji } = pkg;

// Canvas padding, letter sizes, emojis per letter row, and emojis per letter column
const CHAR_PIECE_SIZE = 24;
const BITS_PER_CHAR = 5;
const PADDING_WIDTH = CHAR_PIECE_SIZE * 2;
const PADDING_HEIGHT = CHAR_PIECE_SIZE * 2;
const WIDTH_PER_LETTER = CHAR_PIECE_SIZE * BITS_PER_CHAR;
const HEIGHT_PER_LINE = CHAR_PIECE_SIZE * BITS_PER_CHAR;

/**
 * Resizes a canvas to properly apply text
 *
 * @param {HTMLCanvasElement} canvas - Canvas that we will resize
 * @param {string} str - String we will print to canvas.
 * @returns {HTMLCanvasElement} Newly resized canvas
 */
const resizeCanvas = (canvas, str) => {
    const longestLine = str.split('\n').sort((a, b) => b.length - a.length)[0];
    const lines = (str.match(/\n/g) || []).length + 1;
    // Add padding on both L and R sides, then add space for each letter being typed
    canvas.width = (PADDING_WIDTH * 2) + (longestLine.length * WIDTH_PER_LETTER);
    // Add padding for both up and down, then add space for each letter being typed
    canvas.height = (PADDING_HEIGHT * 2) + (lines * HEIGHT_PER_LINE);
    return canvas;
};

// Find longest string of chars seperated by \n 

/**
 * Adds a strinf of text to a canvas
 *
 * @param {HTMLCanvasElement} canvas - Canvas we will apply text to
 * @param {string} str - String we will apply to canvas
 * @param {JSON} fontSet - JSON object containing the font set
 * @returns {HTMLCanvasElement} Canvas with text drawn to it
 */
const addTextToCanvas = async (canvas, str, fontSet) => {
    let editedCanvas = resizeCanvas(canvas, str);
    const ctx = editedCanvas.getContext('2d');
    ctx.font = `${CHAR_PIECE_SIZE}px serif`;

    // Set the starting point
    let currentX = PADDING_WIDTH / 1.5 ;
    let currentY = PADDING_HEIGHT;

    // Draw each row of a letter then adds spacing or a newline
    for (const c of str) {
        const spacing = (CHAR_PIECE_SIZE * BITS_PER_CHAR);
        let topX = currentX;
        let topY = currentY;

        if (c !== '\n') {
            const fontBits = fontSet[c];
            for (const elem of fontBits) {
                currentX += CHAR_PIECE_SIZE;
                if (elem === '') {
                    currentX = topX;
                    currentY += CHAR_PIECE_SIZE;
                }
                await fillTextWithTwemoji(ctx, elem, currentX, currentY);
            };
            currentY = topY;
            currentX = topX + spacing;
        } else {
            currentY = topY + spacing + CHAR_PIECE_SIZE;
            currentX = PADDING_WIDTH / 1.5;
        }
    }
    return editedCanvas;
};

export { addTextToCanvas };
