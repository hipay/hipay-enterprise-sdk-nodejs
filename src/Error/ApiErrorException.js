'use strict';

const HiPayNodeSDKError = require('./HiPayNodeSDKError');

class ApiErrorException extends HiPayNodeSDKError {
    constructor(message, status, code, description, ...args) {
        super(...args);
        this.message = message;
        this.status = status;
        this.code = code;
        this.description = description;
    }
}

module.exports = ApiErrorException;
