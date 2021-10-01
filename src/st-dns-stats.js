import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ] => [
 *  ['.ru', '.ru.yandex', '.ru.yandex.code']
 *  ['.ru', '.ru.yandex', '.ru.yandex.music']
 *  ['.ru', '.ru.yandex']
 * ] => ['.ru', '.ru.yandex', '.ru.yandex.code', '.ru', '.ru.yandex', '.ru.yandex.music', '.ru', '.ru.yandex' ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  return domains
      .map(domain => {
        return domain.split('.').reverse().map((part, i, arr) => `.${[...arr.slice(0, i), part].join('.')}`)
      })
      .reduce((res, el) => [...res, ...el], [])
      .reduce((res, el) => {
        if (typeof res[el] === 'undefined') {
          res[el] = 1
        } else {
          res[el]++
        }
        return res
      }, {})
}
