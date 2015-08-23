'use strict';

var chai = require('chai');
var expect = chai.expect;
var path = require('path');
var fs = require('fs');
var Q = require('q');

describe('jscs-nachos', function () {
  it('should reject fixture', function () {
    var Checker = require('jscs');
    var checker = new Checker();

    checker.registerDefaultRules();

    return Q.nfcall(fs.readFile, '.jscs.json')
      .then(function (file) {
        checker.configure(JSON.parse(file));

        return checker.checkFile(path.join('test', 'fixture.js'));
      })
      .then(function (results) {
        var errors = results.getErrorList();

        expect(errors).to.be.an('array');
        expect(errors).to.have.length(2);
        expect(errors[0].message).to.equal('Invalid quote mark found');
        expect(errors[1].message).to.equal('Missing semicolon after statement');
      });
  });
});