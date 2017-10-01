var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var RuleParser = require('../../src/parser/ruleParser');

describe('RuleParser', function() {

    var ruleParser;
    
    beforeEach(function() {
        ruleParser = new RuleParser();
    });

    describe('#validRule()', function() {

        it('should return true when a valid rule is evaluated', function() {
            expect(ruleParser.validRule('son(X, Y) :- male(X), father(Y, X).')).to.be.true;
            expect(ruleParser.validRule('son(X, Y) :- male(X), male(Y), father(Y, X).')).to.be.true;
        });

        it('should return false when an invalid rule is evaluated', function() {
            expect(ruleParser.validRule('son(X,Y :- male(X), father(Y, X).')).to.be.false;
            expect(ruleParser.validRule('son(X,Y) : male(X), father(Y, X).')).to.be.false;
        })
    });
});