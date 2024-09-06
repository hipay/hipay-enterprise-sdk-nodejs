'use strict';
const AbstractPaymentMethod = require('./AbstractPaymentMethod');
const InvalidArgumentException = require('../../../Error/InvalidArgumentException');

class IssuerBankIDPaymentMethod extends AbstractPaymentMethod {
    /**
     * Creates an Issuer Bank ID Payment Method Object
     * Used in iDeal & SEPA Direct Debit Payment Methods
     *
     * @param {Object} values
     * @param {String} values.issuerBankId Business Identifier Code of the customer's bank
     */
    constructor(values) {
        super();

        if (Object.prototype.hasOwnProperty.call(values, 'issuerBankId')) {
            this.issuerBankId = values.issuerBankId;
        } else {
            throw new InvalidArgumentException('Issuer Bank ID must be present');
        }
    }

    initValues() {
        super.initValues();

        this.issuerBankId = null;
    }
}

module.exports = IssuerBankIDPaymentMethod;
