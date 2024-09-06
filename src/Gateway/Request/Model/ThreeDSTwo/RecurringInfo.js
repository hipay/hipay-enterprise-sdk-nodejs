'use strict';
const AbstractModel = require('../AbstractModel');

class RecurringInfo extends AbstractModel {
    /**
     * Creates a Recurring Info Object
     *
     * @param {Object} [values = {}]
     * @param {Number} [values.expirationDate] Recurring payment expiration date, format YYYYMMDD
     * @param {Number} [values.frequency] Recurring payment frequency in days
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.prototype.hasOwnProperty.call(values, 'expirationDate')) {
            this.expirationDate = values.expirationDate;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'frequency')) {
            this.frequency = values.frequency;
        }
    }

    initValues() {
        super.initValues();

        this.expirationDate = null;
        this.frequency = null;
    }
}

module.exports = RecurringInfo;
