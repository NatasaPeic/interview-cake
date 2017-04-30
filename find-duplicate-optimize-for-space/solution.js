(() => {
    'use strict';

    let solve = (arr) => {
        if (!arr || arr.length < 2) {
            throw new Error('Expected array with at least two integers');
        }
        let floor = 1,
            ceiling = arr.length - 1;
        while (floor < ceiling) {
            let lowFloor = floor,
                lowCeiling = Math.floor((floor + ceiling) / 2),
                highFloor = lowCeiling + 1,
                lowCount = 0;
            //jshint -W083
            arr.forEach((value) => {
                if (value >= lowFloor && value <= lowCeiling)
                    ++lowCount;
            });
            if (lowCount > lowCeiling - lowFloor + 1) {
                ceiling = lowCeiling;
            } else {
                floor = highFloor;
            }
        }
        return floor;
    };

    module.exports = {
        solve: solve
    };
})();
