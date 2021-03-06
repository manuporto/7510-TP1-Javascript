var Lang = require('../lang');
var Fact = require('../entities/fact');

var FactParser = function() {

    this.validFact = function(fact) {
        return Lang.validFactFormat.test(fact);
    };

    this.getFactName = function(fact) {
        return fact.substr(0, fact.indexOf(Lang.openArg));
    };

    this.getFactArgs = function(fact) {
        return fact.substring(
            fact.indexOf(Lang.openArg) + 1,
            fact.indexOf(Lang.closeArg)).split(Lang.argSep);
    };

    this.parseFact = function(fact) {
        return new Fact(this.getFactName(fact), this.getFactArgs(fact));
    }
};

module.exports = FactParser;