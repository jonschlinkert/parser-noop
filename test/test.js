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
    noop.parse('<%= name %>', {x: 'x', y: 'y', z: 'z'}, function (err, file) {
      if (err) console.log(err);

      file.should.have.property('path');
      file.should.have.property('orig');
      file.should.have.property('data');
      file.should.have.property('content');
      file.data.should.have.property('x');
      file.data.should.have.property('y');
      file.data.should.have.property('z');
      done();
    });
  });

  it('should synchronously pass through content.', function () {
    var file = noop.parseSync('<%= abc %>', {x: 'x', y: 'y', z: 'z'});

    file.should.have.property('path');
    file.should.have.property('orig');
    file.should.have.property('data');
    file.should.have.property('content');
    file.data.should.have.property('x');
    file.data.should.have.property('y');
    file.data.should.have.property('z');
  });
});
