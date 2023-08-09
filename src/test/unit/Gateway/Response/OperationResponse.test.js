const OperationResponse = require('../../../../Gateway/Response/OperationResponse');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let operation;

        expect(() => {
            operation = new OperationResponse({
                type: '{TYPE}',
                id: '{ID}',
                reference: '{REFERENCE}',
                amount: '{AMOUNT}',
                currency: '{CURRENCY}',
                dateAuthorized: '{DATEAUTHORIZED}'
            });
        }).not.toThrow();

        expect(operation).toBeInstanceOf(OperationResponse);
        expect(operation.type).toEqual('{TYPE}');
        expect(operation.id).toEqual('{ID}');
        expect(operation.reference).toEqual('{REFERENCE}');
        expect(operation.amount).toEqual('{AMOUNT}');
        expect(operation.currency).toEqual('{CURRENCY}');
        expect(operation.dateAuthorized).toEqual('{DATEAUTHORIZED}');
    });

    it('Initializes correctly with empty parameters', () => {
        let operation;

        expect(() => {
            operation = new OperationResponse({});
        }).not.toThrow();

        expect(operation).toBeInstanceOf(OperationResponse);
        expect(operation.type).toEqual(null);
        expect(operation.id).toEqual(null);
        expect(operation.reference).toEqual(null);
        expect(operation.amount).toEqual(null);
        expect(operation.currency).toEqual(null);
        expect(operation.dateAuthorized).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let operation;

        expect(() => {
            operation = new OperationResponse();
        }).not.toThrow();

        expect(operation).toBeInstanceOf(OperationResponse);
        expect(operation.type).toEqual(null);
        expect(operation.id).toEqual(null);
        expect(operation.reference).toEqual(null);
        expect(operation.amount).toEqual(null);
        expect(operation.currency).toEqual(null);
        expect(operation.dateAuthorized).toEqual(null);
    });
});
