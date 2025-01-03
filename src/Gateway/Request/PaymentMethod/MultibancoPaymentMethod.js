'use strict';
const AbstractPaymentMethod = require('./AbstractPaymentMethod');

class MultibancoPaymentMethod extends AbstractPaymentMethod {
    /**
     * Creates a Multibanco Payment Method Object
     *
     * @param {Object} [values = {}]
     * @param {Number} [values.expiration_limit = 3] Expiration limit in days
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.hasOwn(values, 'expiration_limit')) {
            this.expiration_limit = values.expiration_limit;
        }
    }

    initValues() {
        super.initValues();

        this.expiration_limit = 3;
    }
}

module.exports = MultibancoPaymentMethod;
