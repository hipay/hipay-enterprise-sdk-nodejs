export = PersonalInformation;
declare class PersonalInformation extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {String} [values.firstname]
     * @param {String} [values.lastname]
     * @param {String} [values.streetAddress]
     * @param {String} [values.locality]
     * @param {String} [values.postalCode]
     * @param {String} [values.country]
     * @param {String} [values.msisdn]
     * @param {String} [values.phone]
     * @param {String} [values.phoneOperator]
     * @param {String} [values.email]
     */
    constructor(values: {
        firstname?: string;
        lastname?: string;
        streetAddress?: string;
        locality?: string;
        postalCode?: string;
        country?: string;
        msisdn?: string;
        phone?: string;
        phoneOperator?: string;
        email?: string;
    });
    firstname: string;
    lastname: string;
    streetAddress: string;
    locality: string;
    postalCode: string;
    country: string;
    msisdn: string;
    phone: string;
    phoneOperator: string;
    email: string;
}
import AbstractResponsePart = require("./AbstractResponsePart");
//# sourceMappingURL=PersonalInformation.d.ts.map