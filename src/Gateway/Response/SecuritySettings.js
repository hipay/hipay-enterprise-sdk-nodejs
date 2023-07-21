'use strict';

const AbstractResponsePart = require('./AbstractResponsePart');

class SecuritySettings extends AbstractResponsePart {
  constructor(values) {
    if (typeof values !== 'object') {
      values = {};
    }

    super(values);

    if (Object.prototype.hasOwnProperty.call(values, 'hashingAlgorithm')) {
      this.hashingAlgorithm = values.hashingAlgorithm;
    }
  }

  initValues() {
    super.initValues();

    this.hashingAlgorithm = null;
  }
}

module.exports = SecuritySettings;
