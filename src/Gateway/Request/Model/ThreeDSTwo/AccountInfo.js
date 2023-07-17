'use strict';
const AbstractModel = require('../AbstractModel');

class AccountInfo extends AbstractModel {
  constructor(values) {
    super();
    this.initValues();

    if (typeof values !== 'object') {
      values = {};
    }

    if (Object.prototype.hasOwnProperty.call(values, 'customer')) {
      this.customer = values.customer;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'purchase')) {
      this.purchase = values.purchase;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'payment')) {
      this.payment = values.payment;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'shipping')) {
      this.shipping = values.shipping;
    }
  }

  initValues() {
    this.customer = null;
    this.purchase = null;
    this.payment = null;
    this.shipping = null;
  }
}

module.exports = AccountInfo;
