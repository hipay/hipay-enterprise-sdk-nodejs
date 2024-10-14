const PaymentMethod = require('../../../../../Gateway/Response/TransactionV3/PaymentMethod');
const { fixtures } = require('../../../fixtures');

describe('Test PaymentMethod constructor', () => {
    it('Initializes correctly', () => {
        let paymentMethod;

        expect(() => {
            paymentMethod = new PaymentMethod(fixtures.transactionV3.paymentMethod.mappedData);
        }).not.toThrow();

        expect(paymentMethod).toBeInstanceOf(PaymentMethod);

        const paymentMethodArray = Object.entries(fixtures.transactionV3.paymentMethod.mappedData);
        paymentMethodArray.map(([property, value]) => {
            expect(paymentMethod[property]).toEqual(value);
        });
    });

    it('Initializes correctly with empty parameters', () => {
        let paymentMethod;

        expect(() => {
            paymentMethod = new PaymentMethod({});
        }).not.toThrow();

        expect(paymentMethod).toBeInstanceOf(PaymentMethod);

        const paymentMethodArray = Object.entries(fixtures.transactionV3.paymentMethod.mappedData);
        paymentMethodArray.map(([property]) => {
            expect(paymentMethod[property]).toEqual(null);
        });
    });

    it('Initializes correctly with no parameter', () => {
        let paymentMethod;

        expect(() => {
            paymentMethod = new PaymentMethod();
        }).not.toThrow();

        expect(paymentMethod).toBeInstanceOf(PaymentMethod);

        const paymentMethodArray = Object.entries(fixtures.transactionV3.paymentMethod.mappedData);
        paymentMethodArray.map(([property]) => {
            expect(paymentMethod[property]).toEqual(null);
        });
    });
});
