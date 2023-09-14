'use strict';

const PaymentCardToken = require('../PaymentCardToken');
const AbstractMapper = require('./AbstractMapper');

class PaymentCardTokenMapper extends AbstractMapper {
    mapResponseToModel() {
        const values = {
            token: typeof this.source.token !== 'undefined' ? this.source.token : null,
            brand: typeof this.source.brand !== 'undefined' ? this.source.brand : null,
            pan: typeof this.source.pan !== 'undefined' ? this.source.pan : null,
            cardHolder: typeof this.source.card_holder !== 'undefined' ? this.source.card_holder : null,
            cardExpiryMonth: typeof this.source.card_expiry_month !== 'undefined' ? this.source.card_expiry_month : null,
            cardExpiryYear: typeof this.source.card_expiry_year !== 'undefined' ? this.source.card_expiry_year : null,
            cardId: typeof this.source.card_id !== 'undefined' ? this.source.card_id : null,
            issuer: typeof this.source.issuer !== 'undefined' ? this.source.issuer : null,
            country: typeof this.source.country !== 'undefined' ? this.source.country : null,
            requestId: typeof this.source.request_id !== 'undefined' ? this.source.request_id : null,
            multiUse: typeof this.source.multi_use !== 'undefined' ? this.source.multi_use : null,
            domesticNetwork: typeof this.source.domestic_network !== 'undefined' ? this.source.domestic_network : null,
            cardHash: typeof this.source.card_hash !== 'undefined' ? this.source.card_hash : null,
            cardType: typeof this.source.card_type !== 'undefined' ? this.source.card_type : null,
            cardCategory: typeof this.source.card_category !== 'undefined' ? this.source.card_category : null,
            forbiddenIssuerCountry: typeof this.source.forbidden_issuer_country !== 'undefined' ? this.source.forbidden_issuer_country : null,
            bin: typeof this.source.bin !== 'undefined' ? this.source.bin : null
        };

        this._modelObject = new PaymentCardToken(values);
    }
}

module.exports = PaymentCardTokenMapper;
