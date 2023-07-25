const Order = require('../../../Gateway/Response/Order');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let order;

        expect(() => {
            order = new Order({
                id: '{ID}',
                customerId: '{CUSTOMERID}',
                amount: '{AMOUNT}',
                tax: '{TAX}',
                shipping: '{SHIPPING}',
                dateCreated: '{DATECREATED}',
                attempts: '{ATTEMPTS}',
                currency: '{CURRENCY}',
                decimals: '{DECIMALS}',
                gender: '{GENDER}',
                language: '{LANGUAGE}',
                shippingAddress: '{SHIPPINGADDRESS}',
                email: '{EMAIL}'
            });
        }).not.toThrow();

        expect(order).toBeInstanceOf(Order);
        expect(order.id).toEqual('{ID}');
        expect(order.customerId).toEqual('{CUSTOMERID}');
        expect(order.amount).toEqual('{AMOUNT}');
        expect(order.tax).toEqual('{TAX}');
        expect(order.shipping).toEqual('{SHIPPING}');
        expect(order.dateCreated).toEqual('{DATECREATED}');
        expect(order.attempts).toEqual('{ATTEMPTS}');
        expect(order.currency).toEqual('{CURRENCY}');
        expect(order.decimals).toEqual('{DECIMALS}');
        expect(order.gender).toEqual('{GENDER}');
        expect(order.language).toEqual('{LANGUAGE}');
        expect(order.shippingAddress).toEqual('{SHIPPINGADDRESS}');
    });

    it('Initializes correctly with empty parameters', () => {
        let order;

        expect(() => {
            order = new Order({});
        }).not.toThrow();

        expect(order).toBeInstanceOf(Order);
        expect(order.id).toEqual(null);
        expect(order.customerId).toEqual(null);
        expect(order.amount).toEqual(null);
        expect(order.tax).toEqual(null);
        expect(order.shipping).toEqual(null);
        expect(order.dateCreated).toEqual(null);
        expect(order.attempts).toEqual(null);
        expect(order.currency).toEqual(null);
        expect(order.decimals).toEqual(null);
        expect(order.gender).toEqual(null);
        expect(order.language).toEqual(null);
        expect(order.shippingAddress).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let order;

        expect(() => {
            order = new Order();
        }).not.toThrow();

        expect(order).toBeInstanceOf(Order);
        expect(order.id).toEqual(null);
        expect(order.customerId).toEqual(null);
        expect(order.amount).toEqual(null);
        expect(order.tax).toEqual(null);
        expect(order.shipping).toEqual(null);
        expect(order.dateCreated).toEqual(null);
        expect(order.attempts).toEqual(null);
        expect(order.currency).toEqual(null);
        expect(order.decimals).toEqual(null);
        expect(order.gender).toEqual(null);
        expect(order.language).toEqual(null);
        expect(order.shippingAddress).toEqual(null);
    });
});
