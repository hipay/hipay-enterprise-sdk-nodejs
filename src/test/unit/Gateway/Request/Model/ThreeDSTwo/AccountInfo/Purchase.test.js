const Purchase = require('../../../../../../../Gateway/Request/Model/ThreeDSTwo/AccountInfo/Purchase');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let purchase;

        expect(() => {
            purchase = new Purchase({
                count: '{COUNT}',
                cardStored24h: '{CARD_STORED_24H}',
                paymentAttempts24h: '{PAYMENT_ATTEMPTS_24H}',
                paymentAttempts1y: '{PAYMENT_ATTEMPTS_1Y}'
            });
        }).not.toThrow();

        expect(purchase).toBeInstanceOf(Purchase);
        expect(purchase.count).toEqual('{COUNT}');
        expect(purchase.cardStored24h).toEqual('{CARD_STORED_24H}');
        expect(purchase.paymentAttempts24h).toEqual('{PAYMENT_ATTEMPTS_24H}');
        expect(purchase.paymentAttempts1y).toEqual('{PAYMENT_ATTEMPTS_1Y}');
    });

    it('Initializes correctly with empty parameters', () => {
        let purchase;

        expect(() => {
            purchase = new Purchase({});
        }).not.toThrow();

        expect(purchase).toBeInstanceOf(Purchase);
        expect(purchase.count).toEqual(null);
        expect(purchase.cardStored24h).toEqual(null);
        expect(purchase.paymentAttempts24h).toEqual(null);
        expect(purchase.paymentAttempts1y).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let purchase;

        expect(() => {
            purchase = new Purchase();
        }).not.toThrow();

        expect(purchase).toBeInstanceOf(Purchase);
        expect(purchase.count).toEqual(null);
        expect(purchase.cardStored24h).toEqual(null);
        expect(purchase.paymentAttempts24h).toEqual(null);
        expect(purchase.paymentAttempts1y).toEqual(null);
    });
});
