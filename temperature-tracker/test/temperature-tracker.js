(() => {
    'use strict';

    let chai = require('chai'),
        expect,
        TemperatureTracker = require('../temperature-tracker'),
        tracker;

    let insertInvalidValue = (value) => {
            expect(() => {
                tracker.insert(value);
            }).to.throw(Error);
        },
        insertValidValue = (value) => {
            expect(() => {
                tracker.insert(value);
            }).to.not.throw();
        };

    before(() => {
        chai.should();
        expect = chai.expect;
    });

    beforeEach(() => {
        tracker = new TemperatureTracker();
    });

    describe('temperature-tracker', () => {
        describe('insert', () => {
            it('should disallow invalid input', () => {
                let invalidValues = [
                    undefined, 2.3, '2.3', -1, 111
                ];
                invalidValues.map((value) => {
                    insertInvalidValue(value);
                });
            });

            it('should allow valid input', () => {
                for (let i = 0; i <= 110; ++i) {
                    insertValidValue(i);
                }
            });
        });

        describe('getMin', () => {
            it('should get the min value', () => {
                tracker.insert(5);
                tracker.getMin().should.equal(5);
                tracker.insert(9);
                tracker.getMin().should.equal(5);
                tracker.insert(3);
                tracker.getMin().should.equal(3);
            });
        });

        describe('getMax', () => {
            it('should get the max value', () => {
                tracker.insert(5);
                tracker.getMax().should.equal(5);
                tracker.insert(3);
                tracker.getMax().should.equal(5);
                tracker.insert(3);
                tracker.getMax().should.equal(5);
                tracker.insert(9);
                tracker.getMax().should.equal(9);
            });
        });

        describe('getMean', () => {
            it('should get the mean value', () => {
                tracker.insert(5);
                tracker.getMean().should.equal(5);
                tracker.insert(3);
                tracker.getMean().should.equal(4);
                tracker.insert(3);
                tracker.getMean().should.equal(((5+3+3)/3));
                tracker.insert(9);
                tracker.getMean().should.equal((5+3+3+9)/4);
                tracker.insert(0);
                tracker.insert(0);
                tracker.insert(0);
                tracker.insert(0);
                tracker.insert(0);
                tracker.insert(0);
                tracker.getMean().should.equal((5+3+3+9)/10);
            });
        });

        describe('getMode', () => {
            it('should get the mode value', () => {
                tracker.insert(5);
                tracker.getMode().should.equal(5);
                tracker.insert(3);
                tracker.getMode().should.equal(5);
                tracker.insert(3);
                tracker.getMode().should.equal(3);
                tracker.insert(9);
                tracker.getMode().should.equal(3);
            });
        });
    });
})();
