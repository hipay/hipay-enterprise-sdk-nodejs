'use strict';

const AbstractResponsePart = require('./AbstractResponsePart');

class Transaction extends AbstractResponsePart {
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
    if (Object.prototype.hasOwnProperty.call(values, 'reason')) {
      this.reason = values.reason;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'forwardUrl')) {
      this.forwardUrl = values.forwardUrl;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'attemptId')) {
      this.attemptId = values.attemptId;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'referenceToPay')) {
      this.referenceToPay = values.referenceToPay;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'ipAddress')) {
      this.ipAddress = values.ipAddress;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'ipCountry')) {
      this.ipCountry = values.ipCountry;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'deviceId')) {
      this.deviceId = values.deviceId;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'avsResult')) {
      this.avsResult = values.avsResult;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'cvcResult')) {
      this.cvcResult = values.cvcResult;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'eci')) {
      this.eci = values.eci;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'paymentProduct')) {
      this.paymentProduct = values.paymentProduct;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'paymentMethod')) {
      this.paymentMethod = values.paymentMethod;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'threeDSecure')) {
      this.threeDSecure = values.threeDSecure;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'fraudScreening')) {
      this.fraudScreening = values.fraudScreening;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'order')) {
      this.order = values.order;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'debitAgreement')) {
      this.debitAgreement = values.debitAgreement;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'basket')) {
      this.basket = values.basket;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'operation')) {
      this.operation = values.operation;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'customData')) {
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
