export = XTimesCreditCardPaymentMethod;
declare class XTimesCreditCardPaymentMethod extends AbstractPaymentMethod {
    /**
     * Creates an Oney Xtimes Payment Method Object
     *
     * @param {Object} values
     * @param {Number} values.eci Transaction Electronic Commerce Indicator. See the Transaction.ECI Enum
     * @param {String} [values.order_category_code] Category of the order. See ProductCategory Collection
     * @param {String} [values.carrier_description] Short Description of your carrier
     * @param {Object} [values.payment_product_parameters] Additional parameters
     */
    constructor(values: {
        eci: number;
        order_category_code?: string;
        carrier_description?: string;
        payment_product_parameters?: any;
    });
    eci: number;
    order_category_code: string;
    carrier_description: string;
    payment_product_parameters: any;
}
import AbstractPaymentMethod = require("./AbstractPaymentMethod");
//# sourceMappingURL=XTimesCreditCardPaymentMethod.d.ts.map