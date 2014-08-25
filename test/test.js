/*!
 * parser-noop <https://github.com/jonschlinkert/parser-noop>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
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
      if (err) console.log(err);

      file.should.eql({
        data: {},
        original: '<%= name %>',
        content: '<%= name %>',
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
