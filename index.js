'use strict';

/**
 * Module dependencies.
 */

var _ = require('lodash');
var utils = require('parser-utils');


/**
 * Export `parser`
 *
 * @type {Object}
 */

var parser = module.exports;


/**
 * Parse the given `file` and callback `next(err, file)`.
 *
 * @param {String|Object} `file` The object or string to parse.
 * @param {Object|Function} `options` or `next` callback function.
 * @param {Function} `next` callback function.
 * @api public
 */

parser.parse = function noop(file, options, next) {
  if (typeof options === 'function') {
    next = options;
    options = {};
  }

  var opts = _.extend({}, options);

  try {
    next(null, utils.extendFile(file, opts));
  } catch (err) {
    next(err);
    return;
  }
};


/**
 * Parse the given `file` and return a normalized `file` object.
 *
 * @param {String|Object} `file` The object or string to parse.
 * @param {Object} `options` to pass to [gray-matter].
 * @api public
 */

parser.parseSync = function noopSync(file, options) {
  try {
    return utils.extendFile(file, options);
  } catch (err) {
    return err;
  }
};