const CustomerShippingInfoRequest = require('../../../../../Gateway/Request/Info/CustomerShippingInfoRequest');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let customerShippingInfoRequest;

        expect(() => {
            customerShippingInfoRequest = new CustomerShippingInfoRequest({
                shipto_firstname: '{SHIPTO_FIRSTNAME}',
                shipto_lastname: '{SHIPTO_LASTNAME}',
                shipto_recipientinfo: '{SHIPTO_RECIPIENTINFO}',
                shipto_house_number: '{SHIPTO_HOUSE_NUMBER}',
                shipto_streetaddress: '{SHIPTO_STREETADDRESS}',
                shipto_streetaddress2: '{SHIPTO_STREETADDRESS2}',
                shipto_city: '{SHIPTO_CITY}',
                shipto_state: '{SHIPTO_STATE}',
                shipto_zipcode: '{SHIPTO_ZIPCODE}',
                shipto_country: '{SHIPTO_COUNTRY}',
                shipto_phone: '{SHIPTO_PHONE}',
                shipto_msisdn: '{SHIPTO_MSISDN}',
                shipto_gender: '{SHIPTO_GENDER}'
            });
        }).not.toThrow();

        expect(customerShippingInfoRequest).toBeInstanceOf(CustomerShippingInfoRequest);
        expect(customerShippingInfoRequest.shipto_firstname).toEqual('{SHIPTO_FIRSTNAME}');
        expect(customerShippingInfoRequest.shipto_lastname).toEqual('{SHIPTO_LASTNAME}');
        expect(customerShippingInfoRequest.shipto_recipientinfo).toEqual('{SHIPTO_RECIPIENTINFO}');
        expect(customerShippingInfoRequest.shipto_house_number).toEqual('{SHIPTO_HOUSE_NUMBER}');
        expect(customerShippingInfoRequest.shipto_streetaddress).toEqual('{SHIPTO_STREETADDRESS}');
        expect(customerShippingInfoRequest.shipto_streetaddress2).toEqual('{SHIPTO_STREETADDRESS2}');
        expect(customerShippingInfoRequest.shipto_city).toEqual('{SHIPTO_CITY}');
        expect(customerShippingInfoRequest.shipto_state).toEqual('{SHIPTO_STATE}');
        expect(customerShippingInfoRequest.shipto_zipcode).toEqual('{SHIPTO_ZIPCODE}');
        expect(customerShippingInfoRequest.shipto_country).toEqual('{SHIPTO_COUNTRY}');
        expect(customerShippingInfoRequest.shipto_phone).toEqual('{SHIPTO_PHONE}');
        expect(customerShippingInfoRequest.shipto_msisdn).toEqual('{SHIPTO_MSISDN}');
        expect(customerShippingInfoRequest.shipto_gender).toEqual('{SHIPTO_GENDER}');
    });

    it('Initializes correctly with empty parameters', () => {
        let customerShippingInfoRequest;

        expect(() => {
            customerShippingInfoRequest = new CustomerShippingInfoRequest({});
        }).not.toThrow();

        expect(customerShippingInfoRequest).toBeInstanceOf(CustomerShippingInfoRequest);
        expect(customerShippingInfoRequest.shipto_firstname).toEqual(null);
        expect(customerShippingInfoRequest.shipto_lastname).toEqual(null);
        expect(customerShippingInfoRequest.shipto_recipientinfo).toEqual(null);
        expect(customerShippingInfoRequest.shipto_house_number).toEqual(null);
        expect(customerShippingInfoRequest.shipto_streetaddress).toEqual(null);
        expect(customerShippingInfoRequest.shipto_streetaddress2).toEqual(null);
        expect(customerShippingInfoRequest.shipto_city).toEqual(null);
        expect(customerShippingInfoRequest.shipto_state).toEqual(null);
        expect(customerShippingInfoRequest.shipto_zipcode).toEqual(null);
        expect(customerShippingInfoRequest.shipto_country).toEqual(null);
        expect(customerShippingInfoRequest.shipto_phone).toEqual(null);
        expect(customerShippingInfoRequest.shipto_msisdn).toEqual(null);
        expect(customerShippingInfoRequest.shipto_gender).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let customerShippingInfoRequest;

        expect(() => {
            customerShippingInfoRequest = new CustomerShippingInfoRequest();
        }).not.toThrow();

        expect(customerShippingInfoRequest).toBeInstanceOf(CustomerShippingInfoRequest);
        expect(customerShippingInfoRequest.shipto_firstname).toEqual(null);
        expect(customerShippingInfoRequest.shipto_lastname).toEqual(null);
        expect(customerShippingInfoRequest.shipto_recipientinfo).toEqual(null);
        expect(customerShippingInfoRequest.shipto_house_number).toEqual(null);
        expect(customerShippingInfoRequest.shipto_streetaddress).toEqual(null);
        expect(customerShippingInfoRequest.shipto_streetaddress2).toEqual(null);
        expect(customerShippingInfoRequest.shipto_city).toEqual(null);
        expect(customerShippingInfoRequest.shipto_state).toEqual(null);
        expect(customerShippingInfoRequest.shipto_zipcode).toEqual(null);
        expect(customerShippingInfoRequest.shipto_country).toEqual(null);
        expect(customerShippingInfoRequest.shipto_phone).toEqual(null);
        expect(customerShippingInfoRequest.shipto_msisdn).toEqual(null);
        expect(customerShippingInfoRequest.shipto_gender).toEqual(null);
    });
});
