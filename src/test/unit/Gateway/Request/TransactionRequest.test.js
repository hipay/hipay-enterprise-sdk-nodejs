const TransactionRequest = require('../../../../Gateway/Request/TransactionRequest');
const CustomerBillingInfoRequest = require('../../../../Gateway/Request/Info/CustomerBillingInfoRequest');
const CustomerShippingInfoRequest = require('../../../../Gateway/Request/Info/CustomerShippingInfoRequest');
const DeliveryShippingInfoRequest = require('../../../../Gateway/Request/Info/DeliveryShippingInfoRequest');
const { PreviousAuthInfo, AccountInfo, MerchantRiskStatement, RecurringInfo } = require('../../../../Gateway/Request/Model/ThreeDSTwo');
const { NameIndicator, SuspiciousActivity } = require('../../../../Enum/ThreeDSTwo');

const InvalidArgumentException = require('../../../../Error/InvalidArgumentException');
jest.mock('../../../../Error/InvalidArgumentException');

afterEach(() => {
    InvalidArgumentException.mockReset();
});

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let transactionRequest;

        let customerBillingInfo = new CustomerBillingInfoRequest();
        let customerShippingInfo = new CustomerShippingInfoRequest();
        let deliveryShippingInfo = new DeliveryShippingInfoRequest();

        let previousAuthInfo = new PreviousAuthInfo();
        let accountInfo = new AccountInfo();
        let merchantRiskStatement = new MerchantRiskStatement();
        let recurringInfo = new RecurringInfo();

        expect(() => {
            transactionRequest = new TransactionRequest({
                orderid: '{ORDERID}',
                operation: '{OPERATION}',
                description: '{DESCRIPTION}',
                longDescription: '{LONGDESCRIPTION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                shipping: '{SHIPPING}',
                tax: '{TAX}',
                taxRate: '{TAXRATE}',
                cid: '{CID}',
                ipaddr: '{IPADDR}',
                acceptUrl: '{ACCEPTURL}',
                declineUrl: '{DECLINEURL}',
                pendingUrl: '{PENDINGURL}',
                exceptionUrl: '{EXCEPTIONURL}',
                cancelUrl: '{CANCELURL}',
                notifyUrl: '{NOTIFYURL}',
                httpAccept: '{HTTPACCEPT}',
                httpUserAgent: '{HTTPUSERAGENT}',
                deviceFingerprint: '{DEVICEFINGERPRINT}',
                language: '{LANGUAGE}',
                customerBillingInfo: customerBillingInfo,
                customerShippingInfo: customerShippingInfo,
                deliveryInformation: deliveryShippingInfo,
                previousAuthInfo: previousAuthInfo,
                merchantRiskStatement: merchantRiskStatement,
                accountInfo: accountInfo,
                deviceChannel: '{DEVICECHANNEL}',
                recurringInfo: recurringInfo,
                requestId: '{REQUESTID}',
                softDescriptor: '{SOFTDESCRIPTOR}'
            });
        }).not.toThrow();

        expect(transactionRequest).toBeInstanceOf(TransactionRequest);
        expect(transactionRequest.orderid).toEqual('{ORDERID}');
        expect(transactionRequest.operation).toEqual('{OPERATION}');
        expect(transactionRequest.description).toEqual('{DESCRIPTION}');
        expect(transactionRequest.longDescription).toEqual('{LONGDESCRIPTION}');
        expect(transactionRequest.currency).toEqual('{CURRENCY}');
        expect(transactionRequest.amount).toEqual('{AMOUNT}');
        expect(transactionRequest.shipping).toEqual('{SHIPPING}');
        expect(transactionRequest.tax).toEqual('{TAX}');
        expect(transactionRequest.taxRate).toEqual('{TAXRATE}');
        expect(transactionRequest.cid).toEqual('{CID}');
        expect(transactionRequest.ipaddr).toEqual('{IPADDR}');
        expect(transactionRequest.acceptUrl).toEqual('{ACCEPTURL}');
        expect(transactionRequest.declineUrl).toEqual('{DECLINEURL}');
        expect(transactionRequest.pendingUrl).toEqual('{PENDINGURL}');
        expect(transactionRequest.exceptionUrl).toEqual('{EXCEPTIONURL}');
        expect(transactionRequest.cancelUrl).toEqual('{CANCELURL}');
        expect(transactionRequest.notifyUrl).toEqual('{NOTIFYURL}');
        expect(transactionRequest.httpAccept).toEqual('{HTTPACCEPT}');
        expect(transactionRequest.httpUserAgent).toEqual('{HTTPUSERAGENT}');
        expect(transactionRequest.deviceFingerprint).toEqual('{DEVICEFINGERPRINT}');
        expect(transactionRequest.language).toEqual('{LANGUAGE}');
        expect(transactionRequest.customerBillingInfo).toStrictEqual(customerBillingInfo);
        expect(transactionRequest.customerShippingInfo).toStrictEqual(customerShippingInfo);
        expect(transactionRequest.deliveryInformation).toStrictEqual(deliveryShippingInfo);
        expect(transactionRequest.previousAuthInfo).toStrictEqual(previousAuthInfo);
        expect(transactionRequest.merchantRiskStatement).toStrictEqual(merchantRiskStatement);
        expect(transactionRequest.accountInfo).toStrictEqual(accountInfo);
        expect(transactionRequest.deviceChannel).toEqual('{DEVICECHANNEL}');
        expect(transactionRequest.recurringInfo).toStrictEqual(recurringInfo);
        expect(transactionRequest.requestId).toEqual('{REQUESTID}');
        expect(transactionRequest.softDescriptor).toEqual('{SOFTDESCRIPTOR}');
    });

    it('Initializes correctly with plain objects', () => {
        let transactionRequest;

        let customerBillingInfo = {
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
        };
        let customerShippingInfo = {
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
        };
        let deliveryShippingInfo = {
            deliveryDate: '{DELIVERY_DATE}',
            deliveryMethod: '{DELIVERY_METHOD}'
        };

        let previousAuthInfo = {
            transactionReference: '{TRANSACTION_REFERENCE}'
        };

        let accountInfo = {
            customer: { accountChange: '20230101', openingAccountDate: '20220202', passwordChange: '20221010' },
            purchase: { cardStored24h: '5', count: '6', paymentAttempts1y: '64', paymentAttempts24h: '3' },
            payment: { enrollmentDate: '2021010' },
            shipping: {
                nameIndicator: NameIndicator.IDENTICAL,
                shippingUsedDate: '20230202',
                suspiciousActivity: SuspiciousActivity.SUSPICIOUS_ACTIVITY
            }
        };

        let merchantRiskStatement = {
            emailDeliveryAddress: '{EMAIL_DELIVERY_ADDRESS}',
            deliveryTimeFrame: '{DELIVERY_TIME_FRAME}',
            purchaseIndicator: '{PURCHASE_INDICATOR}',
            preOrderDate: '{PRE_ORDER_DATE}',
            reorderIndicator: '{REORDER_INDICATOR}',
            shippingIndicator: '{SHIPPING_INDICATOR}',
            giftCard: { amount: 99.9, count: 5, currency: 'EUR' }
        };

        let recurringInfo = {
            expirationDate: '{EXPIRATION_DATE}',
            frequency: '{FREQUENCY}'
        };

        expect(() => {
            transactionRequest = new TransactionRequest({
                orderid: '{ORDERID}',
                operation: '{OPERATION}',
                description: '{DESCRIPTION}',
                longDescription: '{LONGDESCRIPTION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                shipping: '{SHIPPING}',
                tax: '{TAX}',
                taxRate: '{TAXRATE}',
                cid: '{CID}',
                ipaddr: '{IPADDR}',
                acceptUrl: '{ACCEPTURL}',
                declineUrl: '{DECLINEURL}',
                pendingUrl: '{PENDINGURL}',
                exceptionUrl: '{EXCEPTIONURL}',
                cancelUrl: '{CANCELURL}',
                notifyUrl: '{NOTIFYURL}',
                httpAccept: '{HTTPACCEPT}',
                httpUserAgent: '{HTTPUSERAGENT}',
                deviceFingerprint: '{DEVICEFINGERPRINT}',
                language: '{LANGUAGE}',
                customerBillingInfo: customerBillingInfo,
                customerShippingInfo: customerShippingInfo,
                deliveryInformation: deliveryShippingInfo,
                previousAuthInfo: previousAuthInfo,
                merchantRiskStatement: merchantRiskStatement,
                accountInfo: accountInfo,
                deviceChannel: '{DEVICECHANNEL}',
                recurringInfo: recurringInfo,
                requestId: '{REQUESTID}',
                softDescriptor: '{SOFTDESCRIPTOR}'
            });
        }).not.toThrow();

        expect(transactionRequest).toBeInstanceOf(TransactionRequest);
        expect(transactionRequest.orderid).toEqual('{ORDERID}');
        expect(transactionRequest.operation).toEqual('{OPERATION}');
        expect(transactionRequest.description).toEqual('{DESCRIPTION}');
        expect(transactionRequest.longDescription).toEqual('{LONGDESCRIPTION}');
        expect(transactionRequest.currency).toEqual('{CURRENCY}');
        expect(transactionRequest.amount).toEqual('{AMOUNT}');
        expect(transactionRequest.shipping).toEqual('{SHIPPING}');
        expect(transactionRequest.tax).toEqual('{TAX}');
        expect(transactionRequest.taxRate).toEqual('{TAXRATE}');
        expect(transactionRequest.cid).toEqual('{CID}');
        expect(transactionRequest.ipaddr).toEqual('{IPADDR}');
        expect(transactionRequest.acceptUrl).toEqual('{ACCEPTURL}');
        expect(transactionRequest.declineUrl).toEqual('{DECLINEURL}');
        expect(transactionRequest.pendingUrl).toEqual('{PENDINGURL}');
        expect(transactionRequest.exceptionUrl).toEqual('{EXCEPTIONURL}');
        expect(transactionRequest.cancelUrl).toEqual('{CANCELURL}');
        expect(transactionRequest.notifyUrl).toEqual('{NOTIFYURL}');
        expect(transactionRequest.httpAccept).toEqual('{HTTPACCEPT}');
        expect(transactionRequest.httpUserAgent).toEqual('{HTTPUSERAGENT}');
        expect(transactionRequest.deviceFingerprint).toEqual('{DEVICEFINGERPRINT}');
        expect(transactionRequest.language).toEqual('{LANGUAGE}');
        expect(transactionRequest.customerBillingInfo).toBeInstanceOf(CustomerBillingInfoRequest);
        expect(transactionRequest.customerBillingInfo).toEqual(customerBillingInfo);
        expect(transactionRequest.customerShippingInfo).toBeInstanceOf(CustomerShippingInfoRequest);
        expect(transactionRequest.customerShippingInfo).toEqual(customerShippingInfo);
        expect(transactionRequest.deliveryInformation).toBeInstanceOf(DeliveryShippingInfoRequest);
        expect(transactionRequest.deliveryInformation).toEqual(deliveryShippingInfo);
        expect(transactionRequest.previousAuthInfo).toBeInstanceOf(PreviousAuthInfo);
        expect(transactionRequest.previousAuthInfo).toEqual(previousAuthInfo);
        expect(transactionRequest.merchantRiskStatement).toBeInstanceOf(MerchantRiskStatement);
        expect(transactionRequest.merchantRiskStatement).toEqual(merchantRiskStatement);
        expect(transactionRequest.accountInfo).toBeInstanceOf(AccountInfo);
        expect(transactionRequest.accountInfo).toEqual(accountInfo);
        expect(transactionRequest.deviceChannel).toEqual('{DEVICECHANNEL}');
        expect(transactionRequest.recurringInfo).toBeInstanceOf(RecurringInfo);
        expect(transactionRequest.recurringInfo).toEqual(recurringInfo);
        expect(transactionRequest.requestId).toEqual('{REQUESTID}');
        expect(transactionRequest.softDescriptor).toEqual('{SOFTDESCRIPTOR}');
    });

    it('Initializes correctly with minimal parameters', () => {
        let transactionRequest;

        expect(() => {
            transactionRequest = new TransactionRequest({
                orderid: '{ORDERID}',
                description: '{DESCRIPTION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}'
            });
        }).not.toThrow();

        expect(transactionRequest).toBeInstanceOf(TransactionRequest);
        expect(transactionRequest.orderid).toEqual('{ORDERID}');
        expect(transactionRequest.operation).toEqual(null);
        expect(transactionRequest.description).toEqual('{DESCRIPTION}');
        expect(transactionRequest.longDescription).toEqual(null);
        expect(transactionRequest.currency).toEqual('{CURRENCY}');
        expect(transactionRequest.amount).toEqual('{AMOUNT}');
        expect(transactionRequest.shipping).toEqual(0);
        expect(transactionRequest.tax).toEqual(0);
        expect(transactionRequest.taxRate).toEqual(0);
        expect(transactionRequest.cid).toEqual(null);
        expect(transactionRequest.ipaddr).toEqual(null);
        expect(transactionRequest.acceptUrl).toEqual(null);
        expect(transactionRequest.declineUrl).toEqual(null);
        expect(transactionRequest.pendingUrl).toEqual(null);
        expect(transactionRequest.exceptionUrl).toEqual(null);
        expect(transactionRequest.cancelUrl).toEqual(null);
        expect(transactionRequest.notifyUrl).toEqual(null);
        expect(transactionRequest.httpAccept).toEqual(null);
        expect(transactionRequest.httpUserAgent).toEqual(null);
        expect(transactionRequest.deviceFingerprint).toEqual(null);
        expect(transactionRequest.language).toEqual(null);
        expect(transactionRequest.customerBillingInfo).toEqual(null);
        expect(transactionRequest.customerShippingInfo).toEqual(null);
        expect(transactionRequest.deliveryInformation).toEqual(null);
        expect(transactionRequest.previousAuthInfo).toEqual(null);
        expect(transactionRequest.merchantRiskStatement).toEqual(null);
        expect(transactionRequest.accountInfo).toEqual(null);
        expect(transactionRequest.deviceChannel).toEqual(null);
        expect(transactionRequest.recurringInfo).toEqual(null);
        expect(transactionRequest.requestId).toEqual(null);
        expect(transactionRequest.softDescriptor).toEqual(null);
    });

    it('Errors when orderid is absent', () => {
        let transactionRequest;

        let customerBillingInfo = new CustomerBillingInfoRequest();
        let customerShippingInfo = new CustomerShippingInfoRequest();
        let deliveryShippingInfo = new DeliveryShippingInfoRequest();

        let previousAuthInfo = new PreviousAuthInfo();
        let accountInfo = new AccountInfo();
        let merchantRiskStatement = new MerchantRiskStatement();
        let recurringInfo = new RecurringInfo();

        expect(() => {
            transactionRequest = new TransactionRequest({
                operation: '{OPERATION}',
                description: '{DESCRIPTION}',
                longDescription: '{LONGDESCRIPTION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                shipping: '{SHIPPING}',
                tax: '{TAX}',
                taxRate: '{TAXRATE}',
                cid: '{CID}',
                ipaddr: '{IPADDR}',
                acceptUrl: '{ACCEPTURL}',
                declineUrl: '{DECLINEURL}',
                pendingUrl: '{PENDINGURL}',
                exceptionUrl: '{EXCEPTIONURL}',
                cancelUrl: '{CANCELURL}',
                notifyUrl: '{NOTIFYURL}',
                httpAccept: '{HTTPACCEPT}',
                httpUserAgent: '{HTTPUSERAGENT}',
                deviceFingerprint: '{DEVICEFINGERPRINT}',
                language: '{LANGUAGE}',
                customerBillingInfo: customerBillingInfo,
                customerShippingInfo: customerShippingInfo,
                deliveryInformation: deliveryShippingInfo,
                previousAuthInfo: previousAuthInfo,
                merchantRiskStatement: merchantRiskStatement,
                accountInfo: accountInfo,
                deviceChannel: '{DEVICECHANNEL}',
                recurringInfo: recurringInfo,
                requestId: '{REQUESTID}',
                softDescriptor: '{SOFTDESCRIPTOR}'
            });
        }).toThrow();

        try {
            new TransactionRequest({
                operation: '{OPERATION}',
                description: '{DESCRIPTION}',
                longDescription: '{LONGDESCRIPTION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                shipping: '{SHIPPING}',
                tax: '{TAX}',
                taxRate: '{TAXRATE}',
                cid: '{CID}',
                ipaddr: '{IPADDR}',
                acceptUrl: '{ACCEPTURL}',
                declineUrl: '{DECLINEURL}',
                pendingUrl: '{PENDINGURL}',
                exceptionUrl: '{EXCEPTIONURL}',
                cancelUrl: '{CANCELURL}',
                notifyUrl: '{NOTIFYURL}',
                httpAccept: '{HTTPACCEPT}',
                httpUserAgent: '{HTTPUSERAGENT}',
                deviceFingerprint: '{DEVICEFINGERPRINT}',
                language: '{LANGUAGE}',
                customerBillingInfo: customerBillingInfo,
                customerShippingInfo: customerShippingInfo,
                deliveryInformation: deliveryShippingInfo,
                previousAuthInfo: previousAuthInfo,
                merchantRiskStatement: merchantRiskStatement,
                accountInfo: accountInfo,
                deviceChannel: '{DEVICECHANNEL}',
                recurringInfo: recurringInfo,
                requestId: '{REQUESTID}',
                softDescriptor: '{SOFTDESCRIPTOR}'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Request must have an Order ID');
    });
    it('Errors when description is absent', () => {
        let transactionRequest;

        let customerBillingInfo = new CustomerBillingInfoRequest();
        let customerShippingInfo = new CustomerShippingInfoRequest();
        let deliveryShippingInfo = new DeliveryShippingInfoRequest();

        let previousAuthInfo = new PreviousAuthInfo();
        let accountInfo = new AccountInfo();
        let merchantRiskStatement = new MerchantRiskStatement();
        let recurringInfo = new RecurringInfo();

        expect(() => {
            transactionRequest = new TransactionRequest({
                orderid: '{ORDERID}',
                operation: '{OPERATION}',
                longDescription: '{LONGDESCRIPTION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                shipping: '{SHIPPING}',
                tax: '{TAX}',
                taxRate: '{TAXRATE}',
                cid: '{CID}',
                ipaddr: '{IPADDR}',
                acceptUrl: '{ACCEPTURL}',
                declineUrl: '{DECLINEURL}',
                pendingUrl: '{PENDINGURL}',
                exceptionUrl: '{EXCEPTIONURL}',
                cancelUrl: '{CANCELURL}',
                notifyUrl: '{NOTIFYURL}',
                httpAccept: '{HTTPACCEPT}',
                httpUserAgent: '{HTTPUSERAGENT}',
                deviceFingerprint: '{DEVICEFINGERPRINT}',
                language: '{LANGUAGE}',
                customerBillingInfo: customerBillingInfo,
                customerShippingInfo: customerShippingInfo,
                deliveryInformation: deliveryShippingInfo,
                previousAuthInfo: previousAuthInfo,
                merchantRiskStatement: merchantRiskStatement,
                accountInfo: accountInfo,
                deviceChannel: '{DEVICECHANNEL}',
                recurringInfo: recurringInfo,
                requestId: '{REQUESTID}',
                softDescriptor: '{SOFTDESCRIPTOR}'
            });
        }).toThrow();

        try {
            new TransactionRequest({
                orderid: '{ORDERID}',
                operation: '{OPERATION}',
                longDescription: '{LONGDESCRIPTION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                shipping: '{SHIPPING}',
                tax: '{TAX}',
                taxRate: '{TAXRATE}',
                cid: '{CID}',
                ipaddr: '{IPADDR}',
                acceptUrl: '{ACCEPTURL}',
                declineUrl: '{DECLINEURL}',
                pendingUrl: '{PENDINGURL}',
                exceptionUrl: '{EXCEPTIONURL}',
                cancelUrl: '{CANCELURL}',
                notifyUrl: '{NOTIFYURL}',
                httpAccept: '{HTTPACCEPT}',
                httpUserAgent: '{HTTPUSERAGENT}',
                deviceFingerprint: '{DEVICEFINGERPRINT}',
                language: '{LANGUAGE}',
                customerBillingInfo: customerBillingInfo,
                customerShippingInfo: customerShippingInfo,
                deliveryInformation: deliveryShippingInfo,
                previousAuthInfo: previousAuthInfo,
                merchantRiskStatement: merchantRiskStatement,
                accountInfo: accountInfo,
                deviceChannel: '{DEVICECHANNEL}',
                recurringInfo: recurringInfo,
                requestId: '{REQUESTID}',
                softDescriptor: '{SOFTDESCRIPTOR}'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Request must have a description');
    });
    it('Errors when currency is absent', () => {
        let transactionRequest;

        let customerBillingInfo = new CustomerBillingInfoRequest();
        let customerShippingInfo = new CustomerShippingInfoRequest();
        let deliveryShippingInfo = new DeliveryShippingInfoRequest();

        let previousAuthInfo = new PreviousAuthInfo();
        let accountInfo = new AccountInfo();
        let merchantRiskStatement = new MerchantRiskStatement();
        let recurringInfo = new RecurringInfo();

        expect(() => {
            transactionRequest = new TransactionRequest({
                orderid: '{ORDERID}',
                operation: '{OPERATION}',
                description: '{DESCRIPTION}',
                longDescription: '{LONGDESCRIPTION}',
                amount: '{AMOUNT}',
                shipping: '{SHIPPING}',
                tax: '{TAX}',
                taxRate: '{TAXRATE}',
                cid: '{CID}',
                ipaddr: '{IPADDR}',
                acceptUrl: '{ACCEPTURL}',
                declineUrl: '{DECLINEURL}',
                pendingUrl: '{PENDINGURL}',
                exceptionUrl: '{EXCEPTIONURL}',
                cancelUrl: '{CANCELURL}',
                notifyUrl: '{NOTIFYURL}',
                httpAccept: '{HTTPACCEPT}',
                httpUserAgent: '{HTTPUSERAGENT}',
                deviceFingerprint: '{DEVICEFINGERPRINT}',
                language: '{LANGUAGE}',
                customerBillingInfo: customerBillingInfo,
                customerShippingInfo: customerShippingInfo,
                deliveryInformation: deliveryShippingInfo,
                previousAuthInfo: previousAuthInfo,
                merchantRiskStatement: merchantRiskStatement,
                accountInfo: accountInfo,
                deviceChannel: '{DEVICECHANNEL}',
                recurringInfo: recurringInfo,
                requestId: '{REQUESTID}',
                softDescriptor: '{SOFTDESCRIPTOR}'
            });
        }).toThrow();

        try {
            new TransactionRequest({
                orderid: '{ORDERID}',
                operation: '{OPERATION}',
                description: '{DESCRIPTION}',
                longDescription: '{LONGDESCRIPTION}',
                amount: '{AMOUNT}',
                shipping: '{SHIPPING}',
                tax: '{TAX}',
                taxRate: '{TAXRATE}',
                cid: '{CID}',
                ipaddr: '{IPADDR}',
                acceptUrl: '{ACCEPTURL}',
                declineUrl: '{DECLINEURL}',
                pendingUrl: '{PENDINGURL}',
                exceptionUrl: '{EXCEPTIONURL}',
                cancelUrl: '{CANCELURL}',
                notifyUrl: '{NOTIFYURL}',
                httpAccept: '{HTTPACCEPT}',
                httpUserAgent: '{HTTPUSERAGENT}',
                deviceFingerprint: '{DEVICEFINGERPRINT}',
                language: '{LANGUAGE}',
                customerBillingInfo: customerBillingInfo,
                customerShippingInfo: customerShippingInfo,
                deliveryInformation: deliveryShippingInfo,
                previousAuthInfo: previousAuthInfo,
                merchantRiskStatement: merchantRiskStatement,
                accountInfo: accountInfo,
                deviceChannel: '{DEVICECHANNEL}',
                recurringInfo: recurringInfo,
                requestId: '{REQUESTID}',
                softDescriptor: '{SOFTDESCRIPTOR}'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Request must have a currency');
    });
    it('Errors when amount is absent', () => {
        let transactionRequest;

        let customerBillingInfo = new CustomerBillingInfoRequest();
        let customerShippingInfo = new CustomerShippingInfoRequest();
        let deliveryShippingInfo = new DeliveryShippingInfoRequest();

        let previousAuthInfo = new PreviousAuthInfo();
        let accountInfo = new AccountInfo();
        let merchantRiskStatement = new MerchantRiskStatement();
        let recurringInfo = new RecurringInfo();

        expect(() => {
            transactionRequest = new TransactionRequest({
                orderid: '{ORDERID}',
                operation: '{OPERATION}',
                description: '{DESCRIPTION}',
                longDescription: '{LONGDESCRIPTION}',
                currency: '{CURRENCY}',
                shipping: '{SHIPPING}',
                tax: '{TAX}',
                taxRate: '{TAXRATE}',
                cid: '{CID}',
                ipaddr: '{IPADDR}',
                acceptUrl: '{ACCEPTURL}',
                declineUrl: '{DECLINEURL}',
                pendingUrl: '{PENDINGURL}',
                exceptionUrl: '{EXCEPTIONURL}',
                cancelUrl: '{CANCELURL}',
                notifyUrl: '{NOTIFYURL}',
                httpAccept: '{HTTPACCEPT}',
                httpUserAgent: '{HTTPUSERAGENT}',
                deviceFingerprint: '{DEVICEFINGERPRINT}',
                language: '{LANGUAGE}',
                customerBillingInfo: customerBillingInfo,
                customerShippingInfo: customerShippingInfo,
                deliveryInformation: deliveryShippingInfo,
                previousAuthInfo: previousAuthInfo,
                merchantRiskStatement: merchantRiskStatement,
                accountInfo: accountInfo,
                deviceChannel: '{DEVICECHANNEL}',
                recurringInfo: recurringInfo,
                requestId: '{REQUESTID}',
                softDescriptor: '{SOFTDESCRIPTOR}'
            });
        }).toThrow();

        try {
            new TransactionRequest({
                orderid: '{ORDERID}',
                operation: '{OPERATION}',
                description: '{DESCRIPTION}',
                longDescription: '{LONGDESCRIPTION}',
                currency: '{CURRENCY}',
                shipping: '{SHIPPING}',
                tax: '{TAX}',
                taxRate: '{TAXRATE}',
                cid: '{CID}',
                ipaddr: '{IPADDR}',
                acceptUrl: '{ACCEPTURL}',
                declineUrl: '{DECLINEURL}',
                pendingUrl: '{PENDINGURL}',
                exceptionUrl: '{EXCEPTIONURL}',
                cancelUrl: '{CANCELURL}',
                notifyUrl: '{NOTIFYURL}',
                httpAccept: '{HTTPACCEPT}',
                httpUserAgent: '{HTTPUSERAGENT}',
                deviceFingerprint: '{DEVICEFINGERPRINT}',
                language: '{LANGUAGE}',
                customerBillingInfo: customerBillingInfo,
                customerShippingInfo: customerShippingInfo,
                deliveryInformation: deliveryShippingInfo,
                previousAuthInfo: previousAuthInfo,
                merchantRiskStatement: merchantRiskStatement,
                accountInfo: accountInfo,
                deviceChannel: '{DEVICECHANNEL}',
                recurringInfo: recurringInfo,
                requestId: '{REQUESTID}',
                softDescriptor: '{SOFTDESCRIPTOR}'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Request must have an amount');
    });
});
