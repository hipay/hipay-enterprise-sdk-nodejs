'use strict';

const AbstractMapper = require('./AbstractMapper');
const Transaction = require('../Transaction');
const ThreeDSecureMapper = require('./ThreeDSecureMapper');
const FraudScreeningMapper = require('./FraudScreeningMapper');
const OrderMapper = require('./OrderMapper');
const OperationResponseMapper = require('./OperationResponseMapper');
const PaymentMethodMapper = require('./PaymentMethodMapper');

class TransactionMapper extends AbstractMapper {
  mapResponseToModel() {
    let values = {
      mid: typeof this.source.mid !== 'undefined' ? this.source.mid : null,
      authorizationCode:
        typeof this.source.authorizationCode !== 'undefined'
          ? this.source.authorizationCode
          : null,
      transactionReference:
        typeof this.source.transactionReference !== 'undefined'
          ? this.source.transactionReference
          : null,
      dateCreated:
        typeof this.source.dateCreated !== 'undefined'
          ? this.source.dateCreated
          : null,
      dateUpdated:
        typeof this.source.dateUpdated !== 'undefined'
          ? this.source.dateUpdated
          : null,
      dateAuthorized:
        typeof this.source.dateAuthorized !== 'undefined'
          ? this.source.dateAuthorized
          : null,
      status:
        typeof this.source.status !== 'undefined' ? this.source.status : null,
      state:
        typeof this.source.state !== 'undefined' ? this.source.state : null,
      message:
        typeof this.source.message !== 'undefined' ? this.source.message : null,
      authorizedAmount:
        typeof this.source.authorizedAmount !== 'undefined'
          ? this.source.authorizedAmount
          : null,
      capturedAmount:
        typeof this.source.capturedAmount !== 'undefined'
          ? this.source.capturedAmount
          : null,
      refundedAmount:
        typeof this.source.refundedAmount !== 'undefined'
          ? this.source.refundedAmount
          : null,
      decimals:
        typeof this.source.decimals !== 'undefined'
          ? this.source.decimals
          : null,
      currency:
        typeof this.source.currency !== 'undefined'
          ? this.source.currency
          : null,
      reason:
        typeof this.source.reason !== 'undefined' ? this.source.reason : null,
      forwardUrl:
        typeof this.source.forwardUrl !== 'undefined'
          ? this.source.forwardUrl
          : null,
      attemptId:
        typeof this.source.attemptId !== 'undefined'
          ? this.source.attemptId
          : null,
      referenceToPay:
        typeof this.source.referenceToPay !== 'undefined'
          ? this.source.referenceToPay
          : null,
      ipAddress:
        typeof this.source.ipAddress !== 'undefined'
          ? this.source.ipAddress
          : null,
      ipCountry:
        typeof this.source.ipCountry !== 'undefined'
          ? this.source.ipCountry
          : null,
      deviceId:
        typeof this.source.deviceId !== 'undefined'
          ? this.source.deviceId
          : null,
      avsResult:
        typeof this.source.avsResult !== 'undefined'
          ? this.source.avsResult
          : null,
      cvcResult:
        typeof this.source.cvcResult !== 'undefined'
          ? this.source.cvcResult
          : null,
      eci: typeof this.source.eci !== 'undefined' ? this.source.eci : null,
      paymentProduct:
        typeof this.source.paymentProduct !== 'undefined'
          ? this.source.paymentProduct
          : null,
      paymentMethod:
        typeof this.source.paymentMethod !== 'undefined'
          ? new PaymentMethodMapper(this.source.paymentMethod).mappedObject
          : null,
      threeDSecure:
        typeof this.source.threeDSecure !== 'undefined'
          ? new ThreeDSecureMapper(this.source.threeDSecure).mappedObject
          : null,
      fraudScreening:
        typeof this.source.fraudScreening !== 'undefined'
          ? new FraudScreeningMapper(this.source.fraudScreening).mappedObject
          : null,
      order:
        typeof this.source.order !== 'undefined'
          ? new OrderMapper(this.source.order).mappedObject
          : null,
      debitAgreement:
        typeof this.source.debitAgreement !== 'undefined'
          ? this.source.debitAgreement
          : null,
      basket:
        typeof this.source.basket !== 'undefined' ? this.source.basket : null,
      operation:
        typeof this.source.operation !== 'undefined'
          ? new OperationResponseMapper(this.source.operation).mappedObject
          : null,
      customData:
        typeof this.source.customData !== 'undefined'
          ? this.source.customData
          : null
    };

    this._modelObject = new Transaction(values);
  }
}

module.exports = TransactionMapper;
