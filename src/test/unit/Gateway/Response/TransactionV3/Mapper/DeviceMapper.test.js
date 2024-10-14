const DeviceMapper = require('../../../../../../Gateway/Response/TransactionV3/Mapper/DeviceMapper');
const Device = require('../../../../../../Gateway/Response/TransactionV3/Device');
const { fixtures } = require('../../../../fixtures');

describe('Test DeviceMapper', () => {
    it('maps correctly', () => {
        let deviceMapper = new DeviceMapper(fixtures.transactionV3.device.apiData);
        expect(deviceMapper).toBeInstanceOf(DeviceMapper);
        expect(() => {
            deviceMapper.mapResponseToModel();
        }).not.toThrow();
        expect(deviceMapper._modelObject).toStrictEqual(new Device(fixtures.transactionV3.device.mappedData));
    });

    it('maps correctly with empty parameters', () => {
        let deviceMapper = new DeviceMapper({});

        expect(deviceMapper).toBeInstanceOf(DeviceMapper);
        expect(() => {
            deviceMapper.mapResponseToModel();
        }).not.toThrow();
        expect(deviceMapper._modelObject).toStrictEqual(new Device({}));
    });
});
