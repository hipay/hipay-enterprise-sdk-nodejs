const OperationResponseMapper = require('../../../../Gateway/Response/Mapper/OperationResponseMapper');
const OperationResponse = require('../../../../Gateway/Response/OperationResponse');

describe('Test mapper', () => {
    it('maps correctly', () => {
        let operationResponseMapper = new OperationResponseMapper({
            type: '{TYPE}',
            id: '{ID}',
            reference: '{REFERENCE}',
            amount: '{AMOUNT}',
            currency: '{CURRENCY}',
            dateAuthorized: '{DATEAUTHORIZED}'
        });

        expect(operationResponseMapper).toBeInstanceOf(OperationResponseMapper);
        expect(() => {
            operationResponseMapper.mapResponseToModel();
        }).not.toThrow();
        expect(operationResponseMapper._modelObject).toStrictEqual(
            new OperationResponse({
                type: '{TYPE}',
                id: '{ID}',
                reference: '{REFERENCE}',
                amount: '{AMOUNT}',
                currency: '{CURRENCY}',
                dateAuthorized: '{DATEAUTHORIZED}'
            })
        );
    });

    it('maps correctly with empty parameters', () => {
        let operationResponseMapper = new OperationResponseMapper({});

        expect(operationResponseMapper).toBeInstanceOf(OperationResponseMapper);
        expect(() => {
            operationResponseMapper.mapResponseToModel();
        }).not.toThrow();
        expect(operationResponseMapper._modelObject).toStrictEqual(new OperationResponse({}));
    });
});
