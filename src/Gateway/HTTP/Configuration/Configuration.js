'use strict';

const InvalidArgumentException = require('../../../Error/InvalidArgumentException');

class Configuration {
    static get SECURE_VAULT_ENDPOINT_PROD() {
        return 'https://secure2-vault.hipay-tpp.com/rest/';
    }

    static get SECURE_VAULT_ENDPOINT_STAGE() {
        return 'https://stage-secure2-vault.hipay-tpp.com/rest/';
    }

    static get API_ENDPOINT_PROD() {
        return 'https://secure-gateway.hipay-tpp.com';
    }

    static get API_ENDPOINT_STAGE() {
        return 'https://stage-secure-gateway.hipay-tpp.com';
    }

    static get HPAYMENT_API_ENDPOINT_PROD() {
        return 'https://api.hipay.com';
    }

    static get HPAYMENT_API_ENDPOINT_STAGE() {
        return 'https://stage-api.hipay.com';
    }

    static get DATA_API_ENDPOINT_PROD() {
        return 'https://data.hipay.com';
    }

    static get DATA_API_ENDPOINT_STAGE() {
        return 'https://stage-data.hipay.com';
    }

    static get DATA_API_HTTP_USER_AGENT() {
        return 'sdk-nodejs';
    }

    static get API_ENV_STAGE() {
        return 'stage';
    }

    static get API_ENV_PRODUCTION() {
        return 'production';
    }

    static get API_ENV_CUSTOM() {
        return 'custom';
    }

    static get VALID_HTTP_HEADERS() {
        return ['application/json'];
    }

    static get VALID_PROXY_KEYS() {
        return ['host', 'port', 'auth'];
    }

    static get VALID_PROXY_AUTH_KEYS() {
        return ['username', 'password'];
    }

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
    constructor(options) {
        const {
            apiToken = null,
            apiUsername = null,
            apiPassword = null,
            apiEnv = Configuration.API_ENV_STAGE,
            customApiURL = null,
            customDataApiURL = null,
            apiHTTPHeaderAccept = 'application/json',
            proxy = {},
            timeout = 35,
            httpUserAgent = 'HiPayEnterprise/1.0 (SDK NodeJS)'
        } = options;

        if (!apiToken && (!apiUsername || !apiPassword)) {
            throw new InvalidArgumentException('Constructor must be called with at least apiUsername and apiPassword parameters');
        }

        if (apiToken) {
            this.apiToken = apiToken;
        } else {
            this.apiUsername = apiUsername;
            this.apiPassword = apiPassword;
        }

        this.apiEnv = apiEnv;

        if (customApiURL && /^http(s)?:\/\/[\w.-]+((?:\.[\w.-]+)+)?[\w\-._~:/[\]@!$&'()+,;=]+$/.test(customApiURL)) {
            this._urlCustom = customApiURL;
        }

        if (customDataApiURL && /^http(s)?:\/\/[\w.-]+((?:\.[\w.-]+)+)?[\w\-._~:/[\]@!$&'()+,;=]+$/.test(customDataApiURL)) {
            this._urlDataCustom = customDataApiURL;
        }

        this.apiHTTPHeaderAccept = apiHTTPHeaderAccept;
        this.proxy = proxy;
        this.timeout = timeout;
        this.httpUserAgent = httpUserAgent;
    }

    get secureVaultEndpointProd() {
        return Configuration.SECURE_VAULT_ENDPOINT_PROD;
    }

    get secureVaultEndpointStage() {
        return Configuration.SECURE_VAULT_ENDPOINT_STAGE;
    }

    get apiEndpointProd() {
        return Configuration.API_ENDPOINT_PROD;
    }

    get apiEndpointStage() {
        return Configuration.API_ENDPOINT_STAGE;
    }

    get hpaymentApiEndpointProd() {
        return Configuration.HPAYMENT_API_ENDPOINT_PROD;
    }

    get hpaymentApiEndpointStage() {
        return Configuration.HPAYMENT_API_ENDPOINT_STAGE;
    }

    get secureVaultEndpoint() {
        return this.apiEnv === Configuration.API_ENV_PRODUCTION ? this.secureVaultEndpointProd : this.secureVaultEndpointStage;
    }

    get apiEndpoint() {
        switch (this.apiEnv) {
            case Configuration.API_ENV_CUSTOM:
                return this._urlCustom ?? this.apiEndpointStage;
            case Configuration.API_ENV_PRODUCTION:
                return this.apiEndpointProd;
            case Configuration.API_ENV_STAGE:
            default:
                return this.apiEndpointStage;
        }
    }

    get hpaymentApiEndpoint() {
        switch (this.apiEnv) {
            case Configuration.API_ENV_CUSTOM:
                return this._urlCustom ?? this.hpaymentApiEndpointStage;
            case Configuration.API_ENV_PRODUCTION:
                return this.hpaymentApiEndpointProd;
            case Configuration.API_ENV_STAGE:
            default:
                return this.hpaymentApiEndpointStage;
        }
    }

    get dataApiEndpointProd() {
        return Configuration.DATA_API_ENDPOINT_PROD;
    }

    get dataApiEndpointStage() {
        return Configuration.DATA_API_ENDPOINT_STAGE;
    }

    get dataApiEndpoint() {
        return this._urlDataCustom
            ? this._urlDataCustom
            : this.apiEnv === Configuration.API_ENV_PRODUCTION
            ? this.dataApiEndpointProd
            : this.dataApiEndpointStage;
    }

    get dataApiHttpUserAgent() {
        return Configuration.DATA_API_HTTP_USER_AGENT;
    }

    get apiUsername() {
        return this._apiUsername;
    }

    set apiUsername(apiUsername) {
        if (typeof apiUsername !== 'string' || apiUsername === '') {
            throw new InvalidArgumentException("Api username can't be empty and must be a string");
        }

        this._apiUsername = apiUsername;
    }

    get apiPassword() {
        return this._apiPassword;
    }

    set apiPassword(apiPassword) {
        if (typeof apiPassword !== 'string' || apiPassword === '') {
            throw new InvalidArgumentException("Api password can't be empty and must be a string");
        }

        this._apiPassword = apiPassword;
    }

    get apiEnv() {
        return this._apiEnv;
    }

    set apiEnv(apiEnv) {
        if (apiEnv !== Configuration.API_ENV_PRODUCTION && apiEnv !== Configuration.API_ENV_STAGE && apiEnv !== Configuration.API_ENV_CUSTOM) {
            throw new InvalidArgumentException("Api environment must be a string value between 'stage', 'production' or 'custom'");
        } else {
            this._apiEnv = apiEnv;
        }
    }

    get apiHTTPHeaderAccept() {
        return this._apiHTTPHeaderAccept;
    }

    set apiHTTPHeaderAccept(apiHTTPHeaderAccept) {
        if (!Configuration.VALID_HTTP_HEADERS.includes(apiHTTPHeaderAccept)) {
            throw new InvalidArgumentException(`Api HTTP Header Accept should be one of these values: ${Configuration.VALID_HTTP_HEADERS.join()}`);
        } else {
            this._apiHTTPHeaderAccept = apiHTTPHeaderAccept;
        }
    }

    get proxy() {
        return this._proxy;
    }

    /**
     * Set proxy
     * @param {Object} proxy
     * @param {String} [proxy.host] Your proxy host
     * @param {Number} [proxy.port] Your proxy port
     * @param {Object} [proxy.auth] Your proxy authentication information
     * @param {String} [proxy.auth.username] Proxy authentication Username
     * @param {String} [proxy.auth.password] Proxy authentication Password
     */
    set proxy(proxy) {
        if (typeof proxy !== 'object') {
            throw new InvalidArgumentException('Proxy should be an object');
        } else {
            for (const prop in proxy) {
                if (Object.prototype.hasOwnProperty.call(proxy, prop) && !Configuration.VALID_PROXY_KEYS.includes(prop)) {
                    throw new InvalidArgumentException(`Proxy keys should be: ${Configuration.VALID_PROXY_KEYS.join()}`);
                }
            }

            if (proxy.host) {
                if (typeof proxy.host !== 'string') {
                    throw new InvalidArgumentException('Proxy host should be a string');
                }
            }

            if (proxy.port) {
                if (typeof proxy.port !== 'number') {
                    throw new InvalidArgumentException('Proxy port should be an integer');
                }
            }

            if (proxy.auth) {
                if (typeof proxy.auth !== 'object') {
                    throw new InvalidArgumentException(
                        `Proxy auth should be an object with the following properties : ${Configuration.VALID_PROXY_AUTH_KEYS.join()}`
                    );
                } else {
                    for (const prop in proxy.auth) {
                        if (
                            Object.prototype.hasOwnProperty.call(proxy.auth, prop) &&
                            (!Configuration.VALID_PROXY_AUTH_KEYS.includes(prop) || typeof proxy.auth[prop] !== 'string')
                        ) {
                            throw new InvalidArgumentException(
                                `Proxy auth keys should be: ${Configuration.VALID_PROXY_AUTH_KEYS.join()} and should be string`
                            );
                        }
                    }
                }
            }

            this._proxy = proxy;
        }
    }

    get timeout() {
        return this._timeout;
    }

    set timeout(timeout) {
        if (typeof timeout !== 'number' || timeout < 0) {
            throw new InvalidArgumentException("Timeout can't be empty and must be a positive integer");
        } else {
            this._timeout = timeout;
        }
    }

    get httpUserAgent() {
        return this._httpUserAgent;
    }

    set httpUserAgent(httpUserAgent) {
        if (typeof httpUserAgent !== 'string' || httpUserAgent === '') {
            throw new InvalidArgumentException("HTTP User Agent can't be empty and must be a string");
        } else {
            this._httpUserAgent = httpUserAgent;
        }
    }

    get apiToken() {
        return this._apiToken;
    }

    set apiToken(apiToken) {
        if (typeof apiToken !== 'string' || apiToken === '') {
            if (typeof this.apiUsername === 'undefined' || typeof this.apiPassword === 'undefined' || (apiToken !== '' && apiToken !== null)) {
                throw new InvalidArgumentException("Api token can't be empty and must be a string");
            }
        }

        this._apiToken = apiToken;
    }
}

module.exports = Configuration;
