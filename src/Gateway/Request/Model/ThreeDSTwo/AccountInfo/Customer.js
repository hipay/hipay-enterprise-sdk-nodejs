'use strict';
const AbstractModel = require('../../AbstractModel');

class Customer extends AbstractModel {
    /**
     * Creates a Customer Info Object
     *
     * @param {Object} [values = {}]
     * @param {Number} [values.accountChange] Customer's last account change date, format YYYYMMDD
     * @param {Number} [values.openingAccountDate] Customer's opening account date, format YYYYMMDD
     * @param {Number} [values.passwordChange] Customer's last password change date, format YYYYMMDD
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.prototype.hasOwnProperty.call(values, 'accountChange')) {
            this.accountChange = values.accountChange;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'openingAccountDate')) {
            this.openingAccountDate = values.openingAccountDate;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'passwordChange')) {
            this.passwordChange = values.passwordChange;
        }
    }

    initValues() {
        super.initValues();

        this.accountChange = null;
        this.openingAccountDate = null;
        this.passwordChange = null;
    }
}

module.exports = Customer;
