const isValidStyleObj = borderObj => {
    return (
        borderObj !== null
        && typeof borderObj.width === 'number'
        && typeof borderObj.color === 'string'
        && Array.isArray(borderObj.style)
        && typeof borderObj.join === 'string'
    );
};

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
