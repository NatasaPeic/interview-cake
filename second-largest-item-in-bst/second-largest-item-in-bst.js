(() => {
    'use strict';

    let getSecondLargestItem = (head) => {
        if (!head || !head.left && !head.right) {
            throw new Error('Expected tree containing at least two nodes.');
        }

        let current = head,
            parentValue;

        // Find the node containing the largest value in the tree.
        while (current.right) {
            parentValue = current.value;
            current = current.right;
        }

        // Now find the node with the second largest value.
        if (!current.left) {
            return parentValue;
        }
        current = current.left;
        while (current.right) {
            current = current.right;
        }
        return current.value;
    };

    module.exports = {
        getSecondLargestItem: getSecondLargestItem
    };
})();
