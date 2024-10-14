const IssuerMapper = require('../../../../../../Gateway/Response/TransactionV3/Mapper/IssuerMapper');
const Issuer = require('../../../../../../Gateway/Response/TransactionV3/Issuer');
const { fixtures } = require('../../../../fixtures');

describe('Test IssuerMapper', () => {
    it('maps correctly', () => {
        let issuerMapper = new IssuerMapper(fixtures.transactionV3.issuer.apiData);
        expect(issuerMapper).toBeInstanceOf(IssuerMapper);
        expect(() => {
            issuerMapper.mapResponseToModel();
        }).not.toThrow();
        expect(issuerMapper._modelObject).toStrictEqual(new Issuer(fixtures.transactionV3.issuer.mappedData));
    });

    it('maps correctly with empty parameters', () => {
        let issuerMapper = new IssuerMapper({});

        expect(issuerMapper).toBeInstanceOf(IssuerMapper);
        expect(() => {
            issuerMapper.mapResponseToModel();
        }).not.toThrow();
        expect(issuerMapper._modelObject).toStrictEqual(new Issuer({}));
    });
});
