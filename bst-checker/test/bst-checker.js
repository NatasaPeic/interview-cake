(() => {
    'use strict';

    let chai = require('chai'),
        BinaryTreeNode = require('javascript-utilities/src/binary-tree-node'),
        checker = require('../bst-checker');

    before(() => {
        chai.should();
    });

    describe('bst-checker', () => {
        it('should consider empty trees valid', () => {
            checker.isValidBinarySearchTree(null).should.equal(true);
            checker.isValidBinarySearchTreeRecursive(null).should.equal(true);
        });

        it('should consider trees with duplicates as invalid', () => {
            let node = new BinaryTreeNode(0);
            node.insertLeft(0);
            checker.isValidBinarySearchTree(node).should.equal(false);
            checker.isValidBinarySearchTreeRecursive(node).should.equal(false);
        });

        it('should determine whether a tree is a valid binary search tree', () => {
            let node = new BinaryTreeNode(0);
            checker.isValidBinarySearchTree(node).should.equal(true);
            checker.isValidBinarySearchTreeRecursive(node).should.equal(true);

            node.insertRight(2);
            checker.isValidBinarySearchTree(node).should.equal(true);
            checker.isValidBinarySearchTreeRecursive(node).should.equal(true);

            node.right.insertRight(4);
            checker.isValidBinarySearchTree(node).should.equal(true);
            checker.isValidBinarySearchTreeRecursive(node).should.equal(true);

            node.right.right.insertRight(6);
            checker.isValidBinarySearchTree(node).should.equal(true);
            checker.isValidBinarySearchTreeRecursive(node).should.equal(true);

            node.insertLeft(-2);
            checker.isValidBinarySearchTree(node).should.equal(true);
            checker.isValidBinarySearchTreeRecursive(node).should.equal(true);

            node.left.insertLeft(-4);
            checker.isValidBinarySearchTree(node).should.equal(true);
            checker.isValidBinarySearchTreeRecursive(node).should.equal(true);

            node.left.left.insertLeft(-6);
            checker.isValidBinarySearchTree(node).should.equal(true);
            checker.isValidBinarySearchTreeRecursive(node).should.equal(true);

            node.left.left.left.insertLeft(-8);
            checker.isValidBinarySearchTree(node).should.equal(true);
            checker.isValidBinarySearchTreeRecursive(node).should.equal(true);

            node.left.left.left.insertRight(-5);
            checker.isValidBinarySearchTree(node).should.equal(true);
            checker.isValidBinarySearchTreeRecursive(node).should.equal(true);

            node.right.right.insertLeft(3);
            checker.isValidBinarySearchTree(node).should.equal(true);
            checker.isValidBinarySearchTreeRecursive(node).should.equal(true);

            node.right.insertLeft(-1);
            checker.isValidBinarySearchTree(node).should.equal(false);
            checker.isValidBinarySearchTreeRecursive(node).should.equal(false);
        });
    });
})();
