export = Order;
declare class Order extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {String} [values.id]
     * @param {String} [values.customerId]
     * @param {Number} [values.amount]
     * @param {Number} [values.tax]
     * @param {Number} [values.shipping]
     * @param {String} [values.dateCreated]
     * @param {Number} [values.attempts]
     * @param {String} [values.currency]
     * @param {Number} [values.decimals]
     * @param {String} [values.gender]
     * @param {String} [values.language]
     * @param {import('./PersonalInformation')} [values.shippingAddress]
     */
    constructor(values: {
        id?: string;
        customerId?: string;
        amount?: number;
        tax?: number;
        shipping?: number;
        dateCreated?: string;
        attempts?: number;
        currency?: string;
        decimals?: number;
        gender?: string;
        language?: string;
        shippingAddress?: import('./PersonalInformation');
    });
    id: string;
    customerId: string;
    amount: number;
    tax: number;
    shipping: number;
    dateCreated: string;
    attempts: number;
    currency: string;
    decimals: number;
    gender: string;
    language: string;
    shippingAddress: import("./PersonalInformation");
}
import AbstractResponsePart = require("./AbstractResponsePart");
//# sourceMappingURL=Order.d.ts.map