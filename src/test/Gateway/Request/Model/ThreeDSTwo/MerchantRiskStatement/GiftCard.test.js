const GiftCard = require('../../../../../../Gateway/Request/Model/ThreeDSTwo/MerchantRiskStatement/GiftCard');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let giftCard;

        expect(() => {
            giftCard = new GiftCard({
                amount: '{AMOUNT}',
                count: '{COUNT}',
                currency: '{CURRENCY}'
            });
        }).not.toThrow();

        expect(giftCard).toBeInstanceOf(GiftCard);
        expect(giftCard.amount).toEqual('{AMOUNT}');
        expect(giftCard.count).toEqual('{COUNT}');
        expect(giftCard.currency).toEqual('{CURRENCY}');
    });

    it('Initializes correctly with empty parameters', () => {
        let giftCard;

        expect(() => {
            giftCard = new GiftCard({});
        }).not.toThrow();

        expect(giftCard).toBeInstanceOf(GiftCard);
        expect(giftCard.amount).toEqual(null);
        expect(giftCard.count).toEqual(null);
        expect(giftCard.currency).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let giftCard;

        expect(() => {
            giftCard = new GiftCard();
        }).not.toThrow();

        expect(giftCard).toBeInstanceOf(GiftCard);
        expect(giftCard.amount).toEqual(null);
        expect(giftCard.count).toEqual(null);
        expect(giftCard.currency).toEqual(null);
    });
});
