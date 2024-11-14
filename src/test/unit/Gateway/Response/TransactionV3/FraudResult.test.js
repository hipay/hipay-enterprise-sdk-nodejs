const FraudResult = require('../../../../../Gateway/Response/TransactionV3/FraudResult');
const { fixtures } = require('../../../fixtures');

describe('Test FraudResult constructor', () => {
    it('Initializes correctly', () => {
        let fraudResult;

        expect(() => {
            fraudResult = new FraudResult(fixtures.transactionV3.fraudResult.mappedData);
        }).not.toThrow();

        expect(fraudResult).toBeInstanceOf(FraudResult);

        const fraudResultArray = Object.entries(fixtures.transactionV3.fraudResult.mappedData);
        fraudResultArray.map(([property, value]) => {
            expect(fraudResult[property]).toEqual(value);
        });
    });

    it('Initializes correctly with empty parameters', () => {
        let fraudResult;

        expect(() => {
            fraudResult = new FraudResult({});
        }).not.toThrow();

        expect(fraudResult).toBeInstanceOf(FraudResult);

        const fraudResultArray = Object.entries(fixtures.transactionV3.fraudResult.mappedData);
        fraudResultArray.map(([property]) => {
            expect(fraudResult[property]).toEqual(null);
        });
    });

    it('Initializes correctly with no parameter', () => {
        let fraudResult;

        expect(() => {
            fraudResult = new FraudResult();
        }).not.toThrow();

        expect(fraudResult).toBeInstanceOf(FraudResult);

        const fraudResultArray = Object.entries(fixtures.transactionV3.fraudResult.mappedData);
        fraudResultArray.map(([property]) => {
            expect(fraudResult[property]).toEqual(null);
        });
    });
});
