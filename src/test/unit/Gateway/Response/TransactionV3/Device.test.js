const Device = require('../../../../../Gateway/Response/TransactionV3/Device');
const { fixtures } = require('../../../fixtures');

describe('Test Device constructor', () => {
    it('Initializes correctly', () => {
        let device;

        expect(() => {
            device = new Device(fixtures.transactionV3.device.mappedData);
        }).not.toThrow();

        expect(device).toBeInstanceOf(Device);

        const deviceArray = Object.entries(fixtures.transactionV3.device.mappedData);
        deviceArray.map(([property, value]) => {
            expect(device[property]).toEqual(value);
        });
    });

    it('Initializes correctly with empty parameters', () => {
        let device;

        expect(() => {
            device = new Device({});
        }).not.toThrow();

        expect(device).toBeInstanceOf(Device);

        const deviceArray = Object.entries(fixtures.transactionV3.device.mappedData);
        deviceArray.map(([property]) => {
            expect(device[property]).toEqual(null);
        });
    });

    it('Initializes correctly with no parameter', () => {
        let device;

        expect(() => {
            device = new Device();
        }).not.toThrow();

        expect(device).toBeInstanceOf(Device);

        const deviceArray = Object.entries(fixtures.transactionV3.device.mappedData);
        deviceArray.map(([property]) => {
            expect(device[property]).toEqual(null);
        });
    });
});
