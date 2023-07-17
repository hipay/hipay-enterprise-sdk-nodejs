'use strict';

class PersonalInformation {
  constructor(values) {
    if (typeof values !== 'object') {
      values = {};
    }

    this.initValues();

    if (Object.prototype.hasOwnProperty.call(values, 'firstname')) {
      this.firstname = values.firstname;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'lastname')) {
      this.lastname = values.lastname;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'streetAddress')) {
      this.streetAddress = values.streetAddress;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'locality')) {
      this.locality = values.locality;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'postalCode')) {
      this.postalCode = values.postalCode;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'country')) {
      this.country = values.country;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'msisdn')) {
      this.msisdn = values.msisdn;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'phone')) {
      this.phone = values.phone;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'phoneOperator')) {
      this.phoneOperator = values.phoneOperator;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'email')) {
      this.email = values.email;
    }
  }

  initValues() {
    this.firstname = null;
    this.lastname = null;
    this.streetAddress = null;
    this.locality = null;
    this.postalCode = null;
    this.country = null;
    this.msisdn = null;
    this.phone = null;
    this.phoneOperator = null;
    this.email = null;
  }
}

module.exports = PersonalInformation;
