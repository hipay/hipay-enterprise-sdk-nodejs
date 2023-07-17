'use strict';
const AbstractPaymentMethod = require('./AbstractPaymentMethod');

class OneyCarteCadeauPaymentMethod extends AbstractPaymentMethod {
  constructor(values) {
    super();
    this.initValues();

    if (typeof values !== 'object') {
      values = {};
    }

    if (
      Object.prototype.hasOwnProperty.call(values, 'payment_product_parameters')
    ) {
      if (typeof values.payment_product_parameters === 'object') {
        this.payment_product_parameters = JSON.stringify({
          prepaid_card_number:
            values.payment_product_parameters.prepaid_card_number,
          prepaid_card_security_code:
            values.payment_product_parameters.prepaid_card_security_code
        });
      } else {
        this.payment_product_parameters = values.payment_product_parameters;
      }
    }
  }

  initValues() {
    this.payment_product_parameters = null;
  }
}

module.exports = OneyCarteCadeauPaymentMethod;
