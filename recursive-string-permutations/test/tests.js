(() => {
    'use strict';

    let chai = require('chai'),
        solution = require('../solution');

    before(() => {
        chai.should();
    });

    describe('solution', () => {
        it('should solve the problem', () => {
            let result = solution.solve('');
            result.size.should.equal(1);
            result.has('').should.equal(true);

            result = solution.solve('a');
            result.size.should.equal(1);
            result.has('a').should.equal(true);

            result = solution.solve('ab');
            result.size.should.equal(2);
            result.has('ab').should.equal(true);
            result.has('ba').should.equal(true);

            result = solution.solve('abc');
            result.size.should.equal(6);
            result.has('abc').should.equal(true);
            result.has('acb').should.equal(true);
            result.has('bac').should.equal(true);
            result.has('bca').should.equal(true);
            result.has('cab').should.equal(true);
            result.has('cba').should.equal(true);

            result = solution.solve('abcd');
            result.size.should.equal(24);
            result.has('abcd').should.equal(true);
            result.has('abdc').should.equal(true);
            result.has('acbd').should.equal(true);
            result.has('acdb').should.equal(true);
            result.has('adbc').should.equal(true);
            result.has('adcb').should.equal(true);
            result.has('bacd').should.equal(true);
            result.has('badc').should.equal(true);
            result.has('bcad').should.equal(true);
            result.has('bcda').should.equal(true);
            result.has('bdac').should.equal(true);
            result.has('bdca').should.equal(true);
            result.has('cbad').should.equal(true);
            result.has('cbda').should.equal(true);
            result.has('cabd').should.equal(true);
            result.has('cadb').should.equal(true);
            result.has('cdba').should.equal(true);
            result.has('cdab').should.equal(true);
            result.has('dbca').should.equal(true);
            result.has('dbac').should.equal(true);
            result.has('dcba').should.equal(true);
            result.has('dcab').should.equal(true);
            result.has('dabc').should.equal(true);
            result.has('dacb').should.equal(true);
        });
    });
})();
