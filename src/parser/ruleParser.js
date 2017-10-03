var Lang = require('../lang');
var Rule = require('../entities/rule');
var FactParser = require('../parser/factParser');

var RuleParser = function() {
    
    this.factParser = new FactParser();
    var self = this;

    this.validRule = function(rule) {
        return Lang.validRuleFormat.test(rule);
    };

    this.getRuleName = function(rule) {
        return rule.substr(0, rule.indexOf(Lang.openArg));
    };

    this.getRuleArgs = function(rule){
        return rule
        .substring(rule.indexOf(Lang.openArg) + 1, rule.indexOf(Lang.closeArg))
        .split(Lang.argSep);
    };

    this.getRuleFacts = function(rule) {
        return rule
        .replace(Lang.defFactSep, Lang.customFactSep)
        .substring(rule.indexOf(Lang.ruleEq) + Lang.ruleEq.length, rule.indexOf(Lang.lineEnd))
        .split(Lang.factSep);
    };

    this.parseRule = function(rule) {
        var parsedFacts = this.getRuleFacts(rule).map(function(fact) {
            return self.factParser.parseFact(fact);
        });
        return new Rule(this.getRuleName(rule), this.getRuleArgs(rule), parsedFacts);
    };
};

module.exports = RuleParser;