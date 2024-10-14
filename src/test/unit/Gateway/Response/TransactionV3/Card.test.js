const Card = require('../../../../../Gateway/Response/TransactionV3/Card');
const { fixtures } = require('../../../fixtures');

describe('Test Card constructor', () => {
    it('Initializes correctly', () => {
        let card;

        expect(() => {
            card = new Card(fixtures.transactionV3.card.mappedData);
        }).not.toThrow();

        expect(card).toBeInstanceOf(Card);

        const cardArray = Object.entries(fixtures.transactionV3.card.mappedData);
        cardArray.map(([property, value]) => {
            expect(card[property]).toEqual(value);
        });
    });

    it('Initializes correctly with empty parameters', () => {
        let card;

        expect(() => {
            card = new Card({});
        }).not.toThrow();

        expect(card).toBeInstanceOf(Card);

        const cardArray = Object.entries(fixtures.transactionV3.card.mappedData);
        cardArray.map(([property]) => {
            expect(card[property]).toEqual(null);
        });
    });

    it('Initializes correctly with no parameter', () => {
        let card;

        expect(() => {
            card = new Card();
        }).not.toThrow();

        expect(card).toBeInstanceOf(Card);

        const cardArray = Object.entries(fixtures.transactionV3.card.mappedData);
        cardArray.map(([property]) => {
            expect(card[property]).toEqual(null);
        });
    });
});
