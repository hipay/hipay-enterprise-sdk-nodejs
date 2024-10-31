const PaymentMethodMapper = require('../../../../../../Gateway/Response/TransactionV3/Mapper/PaymentMethodMapper');
const PaymentMethod = require('../../../../../../Gateway/Response/TransactionV3/PaymentMethod');
const { fixtures } = require('../../../../fixtures');

describe('Test PaymentMethodMapper', () => {
    it('maps correctly', () => {
        let paymentMethodMapper = new PaymentMethodMapper(fixtures.transactionV3.paymentMethod.apiData);
        expect(paymentMethodMapper).toBeInstanceOf(PaymentMethodMapper);
        expect(() => {
            paymentMethodMapper.mapResponseToModel();
        }).not.toThrow();
        expect(paymentMethodMapper._modelObject).toStrictEqual(new PaymentMethod(fixtures.transactionV3.paymentMethod.mappedData));
    });

    it('maps correctly with empty parameters', () => {
        let paymentMethodMapper = new PaymentMethodMapper({});

        expect(paymentMethodMapper).toBeInstanceOf(PaymentMethodMapper);
        expect(() => {
            paymentMethodMapper.mapResponseToModel();
        }).not.toThrow();
        expect(paymentMethodMapper._modelObject).toStrictEqual(new PaymentMethod({}));
    });
});
