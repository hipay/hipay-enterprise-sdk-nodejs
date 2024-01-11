export = PreviousAuthInfo;
declare class PreviousAuthInfo extends AbstractModel {
    /**
     * Creates a PreviousAuthInfo Object
     *
     * @param {Object} [values = {}]
     * @param {String} [values.transaction_reference] Previous transaction reference made by the customer
     */
    constructor(values?: {
        transaction_reference?: string;
    });
    transaction_reference: string;
}
import AbstractModel = require("../AbstractModel");
//# sourceMappingURL=PreviousAuthInfo.d.ts.map