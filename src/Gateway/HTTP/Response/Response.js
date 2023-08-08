'use strict';

class Response {
    /**
     * @param {Object} body
     * @param {Number} status
     * @param {Object} headers
     */
    constructor(body, status, headers) {
        this._body = body;
        this._statusCode = status;
        this._headers = headers;
    }

    get statusCode() {
        return this._statusCode;
    }

    get headers() {
        return this._headers;
    }

    get body() {
        return this._body;
    }
}

module.exports = Response;
