(() => {
    'use strict';

    let getProductsOfAllIntsExceptAtIndex = (ints) => {
        if (!ints || ints.length < 2) {
            throw new Error('Expected array of length 2 or more.');
        }
        let result = [],
            currentProduct = 1;
        for (let i = 0; i < ints.length; ++i) {
            result[i] = currentProduct;
            currentProduct *= ints[i];
        }
        currentProduct = 1;
        for (let i = ints.length - 1; i >= 0; --i) {
            result[i] *= currentProduct;
            currentProduct *= ints[i];
        }
        return result;
    };

    module.exports = {
        getProductsOfAllIntsExceptAtIndex: getProductsOfAllIntsExceptAtIndex
    };
})();
