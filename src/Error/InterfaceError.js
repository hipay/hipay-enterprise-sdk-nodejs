'use strict';

const HiPayNodeSDKError = require('./HiPayNodeSDKError');

class InterfaceError extends HiPayNodeSDKError {
  constructor(...args) {
    super(...args);
  }
}

module.exports = InterfaceError;
