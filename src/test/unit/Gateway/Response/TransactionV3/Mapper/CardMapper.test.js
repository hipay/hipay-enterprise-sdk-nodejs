const CardMapper = require('../../../../../../Gateway/Response/TransactionV3/Mapper/CardMapper');
const Card = require('../../../../../../Gateway/Response/TransactionV3/Card');
const { fixtures } = require('../../../../fixtures');

describe('Test CardMapper', () => {
    it('maps correctly', () => {
        let cardMapper = new CardMapper(fixtures.transactionV3.card.apiData);
        expect(cardMapper).toBeInstanceOf(CardMapper);
        expect(() => {
            cardMapper.mapResponseToModel();
        }).not.toThrow();
        expect(cardMapper._modelObject).toStrictEqual(new Card(fixtures.transactionV3.card.mappedData));
    });

    it('maps correctly with empty parameters', () => {
        let cardMapper = new CardMapper({});

        expect(cardMapper).toBeInstanceOf(CardMapper);
        expect(() => {
            cardMapper.mapResponseToModel();
        }).not.toThrow();
        expect(cardMapper._modelObject).toStrictEqual(new Card({}));
    });
});
