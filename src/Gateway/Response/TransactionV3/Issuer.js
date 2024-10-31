'use strict';

const AbstractResponsePart = require('../AbstractResponsePart');

class Issuer extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {String} [values.fullname]
     * @param {String} [values.institution]
     * @param {String} [values.country]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

        if (Object.prototype.hasOwnProperty.call(values, 'fullname')) {
            this.fullname = values.fullname;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'institution')) {
            this.institution = values.institution;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'country')) {
            this.country = values.country;
        }
    }

    initValues() {
        super.initValues();

        this.fullname = null;
        this.institution = null;
        this.country = null;
    }
}

module.exports = Issuer;
