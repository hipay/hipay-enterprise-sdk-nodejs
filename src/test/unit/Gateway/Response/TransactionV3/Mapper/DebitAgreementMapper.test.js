const DebitAgreementMapper = require('../../../../../../Gateway/Response/TransactionV3/Mapper/DebitAgreementMapper');
const DebitAgreement = require('../../../../../../Gateway/Response/TransactionV3/DebitAgreement');
const { fixtures } = require('../../../../fixtures');

describe('Test DebitAgreementMapper', () => {
    it('maps correctly', () => {
        let debitAgreementMapper = new DebitAgreementMapper(fixtures.transactionV3.debitAgreement.apiData);
        expect(debitAgreementMapper).toBeInstanceOf(DebitAgreementMapper);
        expect(() => {
            debitAgreementMapper.mapResponseToModel();
        }).not.toThrow();
        expect(debitAgreementMapper._modelObject).toStrictEqual(new DebitAgreement(fixtures.transactionV3.debitAgreement.mappedData));
    });

    it('maps correctly with empty parameters', () => {
        let debitAgreementMapper = new DebitAgreementMapper({});

        expect(debitAgreementMapper).toBeInstanceOf(DebitAgreementMapper);
        expect(() => {
            debitAgreementMapper.mapResponseToModel();
        }).not.toThrow();
        expect(debitAgreementMapper._modelObject).toStrictEqual(new DebitAgreement({}));
    });
});
