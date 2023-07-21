'use strict';
const AbstractPaymentMethod = require('./AbstractPaymentMethod');
const InvalidArgumentException = require('../../../Error/InvalidArgumentException');

class OneyCarteCadeauPaymentMethod extends AbstractPaymentMethod {
  /**
   * Creates an Oney Carte Cadeau Payment Method Object
   *
   * @param {Object} values
   * @param {Object} values.payment_product_parameters Carte cadeau parameters
   * @param {Number} values.payment_product_parameters.prepaid_card_number Carte cadeau number
   * @param {Number} values.payment_product_parameters.prepaid_card_security_code Carte cadeau security code
   */
  constructor(values) {
    super();

    if (typeof values !== 'object') {
      values = {};
    }

    if (
      Object.prototype.hasOwnProperty.call(values, 'payment_product_parameters')
    ) {
      if (typeof values.payment_product_parameters === 'object') {
        if (
          !Object.prototype.hasOwnProperty.call(
            values.payment_product_parameters,
            'prepaid_card_number'
          )
        ) {
          throw new InvalidArgumentException('Card Number must be present');
        }

        if (
          !Object.prototype.hasOwnProperty.call(
            values.payment_product_parameters,
            'prepaid_card_security_code'
          )
        ) {
          throw new InvalidArgumentException(
            'Card Security Code must be present'
          );
        }

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
    super.initValues();

    this.payment_product_parameters = null;
  }
}

module.exports = OneyCarteCadeauPaymentMethod;
