'use strict';
const AbstractRequestPart = require('../AbstractRequestPart');

class CustomerBillingInfoRequest extends AbstractRequestPart {
    /**
     * Creates a Customer Billing Info object
     *
     * @param {Object} [values = {}]
     * @param {String} [values.email] Customer's email
     * @param {String} [values.phone] Customer's phone
     * @param {String} [values.msisdn] Customer's mobile phone
     * @param {String} [values.birthdate] Customer's birthdate, in format YYYYMMDD
     * @param {String} [values.gender] Customer's gender. See Gender Enum
     * @param {String} [values.firstname] Customer's firstname
     * @param {String} [values.lastname] Customer's lastname
     * @param {String} [values.recipientinfo] Customer's Additional information (Mr, Mrs, Dr, etc...)
     * @param {String} [values.house_extension] Customer's house extension
     * @param {String} [values.house_number] Customer's house number
     * @param {String} [values.streetaddress] Customer's address
     * @param {String} [values.streetaddress2] Customer's address (line 2)
     * @param {String} [values.city] Customer's city
     * @param {String} [values.state] Customer's state or province
     * @param {String} [values.zipcode] Customer's zipcode
     * @param {String} [values.country] Customer's country, to letter ISO code
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.hasOwn(values, 'email')) {
            this.email = values.email;
        }

        if (Object.hasOwn(values, 'phone')) {
            this.phone = values.phone;
        }

        if (Object.hasOwn(values, 'msisdn')) {
            this.msisdn = values.msisdn;
        }

        if (Object.hasOwn(values, 'birthdate')) {
            this.birthdate = values.birthdate;
        }

        if (Object.hasOwn(values, 'gender')) {
            this.gender = values.gender;
        }

        if (Object.hasOwn(values, 'firstname')) {
            this.firstname = values.firstname;
        }

        if (Object.hasOwn(values, 'lastname')) {
            this.lastname = values.lastname;
        }

        if (Object.hasOwn(values, 'recipientinfo')) {
            this.recipientinfo = values.recipientinfo;
        }

        if (Object.hasOwn(values, 'house_extension')) {
            this.house_extension = values.house_extension;
        }

        if (Object.hasOwn(values, 'house_number')) {
            this.house_number = values.house_number;
        }

        if (Object.hasOwn(values, 'streetaddress')) {
            this.streetaddress = values.streetaddress;
        }

        if (Object.hasOwn(values, 'streetaddress2')) {
            this.streetaddress2 = values.streetaddress2;
        }

        if (Object.hasOwn(values, 'city')) {
            this.city = values.city;
        }

        if (Object.hasOwn(values, 'state')) {
            this.state = values.state;
        }

        if (Object.hasOwn(values, 'zipcode')) {
            this.zipcode = values.zipcode;
        }

        if (Object.hasOwn(values, 'country')) {
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
