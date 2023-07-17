'use strict';
const AbstractPaymentMethod = require('./AbstractPaymentMethod');

class IssuerBankIDPaymentMethod extends AbstractPaymentMethod {
  constructor(values) {
    super();
    this.initValues();

    if (typeof values !== 'object') {
      values = {};
    }

    if (Object.prototype.hasOwnProperty.call(values, 'issuer_bank_id')) {
      this.issuer_bank_id = values.issuer_bank_id;
    }
  }

  initValues() {
    this.issuer_bank_id = null;
  }
}

module.exports = IssuerBankIDPaymentMethod;
