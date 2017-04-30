(() => {
    'use strict';

    let now = require('performance-now'),
        core = require('./core/core');

    let startTime = now();

    let input = process.argv[2],
        result = core.isPermutationPalindrome(input);

    console.log(`There is at least one permutation of ${input} that is a ` +
        `palindrome: ${result}.`);

    let duration = (now() - startTime).toFixed(3);
    console.log(`Execution time: ${duration}ms`);
})();
