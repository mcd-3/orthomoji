# Orthomoji

🖋️😄 **Orthography + Emojis** 😄🖋️</br>
Create image-based messages with emojis!

![Orthomoji](./assets/orthomoji_title.png)

## Installation
You may install Orthomoji using NPM:
```shell
npm install orthomoji --save
```

## How to use
First, you will need to use an instance of the Orthomoji object
```js
import { Orthomoji } from 'orthomoji';

const orthomoji = new Orthomoji(); 
```

Once the above is done, simply chain some functions to generate an image!
```js
// Make sure that 'setText` and 'setEmoji' are included otherwise it won't complete.
// Make sure that 'generate' is the final function call in the chain.
orthomoji
    .setText('Hello Orthomoji!')
    .setEmoji('😃')
    .generate('./path-to-store-image/')
```

## Functions
| Function           | Mandatory | Description                                        |
|:------------------:|:---------:|:--------------------------------------------------:|
|`setText`           | Yes       | Sets the text that will be emojified into an image |
|`setEmoji`          | Yes       | Sets the emoji to use to make letters              |
|`setEmojiSize`      | No        | Sets the font size of the emojis                   |
|`setBackgroundStyle`| No        | Sets the color or style of the image background    |
|`setSpaceEmoji`     | No        | Sets the emoji to use for letter whitespace        |
|`generate`          | Yes       | Generates an emoji-text image                      |

## License
This work is licensed under MIT