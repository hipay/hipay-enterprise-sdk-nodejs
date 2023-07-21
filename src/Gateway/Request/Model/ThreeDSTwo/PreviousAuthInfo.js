'use strict';
const AbstractModel = require('../AbstractModel');

class PreviousAuthInfo extends AbstractModel {
  /**
   * Creates a PreviousAuthInfo Object
   *
   * @param {Object} [values = {}]
   * @param {string} [values.transaction_reference] Previous transaction reference made by the customer
   */
  constructor(values) {
    super();

    if (typeof values !== 'object') {
      values = {};
    }

    if (Object.prototype.hasOwnProperty.call(values, 'transaction_reference')) {
      this.transaction_reference = values.transaction_reference;
    }
  }

  initValues() {
    super.initValues();

    this.transaction_reference = null;
  }
}

module.exports = PreviousAuthInfo;
