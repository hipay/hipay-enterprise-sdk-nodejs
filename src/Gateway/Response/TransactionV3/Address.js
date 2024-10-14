'use strict';

const AbstractResponsePart = require('../AbstractResponsePart');

class Address extends AbstractResponsePart {
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


        if (Object.prototype.hasOwnProperty.call(values, 'houseNumber')) {
            this.houseNumber = values.houseNumber;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'houseExtension')) {
            this.houseExtension = values.houseExtension;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'street')) {
            this.street = values.street;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'streetAdditional')) {
            this.streetAdditional = values.streetAdditional;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'locality')) {
            this.locality = values.locality;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'localityAdditional')) {
            this.localityAdditional = values.localityAdditional;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'postalCode')) {
            this.postalCode = values.postalCode;
        }
        
        if (Object.prototype.hasOwnProperty.call(values, 'country')) {
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

module.exports = Address;

