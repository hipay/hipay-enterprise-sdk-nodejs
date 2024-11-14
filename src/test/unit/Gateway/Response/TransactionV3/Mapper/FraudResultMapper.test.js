const FraudResultMapper = require('../../../../../../Gateway/Response/TransactionV3/Mapper/FraudResultMapper');
const FraudResult = require('../../../../../../Gateway/Response/TransactionV3/FraudResult');
const { fixtures } = require('../../../../fixtures');

describe('Test FraudResultMapper', () => {
    it('maps correctly', () => {
        let fraudResultMapper = new FraudResultMapper(fixtures.transactionV3.fraudResult.apiData);
        expect(fraudResultMapper).toBeInstanceOf(FraudResultMapper);
        expect(() => {
            fraudResultMapper.mapResponseToModel();
        }).not.toThrow();
        expect(fraudResultMapper._modelObject).toStrictEqual(new FraudResult(fixtures.transactionV3.fraudResult.mappedData));
    });

    it('maps correctly with empty parameters', () => {
        let fraudResultMapper = new FraudResultMapper({});

        expect(fraudResultMapper).toBeInstanceOf(FraudResultMapper);
        expect(() => {
            fraudResultMapper.mapResponseToModel();
        }).not.toThrow();
        expect(fraudResultMapper._modelObject).toStrictEqual(new FraudResult({}));
    });
});
