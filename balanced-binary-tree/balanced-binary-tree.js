(() => {
    'use strict';

    let isLeaf = (node) => {
        return node.left === null && node.right === null;
    };

    let isSuperbalanced = (node) => {
        if (!node) {
            return true;
        }

        let depthA = -1,
            depthB = -1,
            stack = [];

        stack.push({
            node: node,
            depth: 0
        });

        while (stack.length > 0) {
            let current = stack.pop();
            if (isLeaf(current.node)) {
                if (depthA === -1) {
                    depthA = current.depth;
                } else if (depthB === -1 && Math.abs(current.depth - depthA) === 1) {
                    depthB = current.depth;
                } else if (current.depth !== depthA && current.depth !== depthB) {
                    return false;
                }
            } else {
                if (current.node.left) {
                    stack.push({
                        node: current.node.left,
                        depth: current.depth + 1
                    });
                }
                if (current.node.right) {
                    stack.push({
                        node: current.node.right,
                        depth: current.depth + 1
                    });
                }
            }
        }

        return true;
    };

    module.exports = {
        isSuperbalanced: isSuperbalanced
    };
})();
