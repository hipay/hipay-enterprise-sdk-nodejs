'use strict';
const AbstractPaymentMethod = require('./AbstractPaymentMethod');

class XTimesCreditCardPaymentMethod extends AbstractPaymentMethod {
  constructor(values) {
    super();
    this.initValues();

    if (typeof values !== 'object') {
      values = {};
    }

    if (Object.prototype.hasOwnProperty.call(values, 'cid')) {
      this.cid = values.cid;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'email')) {
      this.email = values.email;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'birthdate')) {
      this.birthdate = values.birthdate;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'ipaddr')) {
      this.ipaddr = values.ipaddr;
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

    if (Object.prototype.hasOwnProperty.call(values, 'msisdn')) {
      this.msisdn = values.msisdn;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'phone')) {
      this.phone = values.phone;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'shipto_gender')) {
      this.shipto_gender = values.shipto_gender;
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

    if (Object.prototype.hasOwnProperty.call(values, 'shipto_msisdn')) {
      this.shipto_msisdn = values.shipto_msisdn;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'shipto_phone')) {
      this.shipto_phone = values.shipto_phone;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'eci')) {
      this.eci = values.eci;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'order_category_code')) {
      this.order_category_code = values.order_category_code;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'delivery_date')) {
      this.delivery_date = values.delivery_date;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'delivery_method')) {
      if (typeof values.delivery_method === 'object') {
        this.delivery_method = JSON.stringify(values.delivery_method);
      } else {
        this.delivery_method = values.delivery_method;
      }
    }

    if (Object.prototype.hasOwnProperty.call(values, 'carrier_description')) {
      this.carrier_description = values.carrier_description;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'basket')) {
      if (typeof values.basket === 'object') {
        this.basket = JSON.stringify(values.basket);
      } else {
        this.basket = values.basket;
      }
    }

    if (
      Object.prototype.hasOwnProperty.call(values, 'payment_product_parameters')
    ) {
      if (typeof values.payment_product_parameters === 'object') {
        this.payment_product_parameters = JSON.stringify(
          values.payment_product_parameters
        );
      } else {
        this.payment_product_parameters = values.payment_product_parameters;
      }
    }
  }

  initValues() {
    this.cid = null;
    this.email = null;
    this.birthdate = null;
    this.ipaddr = null;

    this.gender = null;
    this.firstname = null;
    this.lastname = null;
    this.streetaddress = null;
    this.streetaddress2 = null;
    this.city = null;
    this.zipcode = null;
    this.country = null;
    this.msisdn = null;
    this.phone = null;

    this.shipto_gender = null;
    this.shipto_firstname = null;
    this.shipto_lastname = null;
    this.shipto_streetaddress = null;
    this.shipto_streetaddress2 = null;
    this.shipto_city = null;
    this.shipto_zipcode = null;
    this.shipto_country = null;
    this.shipto_msisdn = null;
    this.shipto_phone = null;

    this.eci = null;
    this.order_category_code = null;
    this.delivery_date = null;
    this.delivery_method = null;
    this.carrier_description = null;
    this.basket = null;
    this.payment_product_parameters = null;
  }
}

module.exports = XTimesCreditCardPaymentMethod;
