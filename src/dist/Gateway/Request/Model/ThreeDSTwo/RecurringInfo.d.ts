export = RecurringInfo;
declare class RecurringInfo extends AbstractModel {
    /**
     * Creates a Recurring Info Object
     *
     * @param {Object} [values = {}]
     * @param {Number} [values.expiration_date] Recurring payment expiration date, format YYYYMMDD
     * @param {Number} [values.frequency] Recurring payment frequency in days
     */
    constructor(values?: {
        expiration_date?: number;
        frequency?: number;
    });
    expiration_date: number;
    frequency: number;
}
import AbstractModel = require("../AbstractModel");
//# sourceMappingURL=RecurringInfo.d.ts.map