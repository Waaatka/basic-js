import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export default class VigenereCipheringMachine {
  isDirect
  constructor(isDirect = true) {
    this.isDirect = isDirect
  }
  encrypt(str, key) {
    if (typeof str === 'undefined' || typeof key === 'undefined') {
      throw new Error('Incorrect arguments!')
    }
    const paddedKey = key.padEnd(str.length, key).toUpperCase()
    let currentLetter = 0
    const encrypted = str.toUpperCase().split('').map((x) => {
      const originalLetterIdx = alphabet.indexOf(x)
      const keyLetterIdx = alphabet.indexOf(paddedKey[currentLetter])
      if (originalLetterIdx === -1) {
        return x
      }
      currentLetter++
      const resultLetterIdx = (originalLetterIdx + keyLetterIdx) % (alphabet.length)
      return alphabet[resultLetterIdx]
    })
    return this.isDirect ? encrypted.join('') : encrypted.reverse().join('')
  }
  decrypt(str, key) {
    if (typeof str === 'undefined' || typeof key === 'undefined') {
      throw new Error('Incorrect arguments!')
    }
    const paddedKey = key.padEnd(str.length, key).toUpperCase()
    let currentLetter = 0
    const decrypted =  str.toUpperCase().split('').map((x) => {
      const originalLetterIdx = alphabet.indexOf(x)
      const keyLetterIdx = alphabet.indexOf(paddedKey[currentLetter])
      if (originalLetterIdx === -1) {
        return x
      }
      currentLetter++
      const resultLetterIdx = (originalLetterIdx - keyLetterIdx + alphabet.length) % (alphabet.length)
      return alphabet[resultLetterIdx]
    })

    return this.isDirect ? decrypted.join('') : decrypted.reverse().join('')  }
}
