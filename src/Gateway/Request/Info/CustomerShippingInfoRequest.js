'use strict';
const AbstractRequestPart = require('../AbstractRequestPart');

class CustomerShippingInfoRequest extends AbstractRequestPart {
    /**
     * Creates a Shipping recipient Info object
     *
     * @param {Object} [values = {}]
     * @param {String} [values.shiptoFirstname] Shipping recipient firstname
     * @param {String} [values.shiptoLastname] Shipping recipient lastname
     * @param {String} [values.shiptoRecipientinfo] Shipping recipient additional info
     * @param {String} [values.shiptoHouseNumber] Shipping recipient house number
     * @param {String} [values.shiptoStreetaddress] Shipping recipient address
     * @param {String} [values.shiptoStreetaddress2] Shipping recipient address (line 2)
     * @param {String} [values.shiptoCity] Shipping recipient city
     * @param {String} [values.shiptoState] Shipping recipient state or province
     * @param {String} [values.shiptoZipcode] Shipping recipient zipcode
     * @param {String} [values.shiptoCountry] Shipping recipient country (Two letter ISO code)
     * @param {String} [values.shiptoPhone] Shipping recipient phone
     * @param {String} [values.shiptoMsisdn] Shipping recipient mobile phone
     * @param {String} [values.shiptoGender] Shipping recipient gender. See Gender Enum
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.prototype.hasOwnProperty.call(values, 'shiptoFirstname')) {
            this.shiptoFirstname = values.shiptoFirstname;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'shiptoLastname')) {
            this.shiptoLastname = values.shiptoLastname;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'shiptoRecipientinfo')) {
            this.shiptoRecipientinfo = values.shiptoRecipientinfo;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'shiptoHouseNumber')) {
            this.shiptoHouseNumber = values.shiptoHouseNumber;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'shiptoStreetaddress')) {
            this.shiptoStreetaddress = values.shiptoStreetaddress;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'shiptoStreetaddress2')) {
            this.shiptoStreetaddress2 = values.shiptoStreetaddress2;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'shiptoCity')) {
            this.shiptoCity = values.shiptoCity;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'shiptoState')) {
            this.shiptoState = values.shiptoState;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'shiptoZipcode')) {
            this.shiptoZipcode = values.shiptoZipcode;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'shiptoCountry')) {
            this.shiptoCountry = values.shiptoCountry;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'shiptoPhone')) {
            this.shiptoPhone = values.shiptoPhone;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'shiptoMsisdn')) {
            this.shiptoMsisdn = values.shiptoMsisdn;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'shiptoGender')) {
            this.shiptoGender = values.shiptoGender;
        }
    }

    initValues() {
        super.initValues();

        this.shiptoFirstname = null;
        this.shiptoLastname = null;
        this.shiptoRecipientinfo = null;
        this.shiptoHouseNumber = null;
        this.shiptoStreetaddress = null;
        this.shiptoStreetaddress2 = null;
        this.shiptoCity = null;
        this.shiptoState = null;
        this.shiptoZipcode = null;
        this.shiptoCountry = null;
        this.shiptoPhone = null;
        this.shiptoMsisdn = null;
        this.shiptoGender = null;
    }
}

module.exports = CustomerShippingInfoRequest;
