'use strict';
const AbstractRequestPart = require('../AbstractRequestPart');

class CustomerBillingInfoRequest extends AbstractRequestPart {
  /**
   * Creates a Customer Billing Info object
   *
   * @param {Object} [values = {}]
   * @param {string} [values.email] Customer's email
   * @param {string} [values.phone] Customer's phone
   * @param {string} [values.msisdn] Customer's mobile phone
   * @param {string} [values.birthdate] Customer's birthdate, in format YYYYMMDD
   * @param {string} [values.gender] Customer's gender. See Gender Enum
   * @param {string} [values.firstname] Customer's firstname
   * @param {string} [values.lastname] Customer's lastname
   * @param {string} [values.recipientinfo] Customer's Additional information (Mr, Mrs, Dr, etc...)
   * @param {string} [values.house_extension] Customer's house extension
   * @param {string} [values.house_number] Customer's house number
   * @param {string} [values.streetaddress] Customer's address
   * @param {string} [values.streetaddress2] Customer's address (line 2)
   * @param {string} [values.city] Customer's city
   * @param {string} [values.state] Customer's state or province
   * @param {string} [values.zipcode] Customer's zipcode
   * @param {string} [values.country] Customer's country, to letter ISO code
   */
  constructor(values) {
    super();

    if (typeof values !== 'object') {
      values = {};
    }

    if (Object.prototype.hasOwnProperty.call(values, 'email')) {
      this.email = values.email;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'phone')) {
      this.phone = values.phone;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'msisdn')) {
      this.msisdn = values.msisdn;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'birthdate')) {
      this.birthdate = values.birthdate;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'gender')) {
      this.gender = values.gender;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'firstname')) {
      this.firstname = values.firstname;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'lastname')) {
      this.lastname = values.lastname;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'recipientinfo')) {
      this.recipientinfo = values.recipientinfo;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'house_extension')) {
      this.house_extension = values.house_extension;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'house_number')) {
      this.house_number = values.house_number;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'streetaddress')) {
      this.streetaddress = values.streetaddress;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'streetaddress2')) {
      this.streetaddress2 = values.streetaddress2;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'city')) {
      this.city = values.city;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'state')) {
      this.state = values.state;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'zipcode')) {
      this.zipcode = values.zipcode;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'country')) {
      this.country = values.country;
    }
  }

  initValues() {
    super.initValues();

    this.email = null;
    this.phone = null;
    this.msisdn = null;
    this.birthdate = null;
    this.gender = null;
    this.firstname = null;
    this.lastname = null;
    this.recipientinfo = null;
    this.house_extension = null;
    this.house_number = null;
    this.streetaddress = null;
    this.streetaddress2 = null;
    this.city = null;
    this.state = null;
    this.zipcode = null;
    this.country = null;
  }
}

module.exports = CustomerBillingInfoRequest;
