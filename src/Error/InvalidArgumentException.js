'use strict';

const HiPayNodeSDKError = require('./HiPayNodeSDKError');

class InvalidArgumentException extends HiPayNodeSDKError {}

module.exports = InvalidArgumentException;
