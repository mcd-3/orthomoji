import { Orthomoji } from '../tools/generator.js';
import { emojifyFont } from '../tools/emoji.js';
import { font } from '../fonts/orthomoji.js';

emojifyFont(font, '😀');

const generator = new Orthomoji();
generator
    .setText('Hi!')
    .setEmoji('😀')
    .generate('./')