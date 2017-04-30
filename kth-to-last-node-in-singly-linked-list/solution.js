(() => {
    'use strict';

    let getListLength = (head) => {
        let result = 0,
            curr = head;
        while (curr) {
            ++result;
            curr = curr.next;
        }
        return result;
    };

    let solve = (k, head) => {
        if (typeof (k) !== 'number' || k <= 0) {
            throw new Error('Expected positive integer for k.');
        }

        let length = getListLength(head);
        if (length < k) {
            throw new Error(`Expected list of at least ${k} elements.`);
        }

        let curr = head;
        for (let i = 0; i < length - k; ++i) {
            curr = curr.next;
        }
        return curr;
    };

    module.exports = {
        solve: solve
    };
})();
