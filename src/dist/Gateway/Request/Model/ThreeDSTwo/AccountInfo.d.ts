export = AccountInfo;
declare class AccountInfo extends AbstractModel {
    /**
     * Creates an AccountInfo Object
     *
     * @param {Object} [values = {}]
     * @param {Customer} [values.customer] Customer Info
     * @param {Purchase} [values.purchase] Purchase Info
     * @param {Payment} [values.payment] Payment Info
     * @param {Shipping} [values.shipping] Shipping Info
     */
    constructor(values?: {
        customer?: Customer;
        purchase?: Purchase;
        payment?: Payment;
        shipping?: Shipping;
    });
    customer: Customer;
    purchase: Purchase;
    payment: Payment;
    shipping: Shipping;
}
import AbstractModel = require("../AbstractModel");
import Customer = require("./AccountInfo/Customer");
import Purchase = require("./AccountInfo/Purchase");
import Payment = require("./AccountInfo/Payment");
import Shipping = require("./AccountInfo/Shipping");
//# sourceMappingURL=AccountInfo.d.ts.map