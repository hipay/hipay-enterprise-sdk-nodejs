'use strict';

const AbstractMapper = require('../../Mapper/AbstractMapper');
const ReasonCode = require('../ReasonCode');

class ReasonCodeMapper extends AbstractMapper {
    mapResponseToModel() {
        const values = {
            code: typeof this.source.code !== 'undefined' ? this.source.code : null,
            reason: typeof this.source.reason !== 'undefined' ? this.source.reason : null
        };

        this._modelObject = new ReasonCode(values);
    }
}

module.exports = ReasonCodeMapper;
