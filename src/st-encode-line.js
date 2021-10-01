import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  return str
      .split('')
      .reduce((prev, cur) => {
        const lastElement = prev[prev.length - 1]
        if (Array.isArray(lastElement) && lastElement[0] === cur) {
          lastElement.push(cur)
        } else {
          prev.push([cur])
        }
        return prev
      }, [])
      .map(x => x.length > 1 ? `${x.length}${x[0]}` : x[0])
      .join('')

}
