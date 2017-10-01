var Fact = function(name, args) {
    this.name = name;
    this.args = args;

    this.getName = function() {
        return this.name;
    };

    this.getArgs = function() {
        return this.args;
    };
};

module.exports = Fact;