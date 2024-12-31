'use strict';

const AbstractMapper = require('./AbstractMapper');
const AvailablePaymentProduct = require('../AvailablePaymentProduct');

class AvailablePaymentProductMapper extends AbstractMapper {
    mapResponseToModel() {
        const values = {
            id: typeof this.source.id !== 'undefined' ? this.source.id : null,
            code: typeof this.source.code !== 'undefined' ? this.source.code : null,
            description: typeof this.source.description !== 'undefined' ? this.source.description : null,
            customerDescription: typeof this.source.customerDescription !== 'undefined' ? this.source.customerDescription : null,
            paymentProductCategoryCode: typeof this.source.paymentProductCategoryCode !== 'undefined' ? this.source.paymentProductCategoryCode : null,
            tokenizable: typeof this.source.tokenizable !== 'undefined' ? this.source.tokenizable : null,
            options: typeof this.source.options !== 'undefined' ? this.source.options : null
        };

        this._modelObject = new AvailablePaymentProduct(values);
    }
}

module.exports = AvailablePaymentProductMapper;
