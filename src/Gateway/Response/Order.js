'use strict';

const AbstractResponsePart = require('./AbstractResponsePart');

class Order extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {String} [values.id]
     * @param {String} [values.customerId]
     * @param {Number} [values.amount]
     * @param {Number} [values.tax]
     * @param {Number} [values.shipping]
     * @param {String} [values.dateCreated]
     * @param {Number} [values.attempts]
     * @param {String} [values.currency]
     * @param {Number} [values.decimals]
     * @param {String} [values.gender]
     * @param {String} [values.language]
     * @param {import('./PersonalInformation')} [values.shippingAddress]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

        if (Object.hasOwn(values, 'id')) {
            this.id = values.id;
        }
        if (Object.hasOwn(values, 'customerId')) {
            this.customerId = values.customerId;
        }
        if (Object.hasOwn(values, 'amount')) {
            this.amount = values.amount;
        }
        if (Object.hasOwn(values, 'tax')) {
            this.tax = values.tax;
        }
        if (Object.hasOwn(values, 'shipping')) {
            this.shipping = values.shipping;
        }
        if (Object.hasOwn(values, 'dateCreated')) {
            this.dateCreated = values.dateCreated;
        }
        if (Object.hasOwn(values, 'attempts')) {
            this.attempts = values.attempts;
        }
        if (Object.hasOwn(values, 'currency')) {
            this.currency = values.currency;
        }
        if (Object.hasOwn(values, 'decimals')) {
            this.decimals = values.decimals;
        }
        if (Object.hasOwn(values, 'gender')) {
            this.gender = values.gender;
        }
        if (Object.hasOwn(values, 'language')) {
            this.language = values.language;
        }
        if (Object.hasOwn(values, 'shippingAddress')) {
            this.shippingAddress = values.shippingAddress;
        }
    }

    initValues() {
        super.initValues();

        this.id = null;
        this.customerId = null;
        this.amount = null;
        this.tax = null;
        this.shipping = null;
        this.dateCreated = null;
        this.attempts = null;
        this.currency = null;
        this.decimals = null;
        this.gender = null;
        this.language = null;
        this.shippingAddress = null;
    }
}

module.exports = Order;
