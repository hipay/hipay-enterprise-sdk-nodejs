'use strict';
const AbstractModel = require('../../AbstractModel');

class Purchase extends AbstractModel {
  constructor(values) {
    super();
    this.initValues();

    if (typeof values !== 'object') {
      values = {};
    }

    if (Object.prototype.hasOwnProperty.call(values, 'count')) {
      this.count = values.count;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'card_stored_24h')) {
      this.card_stored_24h = values.card_stored_24h;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'payment_attempts_24h')) {
      this.payment_attempts_24h = values.payment_attempts_24h;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'payment_attempts_1y')) {
      this.payment_attempts_1y = values.payment_attempts_1y;
    }
  }

  initValues() {
    this.count = null;
    this.card_stored_24h = null;
    this.payment_attempts_24h = null;
    this.payment_attempts_1y = null;
  }
}

module.exports = Purchase;
