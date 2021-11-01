import { Orthomoji } from '../tools/generator.js';

// Try it using `npm run orthomoji-example`
// Change whatever you'd like
const orthomoji = new Orthomoji();
orthomoji
    .setText('Hello Orthomoji!')
    .setEmoji('😀')
    .generate('./build/')