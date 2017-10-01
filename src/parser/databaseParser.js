var Lang = require('../lang');
var FactParser = require('./factParser');
var RuleParser = require('./ruleParser');
var Database = require('../entities/database');
var InvalidDatabaseException = require('../exceptions/invalidDatabaseException');

var DatabaseParser = function() {
    
    this.factParser = new FactParser();
    this.ruleParser = new RuleParser();
    var self = this;

    this.validDatabase = function(db) {
        return !db.map(function(line) {
            return (self.factParser.validFact(line) || self.ruleParser.validRule(line));
        }).includes(false);
    };

    this.createDatabase = function(db) {
        if (!this.validDatabase(db)) throw new InvalidDatabaseException();
        var facts = [];
        var factNames = new Set();
        var rules = [];
        var ruleNames = new Set();
        db.map(function(line) {
            if (self.factParser.validFact(line)) {
                facts.push(self.factParser.parseFact(line));
                factNames.add(self.factParser.getFactName(line));
            } else {
                rules.push(self.ruleParser.getRuleName(line));
                ruleNames.add(self.ruleParser.parseRule(line));
            };
        });
        return new Database(facts, factNames, rules, ruleNames);
    };
};

module.exports = DatabaseParser;