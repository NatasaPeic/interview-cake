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
                solution.solve([]);
            }).to.throw(Error);

            expect(() => {
                solution.solve([], 'test');
            }).to.throw(Error);

            expect(() => {
                solution.solve([], -1);
            }).to.throw(Error);
        });

        it('should solve the problem', () => {
            solution.solve(undefined, 1).should.equal(0);
            solution.solve(null, 1).should.equal(0);
            solution.solve([], 1).should.equal(0);

            let cakeTypes = [{
                weight: 7,
                value: 160
            }, {
                weight: 3,
                value: 90
            }, {
                weight: 2,
                value: 15
            }, {
                weight: 0,
                value: 1
            }];
            solution.solve(cakeTypes, 20).should.equal(Infinity);

            cakeTypes = [{
                weight: 7,
                value: 160
            }, {
                weight: 3,
                value: 90
            }, {
                weight: 2,
                value: 15
            }];
            solution.solve(cakeTypes, 20).should.equal(555);
        });
    });
})();
