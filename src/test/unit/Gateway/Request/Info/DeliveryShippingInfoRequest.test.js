const DeliveryShippingInfoRequest = require('../../../../../Gateway/Request/Info/DeliveryShippingInfoRequest');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let deliveryShippingInfoRequest;

        expect(() => {
            deliveryShippingInfoRequest = new DeliveryShippingInfoRequest({
                deliveryDate: '{DELIVERY_DATE}',
                deliveryMethod: '{DELIVERY_METHOD}'
            });
        }).not.toThrow();

        expect(deliveryShippingInfoRequest).toBeInstanceOf(DeliveryShippingInfoRequest);
        expect(deliveryShippingInfoRequest.deliveryDate).toEqual('{DELIVERY_DATE}');
        expect(deliveryShippingInfoRequest.deliveryMethod).toEqual('{DELIVERY_METHOD}');
    });

    it('Initializes correctly with empty parameters', () => {
        let deliveryShippingInfoRequest;

        expect(() => {
            deliveryShippingInfoRequest = new DeliveryShippingInfoRequest({});
        }).not.toThrow();

        expect(deliveryShippingInfoRequest).toBeInstanceOf(DeliveryShippingInfoRequest);
        expect(deliveryShippingInfoRequest.deliveryDate).toEqual(null);
        expect(deliveryShippingInfoRequest.deliveryMethod).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let deliveryShippingInfoRequest;

        expect(() => {
            deliveryShippingInfoRequest = new DeliveryShippingInfoRequest();
        }).not.toThrow();

        expect(deliveryShippingInfoRequest).toBeInstanceOf(DeliveryShippingInfoRequest);
        expect(deliveryShippingInfoRequest.deliveryDate).toEqual(null);
        expect(deliveryShippingInfoRequest.deliveryMethod).toEqual(null);
    });
});
