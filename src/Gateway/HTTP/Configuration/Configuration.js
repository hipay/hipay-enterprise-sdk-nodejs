'use strict';

const ConfigurationInterface = require('./ConfigurationInterface');
const InvalidArgumentException = require('../../../Error/InvalidArgumentException');

class Configuration extends ConfigurationInterface {
  static get SECURE_VAULT_ENDPOINT_PROD() {
    return 'https://secure2-vault.hipay-tpp.com';
  }

  static get SECURE_VAULT_ENDPOINT_STAGE() {
    return 'https://stage-secure2-vault.hipay-tpp.com';
  }

  static get API_ENDPOINT_PROD() {
    return 'https://secure-gateway.hipay-tpp.com';
  }

  static get API_ENDPOINT_STAGE() {
    return 'https://stage-secure-gateway.hipay-tpp.com';
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

  constructor(params) {
    super();

    if (
      Object.prototype.hasOwnProperty.call(params, 'apiToken') &&
      params.apiToken !== null
    ) {
      this.apiToken = params.apiToken;
    } else {
      if (
        !Object.prototype.hasOwnProperty.call(params, 'apiUsername') ||
        !Object.prototype.hasOwnProperty.call(params, 'apiPassword')
      ) {
        throw new InvalidArgumentException(
          'Constructor must be called with at least apiUsername and apiPassword parameters'
        );
      }

      this.apiUsername = params.apiUsername;
      this.apiPassword = params.apiPassword;
      this.apiToken = null;
    }

    if (
      Object.prototype.hasOwnProperty.call(params, 'apiEnv') &&
      params.apiEnv !== null
    ) {
      this.apiEnv = params.apiEnv;
    } else {
      this.apiEnv = Configuration.API_ENV_STAGE;
    }

    if (
      this.apiEnv === Configuration.API_ENV_CUSTOM &&
      Object.prototype.hasOwnProperty.call(params, 'customApiURL') &&
      /^(?:http(s)?:\/\/)[\w.-]+((?:\.[\w.-]+)+)?[\w\-._~:/[\]@!$&'()+,;=]+$/.test(
        params.customApiURL
      )
    ) {
      this._urlCustom = params.customApiURL;
    } else {
      this._urlCustom = Configuration.API_ENDPOINT_STAGE;
    }

    if (
      Object.prototype.hasOwnProperty.call(params, 'apiHTTPHeaderAccept') &&
      params.apiHTTPHeaderAccept !== null
    ) {
      this.apiHTTPHeaderAccept = params.apiHTTPHeaderAccept;
    } else {
      this.apiHTTPHeaderAccept = 'application/json';
    }

    if (
      Object.prototype.hasOwnProperty.call(params, 'proxy') &&
      params.proxy !== null
    ) {
      this.proxy = params.proxy;
    } else {
      this.proxy = {};
    }

    if (
      Object.prototype.hasOwnProperty.call(params, 'timeout') &&
      params.timeout !== null
    ) {
      this.timeout = params.timeout;
    } else {
      this.timeout = 35;
    }

    if (
      Object.prototype.hasOwnProperty.call(params, 'httpUserAgent') &&
      params.httpUserAgent !== null
    ) {
      this.httpUserAgent = params.httpUserAgent;
    } else {
      this.httpUserAgent = 'HiPayFullservice/1.0 (SDK NodeJS)';
    }
  }

  get apiEndpointProd() {
    return Configuration.API_ENDPOINT_PROD;
  }

  get apiEndpointStage() {
    return Configuration.API_ENDPOINT_STAGE;
  }

  get apiEndpoint() {
    let endpoint;
    switch (this.apiEnv) {
      case Configuration.API_ENV_CUSTOM:
        if (
          typeof this._urlCustom === 'string' &&
          this._urlCustom !== '' &&
          /^(?:http(s)?:\/\/)[\w.-]+((?:\.[\w.-]+)+)?[\w\-._~:/[\]@!$&'()+,;=]+$/.test(
            this._urlCustom
          )
        ) {
          endpoint = this._urlCustom;
        } else {
          endpoint = this.apiEndpointStage;
        }
        break;
      case Configuration.API_ENV_PRODUCTION:
        endpoint = this.apiEndpointProd;
        break;
      case Configuration.API_ENV_STAGE:
      default:
        endpoint = this.apiEndpointStage;
    }

    return endpoint;
  }

  get dataApiEndpointProd() {
    return Configuration.DATA_API_ENDPOINT_PROD;
  }

  get dataApiEndpointStage() {
    return Configuration.DATA_API_ENDPOINT_STAGE;
  }

  get dataApiEndpoint() {
    const { constants } = require('../../../../../constants');
    return (
      constants.API_DATA_URL_CUSTOM ||
      (this.apiEnv === Configuration.API_ENV_PRODUCTION
        ? this.dataApiEndpointProd
        : this.dataApiEndpointStage)
    );
  }

  get dataApiHttpUserAgent() {
    return Configuration.DATA_API_HTTP_USER_AGENT;
  }

  get secureVaultEndpointProd() {
    return Configuration.SECURE_VAULT_ENDPOINT_PROD;
  }

  get secureVaultEndpointStage() {
    return Configuration.SECURE_VAULT_ENDPOINT_STAGE;
  }

  get secureVaultEndpoint() {
    return this.apiEnv === Configuration.API_ENV_PRODUCTION
      ? this.secureVaultEndpointProd
      : this.secureVaultEndpointStage;
  }

  get apiUsername() {
    return this._apiUsername;
  }

  set apiUsername(apiUsername) {
    if (typeof apiUsername !== 'string' || apiUsername === '') {
      throw new InvalidArgumentException(
        "Api username can't be empty and must be a string"
      );
    }

    this._apiUsername = apiUsername;
  }

  get apiPassword() {
    return this._apiPassword;
  }

  set apiPassword(apiPassword) {
    if (typeof apiPassword !== 'string' || apiPassword === '') {
      throw new InvalidArgumentException(
        "Api password can't be empty and must be a string"
      );
    }

    this._apiPassword = apiPassword;
  }

  get apiEnv() {
    return this._apiEnv;
  }

  set apiEnv(apiEnv) {
    if (
      apiEnv !== Configuration.API_ENV_PRODUCTION &&
      apiEnv !== Configuration.API_ENV_STAGE &&
      apiEnv !== Configuration.API_ENV_CUSTOM
    ) {
      throw new InvalidArgumentException(
        "Api environment must be a string value between 'stage', 'production' or 'custom'"
      );
    } else {
      this._apiEnv = apiEnv;
    }
  }

  get apiHTTPHeaderAccept() {
    return this._apiHTTPHeaderAccept;
  }

  set apiHTTPHeaderAccept(apiHTTPHeaderAccept) {
    if (!Configuration.VALID_HTTP_HEADERS.includes(apiHTTPHeaderAccept)) {
      throw new InvalidArgumentException(
        'Api HTTP Header Accept should be one of these values: ' +
          Configuration.VALID_HTTP_HEADERS.join()
      );
    } else {
      this._apiHTTPHeaderAccept = apiHTTPHeaderAccept;
    }
  }

  get proxy() {
    return this._proxy;
  }

  set proxy(proxy) {
    if (typeof proxy !== 'object') {
      throw new InvalidArgumentException('Proxy should be an object');
    } else {
      for (let prop in proxy) {
        if (
          Object.prototype.hasOwnProperty.call(proxy, prop) &&
          !Configuration.VALID_PROXY_KEYS.includes(prop)
        ) {
          throw new InvalidArgumentException(
            'Proxy keys should be: ' + Configuration.VALID_PROXY_KEYS.join()
          );
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
            'Proxy auth should be an object with the following properties : ' +
              Configuration.VALID_PROXY_AUTH_KEYS.join()
          );
        } else {
          for (let prop in proxy.auth) {
            if (
              Object.prototype.hasOwnProperty.call(proxy.auth, prop) &&
              (!Configuration.VALID_PROXY_AUTH_KEYS.includes(prop) ||
                typeof proxy.auth[prop] !== 'string')
            ) {
              throw new InvalidArgumentException(
                'Proxy auth keys should be: ' +
                  Configuration.VALID_PROXY_AUTH_KEYS.join() +
                  ' and should be string'
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
      throw new InvalidArgumentException(
        "Timeout can't be empty and must be a positive integer"
      );
    } else {
      this._timeout = timeout;
    }
  }

  get httpUserAgent() {
    return this._httpUserAgent;
  }

  set httpUserAgent(httpUserAgent) {
    if (typeof httpUserAgent !== 'string' || httpUserAgent === '') {
      throw new InvalidArgumentException(
        "HTTP User Agent can't be empty and must be a string"
      );
    } else {
      this._httpUserAgent = httpUserAgent;
    }
  }

  get apiToken() {
    return this._apiToken;
  }

  set apiToken(apiToken) {
    if (typeof apiToken !== 'string' || apiToken === '') {
      if (
        typeof this.apiUsername === 'undefined' ||
        typeof this.apiPassword === 'undefined' ||
        (apiToken !== '' && apiToken !== null)
      ) {
        throw new InvalidArgumentException(
          "Api token can't be empty and must be a string"
        );
      }
    }

    this._apiToken = apiToken;
  }
}

module.exports = Configuration;
