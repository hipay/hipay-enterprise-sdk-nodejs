const AcquirerMapper = require('../../../../../../Gateway/Response/TransactionV3/Mapper/AcquirerMapper');
const Acquirer = require('../../../../../../Gateway/Response/TransactionV3/Acquirer');
const { fixtures } = require('../../../../fixtures');

describe('Test AcquirerMapper', () => {
    it('maps correctly', () => {
        let acquirerMapper = new AcquirerMapper(fixtures.transactionV3.acquirer.apiData);

        expect(acquirerMapper).toBeInstanceOf(AcquirerMapper);
        expect(() => {
            acquirerMapper.mapResponseToModel();
        }).not.toThrow();
        expect(acquirerMapper._modelObject).toStrictEqual(new Acquirer(fixtures.transactionV3.acquirer.mappedData));
    });

    it('maps correctly with empty parameters', () => {
        let acquirerMapper = new AcquirerMapper({});

        expect(acquirerMapper).toBeInstanceOf(AcquirerMapper);
        expect(() => {
            acquirerMapper.mapResponseToModel();
        }).not.toThrow();
        expect(acquirerMapper._modelObject).toStrictEqual(new Acquirer({}));
    });
});
