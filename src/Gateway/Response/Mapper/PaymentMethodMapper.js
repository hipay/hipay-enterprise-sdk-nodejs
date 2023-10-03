'use strict';

const AbstractMapper = require('./AbstractMapper');
const PaymentMethod = require('../PaymentMethod');

class PaymentMethodMapper extends AbstractMapper {
    mapModel() {
        return {
            token: typeof this.source.token !== 'undefined' ? this.source.token : null,
            brand: typeof this.source.brand !== 'undefined' ? this.source.brand : null,
            pan: typeof this.source.pan !== 'undefined' ? this.source.pan : null,
            cardHolder: typeof this.source.cardHolder !== 'undefined' ? this.source.cardHolder : null,
            cardExpiryMonth: typeof this.source.cardExpiryMonth !== 'undefined' ? this.source.cardExpiryMonth : null,
            cardExpiryYear: typeof this.source.cardExpiryYear !== 'undefined' ? this.source.cardExpiryYear : null,
            cardId: typeof this.source.cardId !== 'undefined' ? this.source.cardId : null,
            issuer: typeof this.source.issuer !== 'undefined' ? this.source.issuer : null,
            country: typeof this.source.country !== 'undefined' ? this.source.country : null
        };
    }

    mapResponseToModel() {
        this._modelObject = new PaymentMethod(this.mapModel());
    }
}

module.exports = PaymentMethodMapper;
