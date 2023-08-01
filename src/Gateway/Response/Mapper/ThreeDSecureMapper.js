'use strict';

const AbstractMapper = require('./AbstractMapper');
const ThreeDSecure = require('../ThreeDSecure');

class ThreeDSecureMapper extends AbstractMapper {
    mapResponseToModel() {
        let values = {
            eci: typeof this.source.eci !== 'undefined' ? this.source.eci : null,
            enrollmentStatus: typeof this.source.enrollmentStatus !== 'undefined' ? this.source.enrollmentStatus : null,
            enrollmentMessage: typeof this.source.enrollmentMessage !== 'undefined' ? this.source.enrollmentMessage : null,
            authenticationStatus: typeof this.source.authenticationStatus !== 'undefined' ? this.source.authenticationStatus : null,
            authenticationMessage: typeof this.source.authenticationMessage !== 'undefined' ? this.source.authenticationMessage : null,
            authenticationToken: typeof this.source.authenticationToken !== 'undefined' ? this.source.authenticationToken : null,
            xid: typeof this.source.xid !== 'undefined' ? this.source.xid : null
        };

        this._modelObject = new ThreeDSecure(values);
    }
}

module.exports = ThreeDSecureMapper;
