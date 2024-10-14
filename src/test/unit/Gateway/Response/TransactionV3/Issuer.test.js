const Issuer = require('../../../../../Gateway/Response/TransactionV3/Issuer');
const { fixtures } = require('../../../fixtures');

describe('Test Issuer constructor', () => {
    it('Initializes correctly', () => {
        let issuer;

        expect(() => {
            issuer = new Issuer(fixtures.transactionV3.issuer.mappedData);
        }).not.toThrow();

        expect(issuer).toBeInstanceOf(Issuer);

        const issuerArray = Object.entries(fixtures.transactionV3.issuer.mappedData);
        issuerArray.map(([property, value]) => {
            expect(issuer[property]).toEqual(value);
        });
    });

    it('Initializes correctly with empty parameters', () => {
        let issuer;

        expect(() => {
            issuer = new Issuer({});
        }).not.toThrow();

        expect(issuer).toBeInstanceOf(Issuer);

        const issuerArray = Object.entries(fixtures.transactionV3.issuer.mappedData);
        issuerArray.map(([property]) => {
            expect(issuer[property]).toEqual(null);
        });
    });

    it('Initializes correctly with no parameter', () => {
        let issuer;

        expect(() => {
            issuer = new Issuer();
        }).not.toThrow();

        expect(issuer).toBeInstanceOf(Issuer);

        const issuerArray = Object.entries(fixtures.transactionV3.issuer.mappedData);
        issuerArray.map(([property]) => {
            expect(issuer[property]).toEqual(null);
        });
    });
});
