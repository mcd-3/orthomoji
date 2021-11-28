import pkg from 'canvas';
import { sanitizeText } from '../tools/text-sanitizer.js';
import { emojifyFont, hasValidEmoji, getFirstEmoji } from '../tools/emoji.js';
import { font } from '../fonts/orthomoji.js';
import { addTextToCanvas } from '../tools/canvas.js';
import { saveToDestination } from '../tools/image-saver.js';

const { Canvas } = pkg;

/**
 * Base Orthomoji class. Generates an emoji-text image
 * 
 * It is mandatory to set the text and emoji before calling .generate()
 */
class Orthomoji {
    #canvas

    constructor() {
        this.#canvas = new Canvas(10, 10);
        this.text = null;
        this.emoji = null;
        this.bgStyle = null;
        this.spaceEmoji = ' ';
        this.emojiSize = 36;
        this.borderStyle = null;
        this.compressionLvl = null;
    }

    /**
     * Sets the text to be displayed on the image 
     * =Mandatory
     *
     * @param {string} str - Text to add to the image
     * @returns {this} Chain with other functions to generate an image
     */
    setText(str) {
        this.text = sanitizeText(str);
        return this;
    }

    /**
     * Sets the emoji to make letters out of
     * =Mandatory
     *
     * @param {string} emoji - Emoji to use to build letters
     * @returns {this} Chain with other functions to generate an image
     */
    setEmoji(emoji) {
        if (hasValidEmoji(emoji)) {
            this.emoji = getFirstEmoji(emoji);
        } else {
            throw new Error(`'${emoji}' is not a valid emoji'`);
        }
        return this;
    }

    /**
     * Sets the emoji to fill in letter spaces out of
     *
     * @param {string} emoji - Emoji to use to replace whitespace with
     * @returns {this} Chain with other functions to generate an image
     */
    setSpaceEmoji(emoji) {
        if (hasValidEmoji(emoji)) {
            this.spaceEmoji = getFirstEmoji(emoji);
        } else {
            throw new Error(`'${emoji}' is not a valid emoji'`);
        }
        return this;
    }

    /**
     * Sets the size in pixels for the emojis
     *
     * @param {number} size - Size in px to use for emojis
     * @returns {this} Chain with other functions to generate an image
     */
    setEmojiSize(size) {
        if (typeof size !== 'number') {
            throw new Error(`'${size}' is not a valid size. Enter a number instead'`);
        }
        this.emojiSize = size;
        return this;
    }

    /**
     * Sets the background style of the image
     *
     * @param {string} style - Valid css style/colour
     * @returns {this} Chain with other functions to generate an image
     */
    setBackgroundStyle(style) {
        this.bgStyle = style;
        return this;
    }

    /**
     * Sets the border size, colour, and style
     *
     * @param {number} width - Width of the border in px
     * @param {string} color - Color of the border
     * @returns {this} Chain with other functions to generate an image
     */
    setBorder(width, color) {
        this.borderStyle = {
            width,
            color,
            style: [],
            join: 'miter'
        };
        return this;
    }

    /**
     * Sets the level of compression to use when generating an image
     *
     * @param {number} level - Level of PNG compression
     * @returns {this} Chain with other functions to generate an image
     */
    setPNGCompressionLevel(level) {
        if (level >= 0 && level <= 9) {
            this.compressionLvl = level;
            return this;
        }
        throw new Error('PNG compression level must be between 0 and 9.');
    }

    /**
     * Generates an emoji-text image and saves it to a destination
     * =Mandatory
     * 
     * @param {string} destination - Path of where to save the image to
     */
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

        const borderObj = (this.borderStyle === null) ? {} : this.borderStyle;
        const editedCanvas = await addTextToCanvas(
            this.#canvas,
            this.text,
            emojifyFont(font, this.emoji, this.spaceEmoji),
            this.emojiSize,
            this.bgStyle,
            borderObj
        );

        saveToDestination(
            destination,
            editedCanvas,
            this.compressionLvl
        );
    }
};

export { Orthomoji };
