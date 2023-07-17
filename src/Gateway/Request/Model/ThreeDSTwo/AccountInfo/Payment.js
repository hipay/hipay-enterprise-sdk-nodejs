'use strict';
const AbstractModel = require('../../AbstractModel');

class Payment extends AbstractModel {
  constructor(values) {
    super();
    this.initValues();

    if (typeof values !== 'object') {
      values = {};
    }

    if (Object.prototype.hasOwnProperty.call(values, 'enrollment_date')) {
      this.enrollment_date = values.enrollment_date;
    }
  }

  initValues() {
    this.enrollment_date = null;
  }
}

module.exports = Payment;
