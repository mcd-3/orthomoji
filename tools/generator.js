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
        this.spaceEmoji = ' ';
        this.emojiSize = 36;
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

    setSpaceEmoji(emoji) {
        if (hasValidEmoji(emoji)) {
            this.spaceEmoji = getFirstEmoji(emoji);
        } else {
            throw new Error(`'${emoji}' is not a valid emoji'`);
        }
        return this;
    }

    setEmojiSize(size) {
        if (typeof size !== 'number') {
            throw new Error(`'${size}' is not a valid size. Enter a number instead'`);
        }
        this.emojiSize = size;
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
            emojifyFont(font, this.emoji, this.spaceEmoji),
            this.emojiSize
        );

        // TODO: Clean
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
    const generator = new Orthomoji();
    generator
        .setText('Hi!')
        .setEmoji('😀')
        .generate('./text.png')
}

export { generateEmojiTextImage };
