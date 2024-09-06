const MerchantRiskStatement = require('../../../../../../Gateway/Request/Model/ThreeDSTwo/MerchantRiskStatement');
const GiftCard = require('../../../../../../Gateway/Request/Model/ThreeDSTwo/MerchantRiskStatement/GiftCard');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let merchantRiskStatement;

        let giftCard = new GiftCard({ amount: 99.9, count: 5, currency: 'EUR' });

        expect(() => {
            merchantRiskStatement = new MerchantRiskStatement({
                emailDeliveryAddress: '{EMAIL_DELIVERY_ADDRESS}',
                deliveryTimeFrame: '{DELIVERY_TIME_FRAME}',
                purchaseIndicator: '{PURCHASE_INDICATOR}',
                preOrderDate: '{PRE_ORDER_DATE}',
                reorderIndicator: '{REORDER_INDICATOR}',
                shippingIndicator: '{SHIPPING_INDICATOR}',
                giftCard: giftCard
            });
        }).not.toThrow();

        expect(merchantRiskStatement).toBeInstanceOf(MerchantRiskStatement);
        expect(merchantRiskStatement.emailDeliveryAddress).toEqual('{EMAIL_DELIVERY_ADDRESS}');
        expect(merchantRiskStatement.deliveryTimeFrame).toEqual('{DELIVERY_TIME_FRAME}');
        expect(merchantRiskStatement.purchaseIndicator).toEqual('{PURCHASE_INDICATOR}');
        expect(merchantRiskStatement.preOrderDate).toEqual('{PRE_ORDER_DATE}');
        expect(merchantRiskStatement.reorderIndicator).toEqual('{REORDER_INDICATOR}');
        expect(merchantRiskStatement.shippingIndicator).toEqual('{SHIPPING_INDICATOR}');
        expect(merchantRiskStatement.giftCard).toStrictEqual(giftCard);
    });

    it('Initializes correctly with object giftCard', () => {
        let merchantRiskStatement;

        expect(() => {
            merchantRiskStatement = new MerchantRiskStatement({
                emailDeliveryAddress: '{EMAIL_DELIVERY_ADDRESS}',
                deliveryTimeFrame: '{DELIVERY_TIME_FRAME}',
                purchaseIndicator: '{PURCHASE_INDICATOR}',
                preOrderDate: '{PRE_ORDER_DATE}',
                reorderIndicator: '{REORDER_INDICATOR}',
                shippingIndicator: '{SHIPPING_INDICATOR}',
                giftCard: { amount: 99.9, count: 5, currency: 'EUR' }
            });
        }).not.toThrow();

        expect(merchantRiskStatement).toBeInstanceOf(MerchantRiskStatement);
        expect(merchantRiskStatement.emailDeliveryAddress).toEqual('{EMAIL_DELIVERY_ADDRESS}');
        expect(merchantRiskStatement.deliveryTimeFrame).toEqual('{DELIVERY_TIME_FRAME}');
        expect(merchantRiskStatement.purchaseIndicator).toEqual('{PURCHASE_INDICATOR}');
        expect(merchantRiskStatement.preOrderDate).toEqual('{PRE_ORDER_DATE}');
        expect(merchantRiskStatement.reorderIndicator).toEqual('{REORDER_INDICATOR}');
        expect(merchantRiskStatement.shippingIndicator).toEqual('{SHIPPING_INDICATOR}');
        expect(merchantRiskStatement.giftCard).toBeInstanceOf(GiftCard);
        expect(merchantRiskStatement.giftCard).toEqual({ amount: 99.9, count: 5, currency: 'EUR' });
    });

    it('Initializes correctly with empty parameters', () => {
        let merchantRiskStatement;

        expect(() => {
            merchantRiskStatement = new MerchantRiskStatement({});
        }).not.toThrow();

        expect(merchantRiskStatement).toBeInstanceOf(MerchantRiskStatement);
        expect(merchantRiskStatement.emailDeliveryAddress).toEqual(null);
        expect(merchantRiskStatement.deliveryTimeFrame).toEqual(null);
        expect(merchantRiskStatement.purchaseIndicator).toEqual(null);
        expect(merchantRiskStatement.preOrderDate).toEqual(null);
        expect(merchantRiskStatement.reorderIndicator).toEqual(null);
        expect(merchantRiskStatement.shippingIndicator).toEqual(null);
        expect(merchantRiskStatement.giftCard).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let merchantRiskStatement;

        expect(() => {
            merchantRiskStatement = new MerchantRiskStatement();
        }).not.toThrow();

        expect(merchantRiskStatement).toBeInstanceOf(MerchantRiskStatement);
        expect(merchantRiskStatement.emailDeliveryAddress).toEqual(null);
        expect(merchantRiskStatement.deliveryTimeFrame).toEqual(null);
        expect(merchantRiskStatement.purchaseIndicator).toEqual(null);
        expect(merchantRiskStatement.preOrderDate).toEqual(null);
        expect(merchantRiskStatement.reorderIndicator).toEqual(null);
        expect(merchantRiskStatement.shippingIndicator).toEqual(null);
        expect(merchantRiskStatement.giftCard).toEqual(null);
    });
});
