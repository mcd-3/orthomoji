import pkg from 'canvas';
import fs from 'fs';

const { Canvas } = pkg;

/**
 * TODO: Fix me up + clean me up
 */
const generateEmojiTextImage = () => {
    var canvas = new Canvas(800, 800);
    var context = canvas.getContext('2d');
    var r = Math.floor((Math.random() * 256));
    var g = Math.floor((Math.random() * 256));
    var b = Math.floor((Math.random() * 256));
    var color = "rgb("+r+","+g+","+b+")";


    // draw box
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, 800);
    context.lineTo(800, 800);
    context.lineTo(800, 0);
    context.closePath();
    context.lineWidth = 5;
    context.fillStyle = color;
    context.fill();

    // save canvas image as data url (png format by default)
    const out = fs.createWriteStream('./text.png')   
    const stream = canvas.pngStream();
    stream.on('data', function(chunk){out.write(chunk); });
    stream.on('end', function(){console.log('saved png'); }); 
}

export { generateEmojiTextImage };
