'use strict';

const AbstractResponsePart = require('../AbstractResponsePart');

class Customer extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {String} [values.id]
     * @param {String} [values.firstname]
     * @param {String} [values.email]
     * @param {String} [values.phone]
     * @param {String} [values.language]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

        if (Object.hasOwn(values, 'id')) {
            this.id = values.id;
        }

        if (Object.hasOwn(values, 'firstname')) {
            this.firstname = values.firstname;
        }

        if (Object.hasOwn(values, 'email')) {
            this.email = values.email;
        }

        if (Object.hasOwn(values, 'phone')) {
            this.phone = values.phone;
        }

        if (Object.hasOwn(values, 'language')) {
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
