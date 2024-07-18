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
     * @param {String} [values.scaPreference]
     * @param {String} [values.version]
     * @param {String} [values.authenticationMethod]
     * @param {String} [values.liability]

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
        if (Object.prototype.hasOwnProperty.call(values, 'scaPreference')) {
            his.scaPreference = values.scaPreference;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'version')) {
            this.version = values.version;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'authenticationMethod')) {
            this.authenticationMethod = values.authenticationMethod;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'liability')) {
            this.liability = values.liability;
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
        this.scaPreference = null;
        this.version = null;
        this.authenticationMethod = null;
        this.liability = null;
    }
}

module.exports = ThreeDSecure;
