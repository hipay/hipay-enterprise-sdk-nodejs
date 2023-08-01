'use strict';

const AbstractMapper = require('./AbstractMapper');
const Operation = require('../Operation');

class OperationMapper extends AbstractMapper {
    mapResponseToModel() {
        let values = {
            mid: typeof this.source.mid !== 'undefined' ? this.source.mid : null,
            authorizationCode: typeof this.source.authorizationCode !== 'undefined' ? this.source.authorizationCode : null,
            transactionReference: typeof this.source.transactionReference !== 'undefined' ? this.source.transactionReference : null,
            dateCreated: typeof this.source.dateCreated !== 'undefined' ? this.source.dateCreated : null,
            dateUpdated: typeof this.source.dateUpdated !== 'undefined' ? this.source.dateUpdated : null,
            dateAuthorized: typeof this.source.dateAuthorized !== 'undefined' ? this.source.dateAuthorized : null,
            status: typeof this.source.status !== 'undefined' ? this.source.status : null,
            state: typeof this.source.state !== 'undefined' ? this.source.state : null,
            message: typeof this.source.message !== 'undefined' ? this.source.message : null,
            authorizedAmount: typeof this.source.authorizedAmount !== 'undefined' ? this.source.authorizedAmount : null,
            capturedAmount: typeof this.source.capturedAmount !== 'undefined' ? this.source.capturedAmount : null,
            refundedAmount: typeof this.source.refundedAmount !== 'undefined' ? this.source.refundedAmount : null,
            decimals: typeof this.source.decimals !== 'undefined' ? this.source.decimals : null,
            currency: typeof this.source.currency !== 'undefined' ? this.source.currency : null,
            operation: typeof this.source.operation !== 'undefined' ? this.source.operation : null
        };

        this._modelObject = new Operation(values);
    }
}

module.exports = OperationMapper;
