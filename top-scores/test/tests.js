(() => {
    //jshint -W030
    'use strict';

    let chai = require('chai'),
        solution = require('../solution'),
        expect;

    let shouldBeEqual = (expected, actual) => {
        if (!expected) {
            expect(actual).to.not.be.ok;
        } else {
            expect(actual).to.be.ok;
        }
        actual.length.should.equal(expected.length);
        actual.forEach((item, index) => {
            item.should.equal(expected[index]);
        });
    };

    before(() => {
        chai.should();
        expect = chai.expect;
    });

    describe('solution', () => {
        it('should throw an error if the input is invalid', () => {
            expect(() => {
                solution.solve([2], 1);
            }).to.throw(Error);
        });

        it('should solve the problem', () => {
            let scores = [],
                expected = [],
                maxScore = 0,
                result = solution.solve(scores, maxScore);
            shouldBeEqual(expected, result);

            scores = [2];
            expected = [2];
            maxScore = 40;
            result = solution.solve(scores, maxScore);
            shouldBeEqual(expected, result);

            scores = [32, 12, 20, 20, 49];
            expected = [12, 20, 20, 32, 49];
            maxScore = 50;
            result = solution.solve(scores, maxScore);
            shouldBeEqual(expected, result);

            scores = [25, 25, 25, 25];
            expected = [25, 25, 25, 25];
            maxScore = 50;
            result = solution.solve(scores, maxScore);
            shouldBeEqual(expected, result);

            scores = [37, 89, 41, 65, 91, 53];
            expected = [37, 41, 53, 65, 89, 91];
            maxScore = 100;
            result = solution.solve(scores, maxScore);
            shouldBeEqual(expected, result);
        });
    });
})();
