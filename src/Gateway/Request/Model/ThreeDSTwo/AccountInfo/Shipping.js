'use strict';
const AbstractModel = require('../../AbstractModel');

class Shipping extends AbstractModel {
    /**
     * Creates a Shipping Info Object
     *
     * @param {Object} [values = {}]
     * @param {Number} [values.shipping_used_date] Last date this shipping address was used, format YYYYMMDD
     * @param {Number} [values.name_indicator] Is the name on the card the same as the shipping name ? See NameIndicator Enum
     * @param {Number} [values.suspicious_activity] Is the customer activity suspicious ? See SuspiciousActivity Enum
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.prototype.hasOwnProperty.call(values, 'shipping_used_date')) {
            this.shipping_used_date = values.shipping_used_date;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'name_indicator')) {
            this.name_indicator = values.name_indicator;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'suspicious_activity')) {
            this.suspicious_activity = values.suspicious_activity;
        }
    }

    initValues() {
        super.initValues();

        this.shipping_used_date = null;
        this.name_indicator = null;
        this.suspicious_activity = null;
    }
}

module.exports = Shipping;
