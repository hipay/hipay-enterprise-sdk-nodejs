const SecuritySettings = require('../../../../Gateway/Response/SecuritySettings');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let securitySettings;

        expect(() => {
            securitySettings = new SecuritySettings({
                hashingAlgorithm: '{HASHINGALGORITHM}'
            });
        }).not.toThrow();

        expect(securitySettings).toBeInstanceOf(SecuritySettings);
        expect(securitySettings.hashingAlgorithm).toEqual('{HASHINGALGORITHM}');
    });

    it('Initializes correctly with empty parameters', () => {
        let securitySettings;

        expect(() => {
            securitySettings = new SecuritySettings({});
        }).not.toThrow();

        expect(securitySettings).toBeInstanceOf(SecuritySettings);
        expect(securitySettings.hashingAlgorithm).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let securitySettings;

        expect(() => {
            securitySettings = new SecuritySettings();
        }).not.toThrow();

        expect(securitySettings).toBeInstanceOf(SecuritySettings);
        expect(securitySettings.hashingAlgorithm).toEqual(null);
    });
});
