const Acquirer = require('../../../../../Gateway/Response/TransactionV3/Acquirer');
const { fixtures } = require('../../../fixtures');

describe('Test Acquirer constructor', () => {
    it('Initializes correctly', () => {
        let acquirer;

        expect(() => {
            acquirer = new Acquirer(fixtures.transactionV3.acquirer.mappedData);
        }).not.toThrow();


        expect(acquirer).toBeInstanceOf(Acquirer);

        const acquirerArray = Object.entries(fixtures.transactionV3.acquirer.mappedData);
        acquirerArray.map(([property, value]) => {
            expect(acquirer[property]).toEqual(value);
        });
    });

    it('Initializes correctly with empty parameters', () => {
        let acquirer;

        expect(() => {
            acquirer = new Acquirer({});
        }).not.toThrow();

        expect(acquirer).toBeInstanceOf(Acquirer);
  
        const acquirerArray = Object.entries(fixtures.transactionV3.acquirer.mappedData);
        acquirerArray.map(([property]) => {
            expect(acquirer[property]).toEqual(null);
        });
    });

    it('Initializes correctly with no parameter', () => {
        let acquirer;

        expect(() => {
            acquirer = new Acquirer();
        }).not.toThrow();

        expect(acquirer).toBeInstanceOf(Acquirer);
  
        const acquirerArray = Object.entries(fixtures.transactionV3.acquirer.mappedData);
        acquirerArray.map(([property]) => {
            expect(acquirer[property]).toEqual(null);
        });
    });
});
