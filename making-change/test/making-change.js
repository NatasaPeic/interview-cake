(() => {
    'use strict';

    let chai = require('chai'),
        makeChange = require('../making-change');

    before(() => {
        chai.should();
    });

    describe('making-change', () => {
        it('should return the number of ways to make the amount', () => {
            makeChange(4, [1, 2, 3]).should.equal(4);
            makeChange(26, [2, 3]).should.equal(5);
            makeChange(9990, [1, 5, 10, 25]).should.equal(133833700);
            makeChange(9990, [1]).should.equal(1);
            makeChange(9990, []).should.equal(0);
            makeChange(0, [1, 2, 3]).should.equal(1);
        });
    });
})();
