const HostedPaymentPageMapper = require('../../../../../Gateway/Response/Mapper/HostedPaymentPageMapper');
const PersonalInformation = require('../../../../../Gateway/Response/PersonalInformation');
const Transaction = require('../../../../../Gateway/Response/Transaction');
const Order = require('../../../../../Gateway/Response/Order');

describe('Test mapper', () => {
    it('maps correctly', () => {
        let hostedPaymentPageMapper = new HostedPaymentPageMapper({
            mid: '{MID}',
            forwardUrl: '{FORWARDURL}',
            order: {
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
            }
        });

        expect(hostedPaymentPageMapper).toBeInstanceOf(HostedPaymentPageMapper);
        expect(() => {
            hostedPaymentPageMapper.mapResponseToModel();
        }).not.toThrow();
        expect(hostedPaymentPageMapper._modelObject).toStrictEqual(
            new Transaction({
                mid: '{MID}',
                forwardUrl: '{FORWARDURL}',
                order: new Order({
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
            })
        );
    });

    it('maps correctly with empty parameters', () => {
        let orderMapper = new HostedPaymentPageMapper({});

        expect(orderMapper).toBeInstanceOf(HostedPaymentPageMapper);
        expect(() => {
            orderMapper.mapResponseToModel();
        }).not.toThrow();
        expect(orderMapper._modelObject).toStrictEqual(new Transaction({}));
    });
});
