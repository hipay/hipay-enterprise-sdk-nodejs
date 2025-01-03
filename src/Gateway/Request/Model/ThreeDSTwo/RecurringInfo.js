'use strict';
const AbstractModel = require('../AbstractModel');

class RecurringInfo extends AbstractModel {
    /**
     * Creates a Recurring Info Object
     *
     * @param {Object} [values = {}]
     * @param {Number} [values.expiration_date] Recurring payment expiration date, format YYYYMMDD
     * @param {Number} [values.frequency] Recurring payment frequency in days
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.hasOwn(values, 'expiration_date')) {
            this.expiration_date = values.expiration_date;
        }
        if (Object.hasOwn(values, 'frequency')) {
            this.frequency = values.frequency;
        }
    }

    initValues() {
        super.initValues();

        this.expiration_date = null;
        this.frequency = null;
    }
}

module.exports = RecurringInfo;
