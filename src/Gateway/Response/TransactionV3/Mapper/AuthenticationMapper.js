'use strict';

const AbstractMapper = require('../../Mapper/AbstractMapper');
const Authentication = require('../Authentication');

class AuthenticationMapper extends AbstractMapper {
    mapResponseToModel() {
        const values = {
            enrollmentStatus: typeof this.source.enrollmentStatus !== 'undefined' ? this.source.enrollmentStatus : null,
            enrollmentMessage: typeof this.source.enrollmentMessage !== 'undefined' ? this.source.enrollmentMessage : null,
            authenticationStatus: typeof this.source.authenticationStatus !== 'undefined' ? this.source.authenticationStatus : null,
            authenticationMessage: typeof this.source.authenticationMessage !== 'undefined' ? this.source.authenticationMessage : null,
            eci: typeof this.source.eci !== 'undefined' ? this.source.eci : null,
            scaPreference: typeof this.source.scaPreference !== 'undefined' ? this.source.scaPreference : null,
            method: typeof this.source.method !== 'undefined' ? this.source.method : null,
            threeDsVersion: typeof this.source.threeDsVersion !== 'undefined' ? this.source.threeDsVersion : null,
            threeDsAuthenticationMethod: typeof this.source.threeDsAuthenticationMethod !== 'undefined' ? this.source.threeDsAuthenticationMethod : null,
            threeDsLiability: typeof this.source.threeDsLiability !== 'undefined' ? this.source.threeDsLiability : null
        };

        this._modelObject = new Authentication(values);
    }
}

module.exports = AuthenticationMapper;
