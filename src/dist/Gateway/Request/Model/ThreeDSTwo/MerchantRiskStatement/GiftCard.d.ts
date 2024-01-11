export = GiftCard;
declare class GiftCard extends AbstractModel {
    /**
     * Creates a GiftCard Info Object
     *
     * @param {Object} [values = {}]
     * @param {Number} [values.amount] Amount of the gift card
     * @param {Number} [values.count] Number of gift cards purchased by the client
     * @param {String} [values.currency] Currency of the gift card
     */
    constructor(values?: {
        amount?: number;
        count?: number;
        currency?: string;
    });
    amount: number;
    count: number;
    currency: string;
}
import AbstractModel = require("../../AbstractModel");
//# sourceMappingURL=GiftCard.d.ts.map