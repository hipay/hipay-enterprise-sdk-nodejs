'use strict';
const AbstractModel = require('../../AbstractModel');

class Payment extends AbstractModel {
    /**
     * Creates a Payment Info Object
     *
     * @param {Object} [values = {}]
     * @param {Number} [values.enrollmentDate] Payment card first use date, format YYYYMMDD
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.prototype.hasOwnProperty.call(values, 'enrollmentDate')) {
            this.enrollmentDate = values.enrollmentDate;
        }
    }

    initValues() {
        super.initValues();

        this.enrollmentDate = null;
    }
}

module.exports = Payment;
