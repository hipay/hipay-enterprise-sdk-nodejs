const ReasonCode = require('../../../../../Gateway/Response/TransactionV3/ReasonCode');
const { fixtures } = require('../../../fixtures');

describe('Test ReasonCode constructor', () => {
    it('Initializes correctly', () => {
        let reasonCode;

        expect(() => {
            reasonCode = new ReasonCode(fixtures.transactionV3.reasonCode.mappedData);
        }).not.toThrow();

        expect(reasonCode).toBeInstanceOf(ReasonCode);

        const reasonCodeArray = Object.entries(fixtures.transactionV3.reasonCode.mappedData);
        reasonCodeArray.map(([property, value]) => {
            expect(reasonCode[property]).toEqual(value);
        });
    });

    it('Initializes correctly with empty parameters', () => {
        let reasonCode;

        expect(() => {
            reasonCode = new ReasonCode({});
        }).not.toThrow();

        expect(reasonCode).toBeInstanceOf(ReasonCode);

        const reasonCodeArray = Object.entries(fixtures.transactionV3.reasonCode.mappedData);
        reasonCodeArray.map(([property]) => {
            expect(reasonCode[property]).toEqual(null);
        });
    });

    it('Initializes correctly with no parameter', () => {
        let reasonCode;

        expect(() => {
            reasonCode = new ReasonCode();
        }).not.toThrow();

        expect(reasonCode).toBeInstanceOf(ReasonCode);

        const reasonCodeArray = Object.entries(fixtures.transactionV3.reasonCode.mappedData);
        reasonCodeArray.map(([property]) => {
            expect(reasonCode[property]).toEqual(null);
        });
    });
});
