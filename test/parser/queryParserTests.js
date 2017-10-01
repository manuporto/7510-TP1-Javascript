var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var QueryParser = require('../../src/parser/queryParser');
var Query = require('../../src/entities/query');

describe('QueryParser', function() {
    
    var queryParser;

    beforeEach(function() {
        queryParser = new QueryParser();
    });

    describe('#validQuery()', function() {

        it('should return true when a valid query is evaluated', function() {
            expect(queryParser.validQuery('male(seldon)')).to.be.true;
        });

        it('should return false when an invalid query is evaluated', function() {
            expect(queryParser.validQuery('male(seldon')).to.be.false;
        });
    });

    describe('#parseQuery()', function() {
        it('should return a Query entity', function() {
            expect(queryParser.parseQuery('male(seldon)')).to.eql(new Query('male', ['seldon']));
        });
    });
});