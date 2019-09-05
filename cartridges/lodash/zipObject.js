'use strict';

var assignValue = require('./internal/assignValue');
var baseZipObject = require('./internal/baseZipObject');

/**
 * This method is like `fromPairs` except that it accepts two arrays,
 * one of property identifiers and one of corresponding values.
 *
 * @static
 * @since 0.4.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @see unzip, unzipWith, zip, zipObjectDeep, zipWith
 * @example
 *
 * zipObject(['a', 'b'], [1, 2]) => { 'a': 1, 'b': 2 }
 */
function zipObject(props, values) {
    return baseZipObject(props || [], values || [], assignValue);
}

module.exports = zipObject;
