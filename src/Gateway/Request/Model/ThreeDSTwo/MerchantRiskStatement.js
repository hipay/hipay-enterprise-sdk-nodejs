'use strict';
const AbstractModel = require('../AbstractModel');
const GiftCard = require('./MerchantRiskStatement/GiftCard');

class MerchantRiskStatement extends AbstractModel {
    /**
     * Creates a MerchantRiskStatement Object
     *
     * @param {Object} [values = {}]
     * @param {String} [values.email_delivery_address] Customer's email adress for electronic goods
     * @param {Number} [values.delivery_time_frame] See DeliveryTimeFrame Enum
     * @param {Number} [values.purchase_indicator] See PurchaseIndicator Enum
     * @param {Number} [values.pre_order_date] Date of the pre-order, format YYYYMMDD
     * @param {Number} [values.reorder_indicator] See ReorderIndicator Enum
     * @param {Number} [values.shipping_indicator] See ShippingIndicator Enum
     * @param {GiftCard} [values.gift_card] GiftCard information
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.hasOwn(values, 'email_delivery_address')) {
            this.email_delivery_address = values.email_delivery_address;
        }
        if (Object.hasOwn(values, 'delivery_time_frame')) {
            this.delivery_time_frame = values.delivery_time_frame;
        }
        if (Object.hasOwn(values, 'purchase_indicator')) {
            this.purchase_indicator = values.purchase_indicator;
        }
        if (Object.hasOwn(values, 'pre_order_date')) {
            this.pre_order_date = values.pre_order_date;
        }
        if (Object.hasOwn(values, 'reorder_indicator')) {
            this.reorder_indicator = values.reorder_indicator;
        }
        if (Object.hasOwn(values, 'shipping_indicator')) {
            this.shipping_indicator = values.shipping_indicator;
        }
        if (Object.hasOwn(values, 'gift_card')) {
            if (values.gift_card instanceof GiftCard) {
                this.gift_card = values.gift_card;
            } else {
                this.gift_card = new GiftCard(values.gift_card);
            }
        }
    }

    initValues() {
        super.initValues();

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
