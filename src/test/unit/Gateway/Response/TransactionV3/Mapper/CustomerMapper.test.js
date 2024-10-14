const CustomerMapper = require('../../../../../../Gateway/Response/TransactionV3/Mapper/CustomerMapper');
const Customer = require('../../../../../../Gateway/Response/TransactionV3/Customer');
const { fixtures } = require('../../../../fixtures');

describe('Test CustomerMapper', () => {
    it('maps correctly', () => {
        let customerMapper = new CustomerMapper(fixtures.transactionV3.customer.apiData);
        expect(customerMapper).toBeInstanceOf(CustomerMapper);
        expect(() => {
            customerMapper.mapResponseToModel();
        }).not.toThrow();
        expect(customerMapper._modelObject).toStrictEqual(new Customer(fixtures.transactionV3.customer.mappedData));
    });

    it('maps correctly with empty parameters', () => {
        let customerMapper = new CustomerMapper({});

        expect(customerMapper).toBeInstanceOf(CustomerMapper);
        expect(() => {
            customerMapper.mapResponseToModel();
        }).not.toThrow();
        expect(customerMapper._modelObject).toStrictEqual(new Customer({}));
    });
});
