const OrderMapper = require('../../../../../../Gateway/Response/TransactionV3/Mapper/OrderMapper');
const Order = require('../../../../../../Gateway/Response/TransactionV3/Order');
const { fixtures } = require('../../../../fixtures');

describe('Test OrderMapper', () => {
    it('maps correctly', () => {
        let orderMapper = new OrderMapper(fixtures.transactionV3.order.apiData);
        expect(orderMapper).toBeInstanceOf(OrderMapper);
        expect(() => {
            orderMapper.mapResponseToModel();
        }).not.toThrow();
        expect(orderMapper._modelObject).toStrictEqual(new Order(fixtures.transactionV3.order.mappedData));
    });

    it('maps correctly with empty parameters', () => {
        let orderMapper = new OrderMapper({});

        expect(orderMapper).toBeInstanceOf(OrderMapper);
        expect(() => {
            orderMapper.mapResponseToModel();
        }).not.toThrow();
        expect(orderMapper._modelObject).toStrictEqual(new Order({}));
    });
});
