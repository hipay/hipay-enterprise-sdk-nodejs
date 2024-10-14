const AuthenticationMapper = require('../../../../../../Gateway/Response/TransactionV3/Mapper/AuthenticationMapper');
const Authentication = require('../../../../../../Gateway/Response/TransactionV3/Authentication');
const { fixtures } = require('../../../../fixtures');

describe('Test AuthenticationMapper', () => {
    it('maps correctly', () => {
        let authenticationMapper = new AuthenticationMapper(fixtures.transactionV3.address.apiData);
        expect(authenticationMapper).toBeInstanceOf(AuthenticationMapper);
        expect(() => {
            authenticationMapper.mapResponseToModel();
        }).not.toThrow();
        expect(authenticationMapper._modelObject).toStrictEqual(new Authentication(fixtures.transactionV3.address.mappedData));
    });

    it('maps correctly with empty parameters', () => {
        let authenticationMapper = new AuthenticationMapper({});

        expect(authenticationMapper).toBeInstanceOf(AuthenticationMapper);
        expect(() => {
            authenticationMapper.mapResponseToModel();
        }).not.toThrow();
        expect(authenticationMapper._modelObject).toStrictEqual(new Authentication({}));
    });
});
