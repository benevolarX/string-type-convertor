"use strict";

/**!
 * string-type-convertor
 *
 * @copyright 2020-2021 benevolarX
 * @license MIT
 */

export const isBigInt = new RegExp(/^[0-9]+n$/);
export const isFloat = new RegExp(/^[0-9]+\.[0-9]+$/);
export const isInt = new RegExp(/^[0-9]+$/);

/**
 * 
 * @param {string} val 
 * @param {{ test: ((val: string) => boolean), convert: ((val: string) => any) }[]} tests 
 */
export function typeConvertor(val, tests = []) {

    if (val === 'undefined') {
        return undefined;
    }

    if (val === 'null') {
        return null;
    }

    if (val === 'true') {
        return true;
    }

    if (val === 'false') {
        return false;
    }
    
    if (isBigInt.test(val)) {
        return BigInt(val.slice(0, -1));
    }
    
    if (isFloat.test(val) || isInt.test(val)) {
        return + val;
    }

    for (let i = 0; i < tests.length; i++) {
        const { test, convert } = tests[i];
        if (test(val)) {
            return convert(val);
        }
    }

    return val;

}
