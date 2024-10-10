'use strict';

const AbstractMapper = require('./AbstractMapper');
const PaymentMethodMapper = require('./PaymentMethodMapper');
const PaymentProduct = require('../PaymentProduct');

class PaymentProductMapper extends AbstractMapper {
    mapResponseToModel() {
        const values = {
            paymentMethod: typeof this.source.paymentMethod !== 'undefined' ? new PaymentMethodMapper(this.source.paymentMethod).mappedObject : null,
            name: typeof this.source.name !== 'undefined' ? this.source.name : null,
            description: typeof this.source.description !== 'undefined' ? this.source.description : null
        };

        this._modelObject = new PaymentProduct(values);
    }
}

module.exports = PaymentProductMapper;
