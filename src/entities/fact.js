var Fact = function(name, args) {
    this.name = name;
    this.args = args;
};

Fact.prototype.equals = function(fact) {
    return this.name === fact.name && this.args.join(',') === fact.args.join(',');
}
module.exports = Fact;