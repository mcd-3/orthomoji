import { generateEmojiTextImage } from '../tools/generator.js';
import { emojifyFont } from '../tools/emojify-font.js';
import { font } from '../fonts/fontmoji.js';

emojifyFont(font, '👩‍❤️‍💋‍👨');
generateEmojiTextImage();