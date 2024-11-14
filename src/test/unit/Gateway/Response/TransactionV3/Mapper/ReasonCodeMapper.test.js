const ReasonCodeMapper = require('../../../../../../Gateway/Response/TransactionV3/Mapper/ReasonCodeMapper');
const ReasonCode = require('../../../../../../Gateway/Response/TransactionV3/ReasonCode');
const { fixtures } = require('../../../../fixtures');

describe('Test ReasonCodeMapper', () => {
    it('maps correctly', () => {
        let reasonCodeMapper = new ReasonCodeMapper(fixtures.transactionV3.reasonCode.apiData);
        expect(reasonCodeMapper).toBeInstanceOf(ReasonCodeMapper);
        expect(() => {
            reasonCodeMapper.mapResponseToModel();
        }).not.toThrow();
        expect(reasonCodeMapper._modelObject).toStrictEqual(new ReasonCode(fixtures.transactionV3.reasonCode.mappedData));
    });

    it('maps correctly with empty parameters', () => {
        let reasonCodeMapper = new ReasonCodeMapper({});

        expect(reasonCodeMapper).toBeInstanceOf(ReasonCodeMapper);
        expect(() => {
            reasonCodeMapper.mapResponseToModel();
        }).not.toThrow();
        expect(reasonCodeMapper._modelObject).toStrictEqual(new ReasonCode({}));
    });
});
