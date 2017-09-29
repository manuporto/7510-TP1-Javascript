var Lang = {
    validFactFormat: /^[a-z]+\(([a-z]+, )*[a-z]+\)/,
    validRuleFormat: /^[a-z]+\(([A-Z]+, )*[A-Z]+\) :- (([a-z]+\(([A-Z]+, )*[A-Z]+\)), )*([a-z]+\(([A-Z]+, )*[A-Z]+\))/
}

module.exports = Lang;