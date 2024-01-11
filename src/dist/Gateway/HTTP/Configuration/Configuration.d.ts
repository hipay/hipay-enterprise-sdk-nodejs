export = Configuration;
declare class Configuration {
    static get SECURE_VAULT_ENDPOINT_PROD(): string;
    static get SECURE_VAULT_ENDPOINT_STAGE(): string;
    static get API_ENDPOINT_PROD(): string;
    static get API_ENDPOINT_STAGE(): string;
    static get HPAYMENT_API_ENDPOINT_PROD(): string;
    static get HPAYMENT_API_ENDPOINT_STAGE(): string;
    static get DATA_API_ENDPOINT_PROD(): string;
    static get DATA_API_ENDPOINT_STAGE(): string;
    static get DATA_API_HTTP_USER_AGENT(): string;
    static get API_ENV_STAGE(): string;
    static get API_ENV_PRODUCTION(): string;
    static get API_ENV_CUSTOM(): string;
    static get VALID_HTTP_HEADERS(): string[];
    static get VALID_PROXY_KEYS(): string[];
    static get VALID_PROXY_AUTH_KEYS(): string[];
    /**
     * @param {Object} [options] options
     * @param {String} [options.apiToken] Your authentication token for the HiPay API. Either this or username and password must be specified.
     * @param {String} [options.apiUsername=null] Your username for the HiPay API. Either username and password or token must be specified.
     * @param {String} [options.apiPassword=null] Your password for the HiPay API. Either username and password or token must be specified.
     * @param {String} [options.apiEnv=Configuration.API_ENV_STAGE] The HiPay API environment (production or stage), defaults to stage
     * @param {String} [options.apiHTTPHeaderAccept='application/json'] The accept header to set for the requests. Defaults to JSON
     * @param {Object} [options.proxy={}] Proxy information to add to the requests
     * @param {String} [options.proxy.host] Your proxy host
     * @param {Number} [options.proxy.port] Your proxy port
     * @param {Object} [options.proxy.auth] Your proxy authentication information
     * @param {String} [options.proxy.auth.username] Proxy authentication Username
     * @param {String} [options.proxy.auth.password] Proxy authentication Password
     * @param {Number} [options.timeout=35] The timeout of the requests. Defaults to 35 seconds
     * @param {String} [options.httpUserAgent='HiPayEnterprise/1.0 (SDK NodeJS)'] The user agent of the requests.
     */
    constructor(options?: {
        apiToken?: string;
        apiUsername?: string;
        apiPassword?: string;
        apiEnv?: string;
        apiHTTPHeaderAccept?: string;
        proxy?: {
            host?: string;
            port?: number;
            auth?: {
                username?: string;
                password?: string;
            };
        };
        timeout?: number;
        httpUserAgent?: string;
    });
    set apiToken(apiToken: any);
    get apiToken(): any;
    set apiUsername(apiUsername: any);
    get apiUsername(): any;
    set apiPassword(apiPassword: any);
    get apiPassword(): any;
    set apiEnv(apiEnv: any);
    get apiEnv(): any;
    _urlCustom: any;
    _urlDataCustom: any;
    set apiHTTPHeaderAccept(apiHTTPHeaderAccept: any);
    get apiHTTPHeaderAccept(): any;
    /**
     * Set proxy
     * @param {Object} proxy
     * @param {String} [proxy.host] Your proxy host
     * @param {Number} [proxy.port] Your proxy port
     * @param {Object} [proxy.auth] Your proxy authentication information
     * @param {String} [proxy.auth.username] Proxy authentication Username
     * @param {String} [proxy.auth.password] Proxy authentication Password
     */
    set proxy(proxy: {
        host?: string;
        port?: number;
        auth?: {
            username?: string;
            password?: string;
        };
    });
    get proxy(): {
        host?: string;
        port?: number;
        auth?: {
            username?: string;
            password?: string;
        };
    };
    set timeout(timeout: any);
    get timeout(): any;
    set httpUserAgent(httpUserAgent: any);
    get httpUserAgent(): any;
    get secureVaultEndpointProd(): string;
    get secureVaultEndpointStage(): string;
    get apiEndpointProd(): string;
    get apiEndpointStage(): string;
    get hpaymentApiEndpointProd(): string;
    get hpaymentApiEndpointStage(): string;
    get secureVaultEndpoint(): string;
    get apiEndpoint(): any;
    get hpaymentApiEndpoint(): any;
    get dataApiEndpointProd(): string;
    get dataApiEndpointStage(): string;
    get dataApiEndpoint(): any;
    get dataApiHttpUserAgent(): string;
    _apiUsername: any;
    _apiPassword: any;
    _apiEnv: any;
    _apiHTTPHeaderAccept: any;
    _proxy: {
        host?: string;
        port?: number;
        auth?: {
            username?: string;
            password?: string;
        };
    };
    _timeout: any;
    _httpUserAgent: any;
    _apiToken: any;
}
//# sourceMappingURL=Configuration.d.ts.map