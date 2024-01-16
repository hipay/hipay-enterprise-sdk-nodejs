export = Transaction;
declare class Transaction extends AbstractResponsePart {
    static AuthenticationIndicator: {
        AVAILABLE: number;
        BYPASS: number;
        MANDATORY: number;
        SIGN: number;
    };
    static AVSResult: {
        NOT_APPLICABLE: string;
        EXACT_MATCH: string;
        ADDRESS_MATCH: string;
        NOT_SUPPORTED: string;
        NO_MATCH: string;
        NOT_ALLOWED: string;
        UNAVAILABLE: string;
        NOT_COMPATIBLE: string;
        RETRY: string;
        POSTCODE_MATCH: string;
    };
    static CVCResult: {
        NOT_APPLICABLE: string;
        NOT_SUPPORTED: string;
        NOT_PROCESSED: string;
        NO_MATCH: string;
        MISSING: string;
        MATCH: string;
    };
    static ECI: {
        RECURRING_MOTO: number;
        MANUALLY_KEYED_CARD_PRESENT: number;
        UNDEFINED: number;
        MOTO: number;
        RECURRING_ECOMMERCE: number;
        INSTALLMENT_PAYMENT: number;
        SECURE_ECOMMERCE: number;
    };
    static FraudScreening: {
        RESULT_BLOCKED: string;
        REVIEW_DENIED: string;
        RESULT_PENDING: string;
        RESULT_ACCEPTED: string;
        REVIEW_ALLOWED: string;
        REVIEW_PENDING: string;
        RESULT_CHALLENGED: string;
        REVIEW_NONE: string;
        RESULT_UNKNOWN: string;
    };
    static Operation: {
        DENY_CHALLENGE: string;
        REFUND: string;
        CANCEL: string;
        ACCEPT_CHALLENGE: string;
        CAPTURE: string;
    };
    static SecurityCodeType: {
        NOT_APPLICABLE: string;
        CVV: string;
        NONE: string;
        CID: string;
    };
    static Template: {
        BASIC_JS: string;
        IFRAME_JS: string;
    };
    static ThreeDSecureStatus: {
        AUTHENTICATION_OTHER: string;
        ENROLLMENT_AUTHENTICATION_AVAILABLE: string;
        ENROLLMENT_OTHER_ERROR: string;
        AUTHENTICATION_ATTEMPTED: string;
        ENROLLMENT_UNKNOWN: string;
        ENROLLMENT_CARD_HOLDER_NOT_ENROLLED: string;
        AUTHENTICATION_UNKNOWN: string;
        AUTHENTICATION_COULD_NOT_PERFORMED: string;
        AUTHENTICATION_FAILED: string;
        ENROLLMENT_UNABLE_TO_AUTHENTICATE: string;
        AUTHENTICATION_SUCCESSFUL: string;
    };
    static TransactionState: {
        COMPLETED: string;
        ERROR: string;
        PENDING: string;
        FORWARDING: string;
        DECLINED: string;
    };
    static TransactionStatus: {
        DEBITED: number;
        AUTHORIZATION_REFUSED: number;
        CARD_HOLDER_AUTHENTICATED: number;
        PARTIALLY_DEBITED: number;
        EXPIRED: number;
        BLOCKED: number;
        UNABLE_TO_AUTHENTICATE: number;
        AUTHENTICATION_FAILED: number;
        REFUSED: number;
        AUTHENTICATION_REQUESTED: number;
        CREATED: number;
        REFUND_REFUSED: number;
        AUTHENTICATION_ATTEMPTED: number;
        PARTIALLY_SETTLED: number;
        AUTHORIZATION_CANCELLATION_REQUESTED: number;
        ACQUIRER_FOUND: number;
        AUTHORIZATION_CANCELLED: number;
        REFUND_REQUESTED: number;
        PENDING_PAYMENT: number;
        DENIED: number;
        AUTHORIZATION_REQUESTED: number;
        CAPTURE_REQUESTED: number;
        AUTHENTICATED: number;
        REFUNDED: number;
        CAPTURE_REFUSED: number;
        PARTIALLY_COLLECTED: number;
        ACQUIRER_NOT_FOUND: number;
        AUTHORIZED: number;
        CARD_HOLDER_ENROLLED: number;
        COULD_NOT_AUTHENTICATE: number;
        CHARGED_BACK: number;
        CANCELLED: number;
        CAPTURED: number;
        AUTHORIZED_AND_PENDING: number;
        COLLECTED: number;
        SETTLED: number;
        CARD_HOLDER_ENROLLMENT_UNKNOWN: number;
        RISK_ACCEPTED: number;
        CARD_HOLDER_NOT_ENROLLED: number;
        UNKNOWN: number;
        PARTIALLY_CAPTURED: number;
        PARTIALLY_REFUNDED: number;
    };
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