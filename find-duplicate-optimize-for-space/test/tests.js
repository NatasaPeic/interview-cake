(() => {
    'use strict';

    let chai = require('chai'),
        solution = require('../solution'),
        expect;

    before(() => {
        chai.should();
        expect = chai.expect;
    });

    describe('solution', () => {
        it('should throw an error if the input is invalid', () => {
            expect(() => {
                solution.solve();
            }).to.throw(Error);

            expect(() => {
                solution.solve(null);
            }).to.throw(Error);

            expect(() => {
                solution.solve([]);
            }).to.throw(Error);

            expect(() => {
                solution.solve([1]);
            }).to.throw(Error);
        });

        it('should solve the problem', () => {
            let arr = [1, 1];
            solution.solve(arr).should.equal(1);

            arr = [1, 1, 2];
            solution.solve(arr).should.equal(1);

            arr = [2, 1, 2];
            solution.solve(arr).should.equal(2);

            arr = [2, 1, 3, 4, 5, 6, 2];
            solution.solve(arr).should.equal(2);

            arr = [6, 1, 3, 4, 5, 6, 2];
            solution.solve(arr).should.equal(6);

            arr = [1, 2, 3, 4, 5, 6, 2, 7];
            solution.solve(arr).should.equal(2);

            arr = [7, 1, 3, 4, 5, 6, 2, 6];
            solution.solve(arr).should.equal(6);

            arr = [2, 2, 2, 4, 6, 6, 2, 6];
            solution.solve(arr).should.equal(2);
        });
    });
})();
