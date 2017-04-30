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
                solution.solve(0, [1, 2, 3]);
            }).to.throw(Error);

            expect(() => {
                solution.solve(-1, [1, 2, 3]);
            }).to.throw(Error);
        });

        it('should solve the problem', () => {
            solution.solve(10).should.equal(false);
            solution.solve(10, []).should.equal(false);
            solution.solve(10, [1]).should.equal(false);

            let movieLengths = [5, 11, 6, 3, 14, 4, 7, 16];
            solution.solve(15, movieLengths).should.equal(true);
        });
    });
})();
