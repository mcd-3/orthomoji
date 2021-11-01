import pkg from 'canvas';
import { sanitizeText } from '../tools/text-sanitizer.js';
import { emojifyFont, hasValidEmoji, getFirstEmoji } from '../tools/emoji.js';
import { font } from '../fonts/orthomoji.js';
import { addTextToCanvas } from '../tools/canvas.js';
import { saveToDestination } from '../tools/image-saver.js';

const { Canvas } = pkg;

class Orthomoji {
    #canvas

    constructor() {
        this.#canvas = new Canvas(10, 10);
        this.text = null;
        this.emoji = null;
        this.bgStyle = null;
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

    setBackgroundStyle(style) {
        this.bgStyle = style;
        return this;
    }

    async generate(destination) {
        // A bit of error checking
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
            this.emojiSize,
            this.bgStyle
        );

        saveToDestination(destination, editedCanvas);
    }
};

export { Orthomoji };
