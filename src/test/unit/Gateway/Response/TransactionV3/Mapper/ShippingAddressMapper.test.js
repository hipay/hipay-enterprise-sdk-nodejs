const ShippingAddressMapper = require('../../../../../../Gateway/Response/TransactionV3/Mapper/ShippingAddressMapper');
const ShippingAddress = require('../../../../../../Gateway/Response/TransactionV3/ShippingAddress');
const { fixtures } = require('../../../../fixtures');

describe('Test ShippingAddressMapper', () => {
    it('maps correctly', () => {
        let shippingAddressMapper = new ShippingAddressMapper(fixtures.transactionV3.shippingAddress.apiData);
        expect(shippingAddressMapper).toBeInstanceOf(ShippingAddressMapper);
        expect(() => {
            shippingAddressMapper.mapResponseToModel();
        }).not.toThrow();
        expect(shippingAddressMapper._modelObject).toStrictEqual(new ShippingAddress(fixtures.transactionV3.shippingAddress.mappedData));
    });

    it('maps correctly with empty parameters', () => {
        let shippingAddressMapper = new ShippingAddressMapper({});

        expect(shippingAddressMapper).toBeInstanceOf(ShippingAddressMapper);
        expect(() => {
            shippingAddressMapper.mapResponseToModel();
        }).not.toThrow();
        expect(shippingAddressMapper._modelObject).toStrictEqual(new ShippingAddress({}));
    });
});
