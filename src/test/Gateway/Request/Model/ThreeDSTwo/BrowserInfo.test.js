const BrowserInfo = require('../../../../../Gateway/Request/Model/ThreeDSTwo/BrowserInfo');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let browserInfo;

        expect(() => {
            browserInfo = new BrowserInfo({
                ipaddr: '{IPADDR}',
                http_accept: '{HTTP_ACCEPT}',
                http_user_agent: '{HTTP_USER_AGENT}',
                java_enabled: '{JAVA_ENABLED}',
                javascript_enabled: '{JAVASCRIPT_ENABLED}',
                language: '{LANGUAGE}',
                color_depth: '{COLOR_DEPTH}',
                screen_height: '{SCREEN_HEIGHT}',
                screen_width: '{SCREEN_WIDTH}',
                timezone: '{TIMEZONE}'
            });
        }).not.toThrow();

        expect(browserInfo).toBeInstanceOf(BrowserInfo);
        expect(browserInfo.ipaddr).toEqual('{IPADDR}');
        expect(browserInfo.http_accept).toEqual('{HTTP_ACCEPT}');
        expect(browserInfo.http_user_agent).toEqual('{HTTP_USER_AGENT}');
        expect(browserInfo.java_enabled).toEqual('{JAVA_ENABLED}');
        expect(browserInfo.javascript_enabled).toEqual('{JAVASCRIPT_ENABLED}');
        expect(browserInfo.language).toEqual('{LANGUAGE}');
        expect(browserInfo.color_depth).toEqual('{COLOR_DEPTH}');
        expect(browserInfo.screen_height).toEqual('{SCREEN_HEIGHT}');
        expect(browserInfo.screen_width).toEqual('{SCREEN_WIDTH}');
        expect(browserInfo.timezone).toEqual('{TIMEZONE}');
    });

    it('Initializes correctly with empty parameters', () => {
        let browserInfo;

        expect(() => {
            browserInfo = new BrowserInfo({});
        }).not.toThrow();

        expect(browserInfo).toBeInstanceOf(BrowserInfo);
        expect(browserInfo.ipaddr).toEqual(null);
        expect(browserInfo.http_accept).toEqual(null);
        expect(browserInfo.http_user_agent).toEqual(null);
        expect(browserInfo.java_enabled).toEqual(null);
        expect(browserInfo.javascript_enabled).toEqual(null);
        expect(browserInfo.language).toEqual(null);
        expect(browserInfo.color_depth).toEqual(null);
        expect(browserInfo.screen_height).toEqual(null);
        expect(browserInfo.screen_width).toEqual(null);
        expect(browserInfo.timezone).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let browserInfo;

        expect(() => {
            browserInfo = new BrowserInfo();
        }).not.toThrow();

        expect(browserInfo).toBeInstanceOf(BrowserInfo);
        expect(browserInfo.ipaddr).toEqual(null);
        expect(browserInfo.http_accept).toEqual(null);
        expect(browserInfo.http_user_agent).toEqual(null);
        expect(browserInfo.java_enabled).toEqual(null);
        expect(browserInfo.javascript_enabled).toEqual(null);
        expect(browserInfo.language).toEqual(null);
        expect(browserInfo.color_depth).toEqual(null);
        expect(browserInfo.screen_height).toEqual(null);
        expect(browserInfo.screen_width).toEqual(null);
        expect(browserInfo.timezone).toEqual(null);
    });
});
