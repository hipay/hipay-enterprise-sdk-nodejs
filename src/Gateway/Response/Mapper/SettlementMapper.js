'use strict';

const AbstractMapper = require('./AbstractMapper');
const Settlement = require('../Settlement');

class SettlementMapper extends AbstractMapper {
    mapResponseToModel() {
        const values = {
            settlementid: typeof this.source.settlementid !== 'undefined' ? this.source.settlementid : null,
            amount: typeof this.source.amount !== 'undefined' ? this.source.amount : null,
            currency: typeof this.source.currency !== 'undefined' ? this.source.currency : null,
            dateValue: typeof this.source.dateValue !== 'undefined' ? this.source.dateValue : null,
            recipientName: typeof this.source.recipientName !== 'undefined' ? this.source.recipientName : null,
            recipientIban: typeof this.source.recipientIban !== 'undefined' ? this.source.recipientIban : null,
            recipientBic: typeof this.source.recipientBic !== 'undefined' ? this.source.recipientBic : null,
            recipientBankCountry: typeof this.source.recipientBankCountry !== 'undefined' ? this.source.recipientBankCountry : null,
            merchantName: typeof this.source.merchantName !== 'undefined' ? this.source.merchantName : null,
            merchantId: typeof this.source.merchantId !== 'undefined' ? this.source.merchantId : null,
            sales: typeof this.source.sales !== 'undefined' ? this.source.sales : null,
            refunds: typeof this.source.refunds !== 'undefined' ? this.source.refunds : null,
            fees: typeof this.source.fees !== 'undefined' ? this.source.fees : null,
            chargeback: typeof this.source.chargeback !== 'undefined' ? this.source.chargeback : null,
            deferred: typeof this.source.deferred !== 'undefined' ? this.source.deferred : null,
            rolling: typeof this.source.rolling !== 'undefined' ? this.source.rolling : null,
            other: typeof this.source.other !== 'undefined' ? this.source.other : null
        };

        this._modelObject = new Settlement(values);
    }
}

module.exports = SettlementMapper;
