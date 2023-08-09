const AbstractRequestPart = require('../../../../Gateway/Request/AbstractRequestPart');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let abstractRequestPart;

        expect(() => {
            abstractRequestPart = new AbstractRequestPart();
        }).not.toThrow();

        expect(abstractRequestPart).toBeInstanceOf(AbstractRequestPart);
    });
});
