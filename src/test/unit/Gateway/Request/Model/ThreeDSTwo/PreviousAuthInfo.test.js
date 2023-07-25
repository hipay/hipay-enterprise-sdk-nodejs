const PreviousAuthInfo = require('../../../../../../Gateway/Request/Model/ThreeDSTwo/PreviousAuthInfo');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let previousAuthInfo;

        expect(() => {
            previousAuthInfo = new PreviousAuthInfo({
                transaction_reference: '{TRANSACTION_REFERENCE}'
            });
        }).not.toThrow();

        expect(previousAuthInfo).toBeInstanceOf(PreviousAuthInfo);
        expect(previousAuthInfo.transaction_reference).toEqual('{TRANSACTION_REFERENCE}');
    });

    it('Initializes correctly with empty parameters', () => {
        let previousAuthInfo;

        expect(() => {
            previousAuthInfo = new PreviousAuthInfo({});
        }).not.toThrow();

        expect(previousAuthInfo).toBeInstanceOf(PreviousAuthInfo);
        expect(previousAuthInfo.transaction_reference).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let previousAuthInfo;

        expect(() => {
            previousAuthInfo = new PreviousAuthInfo();
        }).not.toThrow();

        expect(previousAuthInfo).toBeInstanceOf(PreviousAuthInfo);
        expect(previousAuthInfo.transaction_reference).toEqual(null);
    });
});
