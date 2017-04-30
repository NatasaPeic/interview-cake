(() => {
    'use strict';

    let chai = require('chai'),
        BinaryTreeNode = require('javascript-utilities/src/binary-tree-node'),
        balancedBinaryTree = require('../balanced-binary-tree'),
        isSuperbalanced = balancedBinaryTree.isSuperbalanced;

    before(() => {
        chai.should();
    });

    describe('balanced-binary-tree', () => {
        it('should determine whether trees are superbalanced', () => {
            let node = null;
            isSuperbalanced(node).should.equal(true);

            node = new BinaryTreeNode(0);
            isSuperbalanced(node).should.equal(true);

            node.insertRight(1);
            isSuperbalanced(node).should.equal(true);

            node.right.insertRight(2);
            isSuperbalanced(node).should.equal(true);

            node.right.right.insertRight(3);
            isSuperbalanced(node).should.equal(true);

            node.insertLeft(-1);
            isSuperbalanced(node).should.equal(false);

            node.left.insertLeft(-2);
            isSuperbalanced(node).should.equal(true);

            node.left.left.insertLeft(-3);
            isSuperbalanced(node).should.equal(true);

            node.left.left.left.insertLeft(-4);
            isSuperbalanced(node).should.equal(true);

            node.left.left.left.insertRight(-3);
            isSuperbalanced(node).should.equal(true);

            node.right.right.insertLeft(2);
            isSuperbalanced(node).should.equal(true);

            node.right.insertLeft(1);
            isSuperbalanced(node).should.equal(false);
        });
    });
})();
