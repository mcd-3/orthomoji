import { generateEmojiTextImage } from '../tools/generator.js';
import { emojifyFont } from '../tools/emoji.js';
import { font } from '../fonts/orthomoji.js';

emojifyFont(font, '😀');
generateEmojiTextImage();