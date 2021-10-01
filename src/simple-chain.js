import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
let chain = []
export default {
  getLength() {
    return chain.length
  },
  addLink(value) {
    chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (typeof chain[position - 1] === 'undefined') {
      chain = []
      throw new Error('You can\'t remove incorrect link!')
    }
    chain = chain.filter((x, i) => i !== position - 1)
    return this
  },
  reverseChain() {
    chain.reverse()
    return this
  },
  finishChain() {
    const result = chain.join('~~')
    chain = []
    return result
  }
};
