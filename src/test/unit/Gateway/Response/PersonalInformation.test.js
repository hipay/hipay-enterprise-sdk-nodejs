const PersonalInformation = require('../../../../Gateway/Response/PersonalInformation');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let personalInformation;

        expect(() => {
            personalInformation = new PersonalInformation({
                firstname: '{FIRSTNAME}',
                lastname: '{LASTNAME}',
                streetAddress: '{STREETADDRESS}',
                locality: '{LOCALITY}',
                postalCode: '{POSTALCODE}',
                country: '{COUNTRY}',
                msisdn: '{MSISDN}',
                phone: '{PHONE}',
                phoneOperator: '{PHONEOPERATOR}',
                email: '{EMAIL}'
            });
        }).not.toThrow();

        expect(personalInformation).toBeInstanceOf(PersonalInformation);
        expect(personalInformation.firstname).toEqual('{FIRSTNAME}');
        expect(personalInformation.lastname).toEqual('{LASTNAME}');
        expect(personalInformation.streetAddress).toEqual('{STREETADDRESS}');
        expect(personalInformation.locality).toEqual('{LOCALITY}');
        expect(personalInformation.postalCode).toEqual('{POSTALCODE}');
        expect(personalInformation.country).toEqual('{COUNTRY}');
        expect(personalInformation.msisdn).toEqual('{MSISDN}');
        expect(personalInformation.phone).toEqual('{PHONE}');
        expect(personalInformation.phoneOperator).toEqual('{PHONEOPERATOR}');
        expect(personalInformation.email).toEqual('{EMAIL}');
    });

    it('Initializes correctly with empty parameters', () => {
        let personalInformation;

        expect(() => {
            personalInformation = new PersonalInformation({});
        }).not.toThrow();

        expect(personalInformation).toBeInstanceOf(PersonalInformation);
        expect(personalInformation.firstname).toEqual(null);
        expect(personalInformation.lastname).toEqual(null);
        expect(personalInformation.streetAddress).toEqual(null);
        expect(personalInformation.locality).toEqual(null);
        expect(personalInformation.postalCode).toEqual(null);
        expect(personalInformation.country).toEqual(null);
        expect(personalInformation.msisdn).toEqual(null);
        expect(personalInformation.phone).toEqual(null);
        expect(personalInformation.phoneOperator).toEqual(null);
        expect(personalInformation.email).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let personalInformation;

        expect(() => {
            personalInformation = new PersonalInformation();
        }).not.toThrow();

        expect(personalInformation).toBeInstanceOf(PersonalInformation);
        expect(personalInformation.firstname).toEqual(null);
        expect(personalInformation.lastname).toEqual(null);
        expect(personalInformation.streetAddress).toEqual(null);
        expect(personalInformation.locality).toEqual(null);
        expect(personalInformation.postalCode).toEqual(null);
        expect(personalInformation.country).toEqual(null);
        expect(personalInformation.msisdn).toEqual(null);
        expect(personalInformation.phone).toEqual(null);
        expect(personalInformation.phoneOperator).toEqual(null);
        expect(personalInformation.email).toEqual(null);
    });
});
