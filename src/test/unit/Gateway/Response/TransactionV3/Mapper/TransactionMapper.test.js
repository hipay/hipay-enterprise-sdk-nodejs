const TransactionMapper = require('../../../../../../Gateway/Response/TransactionV3/Mapper/TransactionMapper');
const Transaction = require('../../../../../../Gateway/Response/TransactionV3/Transaction');
const { fixtures } = require('../../../../fixtures');

describe('Test TransactionMapper', () => {
    it('maps correctly', () => {
        let transactionMapper = new TransactionMapper(fixtures.transactionV3.transaction.apiData);
        expect(transactionMapper).toBeInstanceOf(TransactionMapper);
        expect(() => {
            transactionMapper.mapResponseToModel();
        }).not.toThrow();
        expect(transactionMapper._modelObject).toStrictEqual(new Transaction(fixtures.transactionV3.transaction.mappedData));
    });

    it('maps correctly with empty parameters', () => {
        let transactionMapper = new TransactionMapper({});

        expect(transactionMapper).toBeInstanceOf(TransactionMapper);
        expect(() => {
            transactionMapper.mapResponseToModel();
        }).not.toThrow();
        expect(transactionMapper._modelObject).toStrictEqual(new Transaction({}));
    });
});
