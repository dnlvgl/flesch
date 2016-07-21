'use strict';

/**
 * Constants.
 */

var WORD_WEIGHT,
    BASE;

WORD_WEIGHT = 58.5;
BASE = 180;

/**
 * Get the grade level of a given value according to the Flesch Reading Ease
 * Formula. More information is available at WikiPedia:
 *
 *   http://en.wikipedia.org/wiki/
 *   Flesch–Kincaid_readability_tests#Flesch_Reading_Ease
 *
 * @param {Object} counts
 * @param {number} counts.word - Number of words.
 * @param {number} counts.sentence - Number of sentences.
 * @param {number} counts.syllable - Number of syllables.
 * @return {number}
 */

function fleschDe(counts) {
    if (!counts || !counts.sentence || !counts.word || !counts.syllable) {
        return NaN;
    }

    return BASE -
        (counts.word / counts.sentence) -
        WORD_WEIGHT * (counts.syllable / counts.word);
}

/**
 * Export `fleschDe`.
 */

module.exports = fleschDe;
