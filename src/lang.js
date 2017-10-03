var Lang = {
    openArg: '(',
    closeArg: ')',
    argSep: ', ',
    lineEnd: '.',
    ruleEq: ':- ',
    defFactSep: /\), /,
    customFactSep: '); ',
    factSep: '; ',
    validFactFormat: /^[a-z]+\(([a-z]+, )*[a-z]+\)\./,
    validQueryFormat: /^[a-z]+\(([a-z]+, )*[a-z]+\)/,
    validRuleFormat: /^[a-z]+\(([A-Z]+, )*[A-Z]+\) :- (([a-z]+\(([A-Z]+, )*[A-Z]+\)), )*([a-z]+\(([A-Z]+, )*[A-Z]+\))\./
}

module.exports = Lang;