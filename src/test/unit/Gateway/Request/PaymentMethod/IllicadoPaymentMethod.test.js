const IllicadoPaymentMethod = require('../../../../../Gateway/Request/PaymentMethod/IllicadoPaymentMethod');
const InvalidArgumentException = require('../../../../../Error/InvalidArgumentException');

jest.mock('../../../../../Error/InvalidArgumentException');

afterEach(() => {
    InvalidArgumentException.mockReset();
});

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let illicadoPaymentMethod;

        expect(() => {
            illicadoPaymentMethod = new IllicadoPaymentMethod({
                prepaid_card_number: '{PREPAID_CARD_NUMBER}',
                prepaid_card_security_code: '{PREPAID_CARD_CVV}'
            });
        }).not.toThrow();

        expect(illicadoPaymentMethod).toBeInstanceOf(IllicadoPaymentMethod);
        expect(illicadoPaymentMethod.prepaid_card_number).toEqual('{PREPAID_CARD_NUMBER}');
        expect(illicadoPaymentMethod.prepaid_card_security_code).toEqual('{PREPAID_CARD_CVV}');
    });

    it('Errors when card token is not present', () => {
        expect(() => {
            new IllicadoPaymentMethod({ prepaid_card_security_code: '{PREPAID_CARD_CVV}' });
        }).toThrow();

        try {
            new IllicadoPaymentMethod({ prepaid_card_security_code: '{PREPAID_CARD_CVV}' });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Card Number must be present');
    });

    it('Errors when card key is not present', () => {
        expect(() => {
            new IllicadoPaymentMethod({ prepaid_card_number: '{PREPAID_CARD_NUMBER}' });
        }).toThrow();

        try {
            new IllicadoPaymentMethod({ prepaid_card_number: '{PREPAID_CARD_NUMBER}' });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Card Security Code must be present');
    });
});
