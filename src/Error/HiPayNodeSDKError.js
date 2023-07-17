'use strict';

class HiPayNodeSDKError extends Error {
  constructor(...args) {
    super(...args);
    this.isHipaySDKError = true;
  }
}

module.exports = HiPayNodeSDKError;
