'use strict';

/**
 * Dependencies.
 */

var flesch,
    assert;

flesch = require('./');
assert = require('assert');

/**
 * Utilities.
 */

function roundAssert(a, b) {
    assert(Math.round(a * 1000000) === Math.round(b * 1000000));
}

/**
 * Tests.
 */

describe('flesch()', function () {
    it('should be of type `function`', function () {
        assert(typeof flesch === 'function');
    });

    it('should work', function () {
        var result;

        /**
         * Return NaN when an invalid value is given.
         */

        result = flesch();

        assert(result !== result);

        /**
         * Einfacher Satz.
         *
         * Sentences: 1
         * Words: 2
         * Syllables: 4
         */

        roundAssert(flesch({
            'sentence': 1,
            'word': 2,
            'syllable': 4
        }), 61);

        /**
         * Der Lesbarkeitsindex Flesch-Reading-Ease, auch Flesch-Grad 
         * genannt, ist ein numerischer Wert für die Lesbarkeit.
         *
         * Sentences: 1
         * Words: 13
         * Syllables: 30
         */

        roundAssert(flesch({
            'sentence': 1,
            'word': 13,
            'syllable': 30
        }), 32);
    });
});
