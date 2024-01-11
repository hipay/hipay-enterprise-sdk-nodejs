export = Purchase;
declare class Purchase extends AbstractModel {
    /**
     * Creates a Purchase Info Object
     *
     * @param {Object} [values = {}]
     * @param {Number} [values.count] Total number of purchases made by ths customer on the website
     * @param {Number} [values.card_stored_24h] Number of cards saved by the customer on this website on the last 24h
     * @param {Number} [values.payment_attempts_24h] Number of payment attempts made by the customer on the last 24h
     * @param {Number} [values.payment_attempts_1y] Number of payment attempts made by the customer on the last year
     */
    constructor(values?: {
        count?: number;
        card_stored_24h?: number;
        payment_attempts_24h?: number;
        payment_attempts_1y?: number;
    });
    count: number;
    card_stored_24h: number;
    payment_attempts_24h: number;
    payment_attempts_1y: number;
}
import AbstractModel = require("../../AbstractModel");
//# sourceMappingURL=Purchase.d.ts.map