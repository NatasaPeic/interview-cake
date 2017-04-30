(() => {
    'use strict';

    let isValidBinarySearchTree = (node) => {
        if (!node) {
            return true;
        }

        let stack = [];

        stack.push({
            node: node,
            lowerBound: -Infinity,
            upperBound: Infinity
        });

        while (stack.length > 0) {
            let current = stack.pop();

            if (current.node.value <= current.lowerBound ||
                current.node.value >= current.upperBound) {
                return false;
            }

            if (current.node.left) {
                stack.push({
                    node: current.node.left,
                    lowerBound: current.lowerBound,
                    upperBound: current.node.value
                });
            }
            if (current.node.right) {
                stack.push({
                    node: current.node.right,
                    lowerBound: current.node.value,
                    upperBound: current.upperBound
                });
            }
        }

        return true;
    };

    let isValidBinarySearchTreeRecursive = (node, lowerBound, upperBound) => {
        if (!node) {
            return true;
        }

        lowerBound = typeof (lowerBound) === 'undefined' ?
            -Infinity : lowerBound;
        upperBound = typeof (upperBound) === 'undefined' ?
            Infinity : upperBound;

        if (node.value <= lowerBound || node.value >= upperBound) {
            return false;
        }

        return isValidBinarySearchTreeRecursive(node.left, lowerBound, node.value) &&
            isValidBinarySearchTreeRecursive(node.right, node.value, upperBound);
    };

    module.exports = {
        isValidBinarySearchTree: isValidBinarySearchTree,
        isValidBinarySearchTreeRecursive: isValidBinarySearchTreeRecursive
    };
})();
