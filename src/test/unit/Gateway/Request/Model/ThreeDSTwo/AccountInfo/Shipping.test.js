const Shipping = require('../../../../../../../Gateway/Request/Model/ThreeDSTwo/AccountInfo/Shipping');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let shipping;

        expect(() => {
            shipping = new Shipping({
                shipping_used_date: '{SHIPPING_USED_DATE}',
                name_indicator: '{NAME_INDICATOR}',
                suspicious_activity: '{SUSPICIOUS_ACTIVITY}'
            });
        }).not.toThrow();

        expect(shipping).toBeInstanceOf(Shipping);
        expect(shipping.shipping_used_date).toEqual('{SHIPPING_USED_DATE}');
        expect(shipping.name_indicator).toEqual('{NAME_INDICATOR}');
        expect(shipping.suspicious_activity).toEqual('{SUSPICIOUS_ACTIVITY}');
    });

    it('Initializes correctly with empty parameters', () => {
        let shipping;

        expect(() => {
            shipping = new Shipping({});
        }).not.toThrow();

        expect(shipping).toBeInstanceOf(Shipping);
        expect(shipping.shipping_used_date).toEqual(null);
        expect(shipping.name_indicator).toEqual(null);
        expect(shipping.suspicious_activity).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let shipping;

        expect(() => {
            shipping = new Shipping();
        }).not.toThrow();

        expect(shipping).toBeInstanceOf(Shipping);
        expect(shipping.shipping_used_date).toEqual(null);
        expect(shipping.name_indicator).toEqual(null);
        expect(shipping.suspicious_activity).toEqual(null);
    });
});
