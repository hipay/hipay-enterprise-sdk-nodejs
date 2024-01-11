export = PaymentCardToken;
declare class PaymentCardToken extends PaymentMethod {
    /**
     * @inheritdoc
     *
     * @param {Object}  values
     * @param {String}  [values.requestId]
     * @param {Boolean} [values.multiUse]
     * @param {String}  [values.domesticNetwork]
     * @param {String}  [values.cardHash]
     * @param {String}  [values.cardType]
     * @param {String}  [values.cardCategory]
     * @param {Boolean} [values.forbiddenIssuerCountry]
     * @param {String}  [values.bin]
     */
    constructor(values: {
        requestId?: string;
        multiUse?: boolean;
        domesticNetwork?: string;
        cardHash?: string;
        cardType?: string;
        cardCategory?: string;
        forbiddenIssuerCountry?: boolean;
        bin?: string;
    });
    requestId: string;
    multiUse: boolean;
    domesticNetwork: string;
    cardHash: string;
    cardType: string;
    cardCategory: string;
    forbiddenIssuerCountry: boolean;
    bin: string;
}
import PaymentMethod = require("./PaymentMethod");
//# sourceMappingURL=PaymentCardToken.d.ts.map