'use strict';

const AbstractResponsePart = require('./AbstractResponsePart');

class Operation extends AbstractResponsePart {
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

        if (Object.prototype.hasOwnProperty.call(values, 'mid')) {
            this.mid = values.mid;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'authorizationCode')) {
            this.authorizationCode = values.authorizationCode;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'transactionReference')) {
            this.transactionReference = values.transactionReference;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'dateCreated')) {
            this.dateCreated = values.dateCreated;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'dateUpdated')) {
            this.dateUpdated = values.dateUpdated;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'dateAuthorized')) {
            this.dateAuthorized = values.dateAuthorized;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'status')) {
            this.status = values.status;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'state')) {
            this.state = values.state;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'message')) {
            this.message = values.message;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'authorizedAmount')) {
            this.authorizedAmount = values.authorizedAmount;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'capturedAmount')) {
            this.capturedAmount = values.capturedAmount;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'refundedAmount')) {
            this.refundedAmount = values.refundedAmount;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'decimals')) {
            this.decimals = values.decimals;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'currency')) {
            this.currency = values.currency;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'operation')) {
            this.operation = values.operation;
        }
    }

    initValues() {
        super.initValues();

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
        this.operation = null;
    }
}

module.exports = Operation;
