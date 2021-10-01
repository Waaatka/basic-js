import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 *
 */
export default function sortByHeight(arr) {
  const positions = arr.reduce((prev, cur, idx) => cur === -1 ? [...prev, idx] : prev, [])
  const sorted = arr.filter(x => x !== -1).sort((a, b) => a - b)
  return positions.reduce((res, idx) => [...res.slice(0, idx), -1, ...res.slice(idx, res.length)], sorted)
}
