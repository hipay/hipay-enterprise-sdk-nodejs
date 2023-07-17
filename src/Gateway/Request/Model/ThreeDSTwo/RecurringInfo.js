'use strict';
const AbstractModel = require('../AbstractModel');

class RecurringInfo extends AbstractModel {
  constructor(values) {
    super();
    this.initValues();

    if (typeof values !== 'object') {
      values = {};
    }

    if (Object.prototype.hasOwnProperty.call(values, 'expiration_date')) {
      this.expiration_date = values.expiration_date;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'frequency')) {
      this.frequency = values.frequency;
    }
  }

  initValues() {
    this.expiration_date = null;
    this.frequency = null;
  }
}

module.exports = RecurringInfo;
