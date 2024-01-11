export = BrowserInfo;
declare class BrowserInfo extends AbstractModel {
    /**
     *  Creates a BrowserInfo Object. Should be populated with the result of the HiPay Front JS SDK getBrowserInfo().
     *
     * @param {Object} [values = {}]
     * @param {String} [values.ipaddr] Client Ip Adress
     * @param {String} [values.http_accept] Http Accept Header value from the client
     * @param {String} [values.http_user_agent] User Agent Header value from the client
     * @param {Boolean} [values.java_enabled] Is java enabled on the client ?
     * @param {Boolean} [values.javascript_enabled] Is Javascript enabled on the client ?
     * @param {String} [values.language] Client browser language
     * @param {String} [values.color_depth] Client browser color depth setting
     * @param {String} [values.screen_height] Client screen height
     * @param {String} [values.screen_width] Client screen width
     * @param {String} [values.timezone] Client timezone
     */
    constructor(values?: {
        ipaddr?: string;
        http_accept?: string;
        http_user_agent?: string;
        java_enabled?: boolean;
        javascript_enabled?: boolean;
        language?: string;
        color_depth?: string;
        screen_height?: string;
        screen_width?: string;
        timezone?: string;
    });
    ipaddr: string;
    http_accept: string;
    http_user_agent: string;
    java_enabled: boolean;
    javascript_enabled: boolean;
    language: string;
    color_depth: string;
    screen_height: string;
    screen_width: string;
    timezone: string;
}
import AbstractModel = require("../AbstractModel");
//# sourceMappingURL=BrowserInfo.d.ts.map