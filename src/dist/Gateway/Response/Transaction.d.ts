export = Transaction;
declare class Transaction extends AbstractResponsePart {
    /**
     * @param {Object} values
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
     * @param {Object} [values.reason]
     * @param {String} [values.reason.message]
     * @param {String} [values.forwardUrl]
     * @param {String} [values.attemptId]
     * @param {String} [values.referenceToPay]
     * @param {String} [values.ipAddress]
     * @param {String} [values.ipCountry]
     * @param {String} [values.deviceId]
     * @param {String} [values.avsResult]
     * @param {String} [values.cvcResult]
     * @param {String} [values.eci]
     * @param {String} [values.paymentProduct]
     * @param {import('./PaymentMethod')} [values.paymentMethod]
     * @param {import('./ThreeDSecure')} [values.threeDSecure]
     * @param {import('./FraudScreening')} [values.fraudScreening]
     * @param {import('./Order')} [values.order]
     * @param {Object} [values.debitAgreement]
     * @param {Object} [values.basket]
     * @param {import('./OperationResponse')} [values.operation]
     * @param {Object} [values.customData]
     */
    constructor(values: {
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
        reason?: {
            message?: string;
        };
        forwardUrl?: string;
        attemptId?: string;
        referenceToPay?: string;
        ipAddress?: string;
        ipCountry?: string;
        deviceId?: string;
        avsResult?: string;
        cvcResult?: string;
        eci?: string;
        paymentProduct?: string;
        paymentMethod?: import('./PaymentMethod');
        threeDSecure?: import('./ThreeDSecure');
        fraudScreening?: import('./FraudScreening');
        order?: import('./Order');
        debitAgreement?: any;
        basket?: any;
        operation?: import('./OperationResponse');
        customData?: any;
    });
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
    reason: {
        message?: string;
    };
    forwardUrl: string;
    attemptId: string;
    referenceToPay: string;
    ipAddress: string;
    ipCountry: string;
    deviceId: string;
    avsResult: string;
    cvcResult: string;
    eci: string;
    paymentProduct: string;
    paymentMethod: import("./PaymentMethod");
    threeDSecure: import("./ThreeDSecure");
    fraudScreening: import("./FraudScreening");
    order: import("./Order");
    debitAgreement: any;
    basket: any;
    operation: import("./OperationResponse");
    customData: any;
}
import AbstractResponsePart = require("./AbstractResponsePart");
//# sourceMappingURL=Transaction.d.ts.map