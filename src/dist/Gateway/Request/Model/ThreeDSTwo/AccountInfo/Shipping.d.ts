export = Shipping;
declare class Shipping extends AbstractModel {
    /**
     * Creates a Shipping Info Object
     *
     * @param {Object} [values = {}]
     * @param {Number} [values.shipping_used_date] Last date this shipping address was used, format YYYYMMDD
     * @param {Number} [values.name_indicator] Is the name on the card the same as the shipping name ? See NameIndicator Enum
     * @param {Number} [values.suspicious_activity] Is the customer activity suspicious ? See SuspiciousActivity Enum
     */
    constructor(values?: {
        shipping_used_date?: number;
        name_indicator?: number;
        suspicious_activity?: number;
    });
    shipping_used_date: number;
    name_indicator: number;
    suspicious_activity: number;
}
import AbstractModel = require("../../AbstractModel");
//# sourceMappingURL=Shipping.d.ts.map