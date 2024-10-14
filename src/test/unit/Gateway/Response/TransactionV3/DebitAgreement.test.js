const DebitAgreement = require('../../../../../Gateway/Response/TransactionV3/DebitAgreement');
const { fixtures } = require('../../../fixtures');

describe('Test DebitAgreement constructor', () => {
    it('Initializes correctly', () => {
        let debitAgreement;

        expect(() => {
            debitAgreement = new DebitAgreement(fixtures.transactionV3.debitAgreement.mappedData);
        }).not.toThrow();

        expect(debitAgreement).toBeInstanceOf(DebitAgreement);

        const debitAgreementArray = Object.entries(fixtures.transactionV3.debitAgreement.mappedData);
        debitAgreementArray.map(([property, value]) => {
            expect(debitAgreement[property]).toEqual(value);
        });
    });

    it('Initializes correctly with empty parameters', () => {
        let debitAgreement;

        expect(() => {
            debitAgreement = new DebitAgreement({});
        }).not.toThrow();

        expect(debitAgreement).toBeInstanceOf(DebitAgreement);

        const debitAgreementArray = Object.entries(fixtures.transactionV3.debitAgreement.mappedData);
        debitAgreementArray.map(([property]) => {
            expect(debitAgreement[property]).toEqual(null);
        });
    });

    it('Initializes correctly with no parameter', () => {
        let debitAgreement;

        expect(() => {
            debitAgreement = new DebitAgreement();
        }).not.toThrow();

        expect(debitAgreement).toBeInstanceOf(DebitAgreement);

        const debitAgreementArray = Object.entries(fixtures.transactionV3.debitAgreement.mappedData);
        debitAgreementArray.map(([property]) => {
            expect(debitAgreement[property]).toEqual(null);
        });
    });
});
