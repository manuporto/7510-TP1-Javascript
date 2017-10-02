var Fact = require('./fact');

var Database = function(facts, factNames, rules, ruleNames) {
    this.facts = facts;
    this.factNames = factNames;
    this.rules = rules;
    this.ruleNames = ruleNames;

    this.factExists = function(qfact) {
        return this.facts.filter(function(fact) {
            return fact.equals(qfact);
        }).length > 0;
    };

    this.evaluateQuery = function(query) {
        if (this.factNames.has(query.name)) {
            return this.factExists(new Fact(query.name, query.args));
        } else if (this.ruleNames.has(query.name)) {
            return true;
        }
        return false;
    };
};

module.exports = Database;