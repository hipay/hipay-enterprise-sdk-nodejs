const OneyCarteCadeauPaymentMethod = require('../../../../../Gateway/Request/PaymentMethod/OneyCarteCadeauPaymentMethod');
const InvalidArgumentException = require('../../../../../Error/InvalidArgumentException');
jest.mock('../../../../../Error/InvalidArgumentException');

afterEach(() => {
    InvalidArgumentException.mockReset();
});

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let oneyCarteCadeauPaymentMethod;

        expect(() => {
            oneyCarteCadeauPaymentMethod = new OneyCarteCadeauPaymentMethod({
                paymentProductParameters: '{PAYMENT_PRODUCT_PARAMS}'
            });
        }).not.toThrow();

        expect(oneyCarteCadeauPaymentMethod).toBeInstanceOf(OneyCarteCadeauPaymentMethod);
        expect(oneyCarteCadeauPaymentMethod.paymentProductParameters).toEqual('{PAYMENT_PRODUCT_PARAMS}');
    });

    it('Initializes correctly with object', () => {
        let oneyCarteCadeauPaymentMethod;

        expect(() => {
            oneyCarteCadeauPaymentMethod = new OneyCarteCadeauPaymentMethod({
                paymentProductParameters: {
                    prepaidCardNumber: '{PREPAID_CARD_NUMBER}',
                    prepaidCardSecurityCode: '{PREPAID_CARD_SECURITY_CODE}',
                    value: '{DUMMY}'
                }
            });
        }).not.toThrow();

        expect(oneyCarteCadeauPaymentMethod).toBeInstanceOf(OneyCarteCadeauPaymentMethod);
        expect(oneyCarteCadeauPaymentMethod.paymentProductParameters).toEqual(
            JSON.stringify({
                prepaidCardNumber: '{PREPAID_CARD_NUMBER}',
                prepaidCardSecurityCode: '{PREPAID_CARD_SECURITY_CODE}'
            })
        );
    });

    it('Errors when parameters does not have card number', () => {
        let oneyCarteCadeauPaymentMethod;

        expect(() => {
            oneyCarteCadeauPaymentMethod = new OneyCarteCadeauPaymentMethod({
                paymentProductParameters: {
                    prepaidCardSecurityCode: '{PREPAID_CARD_SECURITY_CODE}',
                    value: '{DUMMY}'
                }
            });
        }).toThrow();

        try {
            new OneyCarteCadeauPaymentMethod({
                paymentProductParameters: {
                    prepaidCardSecurityCode: '{PREPAID_CARD_SECURITY_CODE}',
                    value: '{DUMMY}'
                }
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Card Number must be present');
    });

    it('Errors when parameters does not have card key', () => {
        let oneyCarteCadeauPaymentMethod;

        expect(() => {
            oneyCarteCadeauPaymentMethod = new OneyCarteCadeauPaymentMethod({
                paymentProductParameters: {
                    prepaidCardNumber: '{PREPAID_CARD_NUMBER}',
                    value: '{DUMMY}'
                }
            });
        }).toThrow();

        try {
            new OneyCarteCadeauPaymentMethod({
                paymentProductParameters: {
                    prepaidCardNumber: '{PREPAID_CARD_NUMBER}',
                    value: '{DUMMY}'
                }
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Card Security Code must be present');
    });

    it('Initializes correctly with empty parameters', () => {
        let oneyCarteCadeauPaymentMethod;

        expect(() => {
            oneyCarteCadeauPaymentMethod = new OneyCarteCadeauPaymentMethod({});
        }).not.toThrow();

        expect(oneyCarteCadeauPaymentMethod).toBeInstanceOf(OneyCarteCadeauPaymentMethod);
        expect(oneyCarteCadeauPaymentMethod.paymentProductParameters).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let oneyCarteCadeauPaymentMethod;

        expect(() => {
            oneyCarteCadeauPaymentMethod = new OneyCarteCadeauPaymentMethod();
        }).not.toThrow();

        expect(oneyCarteCadeauPaymentMethod).toBeInstanceOf(OneyCarteCadeauPaymentMethod);
        expect(oneyCarteCadeauPaymentMethod.paymentProductParameters).toEqual(null);
    });
});
