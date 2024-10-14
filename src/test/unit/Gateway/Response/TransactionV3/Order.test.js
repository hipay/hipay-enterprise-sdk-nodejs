const Order = require('../../../../../Gateway/Response/TransactionV3/Order');
const { fixtures } = require('../../../fixtures');

describe('Test Order constructor', () => {
    it('Initializes correctly', () => {
        let order;

        expect(() => {
            order = new Order(fixtures.transactionV3.order.mappedData);
        }).not.toThrow();

        expect(order).toBeInstanceOf(Order);

        const orderArray = Object.entries(fixtures.transactionV3.order.mappedData);
    const test= orderArray.map(([property, value]) => {
        console.info('tetezr')
            expect(order[property]).toEqual(value);
        });
        console.log(test);
    });

    it('Initializes correctly with empty parameters', () => {
        let order;

        expect(() => {
            order = new Order({});
        }).not.toThrow();

        expect(order).toBeInstanceOf(Order);

        const orderArray = Object.entries(fixtures.transactionV3.order.mappedData);
        orderArray.map(([property]) => {
            expect(order[property]).toEqual(null);
        });
    });

    it('Initializes correctly with no parameter', () => {
        let order;

        expect(() => {
            order = new Order();
        }).not.toThrow();

        expect(order).toBeInstanceOf(Order);

        const orderArray = Object.entries(fixtures.transactionV3.order.mappedData);
        orderArray.map(([property]) => {
            expect(order[property]).toEqual(null);
        });
    });
});
