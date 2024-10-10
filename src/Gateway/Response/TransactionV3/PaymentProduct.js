'use strict';

const AbstractResponsePart = require('./AbstractResponsePart');

class PaymentProduct extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {import('./PaymentMethod')} [values.paymentMethod]
     * @param {String} [values.name]
     * @param {String} [values.description]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

        if (Object.prototype.hasOwnProperty.call(values, 'paymentMethod')) {
            this.paymentMethod = values.paymentMethod;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'name')) {
            this.name = values.name;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'description')) {
            this.description = values.description;
        }
    }

    initValues() {
        super.initValues();

        this.paymentMethod = null;
        this.name = null;
        this.description = null;
    }
}

module.exports = PaymentProduct;
