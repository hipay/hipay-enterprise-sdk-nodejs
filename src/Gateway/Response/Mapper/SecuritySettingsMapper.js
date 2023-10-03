'use strict';

const AbstractMapper = require('./AbstractMapper');
const SecuritySettings = require('../SecuritySettings');

class SecuritySettingsMapper extends AbstractMapper {
    mapResponseToModel() {
        const values = {
            hashingAlgorithm: typeof this.source.hashingAlgorithm !== 'undefined' ? this.source.hashingAlgorithm : null
        };

        this._modelObject = new SecuritySettings(values);
    }
}

module.exports = SecuritySettingsMapper;
