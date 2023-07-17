'use strict';

class OperationResponse {
  constructor(values) {
    if (typeof values !== 'object') {
      values = {};
    }

    this.initValues();

    if (Object.prototype.hasOwnProperty.call(values, 'type')) {
      this.type = values.type;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'id')) {
      this.id = values.id;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'reference')) {
      this.reference = values.reference;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'amount')) {
      this.amount = values.amount;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'currency')) {
      this.currency = values.currency;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'dateAuthorized')) {
      this.dateAuthorized = values.dateAuthorized;
    }
  }

  initValues() {
    this.type = null;
    this.id = null;
    this.reference = null;
    this.amount = null;
    this.currency = null;
    this.dateAuthorized = null;
  }
}

module.exports = OperationResponse;
