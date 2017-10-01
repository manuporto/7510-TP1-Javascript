var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var DatabaseParser = require('../../src/parser/databaseParser');

describe('DatabaseParser', function() {

    var databaseParser;

    beforeEach(function() {
        databaseParser = new DatabaseParser();
    });

    describe.skip('#validDatabase()', function() {
        it('should return true when a valid database its evaluated', function() {
            expect(true).to.be.true;
        });
    });
});