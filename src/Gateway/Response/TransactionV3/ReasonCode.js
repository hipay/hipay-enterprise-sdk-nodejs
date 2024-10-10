'use strict';

const AbstractResponsePart = require('./AbstractResponsePart');

class ReasonCode extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {Number} [values.code]
     * @param {String} [values.reason]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

        if (Object.prototype.hasOwnProperty.call(values, 'code')) {
            this.code = values.code;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'reason')) {
            this.reason = values.reason;
        }
    }

    initValues() {
        super.initValues();

        this.code = null;
        this.reason = null;
    }
}

module.exports = ReasonCode;
