'use strict';
const AbstractModel = require('../../AbstractModel');

class Shipping extends AbstractModel {
    /**
     * Creates a Shipping Info Object
     *
     * @param {Object} [values = {}]
     * @param {Number} [values.shippingUsedDate] Last date this shipping address was used, format YYYYMMDD
     * @param {Number} [values.nameIndicator] Is the name on the card the same as the shipping name ? See NameIndicator Enum
     * @param {Number} [values.suspiciousActivity] Is the customer activity suspicious ? See SuspiciousActivity Enum
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.prototype.hasOwnProperty.call(values, 'shippingUsedDate')) {
            this.shippingUsedDate = values.shippingUsedDate;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'nameIndicator')) {
            this.nameIndicator = values.nameIndicator;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'suspiciousActivity')) {
            this.suspiciousActivity = values.suspiciousActivity;
        }
    }

    initValues() {
        super.initValues();

        this.shippingUsedDate = null;
        this.nameIndicator = null;
        this.suspiciousActivity = null;
    }
}

module.exports = Shipping;
