export = SimpleHTTPClient;
declare class SimpleHTTPClient {
    /**
     * @param {Configuration} configuration
     */
    constructor(configuration: Configuration);
    /**
     * @param {Configuration} configuration
     */
    set configuration(configuration: Configuration);
    get configuration(): Configuration;
    _configuration: Configuration;
    /**
     *  Makes an HTTP request using provided data & configuration
     *
     * @param {'GET'|'HEAD'|'POST'|'DELETE'|'PUT'|'CONNECT'|'OPTIONS'|'TRACE'|'PATCH'} method HTTP method for this request
     * @param {String} endpoint Endpoint of the request. May be a complete URL or a URL Endpoint in conjunction with baseURL in the options object.
     * @param {Object} [options={}] Additional options
     * @param {String?} [options.baseUrl = ''] Request base URL
     * @param {Object} [options.body = {}] Request body parameters
     * @param {Object} [options.additionalHeaders = {}] Request additional headers
     * @param {Boolean} [options.isData = false] Is the request a request to the data API ?
     */
    request(method: 'GET' | 'HEAD' | 'POST' | 'DELETE' | 'PUT' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH', endpoint: string, { baseUrl, body, additionalHeaders, isData }?: {
        baseUrl?: string | null;
        body?: any;
        additionalHeaders?: any;
        isData?: boolean;
    }): Promise<Response>;
}
import Configuration = require("./Configuration/Configuration");
import Response = require("./Response/Response");
//# sourceMappingURL=SimpleHTTPClient.d.ts.map