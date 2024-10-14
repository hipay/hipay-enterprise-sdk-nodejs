'use strict';

const AbstractMapper = require('../../Mapper/AbstractMapper');
const CustomerMapper = require('./CustomerMapper');
const ShippingAddressMapper = require('./ShippingAddressMapper');
const AddressMapper = require('./AddressMapper');
const Order = require('../Order');

class OrderMapper extends AbstractMapper {
    mapResponseToModel() {
        const values = {
            id: typeof this.source.id !== 'undefined' ? this.source.id : null,
            attempts: typeof this.source.attempts !== 'undefined' ? this.source.attempts : null,
            amount: typeof this.source.amount !== 'undefined' ? this.source.amount : null,
            shipping: typeof this.source.shipping !== 'undefined' ? this.source.shipping : null,
            tax: typeof this.source.tax !== 'undefined' ? this.source.tax : null,
            customer: typeof this.source.customer !== 'undefined' ? new CustomerMapper(this.source.customer).mappedObject : null,
            shippingTo: typeof this.source.shippingTo !== 'undefined' ? new ShippingAddressMapper(this.source.shippingTo).mappedObject : null,
            dateCreated: typeof this.source.dateCreated !== 'undefined' ? this.source.dateCreated : null,
            currency: typeof this.source.currency !== 'undefined' ? this.source.currency : null,
            decimals: typeof this.source.decimals !== 'undefined' ? this.source.decimals : null,
            billingTo: typeof this.source.billingTo !== 'undefined' ? new AddressMapper(this.source.billingTo).mappedObject : null,
            customData: typeof this.source.customData !== 'undefined' ? this.source.customData : null
        };

        this._modelObject = new Order(values);
    }
}

module.exports = OrderMapper;
