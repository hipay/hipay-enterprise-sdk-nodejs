'use strict';

const { constants } = require('../../../../constants');
const gaxios = require('gaxios');
const ClientInterface = require('./ClientInterface');
const ConfigurationInterface = require('./Configuration/ConfigurationInterface');
const Response = require('./Response/Response');
const InvalidArgumentException = require('../../Error/InvalidArgumentException');
const ApiErrorException = require('../../Error/ApiErrorException');
const { LoggerManager } = require('@hipay/gcp-toolbox-express');
const log = LoggerManager.logger;

class SimpleHTTPClient extends ClientInterface {
  /**
   *
   * @param configuration ConfigurationInterface
   */
  constructor(configuration) {
    super();
    this.configuration = configuration;
  }

  get configuration() {
    return this._configuration;
  }

  set configuration(configuration) {
    if (!(configuration instanceof ConfigurationInterface)) {
      throw new InvalidArgumentException(
        'Configuration should extend ConfigurationInterface'
      );
    } else {
      this._configuration = configuration;
    }
  }

  /**
   *
   * @param method
   * @param endpoint
   * @param params
   * @param isVault
   * @param isData
   * @returns Response
   */
  async request(method, endpoint, params, isVault = false, isData = false) {
    if (
      typeof method !== 'string' ||
      ![
        'GET',
        'HEAD',
        'POST',
        'DELETE',
        'PUT',
        'CONNECT',
        'OPTIONS',
        'TRACE',
        'PATCH'
      ].includes(method.toUpperCase())
    ) {
      throw new InvalidArgumentException(
        'HTTP METHOD must a string and a valid HTTP METHOD Value'
      );
    }

    method = method.toUpperCase();

    if (typeof endpoint !== 'string' || endpoint === '') {
      throw new InvalidArgumentException(
        'Endpoint must be a string and a valid api endpoint'
      );
    }

    let timeout = this.configuration.timeout;

    let url = isVault
      ? this.configuration.secureVaultEndpoint
      : this.configuration.apiEndpoint;

    let userAgent = this.configuration.httpUserAgent;

    if (isData) {
      url = this.configuration.dataApiEndpoint;
      timeout = 60;
      userAgent = this.configuration.dataApiHttpUserAgent;
    }

    let requestOptions = {
      url: endpoint,
      method: method,
      baseURL: url,
      timeout: timeout * 1000,
      headers: {
        Accept: this.configuration.apiHTTPHeaderAccept,
        'User-Agent': userAgent
      }
    };

    if (
      typeof this.configuration.apiToken !== 'undefined' &&
      this.configuration.apiToken !== null
    ) {
      requestOptions.headers.Authorization =
        'Bearer ' + this.configuration.apiToken;
    } else {
      requestOptions.headers.Authorization =
        'Basic ' +
        Buffer.from(
          this.configuration.apiUsername + ':' + this.configuration.apiPassword
        ).toString('base64');
    }

    if (this.configuration.proxy.host) {
      requestOptions.proxy = this.configuration.proxy;
    }

    if (isData) {
      requestOptions.headers['X-Who-Api'] =
        this.configuration.dataApiHttpUserAgent;
      delete requestOptions.headers.Authorization;
    }

    if (method === 'POST') {
      if (isData) {
        requestOptions.headers['Content-Type'] = 'application/json';
        requestOptions.data = JSON.stringify(params);
      } else {
        requestOptions.headers['Content-Type'] =
          'application/x-www-form-urlencoded';
        requestOptions.data = Object.keys(params)
          .map(function (key) {
            return key + '=' + encodeURIComponent(params[key]);
          })
          .join('&');
      }
    }

    try {
      if (
        isData &&
        constants.ENVIRONMENT === 'dev' &&
        !constants.API_DATA_URL_CUSTOM
      ) {
        log.debug('Call to API Data has been skipped');
      } else {
        log.info(
          `Sending request to ${requestOptions.baseURL}${requestOptions.url}`,
          requestOptions
        );
        const rawResponse = await gaxios.request(requestOptions);

        log.debug('Request done', rawResponse);

        return new Response(rawResponse.data, rawResponse.status, {
          'Content-Type': 'application/json; encoding=UTF-8'
        });
      }
    } catch (error) {
      if (!isData) {
        if (error.constructor.name === gaxios.GaxiosError.name) {
          let errorResponse = error.response;
          let errorData = error.response.data;

          if (errorData.code) {
            throw new ApiErrorException(
              errorData.message,
              errorResponse.status,
              errorData.code,
              errorData.description
            );
          } else {
            throw error;
          }
        } else {
          throw error;
        }
      } else {
        log.error('Call to API Data has thrown exception', error);
      }
    }
  }
}

module.exports = SimpleHTTPClient;
