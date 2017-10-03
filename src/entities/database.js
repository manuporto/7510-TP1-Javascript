var _ = require('lodash');

var Fact = require('./fact');
var Query = require('./query');

var Database = function(facts, factNames, rules, ruleNames) {
    this.facts = facts;
    this.factNames = factNames;
    this.rules = rules;
    this.ruleNames = ruleNames;
    var self = this;

    this.factExists = function(query) {
        var qfact = new Fact(query.name, query.args);
        return this.facts.filter(function(fact) {
            return fact.equals(qfact);
        }).length > 0;
    };

    this.ruleExists = function(query) {
        var rule = this.rules.filter(function(rule) {
            return rule.name === query.name;
        })[0];
        var mappedArgs = _.zipObject(rule.args, query.args);
        var queries = rule.facts.map(function(fact) {
            var usedArgs = _.intersection(fact.args, rule.args);
            var matchedArgs = usedArgs.map(function(arg) {
                return mappedArgs[arg];
            });
            return new Query(fact.name, matchedArgs);
        });
        return !queries.map(function(query) {
            return self.factExists(query);
        }).includes(false);
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