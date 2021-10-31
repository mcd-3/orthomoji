import pkg from 'canvas';
import fs from 'fs';
import { sanitizeText } from '../tools/text-sanitizer.js';
import { emojifyFont, hasValidEmoji, getFirstEmoji } from '../tools/emoji.js';
import { font } from '../fonts/orthomoji.js';
import { addTextToCanvas } from '../tools/canvas.js';

const { Canvas } = pkg;

class Orthomoji {
    #canvas

    constructor() {
        this.#canvas = new Canvas(10, 10);
        this.text = null;
        this.emoji = null;
    }

    setText(str) {
        this.text = sanitizeText(str);
        return this;
    }

    setEmoji(emoji) {
        if (hasValidEmoji(emoji)) {
            this.emoji = getFirstEmoji(emoji);
        } else {
            throw new Error(`'${emoji}' is not a valid emoji'`);
        }
        return this;
    }

    setBackgroundColor(style) {
        try {
            this.#canvas.getContext('2d').fillStyle = style;
        } catch (e) {
            throw new Error(`'${style}' is not a valid background color or style`)
        }
        return this;
    }

    async generate(destination) {
        if (this.text === null || this.emoji === null) {
            let errorStr = '';
            if (this.text === null && this.emoji === null) {
                errorStr = 'Text and emoji has not been set';
            } else if (this.text === null) {
                errorStr = 'Text has not been set';
            } else {
                errorStr = 'Emoji has not been set';
            }
            throw new Error(errorStr);
        }

        const editedCanvas = await addTextToCanvas(
            this.#canvas,
            this.text,
            emojifyFont(font, this.emoji)
        );

        // TODO: Clean me
        const out = fs.createWriteStream('./text.png')   
        const stream = editedCanvas.pngStream();
        stream.on('data', function(chunk){out.write(chunk); });
        stream.on('end', function(){console.log('saved png'); }); 
    }
};

/**
 * TODO: Fix me up + clean me up
 */
const generateEmojiTextImage = () => {
    // Init
    var canvas = new Canvas(800, 800);
    var context = canvas.getContext('2d');

    // Background
    var r = Math.floor((Math.random() * 256));
    var g = Math.floor((Math.random() * 256));
    var b = Math.floor((Math.random() * 256));
    var color = "rgb("+r+","+g+","+b+")";

    const temp = 'HI\nmy \nname is matt\nwhats yours?';
    var count = (temp.match(/\n/g) || []).length;

    const generator = new Orthomoji();
    generator
        .setText('Hi!\nI\'m Matt\nNice to meet you')
        .setEmoji('😀')
        .generate('./text.png')

    // draw box
    // context.beginPath();
    // context.moveTo(0, 0);
    // context.lineTo(0, 800);
    // context.lineTo(800, 800);
    // context.lineTo(800, 0);
    // context.closePath();
    // context.lineWidth = 5;
    // context.fillStyle = color;
    // context.fill();

    // save canvas image as data url (png format by default)
    // const out = fs.createWriteStream('./text.png')   
    // const stream = canvas.pngStream();
    // stream.on('data', function(chunk){out.write(chunk); });
    // stream.on('end', function(){console.log('saved png'); }); 
}

export { generateEmojiTextImage };
