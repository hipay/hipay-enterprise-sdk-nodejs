'use strict';

const AbstractMapper = require('./AbstractMapper');
const Device = require('../Device');

class DeviceMapper extends AbstractMapper {
    mapResponseToModel() {
        const values = {
            id: typeof this.source.id !== 'undefined' ? this.source.id : null,
            ipAddress: typeof this.source.ipAddress !== 'undefined' ? this.source.ipAddress : null
        };

        this._modelObject = new Device(values);
    }
}

module.exports = DeviceMapper;
