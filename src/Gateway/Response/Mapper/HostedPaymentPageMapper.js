'use strict';

const AbstractMapper = require('./AbstractMapper');
const Transaction = require('../Transaction');
const OrderMapper = require('./OrderMapper');

class HostedPaymentPageMapper extends AbstractMapper {
    mapResponseToModel() {
        const values = {
            mid: typeof this.source.mid !== 'undefined' ? this.source.mid : null,
            forwardUrl: typeof this.source.forwardUrl !== 'undefined' ? this.source.forwardUrl : null,
            order: typeof this.source.order !== 'undefined' ? new OrderMapper(this.source.order).mappedObject : null
        };

        this._modelObject = new Transaction(values);
    }
}

module.exports = HostedPaymentPageMapper;
