'use strict';

const AbstractMapper = require('./AbstractMapper');
const SecuritySettings = require('../SecuritySettings');

class SecuritySettingsMapper extends AbstractMapper {
    mapResponseToModel() {
        let values = {
            hashingAlgorithm: typeof this.source.hashing_algorithm !== 'undefined' ? this.source.hashing_algorithm : null
        };

        this._modelObject = new SecuritySettings(values);
    }
}

module.exports = SecuritySettingsMapper;
