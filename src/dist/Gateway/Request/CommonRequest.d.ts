export = CommonRequest;
declare class CommonRequest extends AbstractRequestPart {
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
    constructor(values?: {
        customData?: any;
        source?: {
            source?: 'AUTO' | 'SAPI' | 'CONS' | 'PAGE' | 'TPE' | 'RTRY' | 'MANU' | 'PREF' | 'REVI' | 'CMS' | 'SSDK' | 'CSDK';
            integration_version?: string;
            brand?: string;
            brand_version?: string;
        };
        basket?: any;
    });
    customData: any;
    source: any;
    basket: any;
}
import AbstractRequestPart = require("./AbstractRequestPart");
//# sourceMappingURL=CommonRequest.d.ts.map