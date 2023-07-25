const MultibancoPaymentMethod = require('../../../../../Gateway/Request/PaymentMethod/MultibancoPaymentMethod');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let multibancoPaymentMethod;

        expect(() => {
            multibancoPaymentMethod = new MultibancoPaymentMethod({
                expiration_limit: 55
            });
        }).not.toThrow();

        expect(multibancoPaymentMethod).toBeInstanceOf(MultibancoPaymentMethod);
        expect(multibancoPaymentMethod.expiration_limit).toEqual(55);
    });

    it('Initializes correctly with empty parameters', () => {
        let multibancoPaymentMethod;

        expect(() => {
            multibancoPaymentMethod = new MultibancoPaymentMethod({});
        }).not.toThrow();

        expect(multibancoPaymentMethod).toBeInstanceOf(MultibancoPaymentMethod);
        expect(multibancoPaymentMethod.expiration_limit).toEqual(3);
    });

    it('Initializes correctly with no parameter', () => {
        let multibancoPaymentMethod;

        expect(() => {
            multibancoPaymentMethod = new MultibancoPaymentMethod();
        }).not.toThrow();

        expect(multibancoPaymentMethod).toBeInstanceOf(MultibancoPaymentMethod);
        expect(multibancoPaymentMethod.expiration_limit).toEqual(3);
    });
});
