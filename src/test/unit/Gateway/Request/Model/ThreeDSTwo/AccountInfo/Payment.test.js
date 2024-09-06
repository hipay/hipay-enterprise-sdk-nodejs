const Payment = require('../../../../../../../Gateway/Request/Model/ThreeDSTwo/AccountInfo/Payment');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let payment;

        expect(() => {
            payment = new Payment({
                enrollmentDate: '{ENROLLMENT_DATE}'
            });
        }).not.toThrow();

        expect(payment).toBeInstanceOf(Payment);
        expect(payment.enrollmentDate).toEqual('{ENROLLMENT_DATE}');
    });

    it('Initializes correctly with empty parameters', () => {
        let payment;

        expect(() => {
            payment = new Payment({});
        }).not.toThrow();

        expect(payment).toBeInstanceOf(Payment);
        expect(payment.enrollmentDate).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let payment;

        expect(() => {
            payment = new Payment();
        }).not.toThrow();

        expect(payment).toBeInstanceOf(Payment);
        expect(payment.enrollmentDate).toEqual(null);
    });
});
