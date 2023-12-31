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

        if (Object.prototype.hasOwnProperty.call(values, 'id')) {
            this.id = values.id;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'customerId')) {
            this.customerId = values.customerId;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'amount')) {
            this.amount = values.amount;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'tax')) {
            this.tax = values.tax;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'shipping')) {
            this.shipping = values.shipping;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'dateCreated')) {
            this.dateCreated = values.dateCreated;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'attempts')) {
            this.attempts = values.attempts;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'currency')) {
            this.currency = values.currency;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'decimals')) {
            this.decimals = values.decimals;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'gender')) {
            this.gender = values.gender;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'language')) {
            this.language = values.language;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'shippingAddress')) {
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
