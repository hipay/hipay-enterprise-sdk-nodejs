'use strict';

const AbstractMapper = require('../../Mapper/AbstractMapper');
const PaymentMethod = require('../PaymentMethod');

class PaymentMethodMapper extends AbstractMapper {
    mapResponseToModel() {
        const values = {
            name: typeof this.source.name !== 'undefined' ? this.source.name : null,
            description: typeof this.source.description !== 'undefined' ? this.source.description : null
        };

        this._modelObject = new PaymentMethod(values);
    }
}

module.exports = PaymentMethodMapper;
