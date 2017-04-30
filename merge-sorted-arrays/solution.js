(() => {
    'use strict';

    let solve = (arr1, arr2) => {
        if (!arr1 || !arr2) {
            throw new Error('Expected valid input.');
        }
        let arr1Index = 0,
            arr2Index = 0,
            arr1Length = arr1.length,
            arr2Length = arr2.length,
            result = [],
            itemCount = arr1Length + arr2Length;
        for (let i = 0; i < itemCount; ++i) {
            let getFromArr1;
            if (arr1Index >= arr1Length) {
                getFromArr1 = false;
            } else if (arr2Index >= arr2Length) {
                getFromArr1 = true;
            } else if (arr1[arr1Index] <= arr2[arr2Index]) {
                getFromArr1 = true;
            } else {
                getFromArr1 = false;
            }
            if (getFromArr1) {
                result.push(arr1[arr1Index]);
                ++arr1Index;
            } else {
                result.push(arr2[arr2Index]);
                ++arr2Index;
            }
        }
        return result;
    };

    module.exports = {
        solve: solve
    };
})();
