'use strict';

const CommonRequest = require('./CommonRequest');
const InvalidArgumentException = require('../../Error/InvalidArgumentException');

class MaintenanceRequest extends CommonRequest {
  /**
   *  Creates a Maintenance Request Object ready to use with the SDK
   *
   * @param {Object} values
   *
   * Inherited from CommonRequest
   * @param {Object} [values.customData] Request's custom data
   * @param {Object} [values.source] Request's source data
   * @param {'AUTO'|'SAPI'|'CONS'|'PAGE'|'TPE'|'RTRY'|'MANU'|'PREF'|'REVI'|'CMS'|'SSDK'|'CSDK'} [values.source.source] Technical source of this call
   * @param {string} [values.source.integration_version] Integration version (version of the CMS module for example)
   * @param {string} [values.source.brand] Source Brand (CMS name or Site name)
   * @param {string} [values.source.brand_version] Version of the brand (version of your site)
   * @param {Object} [values.basket] Request's basket data. You must send only items that must be captured or refunded.
   *
   * @param {string} values.operation Maintenance Operation. See Transaction.Operation Enum
   * @param {string} [values.currency] Maintenance Operation currency. This three-character currency code complies with ISO 4217.
   * @param {string} [values.amount] Maintenance Operation amount. Amount is required for partial maintenances. Do not specify amount for full captures or refunds.
   * @param {string} [values.operation_id] Maintenance Operation ID. This will be returned in the notifications related to this operation.
   * @param {string} [values.sub_transaction_reference] Sub Transaction Reference targeted by the operation, if relevant.
   */
  constructor(values) {
    super(values);

    if (typeof values !== 'object') {
      values = {};
    }

    if (Object.prototype.hasOwnProperty.call(values, 'operation')) {
      this.operation = values.operation;
    } else {
      throw new InvalidArgumentException(
        'Maintenance Request must have an Operation'
      );
    }

    if (Object.prototype.hasOwnProperty.call(values, 'currency')) {
      this.currency = values.currency;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'amount')) {
      this.amount = values.amount;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'operation_id')) {
      this.operation_id = values.operation_id;
    }

    if (
      Object.prototype.hasOwnProperty.call(values, 'sub_transaction_reference')
    ) {
      this.sub_transaction_reference = values.sub_transaction_reference;
    }
  }

  initValues() {
    super.initValues();

    this.operation = null;
    this.currency = null;
    this.amount = null;
    this.operation_id = null;
    this.basket = null;
    this.sub_transaction_reference = null;
    this.source = null;
  }
}

module.exports = MaintenanceRequest;
