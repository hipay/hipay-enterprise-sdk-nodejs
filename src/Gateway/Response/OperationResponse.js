'use strict';

const AbstractResponsePart = require('./AbstractResponsePart');

class OperationResponse extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {String} [values.type]
     * @param {String} [values.id]
     * @param {String} [values.reference]
     * @param {Number} [values.amount]
     * @param {String} [values.currency]
     * @param {String} [values.dateAuthorized]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

        if (Object.prototype.hasOwnProperty.call(values, 'type')) {
            this.type = values.type;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'id')) {
            this.id = values.id;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'reference')) {
            this.reference = values.reference;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'amount')) {
            this.amount = values.amount;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'currency')) {
            this.currency = values.currency;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'dateAuthorized')) {
            this.dateAuthorized = values.dateAuthorized;
        }
    }

    initValues() {
        super.initValues();

        this.type = null;
        this.id = null;
        this.reference = null;
        this.amount = null;
        this.currency = null;
        this.dateAuthorized = null;
    }
}

module.exports = OperationResponse;
