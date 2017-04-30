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
                solution.solve(null);
            }).to.throw(Error);

            expect(() => {
                solution.solve([]);
            }).to.throw(Error);

            expect(() => {
                solution.solve(['a']);
            }).to.throw(Error);

            expect(() => {
                solution.solve(['a', 'a']);
            }).to.throw(Error);
        });

        it('should solve the problem', () => {
            solution.solve(['a', 'b']).should.equal(0);
            solution.solve(['b', 'a']).should.equal(1);
            solution.solve(['c', 'd', 'a', 'b']).should.equal(2);
            solution.solve(['c', 'd', 'e', 'a', 'b']).should.equal(3);
            solution.solve(
                ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'a', 'b']
            ).should.equal(10);
            solution.solve(
                ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'a', 'b']
            ).should.equal(11);
        });
    });
})();
