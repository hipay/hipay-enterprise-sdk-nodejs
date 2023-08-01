'use strict';
const AbstractModel = require('../../AbstractModel');

class Purchase extends AbstractModel {
    /**
     * Creates a Purchase Info Object
     *
     * @param {Object} [values = {}]
     * @param {Number} [values.count] Total number of purchases made by ths customer on the website
     * @param {Number} [values.card_stored_24h] Number of cards saved by the customer on this website on the last 24h
     * @param {Number} [values.payment_attempts_24h] Number of payment attempts made by the customer on the last 24h
     * @param {Number} [values.payment_attempts_1y] Number of payment attempts made by the customer on the last year
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.prototype.hasOwnProperty.call(values, 'count')) {
            this.count = values.count;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'card_stored_24h')) {
            this.card_stored_24h = values.card_stored_24h;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'payment_attempts_24h')) {
            this.payment_attempts_24h = values.payment_attempts_24h;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'payment_attempts_1y')) {
            this.payment_attempts_1y = values.payment_attempts_1y;
        }
    }

    initValues() {
        super.initValues();

        this.count = null;
        this.card_stored_24h = null;
        this.payment_attempts_24h = null;
        this.payment_attempts_1y = null;
    }
}

module.exports = Purchase;
