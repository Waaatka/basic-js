import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  const getSymbolCount = (str) => str.split('').reduce((prev, current) => {
    if (typeof prev[current] === 'undefined') {
      prev[current] = 1
    } else {
      prev[current]++
    }
    return prev
  }, {})
  const symbolCountS1 = getSymbolCount(s1)
  const symbolCountS2 = getSymbolCount(s2)
  return Object.keys(symbolCountS1)
      .reduce((prev, key) => prev + Math.min(symbolCountS1[key], symbolCountS2[key] || 0), 0)
}
