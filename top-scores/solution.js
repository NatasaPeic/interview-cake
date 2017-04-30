(() => {
    'use strict';

    let addScores = (arr, score, count) => {
        for (let i = 0; i < count; ++i) {
            arr.push(score);
        }
    };

    let getSortedScores = (scores, MAX_SCORE) => {
        let scoreCounts = [];
        scores.forEach((score) => {
            if (score > MAX_SCORE) {
                throw new Error(`Expected maximum score of ${MAX_SCORE} but ` +
                    `encountered score of ${score}`);
            }
            scoreCounts[score] = !!scoreCounts[score] ?
                scoreCounts[score] + 1 : 1;
        });
        let result = [];
        scoreCounts.forEach((count, score) => {
            addScores(result, score, count);
        });
        return result;
    };

    module.exports = {
        solve: getSortedScores
    };
})();
