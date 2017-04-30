(() => {
    'use strict';

    let findDuplicate = (arr) => {
        if (!arr || arr.length < 2) {
            throw new Error('Expected array with at least two integers');
        }
        let current = 0;

        // Advance n steps to enter cycle
        for (let i = 0; i < arr.length; ++i) {
            current = arr[current];
        }

        // Determine cycle length
        let cycleLength = 1,
            runner = arr[current];
        while (runner !== current) {
            runner = arr[runner];
            ++cycleLength;
        }

        // Determine first node in cycle
        current = 0;
        runner = 0;
        for (let i = 0; i < cycleLength; ++i) {
            runner = arr[runner];
        }
        while (runner !== current) {
            current = arr[current];
            runner = arr[runner];
        }

        // Return index of first node in cycle because at least two nodes have
        // this value
        return current;
    };

    module.exports = {
        solve: findDuplicate
    };
})();
