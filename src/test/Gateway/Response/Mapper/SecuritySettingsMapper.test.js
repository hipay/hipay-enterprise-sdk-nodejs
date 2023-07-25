const SecuritySettingsMapper = require('../../../../Gateway/Response/Mapper/SecuritySettingsMapper');
const SecuritySettings = require('../../../../Gateway/Response/SecuritySettings');

describe('Test mapper', () => {
    it('maps correctly', () => {
        let securitySettingsMapper = new SecuritySettingsMapper({
            hashing_algorithm: '{HASHINGALGORITHM}'
        });

        expect(securitySettingsMapper).toBeInstanceOf(SecuritySettingsMapper);
        expect(() => {
            securitySettingsMapper.mapResponseToModel();
        }).not.toThrow();
        expect(securitySettingsMapper._modelObject).toStrictEqual(
            new SecuritySettings({
                hashingAlgorithm: '{HASHINGALGORITHM}'
            })
        );
    });

    it('maps correctly with empty parameters', () => {
        let securitySettingsMapper = new SecuritySettingsMapper({});

        expect(securitySettingsMapper).toBeInstanceOf(SecuritySettingsMapper);
        expect(() => {
            securitySettingsMapper.mapResponseToModel();
        }).not.toThrow();
        expect(securitySettingsMapper._modelObject).toStrictEqual(new SecuritySettings({}));
    });
});
