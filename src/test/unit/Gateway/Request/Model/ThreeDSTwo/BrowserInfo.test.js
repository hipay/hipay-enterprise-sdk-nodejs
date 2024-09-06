const BrowserInfo = require('../../../../../../Gateway/Request/Model/ThreeDSTwo/BrowserInfo');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let browserInfo;

        expect(() => {
            browserInfo = new BrowserInfo({
                ipaddr: '{IPADDR}',
                httpAccept: '{HTTP_ACCEPT}',
                httpUserAgent: '{HTTP_USER_AGENT}',
                javaEnabled: '{JAVA_ENABLED}',
                javascriptEnabled: '{JAVASCRIPT_ENABLED}',
                language: '{LANGUAGE}',
                colorDepth: '{COLOR_DEPTH}',
                screenHeight: '{SCREEN_HEIGHT}',
                screenWidth: '{SCREEN_WIDTH}',
                timezone: '{TIMEZONE}'
            });
        }).not.toThrow();

        expect(browserInfo).toBeInstanceOf(BrowserInfo);
        expect(browserInfo.ipaddr).toEqual('{IPADDR}');
        expect(browserInfo.httpAccept).toEqual('{HTTP_ACCEPT}');
        expect(browserInfo.httpUserAgent).toEqual('{HTTP_USER_AGENT}');
        expect(browserInfo.javaEnabled).toEqual('{JAVA_ENABLED}');
        expect(browserInfo.javascriptEnabled).toEqual('{JAVASCRIPT_ENABLED}');
        expect(browserInfo.language).toEqual('{LANGUAGE}');
        expect(browserInfo.colorDepth).toEqual('{COLOR_DEPTH}');
        expect(browserInfo.screenHeight).toEqual('{SCREEN_HEIGHT}');
        expect(browserInfo.screenWidth).toEqual('{SCREEN_WIDTH}');
        expect(browserInfo.timezone).toEqual('{TIMEZONE}');
    });

    it('Initializes correctly with empty parameters', () => {
        let browserInfo;

        expect(() => {
            browserInfo = new BrowserInfo({});
        }).not.toThrow();

        expect(browserInfo).toBeInstanceOf(BrowserInfo);
        expect(browserInfo.ipaddr).toEqual(null);
        expect(browserInfo.httpAccept).toEqual(null);
        expect(browserInfo.httpUserAgent).toEqual(null);
        expect(browserInfo.javaEnabled).toEqual(null);
        expect(browserInfo.javascriptEnabled).toEqual(null);
        expect(browserInfo.language).toEqual(null);
        expect(browserInfo.colorDepth).toEqual(null);
        expect(browserInfo.screenHeight).toEqual(null);
        expect(browserInfo.screenWidth).toEqual(null);
        expect(browserInfo.timezone).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let browserInfo;

        expect(() => {
            browserInfo = new BrowserInfo();
        }).not.toThrow();

        expect(browserInfo).toBeInstanceOf(BrowserInfo);
        expect(browserInfo.ipaddr).toEqual(null);
        expect(browserInfo.httpAccept).toEqual(null);
        expect(browserInfo.httpUserAgent).toEqual(null);
        expect(browserInfo.javaEnabled).toEqual(null);
        expect(browserInfo.javascriptEnabled).toEqual(null);
        expect(browserInfo.language).toEqual(null);
        expect(browserInfo.colorDepth).toEqual(null);
        expect(browserInfo.screenHeight).toEqual(null);
        expect(browserInfo.screenWidth).toEqual(null);
        expect(browserInfo.timezone).toEqual(null);
    });
});
