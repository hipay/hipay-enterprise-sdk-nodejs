'use strict';
const AbstractModel = require('../../AbstractModel');

class Payment extends AbstractModel {
    /**
     * Creates a Payment Info Object
     *
     * @param {Object} [values = {}]
     * @param {Number} [values.enrollment_date] Payment card first use date, format YYYYMMDD
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.hasOwn(values, 'enrollment_date')) {
            this.enrollment_date = values.enrollment_date;
        }
    }

    initValues() {
        super.initValues();

        this.enrollment_date = null;
    }
}

module.exports = Payment;
