var Lang = require('../lang');

var RuleParser = function() {
    
    this.validRule = function(rule) {
        return Lang.validRuleFormat.test(rule);
    };
};

module.exports = RuleParser;