export = DeliveryShippingInfoRequest;
declare class DeliveryShippingInfoRequest extends AbstractRequestPart {
    /**
     * Creates a Delivery Info Object
     *
     * @param {Object} [values = {}]
     * @param {String} [values.delivery_date] Delivery estimated date, format YYYY-MM-DD
     * @param {'STORE'|'STORE24H'|'CARRIER'|'CARRIER24H'|'RELAYPOINT'|'RELAYPOINT24H'|'EXPRESS24H'|'EXPRESS48H'} [values.delivery_method] Delivery method
     */
    constructor(values?: {
        delivery_date?: string;
        delivery_method?: 'STORE' | 'STORE24H' | 'CARRIER' | 'CARRIER24H' | 'RELAYPOINT' | 'RELAYPOINT24H' | 'EXPRESS24H' | 'EXPRESS48H';
    });
    delivery_date: string;
    delivery_method: "STORE" | "STORE24H" | "CARRIER" | "CARRIER24H" | "RELAYPOINT" | "RELAYPOINT24H" | "EXPRESS24H" | "EXPRESS48H";
}
import AbstractRequestPart = require("../AbstractRequestPart");
//# sourceMappingURL=DeliveryShippingInfoRequest.d.ts.map