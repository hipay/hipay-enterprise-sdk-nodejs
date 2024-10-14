'use strict';

const AbstractMapper = require('../../Mapper/AbstractMapper');
const DebitAgreement = require('../DebitAgreement');

class DebitAgreementMapper extends AbstractMapper {
    mapResponseToModel() {
        const values = {
            id: typeof this.source.id !== 'undefined' ? this.source.id : null,
            schemeReferenceData: typeof this.source.schemeReferenceData !== 'undefined' ? this.source.schemeReferenceData : null,
            status: typeof this.source.status !== 'undefined' ? this.source.status : null
        };

        this._modelObject = new DebitAgreement(values);
    }
}

module.exports = DebitAgreementMapper;
