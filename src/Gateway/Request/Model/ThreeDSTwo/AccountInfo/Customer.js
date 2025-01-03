'use strict';
const AbstractModel = require('../../AbstractModel');

class Customer extends AbstractModel {
    /**
     * Creates a Customer Info Object
     *
     * @param {Object} [values = {}]
     * @param {Number} [values.account_change] Customer's last account change date, format YYYYMMDD
     * @param {Number} [values.opening_account_date] Customer's opening account date, format YYYYMMDD
     * @param {Number} [values.password_change] Customer's last password change date, format YYYYMMDD
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.hasOwn(values, 'account_change')) {
            this.account_change = values.account_change;
        }
        if (Object.hasOwn(values, 'opening_account_date')) {
            this.opening_account_date = values.opening_account_date;
        }
        if (Object.hasOwn(values, 'password_change')) {
            this.password_change = values.password_change;
        }
    }

    initValues() {
        super.initValues();

        this.account_change = null;
        this.opening_account_date = null;
        this.password_change = null;
    }
}

module.exports = Customer;
