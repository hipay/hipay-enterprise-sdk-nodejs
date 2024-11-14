const Transaction = require('../../../../../Gateway/Response/TransactionV3/Transaction');
const { fixtures } = require('../../../fixtures');

describe('Test Transaction constructor', () => {
    it('Initializes correctly', () => {
        let transaction;

        expect(() => {
            transaction = new Transaction(fixtures.transactionV3.transaction.mappedData);
        }).not.toThrow();


        expect(transaction).toBeInstanceOf(Transaction);

        const transactionArray = Object.entries(fixtures.transactionV3.transaction.mappedData);
        transactionArray.map(([property, value]) => {
            expect(transaction[property]).toEqual(value);
        });
    });

    it('Initializes correctly with empty parameters', () => {
        let transaction;

        expect(() => {
            transaction = new Transaction({});
        }).not.toThrow();

        expect(transaction).toBeInstanceOf(Transaction);
  
        const transactionArray = Object.entries(fixtures.transactionV3.transaction.mappedData);
        transactionArray.map(([property]) => {
            expect(transaction[property]).toEqual(null);
        });
    });

    it('Initializes correctly with no parameter', () => {
        let transaction;

        expect(() => {
            transaction = new Transaction();
        }).not.toThrow();

        expect(transaction).toBeInstanceOf(Transaction);
  
        const transactionArray = Object.entries(fixtures.transactionV3.transaction.mappedData);
        transactionArray.map(([property]) => {
            expect(transaction[property]).toEqual(null);
        });
    });
});
