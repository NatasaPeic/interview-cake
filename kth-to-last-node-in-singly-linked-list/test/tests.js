(() => {
    'use strict';

    let chai = require('chai'),
        solution = require('../solution'),
        expect;

    class LinkedListNode {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }

    before(() => {
        chai.should();
        expect = chai.expect;
    });

    describe('solution', () => {
        it('should throw an error if the input is invalid', () => {
            expect(() => {
                solution.solve(-1, new LinkedListNode(0));
            }).to.throw(Error);

            expect(() => {
                solution.solve(0, new LinkedListNode(0));
            }).to.throw(Error);

            expect(() => {
                solution.solve(1);
            }).to.throw(Error);

            expect(() => {
                solution.solve(1, null);
            }).to.throw(Error);

            expect(() => {
                solution.solve(2, new LinkedListNode(0));
            }).to.throw(Error);
        });

        it('should solve the problem', () => {
            let head = new LinkedListNode(0);
            solution.solve(1, head).value.should.equal(0);

            head.next = new LinkedListNode(1);
            solution.solve(1, head).value.should.equal(1);
            solution.solve(2, head).value.should.equal(0);

            head.next.next = new LinkedListNode(2);
            solution.solve(1, head).value.should.equal(2);
            solution.solve(2, head).value.should.equal(1);
            solution.solve(3, head).value.should.equal(0);
        });
    });
})();
