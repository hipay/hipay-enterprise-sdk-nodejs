'use strict';
const AbstractModel = require('../AbstractModel');

class BrowserInfo extends AbstractModel {
    /**
     *  Creates a BrowserInfo Object. Should be populated with the result of the HiPay Front JS SDK getBrowserInfo().
     *
     * @param {Object} [values = {}]
     * @param {String} [values.ipaddr] Client Ip Adress
     * @param {String} [values.httpAccept] Http Accept Header value from the client
     * @param {String} [values.httpUserAgent] User Agent Header value from the client
     * @param {Boolean} [values.javaEnabled] Is java enabled on the client ?
     * @param {Boolean} [values.javascriptEnabled] Is Javascript enabled on the client ?
     * @param {String} [values.language] Client browser language
     * @param {String} [values.colorDepth] Client browser color depth setting
     * @param {String} [values.screenHeight] Client screen height
     * @param {String} [values.screenWidth] Client screen width
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
        if (Object.prototype.hasOwnProperty.call(values, 'httpAccept') && values.httpAccept !== '') {
            this.httpAccept = values.httpAccept;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'httpUserAgent') && values.httpUserAgent !== '') {
            this.httpUserAgent = values.httpUserAgent;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'javaEnabled') && values.javaEnabled !== '') {
            this.javaEnabled = values.javaEnabled;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'javascriptEnabled') && values.javascriptEnabled !== '') {
            this.javascriptEnabled = values.javascriptEnabled;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'language') && values.language !== '') {
            this.language = values.language;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'colorDepth') && values.colorDepth !== '') {
            this.colorDepth = values.colorDepth;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'screenHeight') && values.screenHeight !== '') {
            this.screenHeight = values.screenHeight;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'screenWidth') && values.screenWidth !== '') {
            this.screenWidth = values.screenWidth;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'timezone') && values.timezone !== '') {
            this.timezone = values.timezone;
        }
    }

    initValues() {
        super.initValues();

        this.ipaddr = null;
        this.httpAccept = null;
        this.httpUserAgent = null;
        this.javaEnabled = null;
        this.javascriptEnabled = null;
        this.language = null;
        this.colorDepth = null;
        this.screenHeight = null;
        this.screenWidth = null;
        this.timezone = null;
    }
}

module.exports = BrowserInfo;
