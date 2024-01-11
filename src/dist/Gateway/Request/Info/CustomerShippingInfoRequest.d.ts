export = CustomerShippingInfoRequest;
declare class CustomerShippingInfoRequest extends AbstractRequestPart {
    /**
     * Creates a Shipping recipient Info object
     *
     * @param {Object} [values = {}]
     * @param {String} [values.shipto_firstname] Shipping recipient firstname
     * @param {String} [values.shipto_lastname] Shipping recipient lastname
     * @param {String} [values.shipto_recipientinfo] Shipping recipient additional info
     * @param {String} [values.shipto_house_number] Shipping recipient house number
     * @param {String} [values.shipto_streetaddress] Shipping recipient address
     * @param {String} [values.shipto_streetaddress2] Shipping recipient address (line 2)
     * @param {String} [values.shipto_city] Shipping recipient city
     * @param {String} [values.shipto_state] Shipping recipient state or province
     * @param {String} [values.shipto_zipcode] Shipping recipient zipcode
     * @param {String} [values.shipto_country] Shipping recipient country (Two letter ISO code)
     * @param {String} [values.shipto_phone] Shipping recipient phone
     * @param {String} [values.shipto_msisdn] Shipping recipient mobile phone
     * @param {String} [values.shipto_gender] Shipping recipient gender. See Gender Enum
     */
    constructor(values?: {
        shipto_firstname?: string;
        shipto_lastname?: string;
        shipto_recipientinfo?: string;
        shipto_house_number?: string;
        shipto_streetaddress?: string;
        shipto_streetaddress2?: string;
        shipto_city?: string;
        shipto_state?: string;
        shipto_zipcode?: string;
        shipto_country?: string;
        shipto_phone?: string;
        shipto_msisdn?: string;
        shipto_gender?: string;
    });
    shipto_firstname: string;
    shipto_lastname: string;
    shipto_recipientinfo: string;
    shipto_house_number: string;
    shipto_streetaddress: string;
    shipto_streetaddress2: string;
    shipto_city: string;
    shipto_state: string;
    shipto_zipcode: string;
    shipto_country: string;
    shipto_phone: string;
    shipto_msisdn: string;
    shipto_gender: string;
}
import AbstractRequestPart = require("../AbstractRequestPart");
//# sourceMappingURL=CustomerShippingInfoRequest.d.ts.map