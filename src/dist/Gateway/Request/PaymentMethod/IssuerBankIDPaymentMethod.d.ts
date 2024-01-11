export = IssuerBankIDPaymentMethod;
declare class IssuerBankIDPaymentMethod extends AbstractPaymentMethod {
    /**
     * Creates an Issuer Bank ID Payment Method Object
     * Used in iDeal & SEPA Direct Debit Payment Methods
     *
     * @param {Object} values
     * @param {String} values.issuer_bank_id Business Identifier Code of the customer's bank
     */
    constructor(values: {
        issuer_bank_id: string;
    });
    issuer_bank_id: string;
}
import AbstractPaymentMethod = require("./AbstractPaymentMethod");
//# sourceMappingURL=IssuerBankIDPaymentMethod.d.ts.map