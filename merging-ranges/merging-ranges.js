(() => {
    'use strict';

    let mergeRanges = (ranges) => {
        if (!ranges || ranges.length < 1) {
            throw new Error('Expected array of length 1 or more.');
        }

        // Sort by startTime O(n * log(n))
        let sortedRanges = ranges.slice().sort((a, b) => {
            return a.startTime - b.startTime;
        });

        // Traverse sorted array building merged ranges O(n)
        let result = [];
        result.push(sortedRanges[0]);
        for (let i = 1; i < sortedRanges.length; ++i) {
            let latestResult = result[result.length - 1];
            if (sortedRanges[i].startTime > latestResult.endTime) {
                result.push({
                    startTime: sortedRanges[i].startTime,
                    endTime: sortedRanges[i].endTime
                });
            } else if (sortedRanges[i].endTime > latestResult.endTime) {
                latestResult.endTime = sortedRanges[i].endTime;
            }
        }
        return result;
    };

    module.exports = {
        mergeRanges: mergeRanges
    };
})();
