'use strict';

const AbstractMapper = require('./AbstractMapper');
const Address = require('../Address');

class AddressMapper extends AbstractMapper {
    mapResponseToModel() {
        const values = {
            houseNumber: typeof this.source.houseNumber !== 'undefined' ? this.source.houseNumber : null,
            houseExtension: typeof this.source.houseExtension !== 'undefined' ? this.source.houseExtension : null,
            street: typeof this.source.street !== 'undefined' ? this.source.street : null,
            streetAdditional: typeof this.source.streetAdditional !== 'undefined' ? this.source.streetAdditional : null,
            locality: typeof this.source.locality !== 'undefined' ? this.source.locality : null,
            localityAdditional: typeof this.source.localityAdditional !== 'undefined' ? this.source.localityAdditional : null,
            postalCode: typeof this.source.postalCode !== 'undefined' ? this.source.postalCode : null,
            country: typeof this.source.country !== 'undefined' ? this.source.country : null
        };

        this._modelObject = new Address(values);
    }
}

module.exports = AddressMapper;
