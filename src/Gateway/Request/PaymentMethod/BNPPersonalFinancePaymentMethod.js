'use strict';
const AbstractPaymentMethod = require('./AbstractPaymentMethod');

class BNPPersonalFinancePaymentMethod extends AbstractPaymentMethod {
  constructor(values) {
    super();
    this.initValues();

    if (typeof values !== 'object') {
      values = {};
    }

    if (Object.prototype.hasOwnProperty.call(values, 'email')) {
      this.email = values.email;
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

    if (Object.prototype.hasOwnProperty.call(values, 'streetaddress')) {
      this.streetaddress = values.streetaddress;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'streetaddress2')) {
      this.streetaddress2 = values.streetaddress2;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'city')) {
      this.city = values.city;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'zipcode')) {
      this.zipcode = values.zipcode;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'country')) {
      this.country = values.country;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'phone')) {
      this.phone = values.phone;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'shipto_firstname')) {
      this.shipto_firstname = values.shipto_firstname;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'shipto_lastname')) {
      this.shipto_lastname = values.shipto_lastname;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'shipto_streetaddress')) {
      this.shipto_streetaddress = values.shipto_streetaddress;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'shipto_streetaddress2')) {
      this.shipto_streetaddress2 = values.shipto_streetaddress2;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'shipto_city')) {
      this.shipto_city = values.shipto_city;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'shipto_zipcode')) {
      this.shipto_zipcode = values.shipto_zipcode;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'shipto_country')) {
      this.shipto_country = values.shipto_country;
    }
  }

  initValues() {
    this.email = null;
    this.gender = null;
    this.firstname = null;
    this.lastname = null;
    this.streetaddress = null;
    this.streetaddress2 = null;
    this.city = null;
    this.zipcode = null;
    this.country = null;
    this.phone = null;
    this.shipto_firstname = null;
    this.shipto_lastname = null;
    this.shipto_streetaddress = null;
    this.shipto_streetaddress2 = null;
    this.shipto_city = null;
    this.shipto_zipcode = null;
    this.shipto_country = null;
  }
}

module.exports = BNPPersonalFinancePaymentMethod;
