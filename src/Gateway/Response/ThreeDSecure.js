'use strict';

class ThreeDSecure {
  constructor(values) {
    if (typeof values !== 'object') {
      values = {};
    }

    this.initValues();

    if (Object.prototype.hasOwnProperty.call(values, 'eci')) {
      this.eci = values.eci;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'enrollmentStatus')) {
      this.enrollmentStatus = values.enrollmentStatus;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'enrollmentMessage')) {
      this.enrollmentMessage = values.enrollmentMessage;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'authenticationStatus')) {
      this.authenticationStatus = values.authenticationStatus;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'authenticationMessage')) {
      this.authenticationMessage = values.authenticationMessage;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'authenticationToken')) {
      this.authenticationToken = values.authenticationToken;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'xid')) {
      this.xid = values.xid;
    }
  }

  initValues() {
    this.eci = null;
    this.enrollmentStatus = null;
    this.enrollmentMessage = null;
    this.authenticationStatus = null;
    this.authenticationMessage = null;
    this.authenticationToken = null;
    this.xid = null;
  }
}

module.exports = ThreeDSecure;
