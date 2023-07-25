const TransactionMapper = require('../../../../Gateway/Response/Mapper/TransactionMapper');
const Transaction = require('../../../../Gateway/Response/Transaction');

const ThreeDSecure = require('../../../../Gateway/Response/ThreeDSecure');
const FraudScreening = require('../../../../Gateway/Response/FraudScreening');
const Order = require('../../../../Gateway/Response/Order');
const PersonalInformation = require('../../../../Gateway/Response/PersonalInformation');
const OperationResponse = require('../../../../Gateway/Response/OperationResponse');
const PaymentMethod = require('../../../../Gateway/Response/PaymentMethod');

describe('Test mapper', () => {
    it('maps correctly', () => {
        let transactionMapper = new TransactionMapper({
            mid: '{MID}',
            authorizationCode: '{AUTHORIZATIONCODE}',
            transactionReference: '{TRANSACTIONREFERENCE}',
            dateCreated: '{DATECREATED}',
            dateUpdated: '{DATEUPDATED}',
            dateAuthorized: '{DATEAUTHORIZED}',
            status: '{STATUS}',
            state: '{STATE}',
            message: '{MESSAGE}',
            authorizedAmount: '{AUTHORIZEDAMOUNT}',
            capturedAmount: '{CAPTUREDAMOUNT}',
            refundedAmount: '{REFUNDEDAMOUNT}',
            decimals: '{DECIMALS}',
            currency: '{CURRENCY}',
            reason: '{REASON}',
            forwardUrl: '{FORWARDURL}',
            attemptId: '{ATTEMPTID}',
            referenceToPay: '{REFERENCETOPAY}',
            ipAddress: '{IPADDRESS}',
            ipCountry: '{IPCOUNTRY}',
            deviceId: '{DEVICEID}',
            avsResult: '{AVSRESULT}',
            cvcResult: '{CVCRESULT}',
            eci: '{ECI}',
            paymentProduct: '{PAYMENTPRODUCT}',
            paymentMethod: {
                brand: '{BRAND}',
                cardExpiryMonth: '{CARDEXPIRYMONTH}',
                cardExpiryYear: '{CARDEXPIRYYEAR}',
                cardId: '{CARDID}',
                cardHolder: '{CARDHOLDER}',
                country: '{COUNTRY}',
                issuer: '{ISSUER}',
                pan: '{PAN}',
                token: '{TOKEN}'
            },
            threeDSecure: {
                authenticationMessage: '{AUTHENTICATIONMESSAGE}',
                authenticationStatus: '{AUTHENTICATIONSTATUS}',
                authenticationToken: '{AUTHENTICATIONTOKEN}',
                eci: '{ECI}',
                enrollmentMessage: '{ENROLLMENTMESSAGE}',
                enrollmentStatus: '{ENROLLMENTSTATUS}',
                xid: '{XID}'
            },
            fraudScreening: {
                result: '{RESULT}',
                review: '{REVIEW}',
                scoring: '{SCORING}'
            },
            order: {
                amount: '{AMOUNT}',
                attempts: '{ATTEMPTS}',
                currency: '{CURRENCY}',
                customerId: '{CUSTOMERID}',
                dateCreated: '{DATECREATED}',
                decimals: '{DECIMALS}',
                gender: '{GENDER}',
                id: '{ID}',
                language: '{LANGUAGE}',
                shipping: '{SHIPPING}',
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
                },
                tax: '{TAX}'
            },
            debitAgreement: '{DEBITAGREEMENT}',
            basket: '{BASKET}',
            operation: {
                amount: '{AMOUNT}',
                currency: '{CURRENCY}',
                dateAuthorized: '{DATEAUTHORIZED}',
                id: '{ID}',
                reference: '{REFERENCE}',
                type: '{TYPE}'
            },
            customData: '{CUSTOMDATA}'
        });

        expect(transactionMapper).toBeInstanceOf(TransactionMapper);
        expect(() => {
            transactionMapper.mapResponseToModel();
        }).not.toThrow();
        expect(transactionMapper._modelObject).toStrictEqual(
            new Transaction({
                mid: '{MID}',
                authorizationCode: '{AUTHORIZATIONCODE}',
                transactionReference: '{TRANSACTIONREFERENCE}',
                dateCreated: '{DATECREATED}',
                dateUpdated: '{DATEUPDATED}',
                dateAuthorized: '{DATEAUTHORIZED}',
                status: '{STATUS}',
                state: '{STATE}',
                message: '{MESSAGE}',
                authorizedAmount: '{AUTHORIZEDAMOUNT}',
                capturedAmount: '{CAPTUREDAMOUNT}',
                refundedAmount: '{REFUNDEDAMOUNT}',
                decimals: '{DECIMALS}',
                currency: '{CURRENCY}',
                reason: '{REASON}',
                forwardUrl: '{FORWARDURL}',
                attemptId: '{ATTEMPTID}',
                referenceToPay: '{REFERENCETOPAY}',
                ipAddress: '{IPADDRESS}',
                ipCountry: '{IPCOUNTRY}',
                deviceId: '{DEVICEID}',
                avsResult: '{AVSRESULT}',
                cvcResult: '{CVCRESULT}',
                eci: '{ECI}',
                paymentProduct: '{PAYMENTPRODUCT}',
                paymentMethod: new PaymentMethod({
                    brand: '{BRAND}',
                    cardExpiryMonth: '{CARDEXPIRYMONTH}',
                    cardId: '{CARDID}',
                    cardExpiryYear: '{CARDEXPIRYYEAR}',
                    cardHolder: '{CARDHOLDER}',
                    country: '{COUNTRY}',
                    issuer: '{ISSUER}',
                    pan: '{PAN}',
                    token: '{TOKEN}'
                }),
                threeDSecure: new ThreeDSecure({
                    authenticationMessage: '{AUTHENTICATIONMESSAGE}',
                    authenticationStatus: '{AUTHENTICATIONSTATUS}',
                    authenticationToken: '{AUTHENTICATIONTOKEN}',
                    eci: '{ECI}',
                    enrollmentMessage: '{ENROLLMENTMESSAGE}',
                    enrollmentStatus: '{ENROLLMENTSTATUS}',
                    xid: '{XID}'
                }),
                fraudScreening: new FraudScreening({
                    result: '{RESULT}',
                    review: '{REVIEW}',
                    scoring: '{SCORING}'
                }),
                order: new Order({
                    amount: '{AMOUNT}',
                    attempts: '{ATTEMPTS}',
                    currency: '{CURRENCY}',
                    customerId: '{CUSTOMERID}',
                    dateCreated: '{DATECREATED}',
                    decimals: '{DECIMALS}',
                    gender: '{GENDER}',
                    id: '{ID}',
                    language: '{LANGUAGE}',
                    shipping: '{SHIPPING}',
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
                    }),
                    tax: '{TAX}'
                }),
                debitAgreement: '{DEBITAGREEMENT}',
                basket: '{BASKET}',
                operation: new OperationResponse({
                    amount: '{AMOUNT}',
                    currency: '{CURRENCY}',
                    dateAuthorized: '{DATEAUTHORIZED}',
                    id: '{ID}',
                    reference: '{REFERENCE}',
                    type: '{TYPE}'
                }),
                customData: '{CUSTOMDATA}'
            })
        );
    });

    it('maps correctly with empty parameters', () => {
        let transactionMapper = new TransactionMapper({});

        expect(transactionMapper).toBeInstanceOf(TransactionMapper);
        expect(() => {
            transactionMapper.mapResponseToModel();
        }).not.toThrow();
        expect(transactionMapper._modelObject).toStrictEqual(new Transaction({}));
    });
});
