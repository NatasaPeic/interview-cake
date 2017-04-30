(() => {
    'use strict';

    let solve = (flightLength, movieLengths) => {
        if (flightLength <= 0) {
            throw new Error('Expected positive non-zero value for flightLength.');
        }
        if (!movieLengths || movieLengths.length < 2) {
            return false;
        }
        let firstMovieLengths = new Set();
        for (let i = 0; i < movieLengths.length; ++i) {
            let length = movieLengths[i];
            if (firstMovieLengths.has(flightLength - length)) {
                return true;
            }
            firstMovieLengths.add(length);
        }
        return false;
    };

    module.exports = {
        solve: solve
    };
})();
