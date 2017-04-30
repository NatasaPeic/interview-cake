(() => {
    'use strict';

    let rand5 = () => {
        let result;
        do {
            result = rand7();
        } while (result > 5);
        return result;
    };

    module.exports = rand5;
})();
