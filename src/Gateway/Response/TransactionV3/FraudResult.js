'use strict';

const AbstractResponsePart = require('../AbstractResponsePart');

class FraudResult extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {import('../../../Enum/Transaction/V3/Result')} [values.result]
     * @param {import('../../../Enum/Transaction/V3/Review')} [values.review]
     * @param {Number} [values.score]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

        if (Object.hasOwn(values, 'result')) {
            this.result = values.result;
        }

        if (Object.hasOwn(values, 'review')) {
            this.review = values.review;
        }

        if (Object.hasOwn(values, 'score')) {
            this.score = values.score;
        }
    }

    initValues() {
        super.initValues();

        this.result = null;
        this.review = null;
        this.score = null;
    }
}

module.exports = FraudResult;
