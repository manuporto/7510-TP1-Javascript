var Lang = require('../lang');

var RuleParser = function() {
    
    this.validRule = function(rule) {
        return Lang.validRuleFormat.test(rule);
    };

    this.getRuleName = function(rule) {
        return rule.substr(0, rule.indexOf(Lang.openArg));
    };

    this.getRuleFacts = function(rule) {
        return rule
        .replace(Lang.defFactSep, Lang.customFactSep)
        .substring(rule.indexOf(Lang.ruleEq) + Lang.ruleEq.length, rule.indexOf(Lang.lineEnd))
        .split(Lang.factSep);
    };
};

module.exports = RuleParser;