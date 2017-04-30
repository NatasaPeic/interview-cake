(() => {
    'use strict';

    let getHighestProduct = (ints) => {
        if (!ints || ints.length < 3) {
            throw new Error('Expected array of length 3 or more.');
        }
        let max = Math.max(ints[0], ints[1]),
            min = Math.min(ints[0], ints[1]),
            hp2 = ints[0] * ints[1],
            lp2 = hp2,
            hp3 = hp2 * ints[2];
        for (let i = 2; i < ints.length; ++i) {
            hp3 = Math.max(hp3, hp2 * ints[i], lp2 * ints[i]);
            hp2 = Math.max(hp2, max * ints[i], min * ints[i]);
            lp2 = Math.min(lp2, max * ints[i], min * ints[i]);
            max = Math.max(max, ints[i]);
            min = Math.min(min, ints[i]);
        }
        return hp3;
    };

    module.exports = {
        getHighestProduct: getHighestProduct
    };
})();
