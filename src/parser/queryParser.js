var Lang = require('../lang');
var Query = require('../entities/query');

var QueryParser = function() {
    
    this.validQuery = function(query) {
        return Lang.validQueryFormat.test(query);
    };

    this.getQueryName = function(query) {
        return query.substr(0, query.indexOf(Lang.openArg));
    };

    this.getQueryArgs = function(query) {
        return query.substring(
            query.indexOf(Lang.openArg) + 1,
            query.indexOf(Lang.closeArg)).split(Lang.argSep);
    };

    this.parseQuery = function(query) {
        return new Query(this.getQueryName(query), this.getQueryArgs(query));
    };
};

module.exports = QueryParser;