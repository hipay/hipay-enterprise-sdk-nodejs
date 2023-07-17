'use strict';
const AbstractModel = require('../AbstractModel');

class PreviousAuthInfo extends AbstractModel {
  constructor(values) {
    super();
    this.initValues();

    if (typeof values !== 'object') {
      values = {};
    }

    if (Object.prototype.hasOwnProperty.call(values, 'transaction_reference')) {
      this.transaction_reference = values.transaction_reference;
    }
  }

  initValues() {
    this.transaction_reference = null;
  }
}

module.exports = PreviousAuthInfo;
