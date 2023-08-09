const MerchantRiskStatement = require('../../../../../../Gateway/Request/Model/ThreeDSTwo/MerchantRiskStatement');
const GiftCard = require('../../../../../../Gateway/Request/Model/ThreeDSTwo/MerchantRiskStatement/GiftCard');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let merchantRiskStatement;

        let giftCard = new GiftCard({ amount: 99.9, count: 5, currency: 'EUR' });

        expect(() => {
            merchantRiskStatement = new MerchantRiskStatement({
                email_delivery_address: '{EMAIL_DELIVERY_ADDRESS}',
                delivery_time_frame: '{DELIVERY_TIME_FRAME}',
                purchase_indicator: '{PURCHASE_INDICATOR}',
                pre_order_date: '{PRE_ORDER_DATE}',
                reorder_indicator: '{REORDER_INDICATOR}',
                shipping_indicator: '{SHIPPING_INDICATOR}',
                gift_card: giftCard
            });
        }).not.toThrow();

        expect(merchantRiskStatement).toBeInstanceOf(MerchantRiskStatement);
        expect(merchantRiskStatement.email_delivery_address).toEqual('{EMAIL_DELIVERY_ADDRESS}');
        expect(merchantRiskStatement.delivery_time_frame).toEqual('{DELIVERY_TIME_FRAME}');
        expect(merchantRiskStatement.purchase_indicator).toEqual('{PURCHASE_INDICATOR}');
        expect(merchantRiskStatement.pre_order_date).toEqual('{PRE_ORDER_DATE}');
        expect(merchantRiskStatement.reorder_indicator).toEqual('{REORDER_INDICATOR}');
        expect(merchantRiskStatement.shipping_indicator).toEqual('{SHIPPING_INDICATOR}');
        expect(merchantRiskStatement.gift_card).toStrictEqual(giftCard);
    });

    it('Initializes correctly with object giftCard', () => {
        let merchantRiskStatement;

        expect(() => {
            merchantRiskStatement = new MerchantRiskStatement({
                email_delivery_address: '{EMAIL_DELIVERY_ADDRESS}',
                delivery_time_frame: '{DELIVERY_TIME_FRAME}',
                purchase_indicator: '{PURCHASE_INDICATOR}',
                pre_order_date: '{PRE_ORDER_DATE}',
                reorder_indicator: '{REORDER_INDICATOR}',
                shipping_indicator: '{SHIPPING_INDICATOR}',
                gift_card: { amount: 99.9, count: 5, currency: 'EUR' }
            });
        }).not.toThrow();

        expect(merchantRiskStatement).toBeInstanceOf(MerchantRiskStatement);
        expect(merchantRiskStatement.email_delivery_address).toEqual('{EMAIL_DELIVERY_ADDRESS}');
        expect(merchantRiskStatement.delivery_time_frame).toEqual('{DELIVERY_TIME_FRAME}');
        expect(merchantRiskStatement.purchase_indicator).toEqual('{PURCHASE_INDICATOR}');
        expect(merchantRiskStatement.pre_order_date).toEqual('{PRE_ORDER_DATE}');
        expect(merchantRiskStatement.reorder_indicator).toEqual('{REORDER_INDICATOR}');
        expect(merchantRiskStatement.shipping_indicator).toEqual('{SHIPPING_INDICATOR}');
        expect(merchantRiskStatement.gift_card).toBeInstanceOf(GiftCard);
        expect(merchantRiskStatement.gift_card).toEqual({ amount: 99.9, count: 5, currency: 'EUR' });
    });

    it('Initializes correctly with empty parameters', () => {
        let merchantRiskStatement;

        expect(() => {
            merchantRiskStatement = new MerchantRiskStatement({});
        }).not.toThrow();

        expect(merchantRiskStatement).toBeInstanceOf(MerchantRiskStatement);
        expect(merchantRiskStatement.email_delivery_address).toEqual(null);
        expect(merchantRiskStatement.delivery_time_frame).toEqual(null);
        expect(merchantRiskStatement.purchase_indicator).toEqual(null);
        expect(merchantRiskStatement.pre_order_date).toEqual(null);
        expect(merchantRiskStatement.reorder_indicator).toEqual(null);
        expect(merchantRiskStatement.shipping_indicator).toEqual(null);
        expect(merchantRiskStatement.gift_card).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let merchantRiskStatement;

        expect(() => {
            merchantRiskStatement = new MerchantRiskStatement();
        }).not.toThrow();

        expect(merchantRiskStatement).toBeInstanceOf(MerchantRiskStatement);
        expect(merchantRiskStatement.email_delivery_address).toEqual(null);
        expect(merchantRiskStatement.delivery_time_frame).toEqual(null);
        expect(merchantRiskStatement.purchase_indicator).toEqual(null);
        expect(merchantRiskStatement.pre_order_date).toEqual(null);
        expect(merchantRiskStatement.reorder_indicator).toEqual(null);
        expect(merchantRiskStatement.shipping_indicator).toEqual(null);
        expect(merchantRiskStatement.gift_card).toEqual(null);
    });
});
