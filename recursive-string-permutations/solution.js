(() => {
    'use strict';

    let solve = (input) => {
        let result = new Set();
        if (input.length <= 1) {
            result.add(input);
            return result;
        }
        let firstChar = input[0],
            permutationsWithoutFirstChar = solve(input.slice(1));
        permutationsWithoutFirstChar.forEach((str) => {
            for (let i = 0; i < input.length; ++i) {
                result.add(str.slice(0, i) + firstChar + str.slice(i));
            }
        });
        return result;
    };

    module.exports = {
        solve: solve
    };
})();
