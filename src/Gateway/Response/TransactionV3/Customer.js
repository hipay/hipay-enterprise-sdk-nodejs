'use strict';

const AbstractResponsePart = require('../AbstractResponsePart');

class Customer extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {String} [values.id]
     * @param {Number} [values.firstname]
     * @param {Number} [values.email]
     * @param {String} [values.phone]
     * @param {String} [values.language]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

        if (Object.prototype.hasOwnProperty.call(values, 'id')) {
            this.id = values.id;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'firstname')) {
            this.firstname = values.firstname;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'email')) {
            this.email = values.email;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'phone')) {
            this.phone = values.phone;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'language')) {
            this.language = values.language;
        }
    }

    initValues() {
        super.initValues();

        this.id = null;
        this.firstname = null;
        this.email = null;
        this.phone = null;
        this.language = null;
    }
}

module.exports = Customer;
