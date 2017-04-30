(() => {
    'use strict';

    let chai = require('chai'),
        core = require('../core/core');

    before(() => {
        chai.should();
    });

    describe('core', () => {
        it('should return whether at least one permutation of the input is a ' +
            'palindrome', () => {
                core.isPermutationPalindrome('').should.equal(true);
                core.isPermutationPalindrome('civic').should.equal(true);
                core.isPermutationPalindrome('ivicc').should.equal(true);
                core.isPermutationPalindrome('civil').should.equal(false);
                core.isPermutationPalindrome('livci').should.equal(false);
            });
    });
})();
