const Address = require('../../../../../Gateway/Response/TransactionV3/Address');
const { fixtures } = require('../../../fixtures');

describe('Test Address constructor', () => {
    it('Initializes correctly', () => {
        let address;

        expect(() => {
            address = new Address(fixtures.transactionV3.address.mappedData);
        }).not.toThrow();

        expect(address).toBeInstanceOf(Address);

        const addressArray = Object.entries(fixtures.transactionV3.address.mappedData);
        addressArray.map(([property, value]) => {
            expect(address[property]).toEqual(value);
        });
    });

    it('Initializes correctly with empty parameters', () => {
        let address;

        expect(() => {
            address = new Address({});
        }).not.toThrow();

        expect(address).toBeInstanceOf(Address);

        const addressArray = Object.entries(fixtures.transactionV3.address.mappedData);
        addressArray.map(([property]) => {
            expect(address[property]).toEqual(null);
        });
    });

    it('Initializes correctly with no parameter', () => {
        let address;

        expect(() => {
            address = new Address();
        }).not.toThrow();

        expect(address).toBeInstanceOf(Address);

        const addressArray = Object.entries(fixtures.transactionV3.address.mappedData);
        addressArray.map(([property]) => {
            expect(address[property]).toEqual(null);
        });
    });
});
