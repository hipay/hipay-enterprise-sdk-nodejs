'use strict';

const AbstractResponsePart = require('../AbstractResponsePart');

class Authentication extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {String} [values.enrollmentStatus]
     * @param {String} [values.enrollmentMessage]
     * @param {import('../../../Enum/Transaction/V3/Authentication/AuthenticationStatus')} [values.authenticationStatus]
     * @param {String} [values.authenticationMessage]
     * @param {Number} [values.eci]
     * @param {Number} [values.scaPreference]
     * @param {String} [values.method]
     * @param {String} [values.threeDsVersion]
     * @param {import('../../../Enum/Transaction/V3/Authentication/ThreeDSAuthenticationMethod')} [values.threeDsAuthenticationMethod]
     * @param {import('../../../Enum/Transaction/V3/Authentication/ThreeDSAuthenticationLiability')} [values.threeDsLiability]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

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

        if (Object.hasOwn(values, 'eci')) {
            this.eci = values.eci;
        }

        if (Object.hasOwn(values, 'scaPreference')) {
            this.scaPreference = values.scaPreference;
        }

        if (Object.hasOwn(values, 'method')) {
            this.method = values.method;
        }

        if (Object.hasOwn(values, 'threeDsVersion')) {
            this.threeDsVersion = values.threeDsVersion;
        }

        if (Object.hasOwn(values, 'threeDsAuthenticationMethod')) {
            this.threeDsAuthenticationMethod = values.threeDsAuthenticationMethod;
        }

        if (Object.hasOwn(values, 'threeDsLiability')) {
            this.threeDsLiability = values.threeDsLiability;
        }
    }

    initValues() {
        super.initValues();

        this.enrollmentStatus = null;
        this.enrollmentMessage = null;
        this.authenticationStatus = null;
        this.authenticationMessage = null;
        this.eci = null;
        this.scaPreference = null;
        this.method = null;
        this.threeDsVersion = null;
        this.threeDsAuthenticationMethod = null;
        this.threeDsLiability = null;
    }
}

module.exports = Authentication;
