'use strict';

const AbstractResponsePart = require('../AbstractResponsePart');

class ShippingAddress extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {String} [values.houseNumber]
     * @param {String} [values.houseExtension]
     * @param {String} [values.street]
     * @param {String} [values.streetAdditional]
     * @param {String} [values.locality]
     * @param {String} [values.localityAdditional]
     * @param {String} [values.postalCode]
     * @param {String} [values.country]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

        if (Object.hasOwn(values, 'houseNumber')) {
            this.houseNumber = values.houseNumber;
        }

        if (Object.hasOwn(values, 'houseExtension')) {
            this.houseExtension = values.houseExtension;
        }

        if (Object.hasOwn(values, 'street')) {
            this.street = values.street;
        }

        if (Object.hasOwn(values, 'streetAdditional')) {
            this.streetAdditional = values.streetAdditional;
        }

        if (Object.hasOwn(values, 'locality')) {
            this.locality = values.locality;
        }

        if (Object.hasOwn(values, 'localityAdditional')) {
            this.localityAdditional = values.localityAdditional;
        }

        if (Object.hasOwn(values, 'postalCode')) {
            this.postalCode = values.postalCode;
        }

        if (Object.hasOwn(values, 'country')) {
            this.country = values.country;
        }
    }

    initValues() {
        super.initValues();

        this.houseNumber = null;
        this.houseExtension = null;
        this.street = null;
        this.streetAdditional = null;
        this.locality = null;
        this.localityAdditional = null;
        this.postalCode = null;
        this.country = null;
    }
}

module.exports = ShippingAddress;
