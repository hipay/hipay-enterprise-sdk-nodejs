const DeliveryShippingInfoRequest = require('../../../../../Gateway/Request/Info/DeliveryShippingInfoRequest');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let deliveryShippingInfoRequest;

        expect(() => {
            deliveryShippingInfoRequest = new DeliveryShippingInfoRequest({
                delivery_date: '{DELIVERY_DATE}',
                delivery_method: '{DELIVERY_METHOD}'
            });
        }).not.toThrow();

        expect(deliveryShippingInfoRequest).toBeInstanceOf(DeliveryShippingInfoRequest);
        expect(deliveryShippingInfoRequest.delivery_date).toEqual('{DELIVERY_DATE}');
        expect(deliveryShippingInfoRequest.delivery_method).toEqual('{DELIVERY_METHOD}');
    });

    it('Initializes correctly with empty parameters', () => {
        let deliveryShippingInfoRequest;

        expect(() => {
            deliveryShippingInfoRequest = new DeliveryShippingInfoRequest({});
        }).not.toThrow();

        expect(deliveryShippingInfoRequest).toBeInstanceOf(DeliveryShippingInfoRequest);
        expect(deliveryShippingInfoRequest.delivery_date).toEqual(null);
        expect(deliveryShippingInfoRequest.delivery_method).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let deliveryShippingInfoRequest;

        expect(() => {
            deliveryShippingInfoRequest = new DeliveryShippingInfoRequest();
        }).not.toThrow();

        expect(deliveryShippingInfoRequest).toBeInstanceOf(DeliveryShippingInfoRequest);
        expect(deliveryShippingInfoRequest.delivery_date).toEqual(null);
        expect(deliveryShippingInfoRequest.delivery_method).toEqual(null);
    });
});
