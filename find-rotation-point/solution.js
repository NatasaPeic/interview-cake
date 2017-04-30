(() => {
    'use strict';

    let solve = (arr) => {
        if (!arr || arr.length < 2) {
            throw new Error('Expected an array with at least two elements.');
        }

        let first = arr[0],
            upperBound = arr.length - 1,
            lowerBound = 1;

        while (true) {
            let mid = Math.floor((upperBound + lowerBound) / 2);

            if (arr[mid] > first) {
                // Check if finished (no rotation)
                if (mid === arr.length - 1) {
                    return 0;
                }

                // Search right
                lowerBound = mid + 1;
            } else if (arr[mid] < first) {
                // Check if finished
                if (arr[mid - 1] >= first) {
                    return mid;
                }

                // Search left
                upperBound = mid - 1;
            } else {
                throw new Error('Expected an array with no duplicate values');
            }
        }
    };

    module.exports = {
        solve: solve
    };
})();
