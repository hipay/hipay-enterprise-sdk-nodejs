'use strict';

const AbstractResponsePart = require('../AbstractResponsePart');

class Transaction extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {Number} [values.id]
     * @param {import('./Order')} [values.order]
     * @param {Number} [values.attemptid]
     * @param {String} [values.merchantOrderId]
     * @param {import('../../../Enum/Transaction/TransactionState')} [values.state]
     * @param {import('../../../Enum/Transaction/v3/TransactionStatus')} [values.status]
     * @param {import('../../../Enum/Authentication/ComputedAuthenticationStatus')} [values.computedAuthenticationStatus]
     * @param {import('./ReasonCode')} [values.reason]
     * @param {Number}[values.eci]
     * @param {String} [values.amount]
     * @param {String} [values.capturedAmount]
     * @param {String} [values.refundedAmount]
     * @param {String} [values.creditedAmount]
     * @param {import('./PaymentProduct')} [values.paymentProduct]
     * @param {import('./Acquirer')} [values.acquirer]
     * @param {Object} [values.acquirerTra]
     * @param {import('./Issuer')} [values.issuer]
     * @param {import('./Card')} [values.card]
     * @param {import('./DebitAgeement')} [values.debitAgreement]
     * @param {import('./Device')} [values.device]
     * @param {import('./Authentication')} [values.authentication]
     * @param {String} [values.authorizationCode]
     * @param {String} [values.forwardUrl]
     * @param {import('./FraudResult')} [values.fraudScreening]
     * @param {import('../../../Enum/Transaction/v3/Cvc')} [values.cvcResult]
     * @param {String} [values.customerCountry]
     * @param {String} [values.dateCreated]
     * @param {String} [values.dateUpdated]
     * @param {String} [values.dateAuthorized]
     * @param {Number} [values.mid]
     * @param {Array<import('./Operation')>} [values.operations]
     * @param {String} [values.authorizedAmount]
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

        if (Object.prototype.hasOwnProperty.call(values, 'order')) {
            this.order = values.order;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'attemptid')) {
            this.attemptid = values.attemptid;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'merchantOrderId')) {
            this.merchantOrderId = values.merchantOrderId;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'state')) {
            this.state = values.state;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'status')) {
            this.status = values.status;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'computedAuthenticationStatus')) {
            this.computedAuthenticationStatus = values.computedAuthenticationStatus;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'reason')) {
            this.reason = values.reason;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'eci')) {
            this.eci = values.eci;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'amount')) {
            this.amount = values.amount;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'capturedAmount')) {
            this.capturedAmount = values.capturedAmount;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'refundedAmount')) {
            this.refundedAmount = values.refundedAmount;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'creditedAmount')) {
            this.creditedAmount = values.creditedAmount;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'paymentProduct')) {
            this.paymentProduct = values.paymentProduct;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'acquirer')) {
            this.acquirer = values.acquirer;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'acquirerTra')) {
            this.acquirerTra = values.acquirerTra;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'issuer')) {
            this.issuer = values.issuer;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'card')) {
            this.card = values.card;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'debitAgreement')) {
            this.debitAgreement = values.debitAgreement;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'device')) {
            this.device = values.device;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'authentication')) {
            this.authentication = values.authentication;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'authorizationCode')) {
            this.authorizationCode = values.authorizationCode;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'forwardUrl')) {
            this.forwardUrl = values.forwardUrl;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'fraudScreening')) {
            this.fraudScreening = values.fraudScreening;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'cvcResult')) {
            this.cvcResult = values.cvcResult;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'customerCountry')) {
            this.customerCountry = values.customerCountry;
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

        if (Object.prototype.hasOwnProperty.call(values, 'mid')) {
            this.mid = values.mid;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'operations')) {
            this.operations = values.operations;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'authorizedAmount')) {
            this.authorizedAmount = values.authorizedAmount;
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
        this.order = null;
        this.attemptid = null;
        this.merchantOrderId = null;
        this.state = null;
        this.status = null;
        this.computedAuthenticationStatus = null;
        this.reason = null;
        this.eci = null;
        this.amount = null;
        this.capturedAmount = null;
        this.refundedAmount = null;
        this.creditedAmount = null;
        this.paymentProduct = null;
        this.acquirer = null;
        this.acquirerTra = null;
        this.issuer = null;
        this.card = null;
        this.debitAgreement = null;
        this.device = null;
        this.authentication = null;
        this.authorizationCode = null;
        this.forwardUrl = null;
        this.fraudScreening = null;
        this.cvcResult = null;
        this.customerCountry = null;
        this.dateCreated = null;
        this.dateUpdated = null;
        this.dateAuthorized = null;
        this.mid = null;
        this.operations = null;
        this.authorizedAmount = null;
        this.currency = null;
        this.decimals = null;
    }
}

module.exports = Transaction;
