"use strict";

/**!
 * string-type-convertor
 *
 * @copyright 2020-2021 benevolarX
 * @license MIT
 */

const isBigInt = new RegExp(/^[0-9]+n$/)
const isFloat = new RegExp(/^[0-9]+\.[0-9]+$/)
const isInt = new RegExp(/^[0-9]+$/)

/**
 * 
 * @param {string} val 
 * @param {{ test: ((val: string) => boolean), convert: ((val: string) => any) }[]} tests 
 */
function typeConvertor(val, tests = []) {
    
    for (let i = 0; i < tests.length; i++) {
        const { test, convert } = tests[i]
        if (test(val)) {
            return convert(val)
        }
    }

    if (val === 'undefined') {
        return undefined
    }

    if (val === 'null') {
        return null
    }

    if (val === 'true') {
        return true
    }

    if (val === 'false') {
        return false
    }
    
    if (isBigInt.test(val)) {
        return BigInt(val.slice(0, -1))
    }
    
    if (isFloat.test(val) || isInt.test(val)) {
        return + val
    }

    return val

}

module.exports = typeConvertor
