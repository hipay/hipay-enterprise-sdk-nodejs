const XTimesCreditCardPaymentMethod = require('../../../../../Gateway/Request/PaymentMethod/XTimesCreditCardPaymentMethod');
const InvalidArgumentException = require('../../../../../Error/InvalidArgumentException');

jest.mock('../../../../../Error/InvalidArgumentException');

afterEach(() => {
    InvalidArgumentException.mockReset();
});

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let xTimesCreditCardPaymentMethod;

        expect(() => {
            xTimesCreditCardPaymentMethod = new XTimesCreditCardPaymentMethod({
                eci: '{ECI}',
                orderCategoryCode: '{ORDER_CATEGORY_CODE}',
                carrierDescription: '{CARRIER_DESCRIPTION}',
                paymentProductParameters: '{PAYMENT_PRODUCT_PARAMETERS}'
            });
        }).not.toThrow();

        expect(xTimesCreditCardPaymentMethod).toBeInstanceOf(XTimesCreditCardPaymentMethod);

        expect(xTimesCreditCardPaymentMethod.eci).toEqual('{ECI}');
        expect(xTimesCreditCardPaymentMethod.orderCategoryCode).toEqual('{ORDER_CATEGORY_CODE}');
        expect(xTimesCreditCardPaymentMethod.carrierDescription).toEqual('{CARRIER_DESCRIPTION}');
        expect(xTimesCreditCardPaymentMethod.paymentProductParameters).toEqual('{PAYMENT_PRODUCT_PARAMETERS}');
    });

    it('Initializes correctly with objects', () => {
        let xTimesCreditCardPaymentMethod;

        expect(() => {
            xTimesCreditCardPaymentMethod = new XTimesCreditCardPaymentMethod({
                eci: '{ECI}',
                orderCategoryCode: '{ORDER_CATEGORY_CODE}',
                carrierDescription: '{CARRIER_DESCRIPTION}',
                paymentProductParameters: {
                    value: '{PAYMENT_PRODUCT_PARAMETERS}'
                }
            });
        }).not.toThrow();

        expect(xTimesCreditCardPaymentMethod).toBeInstanceOf(XTimesCreditCardPaymentMethod);
        expect(xTimesCreditCardPaymentMethod.eci).toEqual('{ECI}');
        expect(xTimesCreditCardPaymentMethod.orderCategoryCode).toEqual('{ORDER_CATEGORY_CODE}');
        expect(xTimesCreditCardPaymentMethod.carrierDescription).toEqual('{CARRIER_DESCRIPTION}');
        expect(xTimesCreditCardPaymentMethod.paymentProductParameters).toEqual('{"value":"{PAYMENT_PRODUCT_PARAMETERS}"}');
    });

    it('Initializes correctly with minimal parameters', () => {
        let xTimesCreditCardPaymentMethod;

        expect(() => {
            xTimesCreditCardPaymentMethod = new XTimesCreditCardPaymentMethod({
                eci: '{ECI}'
            });
        }).not.toThrow();

        expect(xTimesCreditCardPaymentMethod).toBeInstanceOf(XTimesCreditCardPaymentMethod);

        expect(xTimesCreditCardPaymentMethod.eci).toEqual('{ECI}');
        expect(xTimesCreditCardPaymentMethod.orderCategoryCode).toEqual(null);
        expect(xTimesCreditCardPaymentMethod.carrierDescription).toEqual(null);
        expect(xTimesCreditCardPaymentMethod.paymentProductParameters).toEqual(null);
    });

    it('Errors when ECI is absent', () => {
        expect(() => {
            new XTimesCreditCardPaymentMethod({
                orderCategoryCode: '{ORDER_CATEGORY_CODE}',
                carrierDescription: '{CARRIER_DESCRIPTION}',
                paymentProductParameters: '{PAYMENT_PRODUCT_PARAMETERS}'
            });
        }).toThrow();

        try {
            new XTimesCreditCardPaymentMethod({
                orderCategoryCode: '{ORDER_CATEGORY_CODE}',
                carrierDescription: '{CARRIER_DESCRIPTION}',
                paymentProductParameters: '{PAYMENT_PRODUCT_PARAMETERS}'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('ECI must be present');
    });
});
