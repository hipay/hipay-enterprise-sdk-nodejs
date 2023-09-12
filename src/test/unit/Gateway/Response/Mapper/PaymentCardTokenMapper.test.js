const PaymentCardTokenMapper = require('../../../../../Gateway/Response/Mapper/PaymentCardTokenMapper');
const PaymentCardToken = require('../../../../../Gateway/Response/PaymentCardToken');

describe('Test mapper', () => {
    it('maps correctly', () => {
        let paymentCardTokenMapper = new PaymentCardTokenMapper({
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

        expect(paymentCardTokenMapper).toBeInstanceOf(PaymentCardTokenMapper);
        expect(() => {
            paymentCardTokenMapper.mapResponseToModel();
        }).not.toThrow();
        expect(paymentCardTokenMapper._modelObject).toStrictEqual(
            new PaymentCardToken({
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
            })
        );
    });

    it('maps correctly with empty parameters', () => {
        let paymentCardTokenMapper = new PaymentCardTokenMapper({});

        expect(paymentCardTokenMapper).toBeInstanceOf(PaymentCardTokenMapper);
        expect(() => {
            paymentCardTokenMapper.mapResponseToModel();
        }).not.toThrow();
        expect(paymentCardTokenMapper._modelObject).toStrictEqual(new PaymentCardToken({}));
    });
});
