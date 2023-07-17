'use strict';
const AbstractRequestPart = require('../AbstractRequestPart');

class CustomerShippingInfoRequest extends AbstractRequestPart {
  constructor(values) {
    super();
    this.initValues();

    if (typeof values !== 'object') {
      values = {};
    }

    if (Object.prototype.hasOwnProperty.call(values, 'shipto_firstname')) {
      this.shipto_firstname = values.shipto_firstname;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'shipto_lastname')) {
      this.shipto_lastname = values.shipto_lastname;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'shipto_recipientinfo')) {
      this.shipto_recipientinfo = values.shipto_recipientinfo;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'shipto_house_number')) {
      this.shipto_house_number = values.shipto_house_number;
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

    if (Object.prototype.hasOwnProperty.call(values, 'shipto_state')) {
      this.shipto_state = values.shipto_state;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'shipto_zipcode')) {
      this.shipto_zipcode = values.shipto_zipcode;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'shipto_country')) {
      this.shipto_country = values.shipto_country;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'shipto_phone')) {
      this.shipto_phone = values.shipto_phone;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'shipto_msisdn')) {
      this.shipto_msisdn = values.shipto_msisdn;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'shipto_gender')) {
      this.shipto_gender = values.shipto_gender;
    }
  }

  initValues() {
    this.shipto_firstname = null;
    this.shipto_lastname = null;
    this.shipto_recipientinfo = null;
    this.shipto_house_number = null;
    this.shipto_streetaddress = null;
    this.shipto_streetaddress2 = null;
    this.shipto_city = null;
    this.shipto_state = null;
    this.shipto_zipcode = null;
    this.shipto_country = null;
    this.shipto_phone = null;
    this.shipto_msisdn = null;
    this.shipto_gender = null;
  }
}

module.exports = CustomerShippingInfoRequest;
