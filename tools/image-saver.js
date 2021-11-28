import fs from 'fs';
import pkg from 'sharp';
const sharp = pkg;

/**
 * Saves an image to a given directory without compression
 *
 * @param {string} destination - Destination to save to
 * @param {HTMLCanvasElement} canvas - Canvas element to save as an image
 */
const saveNoCompression = (destination, canvas) => {
    const fileName = `orthomoji_${new Date().getTime()}.png`;
    const out = fs.createWriteStream(`${destination}${fileName}`);
    const stream = canvas.pngStream();
    stream.on('data', chunk => out.write(chunk));
    stream.on('end', chunk => {
        console.log(`Image successfully saved to ${destination} as ${fileName}`);
        stream.destroy();
    });
};

/**
 * Saves an image to a given directory with a level of compression
 *
 * @param {string} destination - Destination to save to
 * @param {HTMLCanvasElement} canvas - Canvas element to save as an image
 */
const saveCompression = (destination, canvas, compressionLvl) => {
    const buildSrc = './'
    if (!fs.existsSync(buildSrc)){
        fs.mkdirSync(buildSrc, { recursive: true });
    }
    const tempFileName = 'orthomoji_temp.png';
    const fileName = `orthomoji_${new Date().getTime()}.png`;

    const dataURL = canvas.toDataURL();
    const data = dataURL.replace(/^data:image\/\w+;base64,/, "");
    fs.writeFileSync(`${buildSrc}${tempFileName}`, new Buffer.from(data, 'base64'));

    sharp(`${buildSrc}${tempFileName}`)
        .png({ compressionLevel: compressionLvl, force: true })
        .toFile(`${destination}${fileName}`, err => {
            if (err !== null) {
                console.log(err)
                console.log('Sharp is not supported on this device.');
            }
        });

    fs.unlinkSync(`${buildSrc}${tempFileName}`);
};

/**
 * Saves an image to a given directory. Will create a new directory if path doesn't exist
 *
 * @param {string} destination - Destination to save to
 * @param {HTMLCanvasElement} canvas - Canvas element to save as an image
 */
const saveToDestination = (destination, canvas, compressionLvl = null) => {
    try {
        if (!fs.existsSync(destination)){
            fs.mkdirSync(destination, { recursive: true });
        }
        
        if (compressionLvl !== null) {
            saveCompression(destination, canvas, compressionLvl);
        } else {
            saveNoCompression(destination, canvas);
        }
    } catch (e) {
        throw new Error(
            `An error has occured while trying to your image save to ${destination}.\n${e.toString()}`
        );
    }
};

export { saveToDestination };
