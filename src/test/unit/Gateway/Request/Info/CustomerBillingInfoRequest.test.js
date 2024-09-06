const CustomerBillingInfoRequest = require('../../../../../Gateway/Request/Info/CustomerBillingInfoRequest');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let customerBillingInfoRequest;

        expect(() => {
            customerBillingInfoRequest = new CustomerBillingInfoRequest({
                email: '{EMAIL}',
                phone: '{PHONE}',
                msisdn: '{MSISDN}',
                birthdate: '{BIRTHDATE}',
                gender: '{GENDER}',
                firstname: '{FIRSTNAME}',
                lastname: '{LASTNAME}',
                recipientinfo: '{RECIPIENTINFO}',
                houseExtension: '{HOUSE_EXTENSION}',
                houseNumber: '{HOUSE_NUMBER}',
                streetaddress: '{STREETADDRESS}',
                streetaddress2: '{STREETADDRESS2}',
                city: '{CITY}',
                state: '{STATE}',
                zipcode: '{ZIPCODE}',
                country: '{COUNTRY}'
            });
        }).not.toThrow();

        expect(customerBillingInfoRequest).toBeInstanceOf(CustomerBillingInfoRequest);
        expect(customerBillingInfoRequest.email).toEqual('{EMAIL}');
        expect(customerBillingInfoRequest.phone).toEqual('{PHONE}');
        expect(customerBillingInfoRequest.msisdn).toEqual('{MSISDN}');
        expect(customerBillingInfoRequest.birthdate).toEqual('{BIRTHDATE}');
        expect(customerBillingInfoRequest.gender).toEqual('{GENDER}');
        expect(customerBillingInfoRequest.firstname).toEqual('{FIRSTNAME}');
        expect(customerBillingInfoRequest.lastname).toEqual('{LASTNAME}');
        expect(customerBillingInfoRequest.recipientinfo).toEqual('{RECIPIENTINFO}');
        expect(customerBillingInfoRequest.houseExtension).toEqual('{HOUSE_EXTENSION}');
        expect(customerBillingInfoRequest.houseNumber).toEqual('{HOUSE_NUMBER}');
        expect(customerBillingInfoRequest.streetaddress).toEqual('{STREETADDRESS}');
        expect(customerBillingInfoRequest.streetaddress2).toEqual('{STREETADDRESS2}');
        expect(customerBillingInfoRequest.city).toEqual('{CITY}');
        expect(customerBillingInfoRequest.state).toEqual('{STATE}');
        expect(customerBillingInfoRequest.zipcode).toEqual('{ZIPCODE}');
        expect(customerBillingInfoRequest.country).toEqual('{COUNTRY}');
    });

    it('Initializes correctly with empty parameters', () => {
        let customerBillingInfoRequest;

        expect(() => {
            customerBillingInfoRequest = new CustomerBillingInfoRequest({});
        }).not.toThrow();

        expect(customerBillingInfoRequest).toBeInstanceOf(CustomerBillingInfoRequest);
        expect(customerBillingInfoRequest.email).toEqual(null);
        expect(customerBillingInfoRequest.phone).toEqual(null);
        expect(customerBillingInfoRequest.msisdn).toEqual(null);
        expect(customerBillingInfoRequest.birthdate).toEqual(null);
        expect(customerBillingInfoRequest.gender).toEqual(null);
        expect(customerBillingInfoRequest.firstname).toEqual(null);
        expect(customerBillingInfoRequest.lastname).toEqual(null);
        expect(customerBillingInfoRequest.recipientinfo).toEqual(null);
        expect(customerBillingInfoRequest.houseExtension).toEqual(null);
        expect(customerBillingInfoRequest.houseNumber).toEqual(null);
        expect(customerBillingInfoRequest.streetaddress).toEqual(null);
        expect(customerBillingInfoRequest.streetaddress2).toEqual(null);
        expect(customerBillingInfoRequest.city).toEqual(null);
        expect(customerBillingInfoRequest.state).toEqual(null);
        expect(customerBillingInfoRequest.zipcode).toEqual(null);
        expect(customerBillingInfoRequest.country).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let customerBillingInfoRequest;

        expect(() => {
            customerBillingInfoRequest = new CustomerBillingInfoRequest();
        }).not.toThrow();

        expect(customerBillingInfoRequest).toBeInstanceOf(CustomerBillingInfoRequest);
        expect(customerBillingInfoRequest.email).toEqual(null);
        expect(customerBillingInfoRequest.phone).toEqual(null);
        expect(customerBillingInfoRequest.msisdn).toEqual(null);
        expect(customerBillingInfoRequest.birthdate).toEqual(null);
        expect(customerBillingInfoRequest.gender).toEqual(null);
        expect(customerBillingInfoRequest.firstname).toEqual(null);
        expect(customerBillingInfoRequest.lastname).toEqual(null);
        expect(customerBillingInfoRequest.recipientinfo).toEqual(null);
        expect(customerBillingInfoRequest.houseExtension).toEqual(null);
        expect(customerBillingInfoRequest.houseNumber).toEqual(null);
        expect(customerBillingInfoRequest.streetaddress).toEqual(null);
        expect(customerBillingInfoRequest.streetaddress2).toEqual(null);
        expect(customerBillingInfoRequest.city).toEqual(null);
        expect(customerBillingInfoRequest.state).toEqual(null);
        expect(customerBillingInfoRequest.zipcode).toEqual(null);
        expect(customerBillingInfoRequest.country).toEqual(null);
    });
});
