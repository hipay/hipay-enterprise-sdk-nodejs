'use strict';

const axios = require('axios');
const Response = require('./Response/Response');
const InvalidArgumentException = require('../../Error/InvalidArgumentException');
const ApiErrorException = require('../../Error/ApiErrorException');
const Configuration = require('./Configuration/Configuration');

class SimpleHTTPClient {
    /**
     * @param {Configuration} configuration
     */
    constructor(configuration) {
        this.configuration = configuration;
    }

    get configuration() {
        return this._configuration;
    }

    /**
     * @param {Configuration} configuration
     */
    set configuration(configuration) {
        if (!(configuration instanceof Configuration)) {
            throw new InvalidArgumentException('Configuration should be a Configuration object');
        } else {
            this._configuration = configuration;
        }
    }

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
    async request(method, endpoint, { baseUrl = '', body = {}, additionalHeaders = {}, isData = false } = {}) {
        if (
            typeof method !== 'string' ||
            !['GET', 'HEAD', 'POST', 'DELETE', 'PUT', 'CONNECT', 'OPTIONS', 'TRACE', 'PATCH'].includes(method.toUpperCase())
        ) {
            throw new InvalidArgumentException('HTTP METHOD must a string and a valid HTTP METHOD Value');
        }

        method = method.toUpperCase();

        if (typeof endpoint !== 'string' || endpoint === '') {
            throw new InvalidArgumentException('Endpoint must be a string and a valid api endpoint');
        }

        let timeout = this.configuration.timeout;

        let userAgent = this.configuration.httpUserAgent;

        if (isData) {
            timeout = 60;
            userAgent = this.configuration.dataApiHttpUserAgent;
        }

        const requestOptions = {
            url: endpoint,
            method: method,
            baseURL: baseUrl,
            timeout: timeout * 1000,
            headers: {
                ...additionalHeaders,
                Accept: this.configuration.apiHTTPHeaderAccept,
                'User-Agent': userAgent
            }
        };

        if (typeof this.configuration.apiToken !== 'undefined' && this.configuration.apiToken !== null) {
            requestOptions.headers.Authorization = `Bearer ${this.configuration.apiToken}`;
        } else {
            requestOptions.headers.Authorization = `Basic ${Buffer.from(
                `${this.configuration.apiUsername}:${this.configuration.apiPassword}`
            ).toString('base64')}`;
        }

        if (this.configuration.proxy.host) {
            requestOptions.proxy = this.configuration.proxy;
        }

        if (isData) {
            requestOptions.headers['X-Who-Api'] = this.configuration.dataApiHttpUserAgent;
            delete requestOptions.headers.Authorization;
        }

        if (method === 'POST') {
            if (isData) {
                requestOptions.headers['Content-Type'] = 'application/json';
                requestOptions.data = JSON.stringify(body);
            } else {
                requestOptions.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                requestOptions.data = Object.keys(body)
                    .map(function (key) {
                        return `${key}=${encodeURIComponent(body[key])}`;
                    })
                    .join('&');
            }
        }

        try {
            const rawResponse = await axios.request(requestOptions);

            return new Response(rawResponse.data, rawResponse.status, {
                'Content-Type': 'application/json; encoding=UTF-8'
            });
        } catch (error) {
            if (!isData) {
                if (error instanceof axios.AxiosError) {
                    const errorResponse = error.response;
                    const errorData = error.response.data;

                    if (errorData.code) {
                        throw new ApiErrorException(errorData.message, errorResponse.status, errorData.code, errorData.description);
                    } else {
                        throw error;
                    }
                } else {
                    throw error;
                }
            }
        }
    }
}

module.exports = SimpleHTTPClient;
