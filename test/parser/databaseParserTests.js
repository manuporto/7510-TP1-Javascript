var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var DatabaseParser = require('../../src/parser/databaseParser');
var Database = require('../../src/entities/database');
var InvalidDatabaseException = require('../../src/exceptions/invalidDatabaseException');

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
        });
    });

    describe('#createDatabase()', function() {

        it('should return a Database entity when a valid parsed database its evaluated', function() {
            var createdDatabase = databaseParser.createDatabase(validDatabase);
            expect(createdDatabase).to.be.an.instanceof(Database);
            expect(createdDatabase.facts).to.have.lengthOf(4);
            expect(createdDatabase.factNames.size).to.be.equal(3);
            expect(createdDatabase.rules).to.have.lengthOf(1);
            expect(createdDatabase.ruleNames.size).to.be.equal(1);
        });

        it('should throw an InvalidDatabaseException exception when an invalid parsed database its evaluated', 
        function() {
            expect(databaseParser.createDatabase.bind(databaseParser, databaseWithInvalidFact))
            .to.throw();
            // .to.throw(new InvalidDatabaseException());
        });
    });
});