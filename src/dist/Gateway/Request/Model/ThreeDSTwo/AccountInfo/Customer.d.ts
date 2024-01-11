export = Customer;
declare class Customer extends AbstractModel {
    /**
     * Creates a Customer Info Object
     *
     * @param {Object} [values = {}]
     * @param {Number} [values.account_change] Customer's last account change date, format YYYYMMDD
     * @param {Number} [values.opening_account_date] Customer's opening account date, format YYYYMMDD
     * @param {Number} [values.password_change] Customer's last password change date, format YYYYMMDD
     */
    constructor(values?: {
        account_change?: number;
        opening_account_date?: number;
        password_change?: number;
    });
    account_change: number;
    opening_account_date: number;
    password_change: number;
}
import AbstractModel = require("../../AbstractModel");
//# sourceMappingURL=Customer.d.ts.map