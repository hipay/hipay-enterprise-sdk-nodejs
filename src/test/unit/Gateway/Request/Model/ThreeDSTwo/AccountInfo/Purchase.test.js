const Purchase = require('../../../../../../../Gateway/Request/Model/ThreeDSTwo/AccountInfo/Purchase');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let purchase;

        expect(() => {
            purchase = new Purchase({
                count: '{COUNT}',
                card_stored_24h: '{CARD_STORED_24H}',
                payment_attempts_24h: '{PAYMENT_ATTEMPTS_24H}',
                payment_attempts_1y: '{PAYMENT_ATTEMPTS_1Y}'
            });
        }).not.toThrow();

        expect(purchase).toBeInstanceOf(Purchase);
        expect(purchase.count).toEqual('{COUNT}');
        expect(purchase.card_stored_24h).toEqual('{CARD_STORED_24H}');
        expect(purchase.payment_attempts_24h).toEqual('{PAYMENT_ATTEMPTS_24H}');
        expect(purchase.payment_attempts_1y).toEqual('{PAYMENT_ATTEMPTS_1Y}');
    });

    it('Initializes correctly with empty parameters', () => {
        let purchase;

        expect(() => {
            purchase = new Purchase({});
        }).not.toThrow();

        expect(purchase).toBeInstanceOf(Purchase);
        expect(purchase.count).toEqual(null);
        expect(purchase.card_stored_24h).toEqual(null);
        expect(purchase.payment_attempts_24h).toEqual(null);
        expect(purchase.payment_attempts_1y).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let purchase;

        expect(() => {
            purchase = new Purchase();
        }).not.toThrow();

        expect(purchase).toBeInstanceOf(Purchase);
        expect(purchase.count).toEqual(null);
        expect(purchase.card_stored_24h).toEqual(null);
        expect(purchase.payment_attempts_24h).toEqual(null);
        expect(purchase.payment_attempts_1y).toEqual(null);
    });
});
