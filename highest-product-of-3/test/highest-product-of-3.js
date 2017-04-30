(() => {
    'use strict';

    let chai = require('chai'),
        expect,
        solution = require('../highest-product-of-3');

    before(() => {
        chai.should();
        expect = chai.expect;
    });

    describe('highest-product-of-3', () => {
        it('should throw an error when the input is invalid', () => {
            expect(() => {
                solution.getHighestProduct();
            }).to.throw(Error);

            expect(() => {
                solution.getHighestProduct([]);
            }).to.throw(Error);

            expect(() => {
                solution.getHighestProduct([0]);
            }).to.throw(Error);

            expect(() => {
                solution.getHighestProduct([0, 0]);
            }).to.throw(Error);
        });

        it('should calculate the highest product of 3', () => {
            let input = [7, 3, 4];
            solution.getHighestProduct(input).should.equal(7 * 4 * 3);

            input = [1, 7, 3, 4];
            solution.getHighestProduct(input).should.equal(7 * 4 * 3);

            input = [1, 2, -3, 0, 3];
            solution.getHighestProduct(input).should.equal(3 * 2 * 1);

            input = [-12, 2, -3, 0, 3, -10, 11];
            solution.getHighestProduct(input).should.equal(12 * 11 * 10);

            input = [-6, 7, -1, 0, 4, -14];
            solution.getHighestProduct(input).should.equal(14 * 7 * 6);
        });
    });
})();
