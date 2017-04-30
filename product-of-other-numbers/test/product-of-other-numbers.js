(() => {
    'use strict';

    let chai = require('chai'),
        expect,
        solution = require('../product-of-other-numbers'),
        areEqual = (a, b) => {
            if (!a) {
                return !b;
            }
            if (a.length !== b.length) {
                return false;
            }
            for (let i = 0; i < a.length; ++i) {
                if (a[i] !== b[i]) {
                    return false;
                }
            }
            return true;
        };

    before(() => {
        chai.should();
        expect = chai.expect;
    });

    describe('product-of-other-numbers', () => {
        it('should throw an error when the input is invalid', () => {
            expect(() => {
                solution.getProductsOfAllIntsExceptAtIndex();
            }).to.throw(Error);

            expect(() => {
                solution.getProductsOfAllIntsExceptAtIndex([]);
            }).to.throw(Error);

            expect(() => {
                solution.getProductsOfAllIntsExceptAtIndex([0]);
            }).to.throw(Error);
        });

        it('should calculate the product of all ints except at index', () => {
            let input = [1, 7, 3, 4],
                expected = [84, 12, 28, 21];
            areEqual(solution.getProductsOfAllIntsExceptAtIndex(input), expected)
                .should.equal(true);

            input = [1, 2, -3, 0, 3];
            expected = [0, 0, 0, -18, 0];
            areEqual(solution.getProductsOfAllIntsExceptAtIndex(input), expected)
                .should.equal(true);

            input = [43, 11, 3, 0];
            expected = [0, 0, 0, 1419];
            areEqual(solution.getProductsOfAllIntsExceptAtIndex(input), expected)
                .should.equal(true);
        });
    });
})();
