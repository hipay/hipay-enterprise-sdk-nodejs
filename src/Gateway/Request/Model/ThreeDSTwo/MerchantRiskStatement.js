'use strict';
const AbstractModel = require('../AbstractModel');

class MerchantRiskStatement extends AbstractModel {
  constructor(values) {
    super();
    this.initValues();

    if (typeof values !== 'object') {
      values = {};
    }

    if (
      Object.prototype.hasOwnProperty.call(values, 'email_delivery_address')
    ) {
      this.email_delivery_address = values.email_delivery_address;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'delivery_time_frame')) {
      this.delivery_time_frame = values.delivery_time_frame;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'purchase_indicator')) {
      this.purchase_indicator = values.purchase_indicator;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'pre_order_date')) {
      this.pre_order_date = values.pre_order_date;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'reorder_indicator')) {
      this.reorder_indicator = values.reorder_indicator;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'shipping_indicator')) {
      this.shipping_indicator = values.shipping_indicator;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'gift_card')) {
      this.gift_card = values.gift_card;
    }
  }

  initValues() {
    this.email_delivery_address = null;
    this.delivery_time_frame = null;
    this.purchase_indicator = null;
    this.pre_order_date = null;
    this.reorder_indicator = null;
    this.shipping_indicator = null;
    this.gift_card = null;
  }
}

module.exports = MerchantRiskStatement;
