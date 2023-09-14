'use strict';

const PaymentCardToken = require('../PaymentCardToken');
const PaymentMethodMapper = require('./PaymentMethodMapper');

class PaymentCardTokenMapper extends PaymentMethodMapper {
    mapResponseToModel() {
        const values = {
            ...super.mapModel(),
            requestId: typeof this.source.requestId !== 'undefined' ? this.source.requestId : null,
            multiUse: typeof this.source.multiUse !== 'undefined' ? this.source.multiUse : null,
            domesticNetwork: typeof this.source.domesticNetwork !== 'undefined' ? this.source.domesticNetwork : null,
            cardHash: typeof this.source.cardHash !== 'undefined' ? this.source.cardHash : null,
            cardType: typeof this.source.cardType !== 'undefined' ? this.source.cardType : null,
            cardCategory: typeof this.source.cardCategory !== 'undefined' ? this.source.cardCategory : null,
            forbiddenIssuerCountry: typeof this.source.forbiddenIssuerCountry !== 'undefined' ? this.source.forbiddenIssuerCountry : null,
            bin: typeof this.source.bin !== 'undefined' ? this.source.bin : null
        };

        this._modelObject = new PaymentCardToken(values);
    }
}

module.exports = PaymentCardTokenMapper;
