'use strict';

const AbstractResponsePart = require('./AbstractResponsePart');

class Operation extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {import('../../Enum/Transaction/Operation')} [values.operation]
     * @param {String} [values.mid]
     * @param {String} [values.authorizationCode]
     * @param {String} [values.transactionReference]
     * @param {String} [values.dateCreated]
     * @param {String} [values.dateUpdated]
     * @param {String} [values.dateAuthorized]
     * @param {Number} [values.status]
     * @param {String} [values.state]
     * @param {String} values.message
     * @param {Number} [values.authorizedAmount]
     * @param {Number} [values.capturedAmount]
     * @param {Number} [values.refundedAmount]
     * @param {Number} [values.decimals]
     * @param {String} [values.currency]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

        if (Object.hasOwn(values, 'operation')) {
            this.operation = values.operation;
        }

        if (Object.hasOwn(values, 'mid')) {
            this.mid = values.mid;
        }

        if (Object.hasOwn(values, 'authorizationCode')) {
            this.authorizationCode = values.authorizationCode;
        }

        if (Object.hasOwn(values, 'transactionReference')) {
            this.transactionReference = values.transactionReference;
        }

        if (Object.hasOwn(values, 'dateCreated')) {
            this.dateCreated = values.dateCreated;
        }

        if (Object.hasOwn(values, 'dateUpdated')) {
            this.dateUpdated = values.dateUpdated;
        }

        if (Object.hasOwn(values, 'dateAuthorized')) {
            this.dateAuthorized = values.dateAuthorized;
        }

        if (Object.hasOwn(values, 'status')) {
            this.status = values.status;
        }

        if (Object.hasOwn(values, 'state')) {
            this.state = values.state;
        }

        if (Object.hasOwn(values, 'message')) {
            this.message = values.message;
        }

        if (Object.hasOwn(values, 'authorizedAmount')) {
            this.authorizedAmount = values.authorizedAmount;
        }

        if (Object.hasOwn(values, 'capturedAmount')) {
            this.capturedAmount = values.capturedAmount;
        }

        if (Object.hasOwn(values, 'refundedAmount')) {
            this.refundedAmount = values.refundedAmount;
        }

        if (Object.hasOwn(values, 'decimals')) {
            this.decimals = values.decimals;
        }

        if (Object.hasOwn(values, 'currency')) {
            this.currency = values.currency;
        }
    }

    initValues() {
        super.initValues();

        this.operation = null;
        this.mid = null;
        this.authorizationCode = null;
        this.transactionReference = null;
        this.dateCreated = null;
        this.dateUpdated = null;
        this.dateAuthorized = null;
        this.status = null;
        this.state = null;
        this.message = null;
        this.authorizedAmount = null;
        this.capturedAmount = null;
        this.refundedAmount = null;
        this.decimals = null;
        this.currency = null;
    }
}

module.exports = Operation;
