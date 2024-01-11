export = OperationResponse;
declare class OperationResponse extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {String} [values.type]
     * @param {String} [values.id]
     * @param {String} [values.reference]
     * @param {Number} [values.amount]
     * @param {String} [values.currency]
     * @param {String} [values.dateAuthorized]
     */
    constructor(values: {
        type?: string;
        id?: string;
        reference?: string;
        amount?: number;
        currency?: string;
        dateAuthorized?: string;
    });
    type: string;
    id: string;
    reference: string;
    amount: number;
    currency: string;
    dateAuthorized: string;
}
import AbstractResponsePart = require("./AbstractResponsePart");
//# sourceMappingURL=OperationResponse.d.ts.map