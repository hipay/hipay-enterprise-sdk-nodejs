'use strict';

const AbstractResponsePart = require('../AbstractResponsePart');

class PaymentMethod extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {String} [values.name]
     * @param {String} [values.description]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

        if (Object.hasOwn(values, 'name')) {
            this.name = values.name;
        }

        if (Object.hasOwn(values, 'description')) {
            this.description = values.description;
        }
    }

    initValues() {
        super.initValues();

        this.name = null;
        this.description = null;
    }
}

module.exports = PaymentMethod;
