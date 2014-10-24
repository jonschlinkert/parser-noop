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
var noop = require('./');

describe('parsers', function() {
  it('should pass through content with noop parser.', function (done) {
    noop.parse('<%= name %>', {x: 'x', y: 'y', z: 'z'}, function (err, file) {
      if (err) console.log(err);

      file.content.should.equal('<%= name %>');
      file.locals.should.have.property('x');
      file.locals.should.have.property('y');
      file.locals.should.have.property('z');
      done();
    });
  });

  it('should synchronously pass through content.', function () {
    var file = noop.parseSync('<%= abc %>', {x: 'x', y: 'y', z: 'z'});
    file.content.should.equal('<%= abc %>');
    file.locals.should.have.property('x');
    file.locals.should.have.property('y');
    file.locals.should.have.property('z');
  });
});
