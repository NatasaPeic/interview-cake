(() => {
    'use strict';

    let chai = require('chai'),
        solution = require('../solution');

    before(() => {
        chai.should();
    });

    describe('solution', () => {
        it('should solve the problem', () => {
            solution.solve().should.equal(true);
            solution.solve('').should.equal(true);
            solution.solve('()').should.equal(true);
            solution.solve('[]').should.equal(true);
            solution.solve('{}').should.equal(true);
            solution.solve('{[]()}').should.equal(true);
            solution.solve('{[{}[]()]}').should.equal(true);
            solution.solve('{[a](b);}').should.equal(true);

            solution.solve('{').should.equal(false);
            solution.solve('[').should.equal(false);
            solution.solve('(').should.equal(false);
            solution.solve('{[]()').should.equal(false);
            solution.solve('{[](})').should.equal(false);
        });
    });
})();
