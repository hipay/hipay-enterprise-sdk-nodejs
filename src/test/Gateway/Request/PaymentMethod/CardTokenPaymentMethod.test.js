const CardTokenPaymentMethod = require('../../../../Gateway/Request/PaymentMethod/CardTokenPaymentMethod');
const InvalidArgumentException = require('../../../../Error/InvalidArgumentException');
const { AuthenticationIndicator } = require('../../../../Enum/Transaction');

jest.mock('../../../../Error/InvalidArgumentException');

afterEach(() => {
    InvalidArgumentException.mockReset();
});

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let cardTokenPaymentMethod;

        expect(() => {
            cardTokenPaymentMethod = new CardTokenPaymentMethod({
                cardtoken: '{CARDTOKEN}',
                eci: '{ECI}',
                authentication_indicator: '{AUTHENTICATION_INDICATOR}'
            });
        }).not.toThrow();

        expect(cardTokenPaymentMethod).toBeInstanceOf(CardTokenPaymentMethod);
        expect(cardTokenPaymentMethod.cardtoken).toEqual('{CARDTOKEN}');
        expect(cardTokenPaymentMethod.eci).toEqual('{ECI}');
        expect(cardTokenPaymentMethod.authentication_indicator).toEqual('{AUTHENTICATION_INDICATOR}');
    });

    it('Initializes correctly with minimal values', () => {
        let cardTokenPaymentMethod;

        expect(() => {
            cardTokenPaymentMethod = new CardTokenPaymentMethod({
                cardtoken: '{CARDTOKEN}',
                eci: '{ECI}'
            });
        }).not.toThrow();

        expect(cardTokenPaymentMethod).toBeInstanceOf(CardTokenPaymentMethod);
        expect(cardTokenPaymentMethod.cardtoken).toEqual('{CARDTOKEN}');
        expect(cardTokenPaymentMethod.eci).toEqual('{ECI}');
        expect(cardTokenPaymentMethod.authentication_indicator).toEqual(AuthenticationIndicator.AVAILABLE);
    });

    it('Errors when card token is not present', () => {
        expect(() => {
            new CardTokenPaymentMethod({ eci: '{ECI}', authentication_indicator: '{AUTHENTICATION_INDICATOR}' });
        }).toThrow();

        try {
            new CardTokenPaymentMethod({ eci: '{ECI}', authentication_indicator: '{AUTHENTICATION_INDICATOR}' });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Card Token must be present');
    });

    it('Errors when eci is not present', () => {
        expect(() => {
            new CardTokenPaymentMethod({ cardtoken: '{CARDTOKEN}', authentication_indicator: '{AUTHENTICATION_INDICATOR}' });
        }).toThrow();

        try {
            new CardTokenPaymentMethod({ cardtoken: '{CARDTOKEN}', authentication_indicator: '{AUTHENTICATION_INDICATOR}' });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('ECI must be present');
    });
});
