'use strict';

const AbstractMapper = require('../../Mapper/AbstractMapper');
const Issuer = require('../Issuer');

class IssuerMapper extends AbstractMapper {
    mapResponseToModel() {
        const values = {
            fullname: typeof this.source.fullname !== 'undefined' ? this.source.fullname : null,
            institution: typeof this.source.institution !== 'undefined' ? this.source.institution : null,
            country: typeof this.source.country !== 'undefined' ? this.source.country : null
        };

        this._modelObject = new Issuer(values);
    }
}

module.exports = IssuerMapper;
