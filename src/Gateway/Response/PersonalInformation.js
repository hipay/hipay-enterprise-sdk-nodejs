'use strict';

const AbstractResponsePart = require('./AbstractResponsePart');

class PersonalInformation extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {String} [values.firstname]
     * @param {String} [values.lastname]
     * @param {String} [values.streetAddress]
     * @param {String} [values.locality]
     * @param {String} [values.postalCode]
     * @param {String} [values.country]
     * @param {String} [values.msisdn]
     * @param {String} [values.phone]
     * @param {String} [values.phoneOperator]
     * @param {String} [values.email]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

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
        super.initValues();

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
