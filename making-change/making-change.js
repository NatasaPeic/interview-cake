(() => {
    'use strict';

    let makeChange = (amount, denominations) => {
        let results = [];

        results[0] = 1;
        for (let i = 1; i <= amount; ++i)
            results[i] = 0;

        denominations.map((coin) => {
            for (let i = coin; i <= amount; ++i)
                results[i] += results[i - coin];
        });

        return results[amount];
    };

    module.exports = makeChange;
})();
