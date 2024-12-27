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

        if (Object.hasOwn(values, 'eci')) {
            this.eci = values.eci;
        }
        if (Object.hasOwn(values, 'enrollmentStatus')) {
            this.enrollmentStatus = values.enrollmentStatus;
        }
        if (Object.hasOwn(values, 'enrollmentMessage')) {
            this.enrollmentMessage = values.enrollmentMessage;
        }
        if (Object.hasOwn(values, 'authenticationStatus')) {
            this.authenticationStatus = values.authenticationStatus;
        }
        if (Object.hasOwn(values, 'authenticationMessage')) {
            this.authenticationMessage = values.authenticationMessage;
        }
        if (Object.hasOwn(values, 'authenticationToken')) {
            this.authenticationToken = values.authenticationToken;
        }
        if (Object.hasOwn(values, 'xid')) {
            this.xid = values.xid;
        }
        if (Object.hasOwn(values, 'scaPreference')) {
            this.scaPreference = values.scaPreference;
        }
        if (Object.hasOwn(values, 'version')) {
            this.version = values.version;
        }
        if (Object.hasOwn(values, 'authenticationMethod')) {
            this.authenticationMethod = values.authenticationMethod;
        }
        if (Object.hasOwn(values, 'liability')) {
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
