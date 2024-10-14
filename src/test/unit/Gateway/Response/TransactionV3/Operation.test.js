const Operation = require('../../../../../Gateway/Response/TransactionV3/Operation');
const { fixtures } = require('../../../fixtures');

describe('Test Operation constructor', () => {
    it('Initializes correctly', () => {
        let operation;

        expect(() => {
            operation = new Operation(fixtures.transactionV3.operation.mappedData);
        }).not.toThrow();

        expect(operation).toBeInstanceOf(Operation);

        const operationArray = Object.entries(fixtures.transactionV3.operation.mappedData);
        operationArray.map(([property, value]) => {
            expect(operation[property]).toEqual(value);
        });
    });

    it('Initializes correctly with empty parameters', () => {
        let operation;

        expect(() => {
            operation = new Operation({});
        }).not.toThrow();

        expect(operation).toBeInstanceOf(Operation);

        const operationArray = Object.entries(fixtures.transactionV3.operation.mappedData);
        operationArray.map(([property]) => {
            expect(operation[property]).toEqual(null);
        });
    });

    it('Initializes correctly with no parameter', () => {
        let operation;

        expect(() => {
            operation = new Operation();
        }).not.toThrow();

        expect(operation).toBeInstanceOf(Operation);

        const operationArray = Object.entries(fixtures.transactionV3.operation.mappedData);
        operationArray.map(([property]) => {
            expect(operation[property]).toEqual(null);
        });
    });
});
