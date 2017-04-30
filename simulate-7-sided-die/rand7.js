(() => {
    'use strict';

    let rand7 = () => {
        let test;
        do {
            // test has equal probability of being values 1-25
            test = (rand5() - 1) * 5 + rand5();
        } while (test > 21); // remove 4 possible outcomes with re-rolls
        return test % 7 + 1;
    };

    module.exports = rand7;
})();
