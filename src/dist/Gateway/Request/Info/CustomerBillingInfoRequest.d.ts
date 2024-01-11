export = CustomerBillingInfoRequest;
declare class CustomerBillingInfoRequest extends AbstractRequestPart {
    /**
     * Creates a Customer Billing Info object
     *
     * @param {Object} [values = {}]
     * @param {String} [values.email] Customer's email
     * @param {String} [values.phone] Customer's phone
     * @param {String} [values.msisdn] Customer's mobile phone
     * @param {String} [values.birthdate] Customer's birthdate, in format YYYYMMDD
     * @param {String} [values.gender] Customer's gender. See Gender Enum
     * @param {String} [values.firstname] Customer's firstname
     * @param {String} [values.lastname] Customer's lastname
     * @param {String} [values.recipientinfo] Customer's Additional information (Mr, Mrs, Dr, etc...)
     * @param {String} [values.house_extension] Customer's house extension
     * @param {String} [values.house_number] Customer's house number
     * @param {String} [values.streetaddress] Customer's address
     * @param {String} [values.streetaddress2] Customer's address (line 2)
     * @param {String} [values.city] Customer's city
     * @param {String} [values.state] Customer's state or province
     * @param {String} [values.zipcode] Customer's zipcode
     * @param {String} [values.country] Customer's country, to letter ISO code
     */
    constructor(values?: {
        email?: string;
        phone?: string;
        msisdn?: string;
        birthdate?: string;
        gender?: string;
        firstname?: string;
        lastname?: string;
        recipientinfo?: string;
        house_extension?: string;
        house_number?: string;
        streetaddress?: string;
        streetaddress2?: string;
        city?: string;
        state?: string;
        zipcode?: string;
        country?: string;
    });
    email: string;
    phone: string;
    msisdn: string;
    birthdate: string;
    gender: string;
    firstname: string;
    lastname: string;
    recipientinfo: string;
    house_extension: string;
    house_number: string;
    streetaddress: string;
    streetaddress2: string;
    city: string;
    state: string;
    zipcode: string;
    country: string;
}
import AbstractRequestPart = require("../AbstractRequestPart");
//# sourceMappingURL=CustomerBillingInfoRequest.d.ts.map