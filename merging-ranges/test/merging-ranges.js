(() => {
    //jshint -W030
    'use strict';

    let chai = require('chai'),
        expect,
        solution = require('../merging-ranges');

    before(() => {
        chai.should();
        expect = chai.expect;
    });

    let shouldBeEqual = (expected, actual) => {
        if (!expected) {
            expect(actual).to.not.be.ok;
            return;
        } else {
            expect(actual).to.be.ok;
        }
        actual.length.should.equal(expected.length);
        for (let i = 0; i < expected.length; ++i) {
            actual[i].startTime.should.equal(expected[i].startTime);
            actual[i].endTime.should.equal(expected[i].endTime);
        }
    };

    describe('merging-ranges', () => {
        it('should throw an error when the input is invalid', () => {
            expect(() => {
                solution.mergeRanges();
            }).to.throw(Error);

            expect(() => {
                solution.mergeRanges([]);
            }).to.throw(Error);
        });

        it('should merge the ranges', () => {
            let input = [{
                    startTime: 1,
                    endTime: 2
                }, {
                    startTime: 2,
                    endTime: 3
                }],
                expected = [{
                    startTime: 1,
                    endTime: 3
                }];
            shouldBeEqual(expected, solution.mergeRanges(input));

            input = [{
                startTime: 1,
                endTime: 5
            }, {
                startTime: 2,
                endTime: 3
            }];
            expected = [{
                startTime: 1,
                endTime: 5
            }];
            shouldBeEqual(expected, solution.mergeRanges(input));

            input = [{
                startTime: 1,
                endTime: 10
            }, {
                startTime: 2,
                endTime: 6
            }, {
                startTime: 3,
                endTime: 5
            }, {
                startTime: 7,
                endTime: 9
            }];
            expected = [{
                startTime: 1,
                endTime: 10
            }];
            shouldBeEqual(expected, solution.mergeRanges(input));

            input = [{
                startTime: 0,
                endTime: 1
            }, {
                startTime: 3,
                endTime: 5
            }, {
                startTime: 4,
                endTime: 8
            }, {
                startTime: 10,
                endTime: 12
            }, {
                startTime: 9,
                endTime: 10
            }];
            expected = [{
                startTime: 0,
                endTime: 1
            }, {
                startTime: 3,
                endTime: 8
            }, {
                startTime: 9,
                endTime: 12
            }];
            shouldBeEqual(expected, solution.mergeRanges(input));
        });
    });
})();
