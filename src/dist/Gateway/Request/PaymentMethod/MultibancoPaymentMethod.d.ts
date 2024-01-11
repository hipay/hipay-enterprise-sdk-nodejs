export = MultibancoPaymentMethod;
declare class MultibancoPaymentMethod extends AbstractPaymentMethod {
    /**
     * Creates a Multibanco Payment Method Object
     *
     * @param {Object} [values = {}]
     * @param {Number} [values.expiration_limit = 3] Expiration limit in days
     */
    constructor(values?: {
        expiration_limit?: number;
    });
    expiration_limit: number;
}
import AbstractPaymentMethod = require("./AbstractPaymentMethod");
//# sourceMappingURL=MultibancoPaymentMethod.d.ts.map