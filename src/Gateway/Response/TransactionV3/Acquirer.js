'use strict';

const AbstractResponsePart = require('./AbstractResponsePart');

class Acquirer extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {String} [values.transactionReference]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

        if (Object.prototype.hasOwnProperty.call(values, 'transactionReference')) {
            this.transactionReference = values.transactionReference;
        }
    }

    initValues() {
        super.initValues();

        this.transactionReference = null;
    }
}

module.exports = Acquirer;
