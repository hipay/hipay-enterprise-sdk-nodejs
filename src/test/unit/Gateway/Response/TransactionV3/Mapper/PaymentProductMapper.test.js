const PaymentProductMapper = require('../../../../../../Gateway/Response/TransactionV3/Mapper/PaymentProductMapper');
const PaymentProduct = require('../../../../../../Gateway/Response/TransactionV3/PaymentProduct');
const { fixtures } = require('../../../../fixtures');

describe('Test PaymentProductMapper', () => {
    it('maps correctly', () => {
        let paymentProductMapper = new PaymentProductMapper(fixtures.transactionV3.paymentProduct.apiData);
        expect(paymentProductMapper).toBeInstanceOf(PaymentProductMapper);
        expect(() => {
            paymentProductMapper.mapResponseToModel();
        }).not.toThrow();
        expect(paymentProductMapper._modelObject).toStrictEqual(new PaymentProduct(fixtures.transactionV3.paymentProduct.mappedData));
    });

    it('maps correctly with empty parameters', () => {
        let paymentProductMapper = new PaymentProductMapper({});

        expect(paymentProductMapper).toBeInstanceOf(PaymentProductMapper);
        expect(() => {
            paymentProductMapper.mapResponseToModel();
        }).not.toThrow();
        expect(paymentProductMapper._modelObject).toStrictEqual(new PaymentProduct({}));
    });
});
