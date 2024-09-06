'use strict';
const AbstractModel = require('../../AbstractModel');

class Purchase extends AbstractModel {
    /**
     * Creates a Purchase Info Object
     *
     * @param {Object} [values = {}]
     * @param {Number} [values.count] Total number of purchases made by ths customer on the website
     * @param {Number} [values.cardStored24h] Number of cards saved by the customer on this website on the last 24h
     * @param {Number} [values.paymentAttempts24h] Number of payment attempts made by the customer on the last 24h
     * @param {Number} [values.paymentAttempts1y] Number of payment attempts made by the customer on the last year
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.prototype.hasOwnProperty.call(values, 'count')) {
            this.count = values.count;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'cardStored24h')) {
            this.cardStored24h = values.cardStored24h;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'paymentAttempts24h')) {
            this.paymentAttempts24h = values.paymentAttempts24h;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'paymentAttempts1y')) {
            this.paymentAttempts1y = values.paymentAttempts1y;
        }
    }

    initValues() {
        super.initValues();

        this.count = null;
        this.cardStored24h = null;
        this.paymentAttempts24h = null;
        this.paymentAttempts1y = null;
    }
}

module.exports = Purchase;
