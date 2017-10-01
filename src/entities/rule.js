var Rule = function(name, args, facts) {
    this.name = name;
    this.args = args;
    this.facts = facts;

    this.getName = function() {
        return this.name;
    };

    this.getArgs = function() {
        return this.args;
    };

    this.getFacts = function() {
        return this.facts;
    };
};

module.exports = Rule;