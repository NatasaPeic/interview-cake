(() => {
    'use strict';

    let inputParser = require('javascript-utilities/src/input-parser');

    const minValue = 0;
    const maxValue = 110;

    let validate = (value) => {
            if (!inputParser.isInteger(value))
                throw new Error('Expected integer argument for insert.');
            if (value < minValue || value > maxValue)
                throw new Error(
                    'Argument for insert not within supported range of ' +
                    `${minValue}-${maxValue}.`);
        },
        updateMode;

    class TemperatureTracker {
        constructor() {
            this._min = null;
            this._max = null;

            // Used for mean calculation
            this._count = 0;
            this._mean = null;

            // Used for mode calculation
            this._frequencies = [];
            this._modeFrequency = null;
            this._mode = null;

            updateMode = (value) => {
                if (typeof (this._frequencies[value]) === typeof (undefined)) {
                    this._frequencies[value] = 1;
                } else {
                    ++this._frequencies[value];
                }

                if (this._mode === null ||
                    this._frequencies[value] > this._modeFrequency) {
                    this._modeFrequency = this._frequencies[value];
                    this._mode = value;
                }
            };
        }

        insert(value) {
            validate(value);

            if (this._min === null || value < this._min)
                this._min = value;

            if (this._max === null || value > this._max)
                this._max = value;

            ++this._count;
            this._mean = this._count === 1 ?
                value : (value + (this._count - 1) * this._mean) / this._count;

            updateMode(value);
        }

        getMax() {
            return this._max;
        }

        getMin() {
            return this._min;
        }

        getMean() {
            return this._mean;
        }

        getMode() {
            return this._mode;
        }
    }

    module.exports = TemperatureTracker;
})();
