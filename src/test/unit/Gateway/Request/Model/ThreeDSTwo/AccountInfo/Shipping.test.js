const Shipping = require('../../../../../../../Gateway/Request/Model/ThreeDSTwo/AccountInfo/Shipping');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let shipping;

        expect(() => {
            shipping = new Shipping({
                shippingUsedDate: '{SHIPPING_USED_DATE}',
                nameIndicator: '{NAME_INDICATOR}',
                suspiciousActivity: '{SUSPICIOUS_ACTIVITY}'
            });
        }).not.toThrow();

        expect(shipping).toBeInstanceOf(Shipping);
        expect(shipping.shippingUsedDate).toEqual('{SHIPPING_USED_DATE}');
        expect(shipping.nameIndicator).toEqual('{NAME_INDICATOR}');
        expect(shipping.suspiciousActivity).toEqual('{SUSPICIOUS_ACTIVITY}');
    });

    it('Initializes correctly with empty parameters', () => {
        let shipping;

        expect(() => {
            shipping = new Shipping({});
        }).not.toThrow();

        expect(shipping).toBeInstanceOf(Shipping);
        expect(shipping.shippingUsedDate).toEqual(null);
        expect(shipping.nameIndicator).toEqual(null);
        expect(shipping.suspiciousActivity).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let shipping;

        expect(() => {
            shipping = new Shipping();
        }).not.toThrow();

        expect(shipping).toBeInstanceOf(Shipping);
        expect(shipping.shippingUsedDate).toEqual(null);
        expect(shipping.nameIndicator).toEqual(null);
        expect(shipping.suspiciousActivity).toEqual(null);
    });
});
