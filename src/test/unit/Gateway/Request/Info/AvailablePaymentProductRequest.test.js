const AvailablePaymentProductRequest = require('../../../../../Gateway/Request/Info/AvailablePaymentProductRequest');

const InvalidArgumentException = require('../../../../../Error/InvalidArgumentException');
jest.mock('../../../../../Error/InvalidArgumentException');

afterEach(() => {
    InvalidArgumentException.mockReset();
});

describe('Test constructor', () => {
    it('Initializes correctly with full parameters', () => {
        let availablePaymentProductRequest;

        expect(() => {
            availablePaymentProductRequest = new AvailablePaymentProductRequest({
                operation: ['4'],
                payment_product: ['paypal'],
                eci: ['7'],
                with_options: true,
                customer_country: ['FR'],
                currency: ['EUR'],
                payment_product_category: ['credit-card']
            });
        }).not.toThrow();

        expect(availablePaymentProductRequest).toBeInstanceOf(AvailablePaymentProductRequest);
        expect(availablePaymentProductRequest.operation).toEqual(['4']);
        expect(availablePaymentProductRequest.payment_product).toEqual(['paypal']);
        expect(availablePaymentProductRequest.eci).toEqual(['7']);
        expect(availablePaymentProductRequest.with_options).toEqual(true);
        expect(availablePaymentProductRequest.customer_country).toEqual(['FR']);
        expect(availablePaymentProductRequest.currency).toEqual(['EUR']);
        expect(availablePaymentProductRequest.payment_product_category).toEqual(['credit-card']);
    });

    it('Initializes correctly with no parameters', () => {
        let availablePaymentProductRequest;

        expect(() => {
            availablePaymentProductRequest = new AvailablePaymentProductRequest();
        }).not.toThrow();

        expect(availablePaymentProductRequest).toBeInstanceOf(AvailablePaymentProductRequest);
        expect(availablePaymentProductRequest.operation).toEqual(['4']);
        expect(availablePaymentProductRequest.payment_product).toEqual([]);
        expect(availablePaymentProductRequest.eci).toEqual(['7']);
        expect(availablePaymentProductRequest.with_options).toEqual(false);
        expect(availablePaymentProductRequest.customer_country).toEqual([]);
        expect(availablePaymentProductRequest.currency).toEqual([]);
        expect(availablePaymentProductRequest.payment_product_category).toEqual([]);
    });
});
