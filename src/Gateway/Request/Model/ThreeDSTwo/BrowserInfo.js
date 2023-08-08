'use strict';
const AbstractModel = require('../AbstractModel');

class BrowserInfo extends AbstractModel {
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
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.prototype.hasOwnProperty.call(values, 'ipaddr') && values.ipaddr !== '') {
            this.ipaddr = values.ipaddr;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'http_accept') && values.http_accept !== '') {
            this.http_accept = values.http_accept;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'http_user_agent') && values.http_user_agent !== '') {
            this.http_user_agent = values.http_user_agent;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'java_enabled') && values.java_enabled !== '') {
            this.java_enabled = values.java_enabled;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'javascript_enabled') && values.javascript_enabled !== '') {
            this.javascript_enabled = values.javascript_enabled;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'language') && values.language !== '') {
            this.language = values.language;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'color_depth') && values.color_depth !== '') {
            this.color_depth = values.color_depth;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'screen_height') && values.screen_height !== '') {
            this.screen_height = values.screen_height;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'screen_width') && values.screen_width !== '') {
            this.screen_width = values.screen_width;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'timezone') && values.timezone !== '') {
            this.timezone = values.timezone;
        }
    }

    initValues() {
        super.initValues();

        this.ipaddr = null;
        this.http_accept = null;
        this.http_user_agent = null;
        this.java_enabled = null;
        this.javascript_enabled = null;
        this.language = null;
        this.color_depth = null;
        this.screen_height = null;
        this.screen_width = null;
        this.timezone = null;
    }
}

module.exports = BrowserInfo;
