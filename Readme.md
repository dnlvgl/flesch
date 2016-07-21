# fleschDe

Detect the ease of reading a text according to the German variation of the [Flesch Reading Ease Formular](https://de.wikipedia.org/wiki/Lesbarkeitsindex#Flesch-Reading-Ease).

## Usage

```js
var fleschDe = require('fleschDe');

/**
 * For “Einfacher Satz.” (1 sentence, 2 words,
 * 4 syllables).
 */

flesch({
    'sentence' : 1,
    'word' : 2,
    'syllable' : 4
});
// 61

/**
 * For “Der Lesbarkeitsindex Flesch-Reading-Ease, auch Flesch-Grad 
 * genannt, ist ein numerischer Wert für die Lesbarkeit.” (1 sentence, 13 words,
 * 30 syllables).
 */

flesch({
    'sentence' : 1,
    'word' : 13,
    'syllable' : 30
});
// 32
```

## License

MIT

Modification based on [flesch](https://github.com/wooorm/flesch) from [Titus Wormer](http://wooorm.com)

