'use strict';

const AbstractMapper = require('./AbstractMapper');
const Operation = require('../Operration');

class OperationMapper extends AbstractMapper {
    mapResponseToModel() {
        const values = {
            id: typeof this.source.id !== 'undefined' ? this.source.id : null,
            type: typeof this.source.type !== 'undefined' ? this.source.type : null,
            status: typeof this.source.status !== 'undefined' ? this.source.status : null,
            amount: typeof this.source.amount !== 'undefined' ? this.source.amount : null,
            arn: typeof this.source.arn !== 'undefined' ? this.source.arn : null,
            merchantReference: typeof this.source.merchantReference !== 'undefined' ? this.source.merchantReference : null,
            dateCreated: typeof this.source.dateCreated !== 'undefined' ? this.source.dateCreated : null,
            dateRemitted: typeof this.source.dateRemitted !== 'undefined' ? this.source.dateRemitted : null,
            dateProcessed: typeof this.source.dateProcessed !== 'undefined' ? this.source.dateProcessed : null,
            dateReconciled: typeof this.source.dateReconciled !== 'undefined' ? this.source.dateReconciled : null,
            currency: typeof this.source.currency !== 'undefined' ? this.source.currency : null,
            decimals: typeof this.source.decimals !== 'undefined' ? this.source.decimals : null
        };

        this._modelObject = new Operation(values);
    }
}

module.exports = OperationMapper;
