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
                order_category_code: '{ORDER_CATEGORY_CODE}',
                carrier_description: '{CARRIER_DESCRIPTION}',
                payment_product_parameters: '{PAYMENT_PRODUCT_PARAMETERS}'
            });
        }).not.toThrow();

        expect(xTimesCreditCardPaymentMethod).toBeInstanceOf(XTimesCreditCardPaymentMethod);

        expect(xTimesCreditCardPaymentMethod.eci).toEqual('{ECI}');
        expect(xTimesCreditCardPaymentMethod.order_category_code).toEqual('{ORDER_CATEGORY_CODE}');
        expect(xTimesCreditCardPaymentMethod.carrier_description).toEqual('{CARRIER_DESCRIPTION}');
        expect(xTimesCreditCardPaymentMethod.payment_product_parameters).toEqual('{PAYMENT_PRODUCT_PARAMETERS}');
    });

    it('Initializes correctly with objects', () => {
        let xTimesCreditCardPaymentMethod;

        expect(() => {
            xTimesCreditCardPaymentMethod = new XTimesCreditCardPaymentMethod({
                eci: '{ECI}',
                order_category_code: '{ORDER_CATEGORY_CODE}',
                carrier_description: '{CARRIER_DESCRIPTION}',
                payment_product_parameters: {
                    value: '{PAYMENT_PRODUCT_PARAMETERS}'
                }
            });
        }).not.toThrow();

        expect(xTimesCreditCardPaymentMethod).toBeInstanceOf(XTimesCreditCardPaymentMethod);
        expect(xTimesCreditCardPaymentMethod.eci).toEqual('{ECI}');
        expect(xTimesCreditCardPaymentMethod.order_category_code).toEqual('{ORDER_CATEGORY_CODE}');
        expect(xTimesCreditCardPaymentMethod.carrier_description).toEqual('{CARRIER_DESCRIPTION}');
        expect(xTimesCreditCardPaymentMethod.payment_product_parameters).toEqual('{"value":"{PAYMENT_PRODUCT_PARAMETERS}"}');
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
        expect(xTimesCreditCardPaymentMethod.order_category_code).toEqual(null);
        expect(xTimesCreditCardPaymentMethod.carrier_description).toEqual(null);
        expect(xTimesCreditCardPaymentMethod.payment_product_parameters).toEqual(null);
    });

    it('Errors when ECI is absent', () => {
        expect(() => {
            new XTimesCreditCardPaymentMethod({
                order_category_code: '{ORDER_CATEGORY_CODE}',
                carrier_description: '{CARRIER_DESCRIPTION}',
                payment_product_parameters: '{PAYMENT_PRODUCT_PARAMETERS}'
            });
        }).toThrow();

        try {
            new XTimesCreditCardPaymentMethod({
                order_category_code: '{ORDER_CATEGORY_CODE}',
                carrier_description: '{CARRIER_DESCRIPTION}',
                payment_product_parameters: '{PAYMENT_PRODUCT_PARAMETERS}'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('ECI must be present');
    });
});
