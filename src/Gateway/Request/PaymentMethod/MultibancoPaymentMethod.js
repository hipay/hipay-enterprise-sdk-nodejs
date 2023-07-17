'use strict';
const AbstractPaymentMethod = require('./AbstractPaymentMethod');

class MultibancoPaymentMethod extends AbstractPaymentMethod {
  constructor(values) {
    super();
    this.initValues();

    if (typeof values !== 'object') {
      values = {};
    }

    if (Object.prototype.hasOwnProperty.call(values, 'expiration_limit')) {
      this.expiration_limit = values.expiration_limit;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'streetaddress')) {
      this.streetaddress = values.streetaddress;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'zipcode')) {
      this.zipcode = values.zipcode;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'phone')) {
      this.phone = values.phone;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'email')) {
      this.email = values.email;
    }
  }

  initValues() {
    this.expiration_limit = null;
    this.streetaddress = null;
    this.zipcode = null;
    this.phone = null;
    this.email = null;
  }
}

module.exports = MultibancoPaymentMethod;
