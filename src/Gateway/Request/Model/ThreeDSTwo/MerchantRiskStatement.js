'use strict';
const AbstractModel = require('../AbstractModel');
const GiftCard = require('./MerchantRiskStatement/GiftCard');

class MerchantRiskStatement extends AbstractModel {
    /**
     * Creates a MerchantRiskStatement Object
     *
     * @param {Object} [values = {}]
     * @param {String} [values.emailDeliveryAddress] Customer's email adress for electronic goods
     * @param {Number} [values.deliveryTimeFrame] See DeliveryTimeFrame Enum
     * @param {Number} [values.purchaseIndicator] See PurchaseIndicator Enum
     * @param {Number} [values.preOrderDate] Date of the pre-order, format YYYYMMDD
     * @param {Number} [values.reorderIndicator] See ReorderIndicator Enum
     * @param {Number} [values.shippingIndicator] See ShippingIndicator Enum
     * @param {GiftCard} [values.giftCard] GiftCard information
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.prototype.hasOwnProperty.call(values, 'emailDeliveryAddress')) {
            this.emailDeliveryAddress = values.emailDeliveryAddress;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'deliveryTimeFrame')) {
            this.deliveryTimeFrame = values.deliveryTimeFrame;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'purchaseIndicator')) {
            this.purchaseIndicator = values.purchaseIndicator;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'preOrderDate')) {
            this.preOrderDate = values.preOrderDate;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'reorderIndicator')) {
            this.reorderIndicator = values.reorderIndicator;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'shippingIndicator')) {
            this.shippingIndicator = values.shippingIndicator;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'giftCard')) {
            if (values.giftCard instanceof GiftCard) {
                this.giftCard = values.giftCard;
            } else {
                this.giftCard = new GiftCard(values.giftCard);
            }
        }
    }

    initValues() {
        super.initValues();

        this.emailDeliveryAddress = null;
        this.deliveryTimeFrame = null;
        this.purchaseIndicator = null;
        this.preOrderDate = null;
        this.reorderIndicator = null;
        this.shippingIndicator = null;
        this.giftCard = null;
    }
}

module.exports = MerchantRiskStatement;
