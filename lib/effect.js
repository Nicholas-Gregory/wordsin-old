const { avg, weirdAvg } = require('./stats');

const combine = (...effects) => ({
    keywords: effects.reduce(
        (keywords, effect) => keywords.concat(effect.keywords.reduce(
            (innerKeywords, keyword) => innerKeywords.concat([keyword]), []
        )), []
    ),
    ceil: weirdAvg(...effects.map(effect => effect.ceil)),
    time: avg(...effects.map(effect => effect.time))
});

module.exports = {
    combine
};