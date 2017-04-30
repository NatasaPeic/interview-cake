(() => {
    'use strict';

    let matchingChars = {
            '}': '{',
            ']': '[',
            ')': '('
        },
        openers = new Set(['{', '[', '(']),
        closers = new Set(['}', ']', ')']);

    let isValid = (str) => {
        if (!str) {
            return true;
        }

        let openerStack = [],
            length = str.length;

        for (let i = 0; i < length; ++i) {
            let char = str[i];

            if (openers.has(char)) {
                openerStack.push(char);
            } else if (closers.has(char)) {
                if (!openerStack.length) {
                    return false;
                }
                if (openerStack.pop() !== matchingChars[char]) {
                    return false;
                }
            }
        }

        return openerStack.length === 0;
    };

    module.exports = {
        solve: isValid
    };
})();
