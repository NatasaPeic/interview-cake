(() => {
    'use strict';

    let now = require('performance-now'),
        inputParser = require('javascript-utilities/src/input-parser'),
        core = require('./core/core');

    let startTime = now();

    let parseInput = () => {
        const defaultInput = [1, 5, 10, 4, 1, 5, 10, 4],
            result = [],
            n = defaultInput.length;

        if (process.argv.length !== n + 2)
            return defaultInput;

        for (let i = 0; i < n; ++i) {
            let curr = process.argv[i + 2];
            if (inputParser.isInteger(curr)) {
                result.push(parseInt(curr));
            } else {
                return defaultInput;
            }
        }
        return result;
    };

    let buildRectangle = (args) => {
        return {
            leftX: args[0],
            bottomY: args[1],
            width: args[2],
            height: args[3]
        };
    };

    let input = parseInput(),
        result = core.getIntersectionRectangle(
            buildRectangle(input), buildRectangle(input.slice(4)));

    console.log(`The answer is`);
    console.log(result);

    let duration = (now() - startTime).toFixed(3);
    console.log(`Execution time: ${duration}ms`);
})();
