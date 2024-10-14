const AddressMapper = require('../../../../../../Gateway/Response/TransactionV3/Mapper/AddressMapper');
const Address = require('../../../../../../Gateway/Response/TransactionV3/Address');
const { fixtures } = require('../../../../fixtures');

describe('Test AddressMapper', () => {
    it('maps correctly', () => {
        let addressMapper = new AddressMapper(fixtures.transactionV3.address.apiData);
        expect(addressMapper).toBeInstanceOf(AddressMapper);
        expect(() => {
            addressMapper.mapResponseToModel();
        }).not.toThrow();
        expect(addressMapper._modelObject).toStrictEqual(new Address(fixtures.transactionV3.address.mappedData));
    });

    it('maps correctly with empty parameters', () => {
        let addressMapper = new AddressMapper({});

        expect(addressMapper).toBeInstanceOf(AddressMapper);
        expect(() => {
            addressMapper.mapResponseToModel();
        }).not.toThrow();
        expect(addressMapper._modelObject).toStrictEqual(new Address({}));
    });
});
