export = OneyCarteCadeauPaymentMethod;
declare class OneyCarteCadeauPaymentMethod extends AbstractPaymentMethod {
    /**
     * Creates an Oney Carte Cadeau Payment Method Object
     *
     * @param {Object} values
     * @param {Object} values.payment_product_parameters Carte cadeau parameters
     * @param {Number} values.payment_product_parameters.prepaid_card_number Carte cadeau number
     * @param {Number} values.payment_product_parameters.prepaid_card_security_code Carte cadeau security code
     */
    constructor(values: {
        payment_product_parameters: {
            prepaid_card_number: number;
            prepaid_card_security_code: number;
        };
    });
    payment_product_parameters: string;
}
import AbstractPaymentMethod = require("./AbstractPaymentMethod");
//# sourceMappingURL=OneyCarteCadeauPaymentMethod.d.ts.map