'use strict';
const AbstractModel = require('../../AbstractModel');

class GiftCard extends AbstractModel {
  constructor(values) {
    super();
    this.initValues();

    if (typeof values !== 'object') {
      values = {};
    }

    if (Object.prototype.hasOwnProperty.call(values, 'amount')) {
      this.amount = values.amount;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'count')) {
      this.count = values.count;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'currency')) {
      this.currency = values.currency;
    }
  }

  initValues() {
    this.amount = null;
    this.count = null;
    this.currency = null;
  }
}

module.exports = GiftCard;
