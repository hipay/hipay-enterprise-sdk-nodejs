const ShippingAddress = require('../../../../../Gateway/Response/TransactionV3/ShippingAddress');
const { fixtures } = require('../../../fixtures');

describe('Test ShippingAddress constructor', () => {
    it('Initializes correctly', () => {
        let shippingAddress;

        expect(() => {
            shippingAddress = new ShippingAddress(fixtures.transactionV3.shippingAddress.mappedData);
        }).not.toThrow();

        expect(shippingAddress).toBeInstanceOf(ShippingAddress);

        const shippingAddressArray = Object.entries(fixtures.transactionV3.shippingAddress.mappedData);
        shippingAddressArray.map(([property, value]) => {
            expect(shippingAddress[property]).toEqual(value);
        });
    });

    it('Initializes correctly with empty parameters', () => {
        let shippingAddress;

        expect(() => {
            shippingAddress = new ShippingAddress({});
        }).not.toThrow();

        expect(shippingAddress).toBeInstanceOf(ShippingAddress);

        const shippingAddressArray = Object.entries(fixtures.transactionV3.shippingAddress.mappedData);
        shippingAddressArray.map(([property]) => {
            expect(shippingAddress[property]).toEqual(null);
        });
    });

    it('Initializes correctly with no parameter', () => {
        let shippingAddress;

        expect(() => {
            shippingAddress = new ShippingAddress();
        }).not.toThrow();

        expect(shippingAddress).toBeInstanceOf(ShippingAddress);

        const shippingAddressArray = Object.entries(fixtures.transactionV3.shippingAddress.mappedData);
        shippingAddressArray.map(([property]) => {
            expect(shippingAddress[property]).toEqual(null);
        });
    });
});
