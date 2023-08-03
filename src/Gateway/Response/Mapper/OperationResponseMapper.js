'use strict';

const AbstractMapper = require('./AbstractMapper');
const OperationResponse = require('../OperationResponse');

class OperationResponseMapper extends AbstractMapper {
    mapResponseToModel() {
        const values = {
            type: typeof this.source.type !== 'undefined' ? this.source.type : null,
            id: typeof this.source.id !== 'undefined' ? this.source.id : null,
            reference: typeof this.source.reference !== 'undefined' ? this.source.reference : null,
            amount: typeof this.source.amount !== 'undefined' ? this.source.amount : null,
            currency: typeof this.source.currency !== 'undefined' ? this.source.currency : null,
            dateAuthorized: typeof this.source.dateAuthorized !== 'undefined' ? this.source.dateAuthorized : null
        };

        this._modelObject = new OperationResponse(values);
    }
}

module.exports = OperationResponseMapper;
