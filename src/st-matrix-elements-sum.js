import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  return matrix
      .reduce((prev, cur, rowIdx) => prev + cur.filter((x, columnIdx) => {
        for (let i = 0; i < rowIdx; i++) {
          if (matrix[i][columnIdx] === 0) {
            return false
          }
        }
        return true
      }).reduce((x, y) => x + y, 0), 0)
}
