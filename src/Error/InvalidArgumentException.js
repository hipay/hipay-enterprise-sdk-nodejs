'use strict';

const HiPayNodeSDKError = require('./HiPayNodeSDKError');

class InvalidArgumentException extends HiPayNodeSDKError {
  constructor(...args) {
    super(...args);
  }
}

module.exports = InvalidArgumentException;
