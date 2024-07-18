'use strict';

const AbstractResponsePart = require('./AbstractResponsePart');

class ThreeDSecure extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {Number} [values.eci]
     * @param {String} [values.enrollmentStatus]
     * @param {String} [values.enrollmentMessage]
     * @param {String} [values.authenticationStatus]
     * @param {String} [values.authenticationMessage]
     * @param {String} [values.authenticationToken]
     * @param {String} [values.xid]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

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
        super.initValues();

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
