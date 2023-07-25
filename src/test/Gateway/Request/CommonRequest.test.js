const CommonRequest = require('../../../Gateway/Request/CommonRequest');
const packageData = require('../../../../package.json');
const InvalidArgumentException = require('../../../Error/InvalidArgumentException');

jest.mock('../../../Error/InvalidArgumentException');

afterEach(() => {
    InvalidArgumentException.mockReset();
});

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let commonRequest;

        expect(() => {
            commonRequest = new CommonRequest({
                customData: '{CUSTOM_DATA}',
                source: {
                    source: '{SOURCE}',
                    brand: '{BRAND}',
                    brand_version: '{BRAND_VERSION}'
                },
                basket: '{BASKET}'
            });
        }).not.toThrow();

        expect(commonRequest).toBeInstanceOf(CommonRequest);
        expect(commonRequest.customData).toEqual('{CUSTOM_DATA}');
        expect(commonRequest.source).toEqual({
            source: '{SOURCE}',
            brand: '{BRAND}',
            brand_version: '{BRAND_VERSION}'
        });
        expect(commonRequest.basket).toEqual('{BASKET}');
    });

    it('Initializes correctly with empty parameters', () => {
        let commonRequest;

        expect(() => {
            commonRequest = new CommonRequest({});
        }).not.toThrow();

        expect(commonRequest).toBeInstanceOf(CommonRequest);
        expect(commonRequest.customData).toEqual(null);
        expect(commonRequest.source).toEqual({ brand: 'sdk_nodejs', brand_version: packageData.version, source: 'AUTO' });
        expect(commonRequest.basket).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let commonRequest;

        expect(() => {
            commonRequest = new CommonRequest();
        }).not.toThrow();

        expect(commonRequest).toBeInstanceOf(CommonRequest);
        expect(commonRequest.customData).toEqual(null);
        expect(commonRequest.source).toEqual({ brand: 'sdk_nodejs', brand_version: packageData.version, source: 'AUTO' });
        expect(commonRequest.basket).toEqual(null);
    });

    it('Errors if source is not an object', () => {
        try {
            new CommonRequest({
                source: '{SOURCE}'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Source data must be an object');
    });
});
