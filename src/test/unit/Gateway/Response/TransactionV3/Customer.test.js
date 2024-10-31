const Customer = require('../../../../../Gateway/Response/TransactionV3/Customer');
const { fixtures } = require('../../../fixtures');

describe('Test Customer constructor', () => {
    it('Initializes correctly', () => {
        let customer;

        expect(() => {
            customer = new Customer(fixtures.transactionV3.customer.mappedData);
        }).not.toThrow();

        expect(customer).toBeInstanceOf(Customer);

        const customerArray = Object.entries(fixtures.transactionV3.customer.mappedData);
        customerArray.map(([property, value]) => {
            expect(customer[property]).toEqual(value);
        });
    });

    it('Initializes correctly with empty parameters', () => {
        let customer;

        expect(() => {
            customer = new Customer({});
        }).not.toThrow();

        expect(customer).toBeInstanceOf(Customer);

        const customerArray = Object.entries(fixtures.transactionV3.customer.mappedData);
        customerArray.map(([property]) => {
            expect(customer[property]).toEqual(null);
        });
    });

    it('Initializes correctly with no parameter', () => {
        let customer;

        expect(() => {
            customer = new Customer();
        }).not.toThrow();

        expect(customer).toBeInstanceOf(Customer);

        const customerArray = Object.entries(fixtures.transactionV3.customer.mappedData);
        customerArray.map(([property]) => {
            expect(customer[property]).toEqual(null);
        });
    });
});
