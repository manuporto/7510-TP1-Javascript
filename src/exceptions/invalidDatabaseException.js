var InvalidDatabaseException = function() {
    this.message = 'The database does not have comply with the required syntax.';
    this.name = 'InvalidDatabaseException';
    this.toString = function() {
        return this.message;
    };
};

module.exports = InvalidDatabaseException;