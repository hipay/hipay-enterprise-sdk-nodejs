'use strict';

const AbstractMapper = require('./AbstractMapper');
const Acquirer = require('../Acquirer');

class AcquirerMapper extends AbstractMapper {
    mapResponseToModel() {
        const values = {
            transactionReference: typeof this.source.transactionReference !== 'undefined' ? this.source.transactionReference : null
        };

        this._modelObject = new Acquirer(values);
    }
}

module.exports = AcquirerMapper;
