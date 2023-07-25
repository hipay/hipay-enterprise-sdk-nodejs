const OrderMapper = require('../../../../Gateway/Response/Mapper/OrderMapper');
const PersonalInformation = require('../../../../Gateway/Response/PersonalInformation');
const Order = require('../../../../Gateway/Response/Order');

describe('Test mapper', () => {
    it('maps correctly', () => {
        let orderMapper = new OrderMapper({
            id: '{ID}',
            customerId: '{CUSTOMERID}',
            amount: '{AMOUNT}',
            tax: '{TAX}',
            shipping: '{SHIPPING}',
            dateCreated: '{DATECREATED}',
            attempts: '{ATTEMPTS}',
            currency: '{CURRENCY}',
            decimals: '{DECIMALS}',
            gender: '{GENDER}',
            email: '{EMAIL}',
            language: '{LANGUAGE}',
            shippingAddress: {
                country: '{COUNTRY}',
                email: '{EMAIL}',
                firstname: '{FIRSTNAME}',
                lastname: '{LASTNAME}',
                locality: '{LOCALITY}',
                msisdn: '{MSISDN}',
                phone: '{PHONE}',
                phoneOperator: '{PHONEOPERATOR}',
                postalCode: '{POSTALCODE}',
                streetAddress: '{STREETADDRESS}'
            }
        });

        expect(orderMapper).toBeInstanceOf(OrderMapper);
        expect(() => {
            orderMapper.mapResponseToModel();
        }).not.toThrow();
        expect(orderMapper._modelObject).toStrictEqual(
            new Order({
                id: '{ID}',
                customerId: '{CUSTOMERID}',
                amount: '{AMOUNT}',
                tax: '{TAX}',
                shipping: '{SHIPPING}',
                dateCreated: '{DATECREATED}',
                attempts: '{ATTEMPTS}',
                currency: '{CURRENCY}',
                decimals: '{DECIMALS}',
                gender: '{GENDER}',
                email: '{EMAIL}',
                language: '{LANGUAGE}',
                shippingAddress: new PersonalInformation({
                    country: '{COUNTRY}',
                    email: '{EMAIL}',
                    firstname: '{FIRSTNAME}',
                    lastname: '{LASTNAME}',
                    locality: '{LOCALITY}',
                    msisdn: '{MSISDN}',
                    phone: '{PHONE}',
                    phoneOperator: '{PHONEOPERATOR}',
                    postalCode: '{POSTALCODE}',
                    streetAddress: '{STREETADDRESS}'
                })
            })
        );
    });

    it('maps correctly with empty parameters', () => {
        let orderMapper = new OrderMapper({});

        expect(orderMapper).toBeInstanceOf(OrderMapper);
        expect(() => {
            orderMapper.mapResponseToModel();
        }).not.toThrow();
        expect(orderMapper._modelObject).toStrictEqual(new Order({}));
    });
});
