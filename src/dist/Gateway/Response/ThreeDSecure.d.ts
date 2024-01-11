export = ThreeDSecure;
declare class ThreeDSecure extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {Number} [values.eci]
     * @param {String} [values.enrollmentStatus]
     * @param {String} [values.enrollmentMessage]
     * @param {String} [values.authenticationStatus]
     * @param {String} [values.authenticationMessage]
     * @param {String} [values.authenticationToken]
     * @param {String} [values.xid]
     */
    constructor(values: {
        eci?: number;
        enrollmentStatus?: string;
        enrollmentMessage?: string;
        authenticationStatus?: string;
        authenticationMessage?: string;
        authenticationToken?: string;
        xid?: string;
    });
    eci: number;
    enrollmentStatus: string;
    enrollmentMessage: string;
    authenticationStatus: string;
    authenticationMessage: string;
    authenticationToken: string;
    xid: string;
}
import AbstractResponsePart = require("./AbstractResponsePart");
//# sourceMappingURL=ThreeDSecure.d.ts.map