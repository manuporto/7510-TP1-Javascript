var Fact = function(name, args) {
    this.name = name;
    this.args = args;

    this.equals = function(fact) {
        return this.name === fact.name && this.args.join(',') === fact.args.join(',');
    }
};

module.exports = Fact;