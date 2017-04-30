(() => {
    'use strict';

    let isPermutationPalindrome = (str) => {
        if (typeof (str) !== 'string')
            throw new Error('Input must be a string.');

        let counter = 0,
            cache = {},
            length = str.length;

        for (let i = 0; i < length; ++i) {
            if (cache[str[i]]) {
                delete cache[str[i]];
                --counter;
            } else {
                cache[str[i]] = true;
                ++counter;
            }
        }

        return length % 2 === 1 ? counter < 2 : counter < 1;
    };

    module.exports = {
        isPermutationPalindrome: isPermutationPalindrome
    };
})();