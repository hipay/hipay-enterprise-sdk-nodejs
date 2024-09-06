'use strict';
const AbstractRequestPart = require('../AbstractRequestPart');

class DeliveryShippingInfoRequest extends AbstractRequestPart {
    /**
     * Creates a Delivery Info Object
     *
     * @param {Object} [values = {}]
     * @param {String} [values.deliveryDate] Delivery estimated date, format YYYY-MM-DD
     * @param {'STORE'|'STORE24H'|'CARRIER'|'CARRIER24H'|'RELAYPOINT'|'RELAYPOINT24H'|'EXPRESS24H'|'EXPRESS48H'} [values.deliveryMethod] Delivery method
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.prototype.hasOwnProperty.call(values, 'deliveryDate')) {
            this.deliveryDate = values.deliveryDate;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'deliveryMethod')) {
            this.deliveryMethod = values.deliveryMethod;
        }
    }
    initValues() {
        super.initValues();

        this.deliveryDate = null;
        this.deliveryMethod = null;
    }
}

module.exports = DeliveryShippingInfoRequest;
