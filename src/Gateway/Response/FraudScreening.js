'use strict';

const AbstractResponsePart = require('./AbstractResponsePart');

class FraudScreening extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {Number} [values.scoring]
     * @param {Number} [values.result]
     * @param {Number} [values.review]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

        if (Object.prototype.hasOwnProperty.call(values, 'scoring')) {
            this.scoring = values.scoring;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'result')) {
            this.result = values.result;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'review')) {
            this.review = values.review;
        }
    }

    initValues() {
        super.initValues();

        this.scoring = null;
        this.result = null;
        this.review = null;
    }
}

module.exports = FraudScreening;
