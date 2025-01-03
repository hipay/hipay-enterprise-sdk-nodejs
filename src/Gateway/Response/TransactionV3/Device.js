'use strict';

const AbstractResponsePart = require('../AbstractResponsePart');

class Device extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {String} [values.id]
     * @param {String} [values.ipAddress]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

        if (Object.hasOwn(values, 'id')) {
            this.id = values.id;
        }

        if (Object.hasOwn(values, 'ipAddress')) {
            this.ipAddress = values.ipAddress;
        }
    }

    initValues() {
        super.initValues();

        this.id = null;
        this.ipAddress = null;
    }
}

module.exports = Device;
