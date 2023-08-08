'use strict';
const InvalidArgumentException = require('../../../Error/InvalidArgumentException');
const IssuerBankIDPaymentMethod = require('./IssuerBankIDPaymentMethod');

class SEPADirectDebitPaymentMethod extends IssuerBankIDPaymentMethod {
    /**
     * Creates a SEPA Direct Debit Payment Method Object
     *
     * @param {Object} values
     * @param {String} values.issuer_bank_id Business Identifier Code of the customer's bank
     * @param {String} [values.debit_agreement_id] Debit agreement ID
     * @param {Number} [values.recurring_payment = 0] Indicates if the debit agreement will be created for a single-use or a multi-use. 0 : Single use, 1 : Multi-use
     * @param {String} values.bank_name Customer's bank name
     * @param {String} values.iban Customer's IBAN
     */
    constructor(values) {
        super(values);

        if (Object.prototype.hasOwnProperty.call(values, 'debit_agreement_id')) {
            this.debit_agreement_id = values.debit_agreement_id;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'recurring_payment')) {
            this.recurring_payment = values.recurring_payment;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'bank_name')) {
            this.bank_name = values.bank_name;
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

        this.debit_agreement_id = null;
        this.recurring_payment = 0;
        this.bank_name = null;
        this.iban = null;
    }
}

module.exports = SEPADirectDebitPaymentMethod;
