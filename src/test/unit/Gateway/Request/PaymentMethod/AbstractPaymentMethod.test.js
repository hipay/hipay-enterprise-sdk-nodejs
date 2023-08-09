const AbstractPaymentMethod = require('../../../../../Gateway/Request/PaymentMethod/AbstractPaymentMethod');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let abstractPaymentMethod;

        expect(() => {
            abstractPaymentMethod = new AbstractPaymentMethod();
        }).not.toThrow();

        expect(abstractPaymentMethod).toBeInstanceOf(AbstractPaymentMethod);
    });
});
