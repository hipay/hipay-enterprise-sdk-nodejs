'use strict';
const AbstractRequestPart = require('../AbstractRequestPart');

class DeliveryShippingInfoRequest extends AbstractRequestPart {
  constructor(values) {
    super();
    this.initValues();

    if (typeof values !== 'object') {
      values = {};
    }

    if (Object.prototype.hasOwnProperty.call(values, 'delivery_date')) {
      this.delivery_date = values.delivery_date;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'delivery_method')) {
      this.delivery_method = values.delivery_method;
    }
  }
  initValues() {
    this.delivery_date = null;
    this.delivery_method = null;
  }
}

module.exports = DeliveryShippingInfoRequest;
