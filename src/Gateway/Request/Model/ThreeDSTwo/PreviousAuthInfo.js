'use strict';
const AbstractModel = require('../AbstractModel');

class PreviousAuthInfo extends AbstractModel {
    /**
     * Creates a PreviousAuthInfo Object
     *
     * @param {Object} [values = {}]
     * @param {String} [values.transactionReference] Previous transaction reference made by the customer
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.prototype.hasOwnProperty.call(values, 'transactionReference')) {
            this.transactionReference = values.transactionReference;
        }
    }

    initValues() {
        super.initValues();

        this.transactionReference = null;
    }
}

module.exports = PreviousAuthInfo;
