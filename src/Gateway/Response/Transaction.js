'use strict';

const AbstractResponsePart = require('./AbstractResponsePart');

class Transaction extends AbstractResponsePart {
    /**
     * @param {Object} values
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
     * @param {Object} [values.reason]
     * @param {String} [values.reason.message]
     * @param {String} [values.forwardUrl]
     * @param {String} [values.attemptId]
     * @param {String} [values.referenceToPay]
     * @param {String} [values.ipAddress]
     * @param {String} [values.ipCountry]
     * @param {String} [values.deviceId]
     * @param {String} [values.avsResult]
     * @param {String} [values.cvcResult]
     * @param {String} [values.eci]
     * @param {String} [values.paymentProduct]
     * @param {import('./PaymentMethod')} [values.paymentMethod]
     * @param {import('./ThreeDSecure')} [values.threeDSecure]
     * @param {import('./FraudScreening')} [values.fraudScreening]
     * @param {import('./Order')} [values.order]
     * @param {Object} [values.debitAgreement]
     * @param {Object} [values.basket]
     * @param {import('./OperationResponse')} [values.operation]
     * @param {Object} [values.customData]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

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
        if (Object.hasOwn(values, 'reason')) {
            this.reason = values.reason;
        }
        if (Object.hasOwn(values, 'forwardUrl')) {
            this.forwardUrl = values.forwardUrl;
        }
        if (Object.hasOwn(values, 'attemptId')) {
            this.attemptId = values.attemptId;
        }
        if (Object.hasOwn(values, 'referenceToPay')) {
            this.referenceToPay = values.referenceToPay;
        }
        if (Object.hasOwn(values, 'ipAddress')) {
            this.ipAddress = values.ipAddress;
        }
        if (Object.hasOwn(values, 'ipCountry')) {
            this.ipCountry = values.ipCountry;
        }
        if (Object.hasOwn(values, 'deviceId')) {
            this.deviceId = values.deviceId;
        }
        if (Object.hasOwn(values, 'avsResult')) {
            this.avsResult = values.avsResult;
        }
        if (Object.hasOwn(values, 'cvcResult')) {
            this.cvcResult = values.cvcResult;
        }
        if (Object.hasOwn(values, 'eci')) {
            this.eci = values.eci;
        }
        if (Object.hasOwn(values, 'paymentProduct')) {
            this.paymentProduct = values.paymentProduct;
        }
        if (Object.hasOwn(values, 'paymentMethod')) {
            this.paymentMethod = values.paymentMethod;
        }
        if (Object.hasOwn(values, 'threeDSecure')) {
            this.threeDSecure = values.threeDSecure;
        }
        if (Object.hasOwn(values, 'fraudScreening')) {
            this.fraudScreening = values.fraudScreening;
        }
        if (Object.hasOwn(values, 'order')) {
            this.order = values.order;
        }
        if (Object.hasOwn(values, 'debitAgreement')) {
            this.debitAgreement = values.debitAgreement;
        }
        if (Object.hasOwn(values, 'basket')) {
            this.basket = values.basket;
        }
        if (Object.hasOwn(values, 'operation')) {
            this.operation = values.operation;
        }
        if (Object.hasOwn(values, 'customData')) {
            this.customData = values.customData;
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
        this.reason = null;
        this.forwardUrl = null;
        this.attemptId = null;
        this.referenceToPay = null;
        this.ipAddress = null;
        this.ipCountry = null;
        this.deviceId = null;
        this.avsResult = null;
        this.cvcResult = null;
        this.eci = null;
        this.paymentProduct = null;
        this.paymentMethod = null;
        this.threeDSecure = null;
        this.fraudScreening = null;
        this.order = null;
        this.debitAgreement = null;
        this.basket = null;
        this.operation = null;
        this.customData = null;
    }
}

module.exports = Transaction;
