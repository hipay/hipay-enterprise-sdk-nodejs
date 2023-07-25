const PaymentMethod = require('../../../Gateway/Response/PaymentMethod');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let paymentMethod;

        expect(() => {
            paymentMethod = new PaymentMethod({
                token: '{TOKEN}',
                brand: '{BRAND}',
                pan: '{PAN}',
                cardHolder: '{CARDHOLDER}',
                cardExpiryMonth: '{CARDEXPIRYMONTH}',
                cardExpiryYear: '{CARDEXPIRYYEAR}',
                cardId: '{CARDID}',
                issuer: '{ISSUER}',
                country: '{COUNTRY}'
            });
        }).not.toThrow();

        expect(paymentMethod).toBeInstanceOf(PaymentMethod);
        expect(paymentMethod.token).toEqual('{TOKEN}');
        expect(paymentMethod.brand).toEqual('{BRAND}');
        expect(paymentMethod.pan).toEqual('{PAN}');
        expect(paymentMethod.cardHolder).toEqual('{CARDHOLDER}');
        expect(paymentMethod.cardExpiryMonth).toEqual('{CARDEXPIRYMONTH}');
        expect(paymentMethod.cardExpiryYear).toEqual('{CARDEXPIRYYEAR}');
        expect(paymentMethod.cardId).toEqual('{CARDID}');
        expect(paymentMethod.issuer).toEqual('{ISSUER}');
        expect(paymentMethod.country).toEqual('{COUNTRY}');
    });

    it('Initializes correctly with empty parameters', () => {
        let paymentMethod;

        expect(() => {
            paymentMethod = new PaymentMethod({});
        }).not.toThrow();

        expect(paymentMethod).toBeInstanceOf(PaymentMethod);
        expect(paymentMethod.token).toEqual(null);
        expect(paymentMethod.brand).toEqual(null);
        expect(paymentMethod.pan).toEqual(null);
        expect(paymentMethod.cardHolder).toEqual(null);
        expect(paymentMethod.cardExpiryMonth).toEqual(null);
        expect(paymentMethod.cardExpiryYear).toEqual(null);
        expect(paymentMethod.cardId).toEqual(null);
        expect(paymentMethod.issuer).toEqual(null);
        expect(paymentMethod.country).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let paymentMethod;

        expect(() => {
            paymentMethod = new PaymentMethod();
        }).not.toThrow();

        expect(paymentMethod).toBeInstanceOf(PaymentMethod);
        expect(paymentMethod.token).toEqual(null);
        expect(paymentMethod.brand).toEqual(null);
        expect(paymentMethod.pan).toEqual(null);
        expect(paymentMethod.cardHolder).toEqual(null);
        expect(paymentMethod.cardExpiryMonth).toEqual(null);
        expect(paymentMethod.cardExpiryYear).toEqual(null);
        expect(paymentMethod.cardId).toEqual(null);
        expect(paymentMethod.issuer).toEqual(null);
        expect(paymentMethod.country).toEqual(null);
    });
});
