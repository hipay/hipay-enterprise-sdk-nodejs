const PaymentMethodMapper = require('../../../../Gateway/Response/Mapper/PaymentMethodMapper');
const PaymentMethod = require('../../../../Gateway/Response/PaymentMethod');

describe('Test mapper', () => {
    it('maps correctly', () => {
        let paymentMethodMapper = new PaymentMethodMapper({
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

        expect(paymentMethodMapper).toBeInstanceOf(PaymentMethodMapper);
        expect(() => {
            paymentMethodMapper.mapResponseToModel();
        }).not.toThrow();
        expect(paymentMethodMapper._modelObject).toStrictEqual(
            new PaymentMethod({
                token: '{TOKEN}',
                brand: '{BRAND}',
                pan: '{PAN}',
                cardHolder: '{CARDHOLDER}',
                cardExpiryMonth: '{CARDEXPIRYMONTH}',
                cardExpiryYear: '{CARDEXPIRYYEAR}',
                cardId: '{CARDID}',
                issuer: '{ISSUER}',
                country: '{COUNTRY}'
            })
        );
    });

    it('maps correctly with empty parameters', () => {
        let paymentMethodMapper = new PaymentMethodMapper({});

        expect(paymentMethodMapper).toBeInstanceOf(PaymentMethodMapper);
        expect(() => {
            paymentMethodMapper.mapResponseToModel();
        }).not.toThrow();
        expect(paymentMethodMapper._modelObject).toStrictEqual(new PaymentMethod({}));
    });
});
