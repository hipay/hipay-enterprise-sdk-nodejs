'use strict';
const AbstractPaymentMethod = require('./AbstractPaymentMethod');
const InvalidArgumentException = require('../../../Error/InvalidArgumentException');

class IssuerBankIDPaymentMethod extends AbstractPaymentMethod {
  /**
   * Creates an Issuer Bank ID Payment Method Object
   * Used in iDeal & SEPA Direct Debit Payment Methods
   *
   * @param {Object} values
   * @param {string} values.issuer_bank_id Business Identifier Code of the customer's bank
   */
  constructor(values) {
    super();

    if (typeof values !== 'object') {
      values = {};
    }

    if (Object.prototype.hasOwnProperty.call(values, 'issuer_bank_id')) {
      this.issuer_bank_id = values.issuer_bank_id;
    } else {
      throw new InvalidArgumentException('Issuer Bank ID must be present');
    }
  }

  initValues() {
    super.initValues();

    this.issuer_bank_id = null;
  }
}

module.exports = IssuerBankIDPaymentMethod;