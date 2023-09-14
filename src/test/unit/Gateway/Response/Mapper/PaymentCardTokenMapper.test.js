const PaymentCardTokenMapper = require('../../../../../Gateway/Response/Mapper/PaymentCardTokenMapper');
const PaymentCardToken = require('../../../../../Gateway/Response/PaymentCardToken');

describe('Test mapper', () => {
    it('maps correctly', () => {
        let paymentCardTokenMapper = new PaymentCardTokenMapper({
            token: '{TOKEN}',
            brand: '{BRAND}',
            pan: '{PAN}',
            card_holder: '{CARDHOLDER}',
            card_expiry_month: '{CARDEXPIRYMONTH}',
            card_expiry_year: '{CARDEXPIRYYEAR}',
            card_id: '{CARDID}',
            issuer: '{ISSUER}',
            country: '{COUNTRY}',
            request_id: '{REQUESTID}',
            multi_use: '{MULTIUSE}',
            domestic_network: '{DOMESTICNETWORK}',
            card_hash: '{CARDHASH}',
            card_type: '{CARDTYPE}',
            card_category: '{CARDCATEGORY}',
            forbidden_issuer_country: '{FORBIDDENISSUERCOUNTRY}',
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
