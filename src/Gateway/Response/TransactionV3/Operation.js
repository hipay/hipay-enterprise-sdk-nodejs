'use strict';

const AbstractResponsePart = require('../AbstractResponsePart');

class Operation extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {Number} [values.id]
     * @param {import('../../../Enum/Transaction/V3/OperationType')} [values.type]
     * @param {import('../../../Enum/Transaction/V3/OperationStatus')} [values.status]
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

        if (Object.hasOwn(values, 'id')) {
            this.id = values.id;
        }

        if (Object.hasOwn(values, 'type')) {
            this.type = values.type;
        }

        if (Object.hasOwn(values, 'status')) {
            this.status = values.status;
        }

        if (Object.hasOwn(values, 'amount')) {
            this.amount = values.amount;
        }

        if (Object.hasOwn(values, 'arn')) {
            this.arn = values.arn;
        }

        if (Object.hasOwn(values, 'merchantReference')) {
            this.merchantReference = values.merchantReference;
        }

        if (Object.hasOwn(values, 'dateCreated')) {
            this.dateCreated = values.dateCreated;
        }

        if (Object.hasOwn(values, 'dateRemitted')) {
            this.dateRemitted = values.dateRemitted;
        }

        if (Object.hasOwn(values, 'dateProcessed')) {
            this.dateProcessed = values.dateProcessed;
        }

        if (Object.hasOwn(values, 'dateReconciled')) {
            this.dateReconciled = values.dateReconciled;
        }

        if (Object.hasOwn(values, 'currency')) {
            this.currency = values.currency;
        }

        if (Object.hasOwn(values, 'decimals')) {
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
