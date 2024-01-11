export = SEPADirectDebitPaymentMethod;
declare class SEPADirectDebitPaymentMethod extends IssuerBankIDPaymentMethod {
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
    constructor(values: {
        issuer_bank_id: string;
        debit_agreement_id?: string;
        recurring_payment?: number;
        bank_name: string;
        iban: string;
    });
    debit_agreement_id: string;
    recurring_payment: number;
    bank_name: string;
    iban: string;
}
import IssuerBankIDPaymentMethod = require("./IssuerBankIDPaymentMethod");
//# sourceMappingURL=SEPADirectDebitPaymentMethod.d.ts.map