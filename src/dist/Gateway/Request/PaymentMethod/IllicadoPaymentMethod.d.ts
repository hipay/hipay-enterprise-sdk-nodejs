export = IllicadoPaymentMethod;
declare class IllicadoPaymentMethod extends AbstractPaymentMethod {
    /**
     * Creates an Illicado Payment Method Object
     *
     * @param {Object} values
     * @param {String} values.prepaid_card_number Illicado card number
     * @param {String} values.prepaid_card_security_code Illicado card security code
     */
    constructor(values: {
        prepaid_card_number: string;
        prepaid_card_security_code: string;
    });
    prepaid_card_number: string;
    prepaid_card_security_code: string;
}
import AbstractPaymentMethod = require("./AbstractPaymentMethod");
//# sourceMappingURL=IllicadoPaymentMethod.d.ts.map