'use strict';
const AbstractPaymentMethod = require('./AbstractPaymentMethod');

class IllicadoPaymentMethod extends AbstractPaymentMethod {
  constructor(values) {
    super();
    this.initValues();

    if (typeof values !== 'object') {
      values = {};
    }

    if (Object.prototype.hasOwnProperty.call(values, 'prepaid_card_number')) {
      this.prepaid_card_number = values.prepaid_card_number;
    }
    if (
      Object.prototype.hasOwnProperty.call(values, 'prepaid_card_security_code')
    ) {
      this.prepaid_card_security_code = values.prepaid_card_security_code;
    }
  }

  initValues() {
    this.prepaid_card_number = null;
    this.prepaid_card_security_code = null;
  }
}

module.exports = IllicadoPaymentMethod;
