import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  currentDepth = 1;
  maxDepth = 1;
  calculateDepth(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.currentDepth++
        this.maxDepth = Math.max(this.currentDepth, this.maxDepth)
        this.calculateDepth(arr[i])
      }
    }
    if (this.currentDepth > 1) {
      this.currentDepth--
    } else {
      const result = this.maxDepth
      this.maxDepth = 1
      return result
    }
  }
}
