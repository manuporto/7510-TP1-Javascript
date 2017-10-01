var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var DatabaseParser = require('../../src/parser/databaseParser');

describe('DatabaseParser', function() {

    var databaseParser;
    var validDatabase = [
        'male(seldon).',
        'male(toran).',
        'female(arkady).',
        'father(toran, arkady).',
        'daughter(X, Y) :- female(X), father(Y, X).'
    ];
    var databaseWithInvalidFact = [
        'male(seldon.',
        'male(toran).',
        'female(arkady).',
        'father(toran, arkady).',
        'daughter(X, Y) :- female(X), father(Y, X).'  
    ];
    var databaseWithInvalidRule = [
        'male(seldon).',
        'male(toran).',
        'female(arkady).',
        'father(toran, arkady).',
        'daughter(X, Y) :- female(X) father(Y, X).'  
    ]

    beforeEach(function() {
        databaseParser = new DatabaseParser();
    });

    describe('#validDatabase()', function() {

        it('should return true when a valid database its evaluated', function() {
            expect(databaseParser.validDatabase(validDatabase)).to.be.true;
        });

        it('should return false when an invalid database its evaluated', function() {
            expect(databaseParser.validDatabase(databaseWithInvalidFact)).to.be.false;
            expect(databaseParser.validDatabase(databaseWithInvalidRule)).to.be.false;
        })
    });
});