(() => {
    'use strict';

    let chai = require('chai'),
        expect,
        linkedListCycles = require('../linked-list-cycles');

    class Node {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }

    before(() => {
        chai.should();
        expect = chai.expect;
    });

    describe('containsCycle', () => {
        it('should return false for null lists', () => {
            linkedListCycles.containsCycle(null).should.equal(false);
        });

        it('should return false for non-cyclical lists', () => {
            linkedListCycles.containsCycle(new Node(3)).should.equal(false);

            let a = new Node('a'),
                b = new Node('b'),
                c = new Node('c'),
                d = new Node('d');
            a.next = b;
            b.next = c;
            c.next = d;
            linkedListCycles.containsCycle(a).should.equal(false);
        });

        it('should return true for cyclical lists', () => {
            let self = new Node(0);
            self.next = self;
            linkedListCycles.containsCycle(self).should.equal(true);

            let a = new Node('a'),
                b = new Node('b'),
                c = new Node('c'),
                d = new Node('d');
            a.next = b;
            b.next = c;
            c.next = d;
            d.next = a;
            linkedListCycles.containsCycle(a).should.equal(true);

            let e = new Node('e'),
                f = new Node('f'),
                g = new Node('g');
            e.next = f;
            f.next = g;
            g.next = e;
            linkedListCycles.containsCycle(e).should.equal(true);
        });
    });
})();
