'use strict';
const AbstractModel = require('../../AbstractModel');

class Shipping extends AbstractModel {
  constructor(values) {
    super();
    this.initValues();

    if (typeof values !== 'object') {
      values = {};
    }

    if (Object.prototype.hasOwnProperty.call(values, 'shipping_used_date')) {
      this.shipping_used_date = values.shipping_used_date;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'name_indicator')) {
      this.name_indicator = values.name_indicator;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'suspicious_activity')) {
      this.suspicious_activity = values.suspicious_activity;
    }
  }

  initValues() {
    this.shipping_used_date = null;
    this.name_indicator = null;
    this.suspicious_activity = null;
  }
}

module.exports = Shipping;
