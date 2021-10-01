import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  const checkCell = (row, column) => {
    if (typeof matrix[row] !== 'undefined') {
      return Number(matrix[row][column] || false)
    }
    return 0
  }
  return matrix.map((row, rowIdx) => row.map((cell, colIdx) => {
    return checkCell(rowIdx - 1, colIdx - 1)
        + checkCell(rowIdx - 1, colIdx)
        + checkCell(rowIdx - 1, colIdx + 1)
        + checkCell(rowIdx, colIdx - 1)
        + checkCell(rowIdx, colIdx + 1)
        + checkCell(rowIdx + 1, colIdx - 1)
        + checkCell(rowIdx + 1, colIdx)
        + checkCell(rowIdx + 1, colIdx + 1)
  }))
}
