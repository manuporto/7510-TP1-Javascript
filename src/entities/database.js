var Fact = require('./fact');

var Database = function(facts, factNames, rules, ruleNames) {
    this.facts = facts;
    this.factNames = factNames;
    this.rules = rules;
    this.ruleNames = ruleNames;

    this.factExists = function(query) {
        var qfact = new Fact(query.name, query.args);
        return this.facts.filter(function(fact) {
            return fact.equals(qfact);
        }).length > 0;
    };

    this.ruleExists = function(qrule) {
        return true;
    };

    this.evaluateQuery = function(query) {
        if (this.factNames.has(query.name)) {
            return this.factExists(query);
        } else if (this.ruleNames.has(query.name)) {
            return this.ruleExists(query);
        }
        return false;
    };
};

module.exports = Database;