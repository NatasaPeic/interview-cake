(() => {
    'use strict';

    let chai = require('chai'),
        BinaryTreeNode = require('javascript-utilities/src/binary-tree-node'),
        solution = require('../second-largest-item-in-bst'),
        expect;

    before(() => {
        chai.should();
        expect = chai.expect;
    });

    describe('second-largest-item-in-bst', () => {
        it('should throw an error if the tree contains less than two nodes', () => {
            expect(() => {
                solution.getSecondLargestItem(null);
            }).to.throw(Error);

            expect(() => {
                solution.getSecondLargestItem(new BinaryTreeNode(0));
            }).to.throw(Error);
        });

        it('should get the second largest item in a binary search tree', () => {
            // Left child leaf node
            let tree = new BinaryTreeNode(0);
            tree.insertLeft(-5);
            solution.getSecondLargestItem(tree).should.equal(-5);

            // Left child with left child
            tree.left.insertLeft(-10);
            solution.getSecondLargestItem(tree).should.equal(-5);

            // Right child leaf node
            tree.left.insertRight(-3);
            solution.getSecondLargestItem(tree).should.equal(-3);

            // Root node with both children
            tree.insertRight(5);
            solution.getSecondLargestItem(tree).should.equal(0);

            // Left child leaf node
            tree.right.insertLeft(3);
            solution.getSecondLargestItem(tree).should.equal(3);

            // Right child leaf node, largest is right child
            tree.right.left.insertRight(4);
            solution.getSecondLargestItem(tree).should.equal(4);

            // Right child with both children
            tree.right.insertRight(10);
            solution.getSecondLargestItem(tree).should.equal(5);

            // Root node with right child
            tree = new BinaryTreeNode(0);
            tree.insertRight(5);
            solution.getSecondLargestItem(tree).should.equal(0);

            // Right child with right child
            tree.right.insertRight(10);
            solution.getSecondLargestItem(tree).should.equal(5);
        });
    });
})();
