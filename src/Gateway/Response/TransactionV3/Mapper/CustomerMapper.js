'use strict';

const AbstractMapper = require('./AbstractMapper');
const Customer = require('../Customer');

class CustomerMapper extends AbstractMapper {

    mapResponseToModel() {
        const values = {
            id: typeof this.source.id !== 'undefined' ? this.source.id : null,
            firstname: typeof this.source.firstname !== 'undefined' ? this.source.firstname : null,
            email: typeof this.source.email !== 'undefined' ? this.source.email : null,
            phone: typeof this.source.phone !== 'undefined' ? this.source.phone : null,
            language: typeof this.source.language !== 'undefined' ? this.source.language : null,
        };

        this._modelObject = new Customer(values);
    }
}

module.exports = CustomerMapper;
