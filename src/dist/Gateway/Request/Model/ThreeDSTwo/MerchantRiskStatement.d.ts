export = MerchantRiskStatement;
declare class MerchantRiskStatement extends AbstractModel {
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
    constructor(values?: {
        email_delivery_address?: string;
        delivery_time_frame?: number;
        purchase_indicator?: number;
        pre_order_date?: number;
        reorder_indicator?: number;
        shipping_indicator?: number;
        gift_card?: GiftCard;
    });
    email_delivery_address: string;
    delivery_time_frame: number;
    purchase_indicator: number;
    pre_order_date: number;
    reorder_indicator: number;
    shipping_indicator: number;
    gift_card: GiftCard;
}
import AbstractModel = require("../AbstractModel");
import GiftCard = require("./MerchantRiskStatement/GiftCard");
//# sourceMappingURL=MerchantRiskStatement.d.ts.map