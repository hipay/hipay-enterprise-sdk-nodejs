'use strict';

const InvalidArgumentException = require('../../Error/InvalidArgumentException');
const AbstractRequestPart = require('./AbstractRequestPart');
const packageData = require('../../package.json');

class CommonRequest extends AbstractRequestPart {
    /**
     * Common requests data, used in all types of requests
     * @param {Object} [values = {}]
     * @param {Object} [values.customData] Request's custom data
     * @param {Object} [values.source] Request's source data
     * @param {'AUTO'|'SAPI'|'CONS'|'PAGE'|'TPE'|'RTRY'|'MANU'|'PREF'|'REVI'|'CMS'|'SSDK'|'CSDK'} [values.source.source] Technical source of this call
     * @param {String} [values.source.integration_version] Integration version (version of the CMS module for example)
     * @param {String} [values.source.brand] Source Brand (CMS name or Site name)
     * @param {String} [values.source.brand_version] Version of the brand (version of your site)
     * @param {Object} [values.basket] Request's basket data
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.hasOwn(values, 'customData')) {
            this.customData = values.customData;
        }

        if (Object.hasOwn(values, 'source')) {
            if (typeof values.source !== 'object') {
                throw new InvalidArgumentException('Source data must be an object');
            }
            this.source = { ...this.source, ...values.source };
        }

        if (Object.hasOwn(values, 'basket')) {
            this.basket = values.basket;
        }
    }

    initValues() {
        super.initValues();

        this.customData = null;
        this.source = {
            source: 'AUTO',
            brand: 'sdk_nodejs',
            brand_version: packageData.version.length < 10 ? packageData.version : undefined
        };
        this.basket = null;
    }
}

module.exports = CommonRequest;
