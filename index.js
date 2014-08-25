/*!
 * parser-noop <https://github.com/jonschlinkert/parser-noop>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Module dependencies.
 */

var fs = require('fs');
var utils = require('parser-utils');


/**
 * noop parse
 */

var parser = module.exports;
parser.cache = {};



/**
 * Normalizes the given string to a `file` object, but no actual parsing
 * takes place on the given `str`, it just gets moved onto the `content`
 * property.
 *
 * @param {String} `str` The string to normalize.
 * @param {Object} `options`
 * @api public
 */

parser.parseSync = function parseSync(str, options) {
  try {
    return utils.extendFile(str, options);
  } catch (err) {
    return err;
  }
};

/**
 * Parse the given `str` callback `next(err, file)`.
 *
 * @param {String} `str` The string to parse.
 * @param {Object|Function} `options` or `next` callback function.
 * @param {Function} `next` callback function.
 * @api public
 */

parser.parse = function parse(str, options, cb) {
  if (typeof options === 'function') {
    cb = options;
    options = null;
  }

  try {
    cb(null, str);
  } catch (err) {
    cb(err);
  }
};


/**
 * noop parseFile
 *
 * Read a file at the given `filepath` and callback `callback(err, str)`.
 *
 * @param {String} `path`
 * @param {Object|Function} `options` or callback function.
 * @param {Function} `callback`
 * @api public
 */

parser.parseFile = function parseFile(filepath, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  try {
    var str;
    if (options.cache) {
      str = parser.cache[filepath] || (parser.cache[filepath] = fs.readFileSync(filepath, 'utf8'));
    } else {
      str = fs.readFileSync(filepath, 'utf8');
    }
    callback(null, parser.parse(str, options, callback));
  } catch (err) {
    callback(err);
  }
};
