(() => {
    'use strict';

    let solve = (cakeTypes, capacity) => {
        if (typeof (capacity) !== 'number' || capacity < 0) {
            throw new Error('Expected non-negative integer for capacity.');
        }
        if (!cakeTypes || cakeTypes.length === 0) {
            return 0;
        }

        for (let i = 0; i < cakeTypes.length; ++i) {
            let type = cakeTypes[i];
            if (type.weight < 0) {
                throw new Error('Expected all non-negative cake weight values');
            }
            if (type.weight === 0 && type.value > 0) {
                return Infinity;
            }
        }

        let bestValuesPerCapacity = new Array(capacity + 1).fill(0);
        for (let i = 1; i <= capacity; ++i) {
            for (let j = 0; j < cakeTypes.length; ++j) {
                let type = cakeTypes[j];
                if (type.weight > i) {
                    continue;
                }
                bestValuesPerCapacity[i] = Math.max(bestValuesPerCapacity[i],
                    bestValuesPerCapacity[i - type.weight] + type.value);
            }
        }
        return bestValuesPerCapacity[capacity];
    };

    module.exports = {
        solve: solve
    };
})();
