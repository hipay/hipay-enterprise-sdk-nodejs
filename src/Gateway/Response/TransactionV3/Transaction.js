'use strict';

const AbstractResponsePart = require('../AbstractResponsePart');

class Transaction extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {Number} [values.id]
     * @param {import('./Order')} [values.order]
     * @param {Number} [values.attemptid]
     * @param {String} [values.merchantOrderId]
     * @param {import('../../../Enum/Transaction/V3/TransactionState')} [values.state]
     * @param {import('../../../Enum/Transaction/V3/TransactionStatus')} [values.status]
     * @param {import('../../../Enum/Transaction/V3/ComputedAuthenticationStatus')} [values.computedAuthenticationStatus]
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
     * @param {import('./DebitAgreement')} [values.debitAgreement]
     * @param {import('./Device')} [values.device]
     * @param {import('./Authentication')} [values.authentication]
     * @param {String} [values.authorizationCode]
     * @param {String} [values.forwardUrl]
     * @param {import('./FraudResult')} [values.fraudScreening]
     * @param {import('../../../Enum/Transaction/V3/Cvc')} [values.cvcResult]
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

        if (Object.hasOwn(values, 'id')) {
            this.id = values.id;
        }

        if (Object.hasOwn(values, 'order')) {
            this.order = values.order;
        }

        if (Object.hasOwn(values, 'attemptid')) {
            this.attemptid = values.attemptid;
        }

        if (Object.hasOwn(values, 'merchantOrderId')) {
            this.merchantOrderId = values.merchantOrderId;
        }

        if (Object.hasOwn(values, 'state')) {
            this.state = values.state;
        }

        if (Object.hasOwn(values, 'status')) {
            this.status = values.status;
        }

        if (Object.hasOwn(values, 'computedAuthenticationStatus')) {
            this.computedAuthenticationStatus = values.computedAuthenticationStatus;
        }

        if (Object.hasOwn(values, 'reason')) {
            this.reason = values.reason;
        }

        if (Object.hasOwn(values, 'eci')) {
            this.eci = values.eci;
        }

        if (Object.hasOwn(values, 'amount')) {
            this.amount = values.amount;
        }

        if (Object.hasOwn(values, 'capturedAmount')) {
            this.capturedAmount = values.capturedAmount;
        }

        if (Object.hasOwn(values, 'refundedAmount')) {
            this.refundedAmount = values.refundedAmount;
        }

        if (Object.hasOwn(values, 'creditedAmount')) {
            this.creditedAmount = values.creditedAmount;
        }

        if (Object.hasOwn(values, 'paymentProduct')) {
            this.paymentProduct = values.paymentProduct;
        }

        if (Object.hasOwn(values, 'acquirer')) {
            this.acquirer = values.acquirer;
        }

        if (Object.hasOwn(values, 'acquirerTra')) {
            this.acquirerTra = values.acquirerTra;
        }

        if (Object.hasOwn(values, 'issuer')) {
            this.issuer = values.issuer;
        }

        if (Object.hasOwn(values, 'card')) {
            this.card = values.card;
        }

        if (Object.hasOwn(values, 'debitAgreement')) {
            this.debitAgreement = values.debitAgreement;
        }

        if (Object.hasOwn(values, 'device')) {
            this.device = values.device;
        }

        if (Object.hasOwn(values, 'authentication')) {
            this.authentication = values.authentication;
        }

        if (Object.hasOwn(values, 'authorizationCode')) {
            this.authorizationCode = values.authorizationCode;
        }

        if (Object.hasOwn(values, 'forwardUrl')) {
            this.forwardUrl = values.forwardUrl;
        }

        if (Object.hasOwn(values, 'fraudScreening')) {
            this.fraudScreening = values.fraudScreening;
        }

        if (Object.hasOwn(values, 'cvcResult')) {
            this.cvcResult = values.cvcResult;
        }

        if (Object.hasOwn(values, 'customerCountry')) {
            this.customerCountry = values.customerCountry;
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

        if (Object.hasOwn(values, 'mid')) {
            this.mid = values.mid;
        }

        if (Object.hasOwn(values, 'operations')) {
            this.operations = values.operations;
        }

        if (Object.hasOwn(values, 'authorizedAmount')) {
            this.authorizedAmount = values.authorizedAmount;
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
