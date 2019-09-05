'use strict';

var createWrap = require('./internal/createWrap');

/** Used to compose bitmasks for function metadata. */
var WRAP_ARY_FLAG = 128;

/**
 * Creates a function that invokes `func`, with up to `n` arguments,
 * ignoring any additional arguments.
 *
 * @static
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to cap arguments for.
 * @param {number} [n=func.length] The arity cap.
 * @param {Object} [guard] Enables use as an iteratee for methods like `map`.
 * @returns {Function} Returns the new capped function.
 * @example
 *
 * map(['6', '8', '10'], ary(parseInt, 1)) => [6, 8, 10]
 */
function ary(func, n, guard) {
    n = guard ? undefined : n;
    n = (func && n == null) ? func.length : n;
    return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
}

module.exports = ary;
