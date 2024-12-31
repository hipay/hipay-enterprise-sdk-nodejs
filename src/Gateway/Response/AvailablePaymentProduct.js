'use strict';

const AbstractResponsePart = require('./AbstractResponsePart');

class AvailablePaymentProduct extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {String} [values.id]
     * @param {String} [values.code]
     * @param {String} [values.description]
     * @param {String} [values.customerDescription]
     * @param {String} [values.paymentProductCategoryCode]
     * @param {Boolean} [values.tokenizable]
     * @param {Object} [values.options]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

        if (Object.prototype.hasOwnProperty.call(values, 'id')) {
            this.id = values.id;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'code')) {
            this.code = values.code;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'description')) {
            this.description = values.description;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'customerDescription')) {
            this.customerDescription = values.customerDescription;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'paymentProductCategoryCode')) {
            this.paymentProductCategoryCode = values.paymentProductCategoryCode;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'tokenizable')) {
            this.tokenizable = values.tokenizable;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'options')) {
            this.options = values.options;
        }
    }

    initValues() {
        super.initValues();

        this.id = null;
        this.code = null;
        this.description = null;
        this.customerDescription = null;
        this.paymentProductCategoryCode = null;
        this.tokenizable = null;
        this.options = null;
    }
}

module.exports = AvailablePaymentProduct;
