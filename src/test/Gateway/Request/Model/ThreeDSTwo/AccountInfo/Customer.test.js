const Customer = require('../../../../../../Gateway/Request/Model/ThreeDSTwo/AccountInfo/Customer');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let customer;

        expect(() => {
            customer = new Customer({
                account_change: '20220802',
                opening_account_date: '20220910',
                password_change: '20211201'
            });
        }).not.toThrow();

        expect(customer).toBeInstanceOf(Customer);
        expect(customer.account_change).toEqual('20220802');
        expect(customer.opening_account_date).toEqual('20220910');
        expect(customer.password_change).toEqual('20211201');
    });

    it('Initializes correctly with empty parameters', () => {
        let customer;

        expect(() => {
            customer = new Customer({});
        }).not.toThrow();

        expect(customer).toBeInstanceOf(Customer);
        expect(customer.account_change).toEqual(null);
        expect(customer.opening_account_date).toEqual(null);
        expect(customer.password_change).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let customer;

        expect(() => {
            customer = new Customer();
        }).not.toThrow();

        expect(customer).toBeInstanceOf(Customer);
        expect(customer.account_change).toEqual(null);
        expect(customer.opening_account_date).toEqual(null);
        expect(customer.password_change).toEqual(null);
    });
});
