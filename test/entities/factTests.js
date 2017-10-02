var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var Fact = require('../../src/entities/fact');

describe.only('Fact', function() {

    var originalFact = new Fact('father', ['onum', 'ducem']);

    describe('#equals()', function() {

        it('should return true to an equal Fact', function() {
            var equalFact = new Fact('father', ['onum', 'ducem']);
            expect(originalFact.equals(equalFact)).to.be.true;
        });

        it('should return false to a non equal Fact', function() {
            var nonEqualFact = new Fact('father', ['ducem', 'onum']);
            expect(originalFact.equals(nonEqualFact)).to.be.false;
        });
    });
});