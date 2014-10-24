'use strict';

/**
 * Module dependencies.
 */

var _ = require('lodash');
var utils = require('parser-utils');

/**
 * Expose `parser`
 *
 * @type {Object}
 */

var parser = module.exports;

/**
 * Parse the given `file` and callback `next(err, file)`.
 *
 * @param {String|Object} `file` The object or string to parse.
 * @param {Object|Function} `locals` or `next` callback function.
 * @param {Function} `next` callback function.
 * @api public
 */

parser.parse = function noop(file, locals, next) {
  if (typeof locals === 'function') {
    next = locals;
    locals = {};
  }

  var o = {locals: locals || {}};

  try {
    if (typeof file === 'string') {
      o.content = file;
    } else {
      o = file || {};
      o.content = o.content || '';
    }

    next(null, o);
  } catch (err) {
    next(err);
    return;
  }
};

/**
 * Parse the given `file` and return a minimal normalized `file` object.
 *
 * @param {String|Object} `file` The object or string to parse.
 * @api public
 */

parser.parseSync = function noopSync(file, locals) {
  var o = {locals: locals || {}};

  try {
    if (typeof file === 'string') {
      o.content = file;
    } else {
      o = file || {};
      o.content = o.content || '';
    }

    return o;
  } catch (err) {
    return err;
  }
};