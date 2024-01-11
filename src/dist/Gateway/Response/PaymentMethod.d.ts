export = PaymentMethod;
declare class PaymentMethod extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {String} [values.token]
     * @param {String} [values.brand]
     * @param {String} [values.pan]
     * @param {String} [values.cardHolder]
     * @param {String} [values.cardExpiryMonth]
     * @param {String} [values.cardExpiryYear]
     * @param {String} [values.cardId]
     * @param {String} [values.issuer]
     * @param {String} [values.country]
     */
    constructor(values: {
        token?: string;
        brand?: string;
        pan?: string;
        cardHolder?: string;
        cardExpiryMonth?: string;
        cardExpiryYear?: string;
        cardId?: string;
        issuer?: string;
        country?: string;
    });
    token: string;
    brand: string;
    pan: string;
    cardHolder: string;
    cardExpiryMonth: string;
    cardExpiryYear: string;
    cardId: string;
    issuer: string;
    country: string;
}
import AbstractResponsePart = require("./AbstractResponsePart");
//# sourceMappingURL=PaymentMethod.d.ts.map