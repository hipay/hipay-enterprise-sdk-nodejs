const PersonalInformationMapper = require('../../../../../Gateway/Response/Mapper/PersonalInformationMapper');
const PersonalInformation = require('../../../../../Gateway/Response/PersonalInformation');

describe('Test mapper', () => {
    it('maps correctly', () => {
        let personalInformationMapper = new PersonalInformationMapper({
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

        expect(personalInformationMapper).toBeInstanceOf(PersonalInformationMapper);
        expect(() => {
            personalInformationMapper.mapResponseToModel();
        }).not.toThrow();
        expect(personalInformationMapper._modelObject).toStrictEqual(
            new PersonalInformation({
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
            })
        );
    });

    it('maps correctly with empty parameters', () => {
        let personalInformationMapper = new PersonalInformationMapper({});

        expect(personalInformationMapper).toBeInstanceOf(PersonalInformationMapper);
        expect(() => {
            personalInformationMapper.mapResponseToModel();
        }).not.toThrow();
        expect(personalInformationMapper._modelObject).toStrictEqual(new PersonalInformation({}));
    });
});
