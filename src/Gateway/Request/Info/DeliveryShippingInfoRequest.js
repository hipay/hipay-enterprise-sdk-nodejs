'use strict';
const AbstractRequestPart = require('../AbstractRequestPart');

class DeliveryShippingInfoRequest extends AbstractRequestPart {
  /**
   * Creates a Delivery Info Object
   *
   * @param {Object} [values = {}]
   * @param {string} [values.delivery_date] Delivery estimated date, format YYYY-MM-DD
   * @param {'STORE'|'STORE24H'|'CARRIER'|'CARRIER24H'|'RELAYPOINT'|'RELAYPOINT24H'|'EXPRESS24H'|'EXPRESS48H'} [values.delivery_method] Delivery method
   */
  constructor(values) {
    super();

    if (typeof values !== 'object') {
      values = {};
    }

    if (Object.prototype.hasOwnProperty.call(values, 'delivery_date')) {
      this.delivery_date = values.delivery_date;
    }

    if (Object.prototype.hasOwnProperty.call(values, 'delivery_method')) {
      this.delivery_method = values.delivery_method;
    }
  }
  initValues() {
    super.initValues();

    this.delivery_date = null;
    this.delivery_method = null;
  }
}

module.exports = DeliveryShippingInfoRequest;
