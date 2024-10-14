'use strict';

const AbstractResponsePart = require('../AbstractResponsePart');

class Operation extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {Number} [values.id]
     * @param {import('../../../Enum/Transaction/v3/OperationType')} [values.type]
     * @param {import('../../../Enum/Transaction/v3/OperationStatus')} [values.status]
     * @param {String} [values.amount]
     * @param {String} [values.arn]
     * @param {String} [values.merchantReference]
     * @param {String} [values.dateCreated]
     * @param {String} [values.dateRemitted]
     * @param {String} [values.dateProcessed]
     * @param {String} [values.dateReconciled]
     * @param {String} [values.currency]
     * @param {Number} [values.decimals]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

        if (Object.prototype.hasOwnProperty.call(values, 'id')) {
            this.id = values.id;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'type')) {
            this.type = values.type;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'status')) {
            this.status = values.status;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'amount')) {
            this.amount = values.amount;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'arn')) {
            this.arn = values.arn;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'merchantReference')) {
            this.merchantReference = values.merchantReference;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'dateCreated')) {
            this.dateCreated = values.dateCreated;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'dateRemitted')) {
            this.dateRemitted = values.dateRemitted;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'dateProcessed')) {
            this.dateProcessed = values.dateProcessed;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'dateReconciled')) {
            this.dateReconciled = values.dateReconciled;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'currency')) {
            this.currency = values.currency;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'decimals')) {
            this.decimals = values.decimals;
        }
    }

    initValues() {
        super.initValues();

        this.id = null;
        this.type = null;
        this.status = null;
        this.amount = null;
        this.arn = null;
        this.merchantReference = null;
        this.dateCreated = null;
        this.dateRemitted = null;
        this.dateProcessed = null;
        this.dateReconciled = null;
        this.currency = null;
        this.decimals = null;
    }
}

module.exports = Operation;
