export = CardTokenPaymentMethod;
declare class CardTokenPaymentMethod extends AbstractPaymentMethod {
    /**
     * Creates a Card Token Payment Method Object
     *
     * @param {Object} values
     * @param {String} values.cardtoken Card token as returned by the HiPay Tokenization API, or by the HiPay Front JS SDK
     * @param {Number} values.eci Transaction Electronic Commerce Indicator. See the Transaction.ECI Enum
     * @param {Number} [values.authentication_indicator] Card Authentication Indicator. See the Transaction.AuthenticationIndicator Enum
     */
    constructor(values: {
        cardtoken: string;
        eci: number;
        authentication_indicator?: number;
    });
    cardtoken: string;
    eci: number;
    authentication_indicator: number;
}
import AbstractPaymentMethod = require("./AbstractPaymentMethod");
//# sourceMappingURL=CardTokenPaymentMethod.d.ts.map