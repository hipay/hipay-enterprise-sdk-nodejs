'use strict';
const AbstractRequestPart = require('../AbstractRequestPart');

class CustomerShippingInfoRequest extends AbstractRequestPart {
    /**
     * Creates a Shipping recipient Info object
     *
     * @param {Object} [values = {}]
     * @param {String} [values.shipto_firstname] Shipping recipient firstname
     * @param {String} [values.shipto_lastname] Shipping recipient lastname
     * @param {String} [values.shipto_recipientinfo] Shipping recipient additional info
     * @param {String} [values.shipto_house_number] Shipping recipient house number
     * @param {String} [values.shipto_streetaddress] Shipping recipient address
     * @param {String} [values.shipto_streetaddress2] Shipping recipient address (line 2)
     * @param {String} [values.shipto_city] Shipping recipient city
     * @param {String} [values.shipto_state] Shipping recipient state or province
     * @param {String} [values.shipto_zipcode] Shipping recipient zipcode
     * @param {String} [values.shipto_country] Shipping recipient country (Two letter ISO code)
     * @param {String} [values.shipto_phone] Shipping recipient phone
     * @param {String} [values.shipto_msisdn] Shipping recipient mobile phone
     * @param {String} [values.shipto_gender] Shipping recipient gender. See Gender Enum
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.hasOwn(values, 'shipto_firstname')) {
            this.shipto_firstname = values.shipto_firstname;
        }

        if (Object.hasOwn(values, 'shipto_lastname')) {
            this.shipto_lastname = values.shipto_lastname;
        }

        if (Object.hasOwn(values, 'shipto_recipientinfo')) {
            this.shipto_recipientinfo = values.shipto_recipientinfo;
        }

        if (Object.hasOwn(values, 'shipto_house_number')) {
            this.shipto_house_number = values.shipto_house_number;
        }

        if (Object.hasOwn(values, 'shipto_streetaddress')) {
            this.shipto_streetaddress = values.shipto_streetaddress;
        }

        if (Object.hasOwn(values, 'shipto_streetaddress2')) {
            this.shipto_streetaddress2 = values.shipto_streetaddress2;
        }

        if (Object.hasOwn(values, 'shipto_city')) {
            this.shipto_city = values.shipto_city;
        }

        if (Object.hasOwn(values, 'shipto_state')) {
            this.shipto_state = values.shipto_state;
        }

        if (Object.hasOwn(values, 'shipto_zipcode')) {
            this.shipto_zipcode = values.shipto_zipcode;
        }

        if (Object.hasOwn(values, 'shipto_country')) {
            this.shipto_country = values.shipto_country;
        }

        if (Object.hasOwn(values, 'shipto_phone')) {
            this.shipto_phone = values.shipto_phone;
        }

        if (Object.hasOwn(values, 'shipto_msisdn')) {
            this.shipto_msisdn = values.shipto_msisdn;
        }

        if (Object.hasOwn(values, 'shipto_gender')) {
            this.shipto_gender = values.shipto_gender;
        }
    }

    initValues() {
        super.initValues();

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
