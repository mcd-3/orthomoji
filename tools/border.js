/**
 * Checks if an object contains the width, color, style, join parameters
 * and checks if they are their appropriate types
 *
 * @param {object} borderObj - Border style parameter object
 * @returns {bool} True if object is valid, false if not
 */
const isValidStyleObj = borderObj => {
    return (
        borderObj !== null
        && typeof borderObj.width === 'number'
        && typeof borderObj.color === 'string'
        && Array.isArray(borderObj.style)
        && typeof borderObj.join === 'string'
    );
};

/**
 * Draws a border to a canvas
 *
 * @param {HTMLCanvasElement} canvas - Canvas where we will draw the border
 * @param {object} borderObj - Border style parameter object
 * @returns {HTMLCanvasElement} Newly bordered canvas
 */
const drawBorderToCanvas = (canvas, borderObj) => {
    if (isValidStyleObj(borderObj)) {
        const ctx = canvas.getContext('2d');

        // Set the drawing styles
        ctx.strokeStyle = borderObj.color;
        ctx.lineWidth = borderObj.width;
        ctx.lineJoin = borderObj.join;

        if (borderObj.style.length != 0) {
            ctx.setLineDash(borderObj.style);
        }

        // Draw border
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(canvas.width, 0);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.lineTo(0, 0);
        ctx.stroke();
    }
    return canvas;
};

export { drawBorderToCanvas };
