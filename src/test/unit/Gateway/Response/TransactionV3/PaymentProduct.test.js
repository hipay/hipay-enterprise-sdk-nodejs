const PaymentProduct = require('../../../../../Gateway/Response/TransactionV3/PaymentProduct');
const { fixtures } = require('../../../fixtures');

describe('Test PaymentProduct constructor', () => {
    it('Initializes correctly', () => {
        let paymentProduct;

        expect(() => {
            paymentProduct = new PaymentProduct(fixtures.transactionV3.paymentProduct.mappedData);
        }).not.toThrow();

        expect(paymentProduct).toBeInstanceOf(PaymentProduct);

        const paymentProductArray = Object.entries(fixtures.transactionV3.paymentProduct.mappedData);
        paymentProductArray.map(([property, value]) => {
            expect(paymentProduct[property]).toEqual(value);
        });
    });

    it('Initializes correctly with empty parameters', () => {
        let paymentProduct;

        expect(() => {
            paymentProduct = new PaymentProduct({});
        }).not.toThrow();

        expect(paymentProduct).toBeInstanceOf(PaymentProduct);

        const paymentProductArray = Object.entries(fixtures.transactionV3.paymentProduct.mappedData);
        paymentProductArray.map(([property]) => {
            expect(paymentProduct[property]).toEqual(null);
        });
    });

    it('Initializes correctly with no parameter', () => {
        let paymentProduct;

        expect(() => {
            paymentProduct = new PaymentProduct();
        }).not.toThrow();

        expect(paymentProduct).toBeInstanceOf(PaymentProduct);

        const paymentProductArray = Object.entries(fixtures.transactionV3.paymentProduct.mappedData);
        paymentProductArray.map(([property]) => {
            expect(paymentProduct[property]).toEqual(null);
        });
    });
});
