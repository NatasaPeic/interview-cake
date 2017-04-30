(() => {
    'use strict';

    let chai = require('chai'),
        expect,
        stockPrice = require('../stock-price');

    before(() => {
        chai.should();
        expect = chai.expect;
    });

    describe('stock-price', () => {
        it('should throw an error when the input is invalid', () => {
            expect(() => {
                stockPrice.getMaxProfit();
            }).to.throw(Error);

            expect(() => {
                stockPrice.getMaxProfit([]);
            }).to.throw(Error);

            expect(() => {
                stockPrice.getMaxProfit([0]);
            }).to.throw(Error);
        });

        it('should calculate the maximum profit', () => {
            let prices = [3, 2, 1];
            stockPrice.getMaxProfit(prices).should.equal(-1);

            prices = [1, 2, 3];
            stockPrice.getMaxProfit(prices).should.equal(2);

            prices = [1, 2, 3, 0];
            stockPrice.getMaxProfit(prices).should.equal(2);

            prices = [1, 2, 3, 0, 3];
            stockPrice.getMaxProfit(prices).should.equal(3);

            prices = [43, 11, 3, 0];
            stockPrice.getMaxProfit(prices).should.equal(-3);
        });
    });
})();
