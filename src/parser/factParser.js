var Lang = require('../lang');

var FactParser = function() {

    this.validFact = function(fact) {
        return Lang.validFactFormat.test(fact);
    };
};

module.exports = FactParser;