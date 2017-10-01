var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var FactParser = require('../../src/parser/factParser');
var Fact = require('../../src/entities/fact');

describe('FactParser', function () {

    var factParser;

    beforeEach(function() {
        factParser = new FactParser();
    });

    describe('#validFact()', function () {
        
        it('should return true when a valid fact is evaluated', function () {
            expect(factParser.validFact('male(seldon)')).to.be.true;
            expect(factParser.validFact('father(toran, arkady)')).to.be.true;
        });

        it('should return false when an invalid fact is evaluated', function() {
            expect(factParser.validFact('male(seldon')).to.be.false;
            expect(factParser.validFact('male((seldon)')).to.be.false;
            expect(factParser.validFact('father(toran,)')).to.be.false;
        })
    });

    describe('#parseFact()', function() {

        it.skip('should return a valid Fact when a, single argument, valid raw fact is parsed', function() {
            var expectedFact = new Fact('male', ['seldon']);
            var parsedFact = factParser.parseFact('male(seldon)');
            expect(parsedFact).to.be.eql(expectedFact);
        })
    })
});