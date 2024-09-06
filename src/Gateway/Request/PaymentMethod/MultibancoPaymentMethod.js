'use strict';
const AbstractPaymentMethod = require('./AbstractPaymentMethod');

class MultibancoPaymentMethod extends AbstractPaymentMethod {
    /**
     * Creates a Multibanco Payment Method Object
     *
     * @param {Object} [values = {}]
     * @param {Number} [values.expirationLimit = 3] Expiration limit in days
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.prototype.hasOwnProperty.call(values, 'expirationLimit')) {
            this.expirationLimit = values.expirationLimit;
        }
    }

    initValues() {
        super.initValues();

        this.expirationLimit = 3;
    }
}

module.exports = MultibancoPaymentMethod;
