const Customer = require('../../../../../../../Gateway/Request/Model/ThreeDSTwo/AccountInfo/Customer');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let customer;

        expect(() => {
            customer = new Customer({
                accountChange: '20220802',
                openingAccountDate: '20220910',
                passwordChange: '20211201'
            });
        }).not.toThrow();

        expect(customer).toBeInstanceOf(Customer);
        expect(customer.accountChange).toEqual('20220802');
        expect(customer.openingAccountDate).toEqual('20220910');
        expect(customer.passwordChange).toEqual('20211201');
    });

    it('Initializes correctly with empty parameters', () => {
        let customer;

        expect(() => {
            customer = new Customer({});
        }).not.toThrow();

        expect(customer).toBeInstanceOf(Customer);
        expect(customer.accountChange).toEqual(null);
        expect(customer.openingAccountDate).toEqual(null);
        expect(customer.passwordChange).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let customer;

        expect(() => {
            customer = new Customer();
        }).not.toThrow();

        expect(customer).toBeInstanceOf(Customer);
        expect(customer.accountChange).toEqual(null);
        expect(customer.openingAccountDate).toEqual(null);
        expect(customer.passwordChange).toEqual(null);
    });
});
