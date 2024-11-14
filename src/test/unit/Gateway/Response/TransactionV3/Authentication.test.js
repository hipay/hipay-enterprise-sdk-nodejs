const Authentication = require('../../../../../Gateway/Response/TransactionV3/Authentication');
const { fixtures } = require('../../../fixtures');

describe('Test Authentication constructor', () => {
    it('Initializes correctly', () => {
        let authentication;

        expect(() => {
            authentication = new Authentication(fixtures.transactionV3.authentication.mappedData);
        }).not.toThrow();

        expect(authentication).toBeInstanceOf(Authentication);

        const authenticationArray = Object.entries(fixtures.transactionV3.authentication.mappedData);
        authenticationArray.map(([property, value]) => {
            expect(authentication[property]).toEqual(value);
        });
    });

    it('Initializes correctly with empty parameters', () => {
        let authentication;

        expect(() => {
            authentication = new Authentication({});
        }).not.toThrow();

        expect(authentication).toBeInstanceOf(Authentication);

        const authenticationArray = Object.entries(fixtures.transactionV3.authentication.mappedData);
        authenticationArray.map(([property]) => {
            expect(authentication[property]).toEqual(null);
        });
    });

    it('Initializes correctly with no parameter', () => {
        let authentication;

        expect(() => {
            authentication = new Authentication();
        }).not.toThrow();

        expect(authentication).toBeInstanceOf(Authentication);

        const authenticationArray = Object.entries(fixtures.transactionV3.authentication.mappedData);
        authenticationArray.map(([property]) => {
            expect(authentication[property]).toEqual(null);
        });
    });
});
