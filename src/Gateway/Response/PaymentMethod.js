'use strict';

const AbstractResponsePart = require('./AbstractResponsePart');

class PaymentMethod extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {String} [values.token]
     * @param {String} [values.brand]
     * @param {String} [values.pan]
     * @param {String} [values.cardHolder]
     * @param {String} [values.cardExpiryMonth]
     * @param {String} [values.cardExpiryYear]
     * @param {String} [values.cardId]
     * @param {String} [values.issuer]
     * @param {String} [values.country]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

        if (Object.hasOwn(values, 'token')) {
            this.token = values.token;
        }
        if (Object.hasOwn(values, 'brand')) {
            this.brand = values.brand;
        }
        if (Object.hasOwn(values, 'pan')) {
            this.pan = values.pan;
        }
        if (Object.hasOwn(values, 'cardHolder')) {
            this.cardHolder = values.cardHolder;
        }
        if (Object.hasOwn(values, 'cardExpiryMonth')) {
            this.cardExpiryMonth = values.cardExpiryMonth;
        }
        if (Object.hasOwn(values, 'cardExpiryYear')) {
            this.cardExpiryYear = values.cardExpiryYear;
        }
        if (Object.hasOwn(values, 'cardId')) {
            this.cardId = values.cardId;
        }
        if (Object.hasOwn(values, 'issuer')) {
            this.issuer = values.issuer;
        }
        if (Object.hasOwn(values, 'country')) {
            this.country = values.country;
        }
    }

    initValues() {
        super.initValues();

        this.token = null;
        this.brand = null;
        this.pan = null;
        this.cardHolder = null;
        this.cardExpiryMonth = null;
        this.cardExpiryYear = null;
        this.cardId = null;
        this.issuer = null;
        this.country = null;
    }
}

module.exports = PaymentMethod;
