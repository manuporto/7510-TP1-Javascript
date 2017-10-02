var DatabaseParser = require('./parser/databaseParser');
var Database = require('./entities/database');
var QueryParser = require('./parser/queryParser');

var Interpreter = function () {

    this.database;
    this.queryParser = new QueryParser();

    this.parseDB = function (db) {
        var databaseParser = new DatabaseParser();
        this.database = databaseParser.createDatabase(db);
    }

    this.checkQuery = function (query) {
        if (this.queryParser.validQuery(query)) {
            return this.database.evaluateQuery(this.queryParser.parseQuery(query));
        };
    };
};

module.exports = Interpreter;
