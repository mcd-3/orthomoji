# Orthomoji

🖋️😄 **Orthography + Emojis** 😄🖋️</br>
Create image-based messages with emojis!

![Orthomoji](./assets/orthomoji_title.png)

## Installation
You may install Orthomoji using NPM:
```shell
// From NPM directly
npm install orthomoji --save

// From GitHub
npm install git+https://github.com/mcd-3/orthomoji.git
```

## How to use
First, you will need to use an instance of the Orthomoji object
```js
import { Orthomoji } from 'orthomoji';

const orthomoji = new Orthomoji(); 
```

Once the above is done, simply chain some functions to generate an image!
```js
// Make sure that 'setText' and 'setEmoji' are included otherwise it won't complete.
// Make sure that 'generate' is the final function call in the chain.
orthomoji
    .setText('Hello Orthomoji!')
    .setEmoji('😃')
    .generate('./path-to-store-image/')
```

...and that's it! You can now create an Orthomoji image 🎉

## Functions Overview
Orthomoji provides a few extra options to customize your text:

| Function               | Mandatory | Description                                        |
|:----------------------:|:---------:|:--------------------------------------------------:|
|`setText`               | Yes       | Sets the text that will be emojified into an image |
|`setEmoji`              | Yes       | Sets the emoji to use to make letters              |
|`setEmojiSize`          | No        | Sets the font size of the emojis                   |
|`setBackgroundStyle`    | No        | Sets the color or style of the image background    |
|`setBorder`             | No        | Sets the width and color of the image border       |
|`setSpaceEmoji`         | No        | Sets the emoji to use for letter whitespace        |
|`setPNGCompressionLevel`| No        | Sets the level of compression to the generate image|
|`generate`              | Yes       | Generates an emoji-text image                      |

## Function Parameters
Here is a list of all function paramaters you will need to successfully build an Orthomoji image:

### setText
**text: String** - Message that you want to print. Adding '\n' will create additional rows

### setEmoji
**emoji: String** - Emoji to build the letters out of

### setEmojiSize
**size: Number** - Font size of the emoji used in `setEmoji` and `setSpaceEmoji`. Size in pixels

### setBackgroundStyle
**style: String** - Valid color string used to color the background

### setBorder
**width: Number** - Size (in pixels) for the image border

**color: String** - Valid color to use for the border

### setSpaceEmoji
**emoji: String** - Emoji to use for letter whitespace

### setPNGCompressionLevel
**level: Number** - PNG compression level between 0 and 9. 0 means minimal compression while 9 is maximum compression

### generate
**destination: String** - Destination path to save final image to

## License
This work is licensed under MIT