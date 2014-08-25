/*!
 * parser-cache <https://github.com/jonschlinkert/parser-cache>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var should = require('should');
var noop = require('..');

describe('parsers', function() {
  it('should pass through content with noop parser.', function (done) {
    noop.parse('<%= name %>', function (err, file) {
      file.should.eql({
        data: {},
        original: '<%= abc %>',
        content: '<%= abc %>',
        options: {}
      });
      done();
    });
  });

  it('should synchronously pass through content.', function () {
    noop.parseSync('<%= abc %>').should.eql({
      data: {},
      original: '<%= abc %>',
      content: '<%= abc %>',
      options: {}
    });
  });
});
