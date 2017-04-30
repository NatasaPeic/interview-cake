(() => {
    'use strict';

    let chai = require('chai'),
        expect,
        Queue = require('../queue'),
        queue;

    before(() => {
        chai.should();
        expect = chai.expect;
    });

    beforeEach(() => {
        queue = new Queue();
    });

    describe('queue', () => {
        it('should disallow dequeue when queue is empty', () => {
            expect(() => {
                queue.dequeue();
            }).to.throw(Error);
        });

        it('should enqueue and dequeue single items', () => {
            queue.enqueue(0);
            queue.dequeue().should.equal(0);
            queue.enqueue(1);
            queue.dequeue().should.equal(1);
        });

        it('should enqueue and dequeue multiple items', () => {
            queue.enqueue(0);
            queue.enqueue(1);
            queue.enqueue(2);
            queue.dequeue().should.equal(0);
            queue.enqueue(3);
            queue.enqueue(4);
            queue.dequeue().should.equal(1);
            queue.dequeue().should.equal(2);
            queue.dequeue().should.equal(3);
            queue.dequeue().should.equal(4);
        });
    });
})();
