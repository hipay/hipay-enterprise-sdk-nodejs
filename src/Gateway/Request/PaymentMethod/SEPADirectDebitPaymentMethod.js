'use strict';
const InvalidArgumentException = require('../../../Error/InvalidArgumentException');
const IssuerBankIDPaymentMethod = require('./IssuerBankIDPaymentMethod');

class SEPADirectDebitPaymentMethod extends IssuerBankIDPaymentMethod {
    /**
     * Creates a SEPA Direct Debit Payment Method Object
     *
     * @param {Object} values
     * @param {String} values.issuerBankId Business Identifier Code of the customer's bank
     * @param {String} [values.debitAgreementId] Debit agreement ID
     * @param {Number} [values.recurringPayment = 0] Indicates if the debit agreement will be created for a single-use or a multi-use. 0 : Single use, 1 : Multi-use
     * @param {String} values.bankName Customer's bank name
     * @param {String} values.iban Customer's IBAN
     */
    constructor(values) {
        super(values);

        if (Object.prototype.hasOwnProperty.call(values, 'debitAgreementId')) {
            this.debitAgreementId = values.debitAgreementId;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'recurringPayment')) {
            this.recurringPayment = values.recurringPayment;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'bankName')) {
            this.bankName = values.bankName;
        } else {
            throw new InvalidArgumentException('Bank name must be present');
        }

        if (Object.prototype.hasOwnProperty.call(values, 'iban')) {
            this.iban = values.iban;
        } else {
            throw new InvalidArgumentException('IBAN must be present');
        }
    }

    initValues() {
        super.initValues();

        this.debitAgreementId = null;
        this.recurringPayment = 0;
        this.bankName = null;
        this.iban = null;
    }
}

module.exports = SEPADirectDebitPaymentMethod;
