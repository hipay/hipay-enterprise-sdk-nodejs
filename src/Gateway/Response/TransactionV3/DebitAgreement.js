'use strict';

const AbstractResponsePart = require('../AbstractResponsePart');

class DebitAgreement extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {Number} [values.id]
     * @param {String} [values.schemeReferenceData]
     * @param {import('../../../Enum/Transaction/V3/DebitAgreementStatus')} [values.status]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

        if (Object.hasOwn(values, 'id')) {
            this.id = values.id;
        }

        if (Object.hasOwn(values, 'schemeReferenceData')) {
            this.schemeReferenceData = values.schemeReferenceData;
        }

        if (Object.hasOwn(values, 'status')) {
            this.status = values.status;
        }
    }

    initValues() {
        super.initValues();

        this.id = null;
        this.schemeReferenceData = null;
        this.status = null;
    }
}

module.exports = DebitAgreement;
