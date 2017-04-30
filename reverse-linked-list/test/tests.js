(() => {
    'use strict';

    let chai = require('chai'),
        solution = require('../solution'),
        LinkedListNode = solution.LinkedListNode,
        should;

    before(() => {
        should = chai.should();
    });

    describe('solution', () => {
        describe('mutableReverse', () => {
            it('should reverse a linked list in-place', () => {
                should.equal(solution.mutableReverse(), null);
                should.equal(solution.mutableReverse(null), null);

                let head = new LinkedListNode(0),
                    result = solution.mutableReverse(head);
                result.value.should.equal(0);
                should.equal(result.next, null);
                should.equal(head.next, null);

                head.next = new LinkedListNode(1);
                result = solution.mutableReverse(head);
                result.value.should.equal(1);
                result.next.value.should.equal(0);
                should.equal(result.next.next, null);
                should.equal(head.next, null);

                head = new LinkedListNode(0);
                head.next = new LinkedListNode(1);
                head.next.next = new LinkedListNode(2);
                head.next.next.next = new LinkedListNode(3);
                head.next.next.next.next = new LinkedListNode(4);
                result = solution.mutableReverse(head);
                result.value.should.equal(4);
                result.next.value.should.equal(3);
                result.next.next.value.should.equal(2);
                result.next.next.next.value.should.equal(1);
                result.next.next.next.next.value.should.equal(0);
                should.equal(result.next.next.next.next.next, null);
                should.equal(head.next, null);
            });
        });

        describe('immutableReverse', () => {
            it('should immutably reverse a linked list', () => {
                should.equal(solution.immutableReverse(), null);
                should.equal(solution.immutableReverse(null), null);

                let head = new LinkedListNode(0),
                    result = solution.immutableReverse(head);
                result.value.should.equal(0);
                should.equal(result.next, null);
                head.value.should.equal(0);
                should.equal(head.next, null);

                head.next = new LinkedListNode(1);
                result = solution.immutableReverse(head);
                result.value.should.equal(1);
                result.next.value.should.equal(0);
                should.equal(result.next.next, null);
                head.value.should.equal(0);
                head.next.value.should.equal(1);
                should.equal(head.next.next, null);

                head = new LinkedListNode(0);
                head.next = new LinkedListNode(1);
                head.next.next = new LinkedListNode(2);
                head.next.next.next = new LinkedListNode(3);
                head.next.next.next.next = new LinkedListNode(4);
                result = solution.immutableReverse(head);
                result.value.should.equal(4);
                result.next.value.should.equal(3);
                result.next.next.value.should.equal(2);
                result.next.next.next.value.should.equal(1);
                result.next.next.next.next.value.should.equal(0);
                should.equal(result.next.next.next.next.next, null);
                head.value.should.equal(0);
                head.next.value.should.equal(1);
                head.next.next.value.should.equal(2);
                head.next.next.next.value.should.equal(3);
                head.next.next.next.next.value.should.equal(4);
                should.equal(head.next.next.next.next.next, null);
            });
        });
    });
})();
