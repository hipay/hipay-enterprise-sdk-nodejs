'use strict';

const ResponseInterface = require('./ResponseInterface');

class Response extends ResponseInterface {
  constructor(body, status, headers) {
    super();

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
