export = Operation;
declare class Operation extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {import('../../Enum/Transaction/Operation')} [values.operation]
     * @param {String} [values.mid]
     * @param {String} [values.authorizationCode]
     * @param {String} [values.transactionReference]
     * @param {String} [values.dateCreated]
     * @param {String} [values.dateUpdated]
     * @param {String} [values.dateAuthorized]
     * @param {Number} [values.status]
     * @param {String} [values.state]
     * @param {String} values.message
     * @param {Number} [values.authorizedAmount]
     * @param {Number} [values.capturedAmount]
     * @param {Number} [values.refundedAmount]
     * @param {Number} [values.decimals]
     * @param {String} [values.currency]
     */
    constructor(values: {
        operation?: {
            DENY_CHALLENGE: string;
            REFUND: string;
            CANCEL: string;
            ACCEPT_CHALLENGE: string;
            CAPTURE: string;
        };
        mid?: string;
        authorizationCode?: string;
        transactionReference?: string;
        dateCreated?: string;
        dateUpdated?: string;
        dateAuthorized?: string;
        status?: number;
        state?: string;
        message: string;
        authorizedAmount?: number;
        capturedAmount?: number;
        refundedAmount?: number;
        decimals?: number;
        currency?: string;
    });
    operation: {
        DENY_CHALLENGE: string;
        REFUND: string;
        CANCEL: string;
        ACCEPT_CHALLENGE: string;
        CAPTURE: string;
    };
    mid: string;
    authorizationCode: string;
    transactionReference: string;
    dateCreated: string;
    dateUpdated: string;
    dateAuthorized: string;
    status: number;
    state: string;
    message: string;
    authorizedAmount: number;
    capturedAmount: number;
    refundedAmount: number;
    decimals: number;
    currency: string;
}
import AbstractResponsePart = require("./AbstractResponsePart");
//# sourceMappingURL=Operation.d.ts.map