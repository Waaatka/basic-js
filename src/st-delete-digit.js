import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const digits = n.toString().split('').map(x => Number(x))
  const minDigit = Math.min(...digits)
  const minDigitsIndex = digits.indexOf(minDigit)
  const nWithoutMin = digits.filter((x, i) => i !== minDigitsIndex).join('')
  return Number(nWithoutMin)
}
