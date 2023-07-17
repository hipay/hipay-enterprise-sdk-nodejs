'use strict';

const AbstractRequestPart = require('./AbstractRequestPart');

class CommonRequest extends AbstractRequestPart {
  constructor(values) {
    super();
    this.initValues();

    if (typeof values !== 'object') {
      values = {};
    }

    if (Object.prototype.hasOwnProperty.call(values, 'customData')) {
      this.customData = values.customData;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'source')) {
      this.source = values.source;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'basket')) {
      this.basket = values.basket;
    }
  }

  initValues() {
    this.customData = null;
    this.source = null;
    this.basket = null;
  }
}

module.exports = CommonRequest;
