const CustomerShippingInfoRequest = require('../../../../../Gateway/Request/Info/CustomerShippingInfoRequest');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let customerShippingInfoRequest;

        expect(() => {
            customerShippingInfoRequest = new CustomerShippingInfoRequest({
                shiptoFirstname: '{SHIPTO_FIRSTNAME}',
                shiptoLastname: '{SHIPTO_LASTNAME}',
                shiptoRecipientinfo: '{SHIPTO_RECIPIENTINFO}',
                shiptoHouseNumber: '{SHIPTO_HOUSE_NUMBER}',
                shiptoStreetaddress: '{SHIPTO_STREETADDRESS}',
                shiptoStreetaddress2: '{SHIPTO_STREETADDRESS2}',
                shiptoCity: '{SHIPTO_CITY}',
                shiptoState: '{SHIPTO_STATE}',
                shiptoZipcode: '{SHIPTO_ZIPCODE}',
                shiptoCountry: '{SHIPTO_COUNTRY}',
                shiptoPhone: '{SHIPTO_PHONE}',
                shiptoMsisdn: '{SHIPTO_MSISDN}',
                shiptoGender: '{SHIPTO_GENDER}'
            });
        }).not.toThrow();

        expect(customerShippingInfoRequest).toBeInstanceOf(CustomerShippingInfoRequest);
        expect(customerShippingInfoRequest.shiptoFirstname).toEqual('{SHIPTO_FIRSTNAME}');
        expect(customerShippingInfoRequest.shiptoLastname).toEqual('{SHIPTO_LASTNAME}');
        expect(customerShippingInfoRequest.shiptoRecipientinfo).toEqual('{SHIPTO_RECIPIENTINFO}');
        expect(customerShippingInfoRequest.shiptoHouseNumber).toEqual('{SHIPTO_HOUSE_NUMBER}');
        expect(customerShippingInfoRequest.shiptoStreetaddress).toEqual('{SHIPTO_STREETADDRESS}');
        expect(customerShippingInfoRequest.shiptoStreetaddress2).toEqual('{SHIPTO_STREETADDRESS2}');
        expect(customerShippingInfoRequest.shiptoCity).toEqual('{SHIPTO_CITY}');
        expect(customerShippingInfoRequest.shiptoState).toEqual('{SHIPTO_STATE}');
        expect(customerShippingInfoRequest.shiptoZipcode).toEqual('{SHIPTO_ZIPCODE}');
        expect(customerShippingInfoRequest.shiptoCountry).toEqual('{SHIPTO_COUNTRY}');
        expect(customerShippingInfoRequest.shiptoPhone).toEqual('{SHIPTO_PHONE}');
        expect(customerShippingInfoRequest.shiptoMsisdn).toEqual('{SHIPTO_MSISDN}');
        expect(customerShippingInfoRequest.shiptoGender).toEqual('{SHIPTO_GENDER}');
    });

    it('Initializes correctly with empty parameters', () => {
        let customerShippingInfoRequest;

        expect(() => {
            customerShippingInfoRequest = new CustomerShippingInfoRequest({});
        }).not.toThrow();

        expect(customerShippingInfoRequest).toBeInstanceOf(CustomerShippingInfoRequest);
        expect(customerShippingInfoRequest.shiptoFirstname).toEqual(null);
        expect(customerShippingInfoRequest.shiptoLastname).toEqual(null);
        expect(customerShippingInfoRequest.shiptoRecipientinfo).toEqual(null);
        expect(customerShippingInfoRequest.shiptoHouseNumber).toEqual(null);
        expect(customerShippingInfoRequest.shiptoStreetaddress).toEqual(null);
        expect(customerShippingInfoRequest.shiptoStreetaddress2).toEqual(null);
        expect(customerShippingInfoRequest.shiptoCity).toEqual(null);
        expect(customerShippingInfoRequest.shiptoState).toEqual(null);
        expect(customerShippingInfoRequest.shiptoZipcode).toEqual(null);
        expect(customerShippingInfoRequest.shiptoCountry).toEqual(null);
        expect(customerShippingInfoRequest.shiptoPhone).toEqual(null);
        expect(customerShippingInfoRequest.shiptoMsisdn).toEqual(null);
        expect(customerShippingInfoRequest.shiptoGender).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let customerShippingInfoRequest;

        expect(() => {
            customerShippingInfoRequest = new CustomerShippingInfoRequest();
        }).not.toThrow();

        expect(customerShippingInfoRequest).toBeInstanceOf(CustomerShippingInfoRequest);
        expect(customerShippingInfoRequest.shiptoFirstname).toEqual(null);
        expect(customerShippingInfoRequest.shiptoLastname).toEqual(null);
        expect(customerShippingInfoRequest.shiptoRecipientinfo).toEqual(null);
        expect(customerShippingInfoRequest.shiptoHouseNumber).toEqual(null);
        expect(customerShippingInfoRequest.shiptoStreetaddress).toEqual(null);
        expect(customerShippingInfoRequest.shiptoStreetaddress2).toEqual(null);
        expect(customerShippingInfoRequest.shiptoCity).toEqual(null);
        expect(customerShippingInfoRequest.shiptoState).toEqual(null);
        expect(customerShippingInfoRequest.shiptoZipcode).toEqual(null);
        expect(customerShippingInfoRequest.shiptoCountry).toEqual(null);
        expect(customerShippingInfoRequest.shiptoPhone).toEqual(null);
        expect(customerShippingInfoRequest.shiptoMsisdn).toEqual(null);
        expect(customerShippingInfoRequest.shiptoGender).toEqual(null);
    });
});
