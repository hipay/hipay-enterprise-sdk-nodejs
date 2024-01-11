export = Payment;
declare class Payment extends AbstractModel {
    /**
     * Creates a Payment Info Object
     *
     * @param {Object} [values = {}]
     * @param {Number} [values.enrollment_date] Payment card first use date, format YYYYMMDD
     */
    constructor(values?: {
        enrollment_date?: number;
    });
    enrollment_date: number;
}
import AbstractModel = require("../../AbstractModel");
//# sourceMappingURL=Payment.d.ts.map