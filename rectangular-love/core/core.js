(() => {
    'use strict';

    let getStartAndLength = (startA, lengthA, startB, lengthB) => {
        let start = Math.max(startA, startB),
            end = Math.min(startA + lengthA, startB + lengthB),
            length = end - start;

        return {
            start: start,
            length: length
        };
    };

    let getIntersectionRectangle = (rectA, rectB) => {
        let horizontal = getStartAndLength(
                rectA.leftX, rectA.width, rectB.leftX, rectB.width),
            vertical = getStartAndLength(
                rectA.bottomY, rectA.height, rectB.bottomY, rectB.height);

        if (horizontal.length <= 0 || vertical.length <= 0) {
            return null;
        }

        return {
            leftX: horizontal.start,
            bottomY: vertical.start,
            width: horizontal.length,
            height: vertical.length
        };
    };

    module.exports = {
        getIntersectionRectangle: getIntersectionRectangle
    };
})();
