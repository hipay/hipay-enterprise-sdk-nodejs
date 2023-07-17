'use strict';

const CommonRequest = require('./CommonRequest');

class OrderRequest extends CommonRequest {
  constructor(values) {
    super(values);

    this.initValues();

    if (typeof values !== 'object') {
      values = {};
    }

    if (Object.prototype.hasOwnProperty.call(values, 'orderid')) {
      this.orderid = values.orderid;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'operation')) {
      this.operation = values.operation;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'paymentProduct')) {
      this.paymentProduct = values.paymentProduct;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'description')) {
      this.description = values.description;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'longDescription')) {
      this.longDescription = values.longDescription;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'currency')) {
      this.currency = values.currency;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'amount')) {
      this.amount = values.amount;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'shipping')) {
      this.shipping = values.shipping;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'tax')) {
      this.tax = values.tax;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'taxRate')) {
      this.taxRate = values.taxRate;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'cid')) {
      this.cid = values.cid;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'ipaddr')) {
      this.ipaddr = values.ipaddr;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'acceptUrl')) {
      this.acceptUrl = values.acceptUrl;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'declineUrl')) {
      this.declineUrl = values.declineUrl;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'pendingUrl')) {
      this.pendingUrl = values.pendingUrl;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'exceptionUrl')) {
      this.exceptionUrl = values.exceptionUrl;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'cancelUrl')) {
      this.cancelUrl = values.cancelUrl;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'notifyUrl')) {
      this.notifyUrl = values.notifyUrl;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'httpAccept')) {
      this.httpAccept = values.httpAccept;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'httpUserAgent')) {
      this.httpUserAgent = values.httpUserAgent;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'deviceFingerprint')) {
      this.deviceFingerprint = values.deviceFingerprint;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'language')) {
      this.language = values.language;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'customerBillingInfo')) {
      this.customerBillingInfo = values.customerBillingInfo;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'customerShippingInfo')) {
      this.customerShippingInfo = values.customerShippingInfo;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'paymentMethod')) {
      this.paymentMethod = values.paymentMethod;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'deliveryInformation')) {
      this.deliveryInformation = values.deliveryInformation;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'browserInfo')) {
      this.browserInfo = values.browserInfo;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'previousAuthInfo')) {
      this.previousAuthInfo = values.previousAuthInfo;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'merchantRiskStatement')) {
      this.merchantRiskStatement = values.merchantRiskStatement;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'accountInfo')) {
      this.accountInfo = values.accountInfo;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'deviceChannel')) {
      this.deviceChannel = values.deviceChannel;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'recurringInfo')) {
      this.recurringInfo = values.recurringInfo;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'exemption')) {
      this.exemption = values.exemption;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'salesChannel')) {
      this.salesChannel = values.salesChannel;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'requestId')) {
      this.requestId = values.requestId;
    }
  }

  initValues() {
    this.orderid = null;
    this.operation = null;
    this.paymentProduct = null;
    this.description = null;
    this.longDescription = null;
    this.currency = null;
    this.amount = null;
    this.shipping = null;
    this.tax = null;
    this.taxRate = null;
    this.cid = null;
    this.ipaddr = null;
    this.acceptUrl = null;
    this.declineUrl = null;
    this.pendingUrl = null;
    this.exceptionUrl = null;
    this.cancelUrl = null;
    this.notifyUrl = null;
    this.httpAccept = null;
    this.httpUserAgent = null;
    this.deviceFingerprint = null;
    this.language = null;
    this.customerBillingInfo = null;
    this.customerShippingInfo = null;
    this.paymentMethod = null;
    this.deliveryInformation = null;
    this.browserInfo = null;
    this.previousAuthInfo = null;
    this.merchantRiskStatement = null;
    this.accountInfo = null;
    this.deviceChannel = null;
    this.recurringInfo = null;
    this.exemption = null;
    this.salesChannel = null;
    this.requestId = null;
  }
}

module.exports = OrderRequest;
