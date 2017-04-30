(() => {
    'use strict';

    let getMaxProfit = (prices) => {
        if (!prices || prices.length < 2) {
            throw new Error('Expected array of length 2 or more.');
        }
        let maxProfit = prices[1] - prices[0],
            minPrice = Math.min(prices[0], prices[1]);
        for (let i = 2; i < prices.length; ++i) {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
            minPrice = Math.min(minPrice, prices[i]);
        }
        return maxProfit;
    };

    module.exports = {
        getMaxProfit: getMaxProfit
    };
})();
