'use strict';

const AbstractMapper = require('./AbstractMapper');
const PersonalInformationMapper = require('./PersonalInformationMapper');
const Order = require('../Order');

class OrderMapper extends AbstractMapper {
    mapResponseToModel() {
        const values = {
            id: typeof this.source.id !== 'undefined' ? this.source.id : null,
            customerId: typeof this.source.customerId !== 'undefined' ? this.source.customerId : null,
            amount: typeof this.source.amount !== 'undefined' ? this.source.amount : null,
            tax: typeof this.source.tax !== 'undefined' ? this.source.tax : null,
            shipping: typeof this.source.shipping !== 'undefined' ? this.source.shipping : null,
            dateCreated: typeof this.source.dateCreated !== 'undefined' ? this.source.dateCreated : null,
            attempts: typeof this.source.attempts !== 'undefined' ? this.source.attempts : null,
            currency: typeof this.source.currency !== 'undefined' ? this.source.currency : null,
            decimals: typeof this.source.decimals !== 'undefined' ? this.source.decimals : null,
            gender: typeof this.source.gender !== 'undefined' ? this.source.gender : null,
            language: typeof this.source.language !== 'undefined' ? this.source.language : null,
            shippingAddress:
                typeof this.source.shippingAddress !== 'undefined' ? new PersonalInformationMapper(this.source.shippingAddress).mappedObject : null,
            email: typeof this.source.email !== 'undefined' ? this.source.email : null
        };

        this._modelObject = new Order(values);
    }
}

module.exports = OrderMapper;
