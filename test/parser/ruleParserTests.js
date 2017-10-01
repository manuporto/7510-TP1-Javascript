var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var RuleParser = require('../../src/parser/ruleParser');

describe('RuleParser', function() {

    var ruleParser;
    var validRule = 'son(X, Y) :- male(X), father(Y, X).'
    
    beforeEach(function() {
        ruleParser = new RuleParser();
    });

    describe('#validRule()', function() {

        it('should return true when a valid rule is evaluated', function() {
            expect(ruleParser.validRule(validRule)).to.be.true;
            expect(ruleParser.validRule('son(X, Y) :- male(X), male(Y), father(Y, X).')).to.be.true;
        });

        it('should return false when an invalid rule is evaluated', function() {
            expect(ruleParser.validRule('son(X,Y :- male(X), father(Y, X).')).to.be.false;
            expect(ruleParser.validRule('son(X,Y) : male(X), father(Y, X).')).to.be.false;
        });
    });

    describe('#getRuleName()', function() {
        it('should return the rule\'s name', function() {
            expect(ruleParser.getRuleName(validRule)).to.equal('son');
        });
    });

    describe('#getRuleFacts()', function() {
        it('should return rule\'s facts as an array of strings containing them', function() {
            expect(ruleParser.getRuleFacts(validRule))
            .to.eql(['male(X)', 'father(Y, X)']);
        });
    });
});