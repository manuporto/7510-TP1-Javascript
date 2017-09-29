var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var FactParser = require('../../src/parser/factParser');

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
});