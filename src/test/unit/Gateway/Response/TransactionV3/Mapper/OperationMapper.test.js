const OperationMapper = require('../../../../../../Gateway/Response/TransactionV3/Mapper/OperationMapper');
const Operation = require('../../../../../../Gateway/Response/TransactionV3/Operation');
const { fixtures } = require('../../../../fixtures');

describe('Test OperationMapper', () => {
    it('maps correctly', () => {
        let operationMapper = new OperationMapper(fixtures.transactionV3.operation.apiData);
        expect(operationMapper).toBeInstanceOf(OperationMapper);
        expect(() => {
            operationMapper.mapResponseToModel();
        }).not.toThrow();
        expect(operationMapper._modelObject).toStrictEqual(new Operation(fixtures.transactionV3.operation.mappedData));
    });

    it('maps correctly with empty parameters', () => {
        let operationMapper = new OperationMapper({});

        expect(operationMapper).toBeInstanceOf(OperationMapper);
        expect(() => {
            operationMapper.mapResponseToModel();
        }).not.toThrow();
        expect(operationMapper._modelObject).toStrictEqual(new Operation({}));
    });
});
