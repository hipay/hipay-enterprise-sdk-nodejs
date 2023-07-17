'use strict';
const AbstractModel = require('../../AbstractModel');
const { isDateValid } = require('../../../../../../fieldManager');

class Customer extends AbstractModel {
  constructor(values) {
    super();
    this.initValues();

    if (typeof values !== 'object') {
      values = {};
    }

    if (
      Object.prototype.hasOwnProperty.call(values, 'account_change') &&
      isDateValid(values.account_change)
    ) {
      this.account_change = values.account_change;
    }
    if (
      Object.prototype.hasOwnProperty.call(values, 'opening_account_date') &&
      isDateValid(values.opening_account_date)
    ) {
      this.opening_account_date = values.opening_account_date;
    }
    if (
      Object.prototype.hasOwnProperty.call(values, 'password_change') &&
      isDateValid(values.password_change)
    ) {
      this.password_change = values.password_change;
    }
  }

  initValues() {
    this.account_change = null;
    this.opening_account_date = null;
    this.password_change = null;
  }
}

module.exports = Customer;
