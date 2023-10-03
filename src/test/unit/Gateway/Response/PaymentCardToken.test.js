const PaymentCardToken = require('../../../../Gateway/Response/PaymentCardToken');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let paymentCardToken;

        expect(() => {
            paymentCardToken = new PaymentCardToken({
                token: '{TOKEN}',
                brand: '{BRAND}',
                pan: '{PAN}',
                cardHolder: '{CARDHOLDER}',
                cardExpiryMonth: '{CARDEXPIRYMONTH}',
                cardExpiryYear: '{CARDEXPIRYYEAR}',
                cardId: '{CARDID}',
                issuer: '{ISSUER}',
                country: '{COUNTRY}',
                requestId: '{REQUESTID}',
                multiUse: '{MULTIUSE}',
                domesticNetwork: '{DOMESTICNETWORK}',
                cardHash: '{CARDHASH}',
                cardType: '{CARDTYPE}',
                cardCategory: '{CARDCATEGORY}',
                forbiddenIssuerCountry: '{FORBIDDENISSUERCOUNTRY}',
                bin: '{BIN}'
            });
        }).not.toThrow();

        expect(paymentCardToken).toBeInstanceOf(PaymentCardToken);
        expect(paymentCardToken.token).toEqual('{TOKEN}');
        expect(paymentCardToken.brand).toEqual('{BRAND}');
        expect(paymentCardToken.pan).toEqual('{PAN}');
        expect(paymentCardToken.cardHolder).toEqual('{CARDHOLDER}');
        expect(paymentCardToken.cardExpiryMonth).toEqual('{CARDEXPIRYMONTH}');
        expect(paymentCardToken.cardExpiryYear).toEqual('{CARDEXPIRYYEAR}');
        expect(paymentCardToken.cardId).toEqual('{CARDID}');
        expect(paymentCardToken.issuer).toEqual('{ISSUER}');
        expect(paymentCardToken.country).toEqual('{COUNTRY}');
        expect(paymentCardToken.requestId).toEqual('{REQUESTID}');
        expect(paymentCardToken.multiUse).toEqual('{MULTIUSE}');
        expect(paymentCardToken.domesticNetwork).toEqual('{DOMESTICNETWORK}');
        expect(paymentCardToken.cardHash).toEqual('{CARDHASH}');
        expect(paymentCardToken.cardType).toEqual('{CARDTYPE}');
        expect(paymentCardToken.cardCategory).toEqual('{CARDCATEGORY}');
        expect(paymentCardToken.forbiddenIssuerCountry).toEqual('{FORBIDDENISSUERCOUNTRY}');
        expect(paymentCardToken.bin).toEqual('{BIN}');
    });

    it('Initializes correctly with empty parameters', () => {
        let paymentCardToken;

        expect(() => {
            paymentCardToken = new PaymentCardToken({});
        }).not.toThrow();

        expect(paymentCardToken).toBeInstanceOf(PaymentCardToken);
        expect(paymentCardToken.token).toEqual(null);
        expect(paymentCardToken.brand).toEqual(null);
        expect(paymentCardToken.pan).toEqual(null);
        expect(paymentCardToken.cardHolder).toEqual(null);
        expect(paymentCardToken.cardExpiryMonth).toEqual(null);
        expect(paymentCardToken.cardExpiryYear).toEqual(null);
        expect(paymentCardToken.cardId).toEqual(null);
        expect(paymentCardToken.issuer).toEqual(null);
        expect(paymentCardToken.country).toEqual(null);
        expect(paymentCardToken.requestId).toEqual(null);
        expect(paymentCardToken.multiUse).toEqual(null);
        expect(paymentCardToken.domesticNetwork).toEqual(null);
        expect(paymentCardToken.cardHash).toEqual(null);
        expect(paymentCardToken.cardType).toEqual(null);
        expect(paymentCardToken.cardCategory).toEqual(null);
        expect(paymentCardToken.forbiddenIssuerCountry).toEqual(null);
        expect(paymentCardToken.bin).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let paymentCardToken;

        expect(() => {
            paymentCardToken = new PaymentCardToken();
        }).not.toThrow();

        expect(paymentCardToken).toBeInstanceOf(PaymentCardToken);
        expect(paymentCardToken.token).toEqual(null);
        expect(paymentCardToken.brand).toEqual(null);
        expect(paymentCardToken.pan).toEqual(null);
        expect(paymentCardToken.cardHolder).toEqual(null);
        expect(paymentCardToken.cardExpiryMonth).toEqual(null);
        expect(paymentCardToken.cardExpiryYear).toEqual(null);
        expect(paymentCardToken.cardId).toEqual(null);
        expect(paymentCardToken.issuer).toEqual(null);
        expect(paymentCardToken.country).toEqual(null);
        expect(paymentCardToken.requestId).toEqual(null);
        expect(paymentCardToken.multiUse).toEqual(null);
        expect(paymentCardToken.domesticNetwork).toEqual(null);
        expect(paymentCardToken.cardHash).toEqual(null);
        expect(paymentCardToken.cardType).toEqual(null);
        expect(paymentCardToken.cardCategory).toEqual(null);
        expect(paymentCardToken.forbiddenIssuerCountry).toEqual(null);
        expect(paymentCardToken.bin).toEqual(null);
    });
});
