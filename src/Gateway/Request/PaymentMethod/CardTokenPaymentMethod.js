'use strict';
const AbstractPaymentMethod = require('./AbstractPaymentMethod');

class CardTokenPaymentMethod extends AbstractPaymentMethod {
  constructor(values) {
    super();
    this.initValues();

    if (typeof values !== 'object') {
      values = {};
    }

    if (Object.prototype.hasOwnProperty.call(values, 'cardtoken')) {
      this.cardtoken = values.cardtoken;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'eci')) {
      this.eci = values.eci;
    }

    if (
      Object.prototype.hasOwnProperty.call(values, 'authentication_indicator')
    ) {
      this.authentication_indicator = values.authentication_indicator;
    }
  }

  initValues() {
    this.cardtoken = null;
    this.eci = null;
    this.authentication_indicator = null;
  }
}

module.exports = CardTokenPaymentMethod;
