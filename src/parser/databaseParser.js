var Lang = require('../lang');
var FactParser = require('./factParser');
var RuleParser = require('./ruleParser');

var DatabaseParser = function() {
    this.factParser = new FactParser();
    this.ruleParser = new RuleParser();

    this.validDatabase = function(db) {
        return !db.map(function(line) {
            return (factParser.validFact(line) || ruleParser.validRule(line));
        }).includes(false);
    };
};

module.exports = DatabaseParser;