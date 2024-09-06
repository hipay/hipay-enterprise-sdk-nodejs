const PreviousAuthInfo = require('../../../../../../Gateway/Request/Model/ThreeDSTwo/PreviousAuthInfo');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let previousAuthInfo;

        expect(() => {
            previousAuthInfo = new PreviousAuthInfo({
                transactionReference: '{TRANSACTION_REFERENCE}'
            });
        }).not.toThrow();

        expect(previousAuthInfo).toBeInstanceOf(PreviousAuthInfo);
        expect(previousAuthInfo.transactionReference).toEqual('{TRANSACTION_REFERENCE}');
    });

    it('Initializes correctly with empty parameters', () => {
        let previousAuthInfo;

        expect(() => {
            previousAuthInfo = new PreviousAuthInfo({});
        }).not.toThrow();

        expect(previousAuthInfo).toBeInstanceOf(PreviousAuthInfo);
        expect(previousAuthInfo.transactionReference).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let previousAuthInfo;

        expect(() => {
            previousAuthInfo = new PreviousAuthInfo();
        }).not.toThrow();

        expect(previousAuthInfo).toBeInstanceOf(PreviousAuthInfo);
        expect(previousAuthInfo.transactionReference).toEqual(null);
    });
});
