(() => {
    'use strict';

    let chai = require('chai'),
        solution = require('../solution'),
        expect;

    // Todo: Move to shared utilities
    let shouldBeEqual = (expected, actual) => {
        if (!expected) {
            //jshint -W030
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
                solution.solve();
            }).to.throw(Error);

            expect(() => {
                solution.solve(null, null);
            }).to.throw(Error);

            expect(() => {
                solution.solve([], null);
            }).to.throw(Error);

            expect(() => {
                solution.solve(null, []);
            }).to.throw(Error);
        });

        it('should solve the problem', () => {
            let arr1 = [],
                arr2 = [],
                expected = [];
            shouldBeEqual(expected, solution.solve(arr1, arr2));

            arr1 = [0];
            arr2 = [];
            expected = [0];
            shouldBeEqual(expected, solution.solve(arr1, arr2));

            arr1 = [];
            arr2 = [0];
            expected = [0];
            shouldBeEqual(expected, solution.solve(arr1, arr2));

            arr1 = [0];
            arr2 = [0];
            expected = [0, 0];
            shouldBeEqual(expected, solution.solve(arr1, arr2));

            arr1 = [3, 4, 5];
            arr2 = [0, 6];
            expected = [0, 3, 4, 5, 6];
            shouldBeEqual(expected, solution.solve(arr1, arr2));

            arr1 = [0, 6];
            arr2 = [3, 4, 5];
            expected = [0, 3, 4, 5, 6];
            shouldBeEqual(expected, solution.solve(arr1, arr2));

            arr1 = [0, 1, 2];
            arr2 = [3, 4, 5];
            expected = [0, 1, 2, 3, 4, 5];
            shouldBeEqual(expected, solution.solve(arr1, arr2));

            arr1 = [3, 4, 5];
            arr2 = [0, 1, 2];
            expected = [0, 1, 2, 3, 4, 5];
            shouldBeEqual(expected, solution.solve(arr1, arr2));
        });
    });
})();
