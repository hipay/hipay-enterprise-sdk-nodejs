'use strict';
const AbstractPaymentMethod = require('./AbstractPaymentMethod');

class SEPADirectDebitPaymentMethod extends AbstractPaymentMethod {
  constructor(values) {
    super();
    this.initValues();

    if (typeof values !== 'object') {
      values = {};
    }

    if (Object.prototype.hasOwnProperty.call(values, 'debit_agreement_id')) {
      this.debit_agreement_id = values.debit_agreement_id;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'recurring_payment')) {
      this.recurring_payment = values.recurring_payment;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'bank_name')) {
      this.bank_name = values.bank_name;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'iban')) {
      this.iban = values.iban;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'firstname')) {
      this.firstname = values.firstname;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'lastname')) {
      this.lastname = values.lastname;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'gender')) {
      this.gender = values.gender;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'company_type')) {
      this.company_type = values.company_type;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'company')) {
      this.company = values.company;
    }
  }

  initValues() {
    this.debit_agreement_id = null;
    this.recurring_payment = null;
    this.bank_name = null;
    this.iban = null;
    this.firstname = null;
    this.lastname = null;
    this.gender = null;
    this.company_type = null;
    this.company = null;
  }
}

module.exports = SEPADirectDebitPaymentMethod;
