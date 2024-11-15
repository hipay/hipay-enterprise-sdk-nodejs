'use strict';

const AbstractResponsePart = require('../AbstractResponsePart');

class Order extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {Number} [values.id]
     * @param {Number} [values.attempts]
     * @param {String} [values.amount]
     * @param {String} [values.shipping]
     * @param {String} [values.tax]
     * @param {import('./Customer')} [values.customer]
     * @param {import('./ShippingAddress')} [values.shippingTo]
     * @param {String} [values.dateCreated]
     * @param {String} [values.currency]
     * @param {Number} [values.decimals]
     * @param {import('./Address')} [values.billingTo]
     * @param {String} [values.customData]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

        if (Object.prototype.hasOwnProperty.call(values, 'id')) {
            this.id = values.id;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'attempts')) {
            this.attempts = values.attempts;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'amount')) {
            this.amount = values.amount;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'shipping')) {
            this.shipping = values.shipping;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'tax')) {
            this.tax = values.tax;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'customer')) {
            this.customer = values.customer;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'shippingTo')) {
            this.shippingTo = values.shippingTo;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'dateCreated')) {
            this.dateCreated = values.dateCreated;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'currency')) {
            this.currency = values.currency;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'decimals')) {
            this.decimals = values.decimals;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'billingTo')) {
            this.billingTo = values.billingTo;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'customData')) {
            this.customData = values.customData;
        }
    }

    initValues() {
        super.initValues();

        this.id = null;
        this.attempts = null;
        this.amount = null;
        this.shipping = null;
        this.tax = null;
        this.customer = null;
        this.shippingTo = null;
        this.dateCreated = null;
        this.currency = null;
        this.decimals = null;
        this.billingTo = null;
        this.customData = null;
    }
}

module.exports = Order;
