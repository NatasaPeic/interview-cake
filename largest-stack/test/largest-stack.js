(() => {
    'use strict';

    let chai = require('chai'),
        expect,
        LargestStack = require('../largest-stack'),
        stack;

    before(() => {
        chai.should();
        expect = chai.expect;
    });

    beforeEach(() => {
        stack = new LargestStack();
    });

    describe('largest-stack', () => {
        it('should disallow pop when stack is empty', () => {
            expect(() => {
                stack.pop();
            }).to.throw(Error);
        });

        it('should push and pop single items', () => {
            stack.push(0);
            stack.pop().should.equal(0);
            stack.push(1);
            stack.pop().should.equal(1);
        });

        it('should push and pop multiple items', () => {
            stack.push(0);
            stack.push(1);
            stack.push(2);
            stack.pop().should.equal(2);
            stack.push(3);
            stack.push(4);
            stack.pop().should.equal(4);
            stack.pop().should.equal(3);
            stack.pop().should.equal(1);
            stack.pop().should.equal(0);
        });

        it('should return null for maximum value when empty', () => {
            expect(() => {
                stack.getMax();
            }).to.throw(Error);
            stack.push(0);
            stack.pop();
            expect(() => {
                stack.getMax();
            }).to.throw(Error);
        });

        it('should keep track of the maximum value', () => {
            stack.push(0);
            stack.getMax().should.equal(0);
            stack.push(1);
            stack.getMax().should.equal(1);
            stack.push(2);
            stack.getMax().should.equal(2);
            stack.push(3);
            stack.getMax().should.equal(3);
            stack.push(4);
            stack.getMax().should.equal(4);
            stack.push(-2);
            stack.getMax().should.equal(4);
            stack.push(4);
            stack.getMax().should.equal(4);
            stack.pop().should.equal(4);
            stack.getMax().should.equal(4);
            stack.pop().should.equal(-2);
            stack.getMax().should.equal(4);
            stack.pop().should.equal(4);
            stack.getMax().should.equal(3);
            stack.pop().should.equal(3);
            stack.getMax().should.equal(2);
            stack.pop().should.equal(2);
            stack.getMax().should.equal(1);
            stack.pop().should.equal(1);
            stack.getMax().should.equal(0);
            stack.pop().should.equal(0);
        });
    });
})();
