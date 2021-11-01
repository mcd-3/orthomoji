import pkg from 'node-canvas-with-twemoji';
const { fillTextWithTwemoji } = pkg;

/**
 * Number of characters per row/column in a letter
 */
const BITS_PER_CHAR = 5;

/**
 * Gets the width of a letter
 *
 * @param {number} fontSize - Size of character (not letter)
 * @returns {number} Calculated width
 */
const getWidthPerLetter = fontSize => fontSize * BITS_PER_CHAR;

/**
 * Gets the height of a letter
 *
 * @param {number} fontSize - Size of character (not letter)
 * @returns {number} Calculated height
 */
const getHeightPerLetter = fontSize => fontSize * BITS_PER_CHAR;

/**
 * Gets the padding width of the canvas
 *
 * @param {number} fontSize - Size of character (not letter)
 * @returns {number} Calculated width
 */
const getPaddingWidth = fontSize => fontSize * 2;

/**
 * Gets the padding height of the canvas
 *
 * @param {number} fontSize - Size of character (not letter)
 * @returns {number} Calculated height
 */
const getPaddingHeight = fontSize => fontSize * 2;

/**
 * Resizes a canvas to properly apply text and changes the background style if needed
 *
 * @param {HTMLCanvasElement} canvas - Canvas that we will resize
 * @param {string} str - String we will print to canvas.
 * @returns {HTMLCanvasElement} Newly resized canvas
 */
const editCanvas = (canvas, str, fontSize, style) => {
    const longestLine = str.split('\n').sort((a, b) => b.length - a.length)[0];
    const lines = (str.match(/\n/g) || []).length + 1;
    // Add padding on both L and R sides, then add space for each letter being typed
    canvas.width = (getPaddingWidth(fontSize) * 2) + (longestLine.length * getWidthPerLetter(fontSize));
    // Add padding for both up and down, then add space for each letter being typed
    const height = (getPaddingHeight(fontSize)) + (lines * getHeightPerLetter(fontSize));
    canvas.height = (lines > 1) ? height + (fontSize * (lines - 1)) : height;

    return (style !== null) ? changeBGCanvas(canvas, style) : canvas;
};

/**
 * Changes the background style/colour of a canvas
 *
 * @param {HTMLCanvasElement} canvas - Canvas to change BG colour of
 * @param {string} style - Valid CSS colour
 * @returns {HTMLCanvasElement} Newly edited canvas element
 */
const changeBGCanvas = (canvas, style) => {
    try {
        canvas.getContext('2d').fillStyle = style;
        canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height);
        return canvas;
    } catch (e) {
        throw new Error(`${style} is not a correct style for the background`);
    }
};

/**
 * Adds a strinf of text to a canvas
 *
 * @param {HTMLCanvasElement} canvas - Canvas we will apply text to
 * @param {string} str - String we will apply to canvas
 * @param {JSON} fontSet - JSON object containing the font set
 * @returns {HTMLCanvasElement} Canvas with text drawn to it
 */
const addTextToCanvas = async (canvas, str, fontSet, fontSize, bgStyle) => {
    let editedCanvas = editCanvas(canvas, str, fontSize, bgStyle);

    const ctx = editedCanvas.getContext('2d');
    ctx.font = `${fontSize}px serif`;

    // Set the starting point
    let currentX = getPaddingWidth(fontSize) / 1.5 ;
    let currentY = getPaddingHeight(fontSize);

    // Draw each row of a letter then adds spacing or a newline
    for (const c of str) {
        const spacing = (fontSize * BITS_PER_CHAR);
        let topX = currentX;
        let topY = currentY;

        if (c !== '\n') {
            const fontBits = fontSet[c];
            for (const elem of fontBits) {
                currentX += fontSize;
                if (elem === '') {
                    currentX = topX;
                    currentY += fontSize;
                }
                await fillTextWithTwemoji(ctx, elem, currentX, currentY);
            };
            currentY = topY;
            currentX = topX + spacing;
        } else {
            currentY = topY + spacing + fontSize;
            currentX = getPaddingWidth(fontSize) / 1.5;
        }
    }
    return editedCanvas;
};

export { addTextToCanvas };
