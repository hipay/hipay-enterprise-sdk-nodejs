const isEqual = require('lodash.isequal');

const InvalidArgumentException = require('../../Error/InvalidArgumentException');
jest.mock('../../Error/InvalidArgumentException');

const Configuration = require('../../Gateway/HTTP/Configuration/Configuration');
jest.mock('../../Gateway/HTTP/Configuration/Configuration');

Configuration.API_ENV_STAGE = '{API_ENV_STAGE}';
Configuration.API_ENV_PRODUCTION = '{API_ENV_PRODUCTION}';

const SimpleHTTPClient = require('../../Gateway/HTTP/SimpleHTTPClient');
jest.mock('../../Gateway/HTTP/SimpleHTTPClient');

const PIDataClient = require('../../Gateway/PIDataClient/PIDataClient');
jest.mock('../../Gateway/PIDataClient/PIDataClient');

const TransactionMapper = require('../../Gateway/Response/Mapper/TransactionMapper');
jest.mock('../../Gateway/Response/Mapper/TransactionMapper');

const HostedPaymentPageMapper = require('../../Gateway/Response/Mapper/HostedPaymentPageMapper');
jest.mock('../../Gateway/Response/Mapper/HostedPaymentPageMapper');

const OperationMapper = require('../../Gateway/Response/Mapper/OperationMapper');
jest.mock('../../Gateway/Response/Mapper/OperationMapper');

const SecuritySettingsMapper = require('../../Gateway/Response/Mapper/SecuritySettingsMapper');
jest.mock('../../Gateway/Response/Mapper/SecuritySettingsMapper');

const PaymentCardTokenMapper = require('../../Gateway/Response/Mapper/PaymentCardTokenMapper');
jest.mock('../../Gateway/Response/Mapper/PaymentCardTokenMapper');

let mockHttpClient = {
    request: jest.fn()
};
SimpleHTTPClient.mockImplementation(() => mockHttpClient);

let mockPIDataClient = {
    getDataId: jest.fn(),
    sendData: jest.fn(),
    getOrderData: jest.fn()
};
PIDataClient.mockImplementation(() => mockPIDataClient);

let mockMapper = {
    mappedObject: '{MAPPED_OBJECT}'
};
TransactionMapper.mockImplementation(() => mockMapper);
HostedPaymentPageMapper.mockImplementation(() => mockMapper);
OperationMapper.mockImplementation(() => mockMapper);
SecuritySettingsMapper.mockImplementation(() => mockMapper);
PaymentCardTokenMapper.mockImplementation(() => mockMapper);

Configuration.mockImplementation(() => {
    return {
        apiEndpoint: '{API_ENDPOINT}',
        consultationApiEndpoint: '{CONSULTATION_API_ENDPOINT}',
        hpaymentApiEndpoint: '{HPAYMENT_API_ENDPOINT}',
        secureVaultEndpoint: '{SECURED_ENDPOINT}'
    };
});

beforeEach(() => {
    InvalidArgumentException.mockReset();
    Configuration.mockClear();
    SimpleHTTPClient.mockClear();
    mockHttpClient.request.mockReset();

    PIDataClient.mockClear();
    mockPIDataClient.getDataId.mockReset();
    mockPIDataClient.sendData.mockReset();
    mockPIDataClient.getOrderData.mockReset();

    TransactionMapper.mockClear();
    HostedPaymentPageMapper.mockClear();
    OperationMapper.mockClear();
    SecuritySettingsMapper.mockClear();
    PaymentCardTokenMapper.mockClear();
});

expect.extend({
    jsonToBeEqual: (actual, expected) => {
        const actualObj = JSON.parse(actual);
        const expectedObj = JSON.parse(expected);

        const pass = isEqual(actualObj, expectedObj);

        if (pass) {
            return {
                message: () => `expected ${this.utils.printReceived(actual)} not to equal ${this.utils.printExpected(`${expected}`)}`,
                pass: true
            };
        } else {
            return {
                message: () => `expected ${this.utils.printReceived(actual)} to equal ${this.utils.printExpected(`${expected}`)}`,
                pass: false
            };
        }
    }
});

const HiPay = require('../../HiPay');
const OrderRequest = require('../../Gateway/Request/OrderRequest');
const HostedPaymentPageRequest = require('../../Gateway/Request/HostedPaymentPageRequest');
const MaintenanceRequest = require('../../Gateway/Request/MaintenanceRequest');
const CustomerBillingInfoRequest = require('../../Gateway/Request/Info/CustomerBillingInfoRequest');
const CustomerShippingInfoRequest = require('../../Gateway/Request/Info/CustomerShippingInfoRequest');
const DeliveryShippingInfoRequest = require('../../Gateway/Request/Info/DeliveryShippingInfoRequest');
const AbstractPaymentMethod = require('../../Gateway/Request/PaymentMethod/AbstractPaymentMethod');
const CardTokenPaymentMethod = require('../../Gateway/Request/PaymentMethod/CardTokenPaymentMethod');
const IllicadoPaymentMethod = require('../../Gateway/Request/PaymentMethod/IllicadoPaymentMethod');
const IssuerBankIDPaymentMethod = require('../../Gateway/Request/PaymentMethod/IssuerBankIDPaymentMethod');
const MultibancoPaymentMethod = require('../../Gateway/Request/PaymentMethod/MultibancoPaymentMethod');
const OneyCarteCadeauPaymentMethod = require('../../Gateway/Request/PaymentMethod/OneyCarteCadeauPaymentMethod');
const SEPADirectDebitPaymentMethod = require('../../Gateway/Request/PaymentMethod/SEPADirectDebitPaymentMethod');
const XTimesCreditCardPaymentMethod = require('../../Gateway/Request/PaymentMethod/XTimesCreditCardPaymentMethod');
const AuthenticationIndicator = require('../../Enum/Transaction/AuthenticationIndicator');
const AVSResult = require('../../Enum/Transaction/AVSResult');
const CVCResult = require('../../Enum/Transaction/CVCResult');
const ECI = require('../../Enum/Transaction/ECI');
const FraudScreening = require('../../Enum/Transaction/FraudScreening');
const Operation = require('../../Enum/Transaction/Operation');
const SecurityCodeType = require('../../Enum/Transaction/SecurityCodeType');
const Template = require('../../Enum/Transaction/Template');
const ThreeDSecureStatus = require('../../Enum/Transaction/ThreeDSecureStatus');
const TransactionState = require('../../Enum/Transaction/TransactionState');
const TransactionStatus = require('../../Enum/Transaction/TransactionStatus');
const DeliveryTimeFrame = require('../../Enum/ThreeDSTwo/DeliveryTimeFrame');
const DeviceChannel = require('../../Enum/ThreeDSTwo/DeviceChannel');
const NameIndicator = require('../../Enum/ThreeDSTwo/NameIndicator');
const PurchaseIndicator = require('../../Enum/ThreeDSTwo/PurchaseIndicator');
const ReorderIndicator = require('../../Enum/ThreeDSTwo/ReorderIndicator');
const SalesChannel = require('../../Enum/ThreeDSTwo/SalesChannel');
const ShippingIndicator = require('../../Enum/ThreeDSTwo/ShippingIndicator');
const SuspiciousActivity = require('../../Enum/ThreeDSTwo/SuspiciousActivity');
const AccountInfo = require('../../Gateway/Request/Model/ThreeDSTwo/AccountInfo');
const BrowserInfo = require('../../Gateway/Request/Model/ThreeDSTwo/BrowserInfo');
const MerchantRiskStatement = require('../../Gateway/Request/Model/ThreeDSTwo/MerchantRiskStatement');
const PreviousAuthInfo = require('../../Gateway/Request/Model/ThreeDSTwo/PreviousAuthInfo');
const RecurringInfo = require('../../Gateway/Request/Model/ThreeDSTwo/RecurringInfo');
const { HashAlgorithm } = require('../../Enum/Helper');
const { Gender } = require('../../Enum/Customer');
const TypeItems = require('../../Enum/Cart/TypeItems');
const DeliveryMethod = require('../../Data/DeliveryMethod');
const PaymentMean = require('../../Data/PaymentMean');
const ProductCategory = require('../../Data/ProductCategory');
const ShippingMethod = require('../../Data/ShippingMethod');

describe('HiPay object', () => {
    it('constructs correctly', () => {
        let hiPay = new HiPay({});

        expect(hiPay).toBeInstanceOf(HiPay);
        expect(HiPay.ENDPOINT_NEW_ORDER).toEqual('/rest/v1/order');
        expect(HiPay.METHOD_NEW_ORDER).toEqual('POST');
        expect(HiPay.ENDPOINT_HOSTED_PAYMENT_PAGE).toEqual('/rest/v1/hpayment');
        expect(HiPay.ENDPOINT_HOSTED_PAYMENT_PAGE_V2).toEqual('/v1/hpayment');
        expect(HiPay.METHOD_HOSTED_PAYMENT_PAGE).toEqual('POST');
        expect(HiPay.ENDPOINT_MAINTENANCE_OPERATION).toEqual('/rest/v1/maintenance/transaction/{transaction}');
        expect(HiPay.METHOD_MAINTENANCE_OPERATION).toEqual('POST');
        expect(HiPay.ENDPOINT_TRANSACTION_INFORMATION).toEqual('/rest/v1/transaction/{transaction}');
        expect(HiPay.ENDPOINT_TRANSACTION_V3_INFORMATION).toEqual('/v3/transaction/{transaction}');
        expect(HiPay.METHOD_TRANSACTION_INFORMATION).toEqual('GET');
        expect(HiPay.METHOD_TRANSACTION_V3_INFORMATION).toEqual('GET');
        expect(HiPay.ENDPOINT_ORDER_TRANSACTION_INFORMATION).toEqual('/rest/v1/transaction');
        expect(HiPay.METHOD_ORDER_TRANSACTION_INFORMATION).toEqual('GET');
        expect(HiPay.ENDPOINT_SECURITY_SETTINGS).toEqual('/rest/v2/security-settings');
        expect(HiPay.METHOD_SECURITY_SETTINGS).toEqual('GET');
        expect(HiPay.ENDPOINT_LOOKUP_TOKEN).toEqual('v2/token/{token}');
        expect(HiPay.METHOD_LOOKUP_TOKEN).toEqual('GET');
        expect(HiPay.API_ENV_STAGE).toEqual('{API_ENV_STAGE}');
        expect(HiPay.API_ENV_PRODUCTION).toEqual('{API_ENV_PRODUCTION}');

        expect(HiPay.OrderRequest).toEqual(OrderRequest);
        expect(HiPay.HostedPaymentPageRequest).toEqual(HostedPaymentPageRequest);
        expect(HiPay.MaintenanceRequest).toEqual(MaintenanceRequest);

        expect(HiPay.CustomerBillingInfoRequest).toEqual(CustomerBillingInfoRequest);
        expect(HiPay.CustomerShippingInfoRequest).toEqual(CustomerShippingInfoRequest);
        expect(HiPay.DeliveryShippingInfoRequest).toEqual(DeliveryShippingInfoRequest);

        expect(HiPay.PaymentMethods).toStrictEqual({
            AbstractPaymentMethod,
            CardTokenPaymentMethod,
            IllicadoPaymentMethod,
            IssuerBankIDPaymentMethod,
            MultibancoPaymentMethod,
            OneyCarteCadeauPaymentMethod,
            SEPADirectDebitPaymentMethod,
            XTimesCreditCardPaymentMethod
        });

        expect(HiPay.Transaction).toStrictEqual({
            AuthenticationIndicator,
            AVSResult,
            CVCResult,
            ECI,
            FraudScreening,
            Operation,
            SecurityCodeType,
            Template,
            ThreeDSecureStatus,
            TransactionState,
            TransactionStatus
        });

        expect(HiPay.ThreeDSTwo).toStrictEqual({
            DeliveryTimeFrame,
            DeviceChannel,
            NameIndicator,
            PurchaseIndicator,
            ReorderIndicator,
            SalesChannel,
            ShippingIndicator,
            SuspiciousActivity,
            AccountInfo,
            BrowserInfo,
            MerchantRiskStatement,
            PreviousAuthInfo,
            RecurringInfo
        });

        expect(HiPay.Helper).toStrictEqual({ HashAlgorithm });
        expect(HiPay.Customer).toStrictEqual({ Gender });
        expect(HiPay.Cart).toStrictEqual({ TypeItems });
        expect(HiPay.DataCollections).toStrictEqual({ DeliveryMethod, PaymentMean, ProductCategory, ShippingMethod });
    });

    describe('requests new order', () => {
        it('requests new order', async () => {
            let hiPay = new HiPay({
                apiEndpoint: '{API_ENDPOINT}'
            });

            let request = new OrderRequest({
                customData: '{CUSTOM_DATA}',
                source: {
                    source: '{SOURCE}',
                    brand: '{BRAND}',
                    brand_version: '{BRAND_VERSION}'
                },
                basket: '{BASKET}',
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
                customerBillingInfo: {
                    email: '{EMAIL}',
                    phone: '{PHONE}',
                    msisdn: '{MSISDN}',
                    birthdate: '{BIRTHDATE}',
                    gender: '{GENDER}',
                    firstname: '{FIRSTNAME}',
                    lastname: '{LASTNAME}',
                    recipientinfo: '{RECIPIENTINFO}',
                    house_extension: '{HOUSE_EXTENSION}',
                    house_number: '{HOUSE_NUMBER}',
                    streetaddress: '{STREETADDRESS}',
                    streetaddress2: '{STREETADDRESS2}',
                    city: '{CITY}',
                    state: '{STATE}',
                    zipcode: '{ZIPCODE}',
                    country: '{COUNTRY}'
                },
                customerShippingInfo: {
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
                },
                deliveryInformation: {
                    delivery_date: '{DELIVERY_DATE}',
                    delivery_method: '{DELIVERY_METHOD}'
                },
                previousAuthInfo: {
                    transaction_reference: '{TRANSACTION_REFERENCE}'
                },
                merchantRiskStatement: {
                    email_delivery_address: '{EMAIL_DELIVERY_ADDRESS}',
                    delivery_time_frame: '{DELIVERY_TIME_FRAME}',
                    purchase_indicator: '{PURCHASE_INDICATOR}',
                    pre_order_date: '{PRE_ORDER_DATE}',
                    reorder_indicator: '{REORDER_INDICATOR}',
                    shipping_indicator: '{SHIPPING_INDICATOR}',
                    gift_card: { amount: 99.9, count: 5, currency: 'EUR' }
                },
                accountInfo: {
                    customer: { account_change: '20230101', opening_account_date: '20220202', password_change: '20221010' },
                    purchase: { card_stored_24h: '5', count: '6', payment_attempts_1y: '64', payment_attempts_24h: '3' },
                    payment: { enrollment_date: '2021010' },
                    shipping: {
                        name_indicator: NameIndicator.IDENTICAL,
                        shipping_used_date: '20230202',
                        suspicious_activity: SuspiciousActivity.SUSPICIOUS_ACTIVITY
                    }
                },
                deviceChannel: '{DEVICECHANNEL}',
                recurringInfo: {
                    expiration_date: '{EXPIRATION_DATE}',
                    frequency: '{FREQUENCY}'
                },
                requestId: '{REQUESTID}',
                paymentProduct: '{PAYMENTPRODUCT}',
                paymentMethod: new CardTokenPaymentMethod({
                    eci: ECI.SECURE_ECOMMERCE,
                    cardtoken: '{CARD_TOKEN}',
                    authentication_indicator: AuthenticationIndicator.AVAILABLE
                }),
                browserInfo: {
                    ipaddr: '{IPADDR}',
                    http_accept: '{HTTP_ACCEPT}',
                    http_user_agent: '{HTTP_USER_AGENT}',
                    java_enabled: '{JAVA_ENABLED}',
                    javascript_enabled: '{JAVASCRIPT_ENABLED}',
                    language: '{LANGUAGE}',
                    color_depth: '{COLOR_DEPTH}',
                    screen_height: '{SCREEN_HEIGHT}',
                    screen_width: '{SCREEN_WIDTH}',
                    timezone: '{TIMEZONE}'
                },
                salesChannel: '{SALESCHANNEL}',
                providerData: '{PROVIDERDATA}'
            });

            mockPIDataClient.getDataId.mockReturnValue('{DATA_ID}');
            mockHttpClient.request.mockResolvedValue({
                body: '{RESPONSE_BODY}'
            });
            mockPIDataClient.getOrderData.mockReturnValue('{ORDER_DATA}');

            expect(await hiPay.requestNewOrder(request)).toEqual('{MAPPED_OBJECT}');
            expect(PIDataClient).toHaveBeenCalledWith(mockHttpClient);
            expect(mockPIDataClient.getDataId).toHaveBeenCalledWith(null);
            expect(mockHttpClient.request).toHaveBeenCalledWith(HiPay.METHOD_NEW_ORDER, HiPay.ENDPOINT_NEW_ORDER, {
                baseUrl: '{API_ENDPOINT}',
                body: {
                    custom_data: '{CUSTOM_DATA}',
                    source: JSON.stringify({
                        source: '{SOURCE}',
                        brand: '{BRAND}',
                        brand_version: '{BRAND_VERSION}'
                    }),
                    basket: '{BASKET}',
                    orderid: '{ORDERID}',
                    operation: '{OPERATION}',
                    description: '{DESCRIPTION}',
                    long_description: '{LONGDESCRIPTION}',
                    currency: '{CURRENCY}',
                    amount: '{AMOUNT}',
                    shipping: '{SHIPPING}',
                    tax: '{TAX}',
                    tax_rate: '{TAXRATE}',
                    cid: '{CID}',
                    ipaddr: '{IPADDR}',
                    accept_url: '{ACCEPTURL}',
                    decline_url: '{DECLINEURL}',
                    pending_url: '{PENDINGURL}',
                    exception_url: '{EXCEPTIONURL}',
                    cancel_url: '{CANCELURL}',
                    notify_url: '{NOTIFYURL}',
                    http_accept: '{HTTPACCEPT}',
                    http_user_agent: '{HTTPUSERAGENT}',
                    device_fingerprint: '{DEVICEFINGERPRINT}',
                    language: '{LANGUAGE}',
                    email: '{EMAIL}',
                    phone: '{PHONE}',
                    msisdn: '{MSISDN}',
                    birthdate: '{BIRTHDATE}',
                    gender: '{GENDER}',
                    firstname: '{FIRSTNAME}',
                    lastname: '{LASTNAME}',
                    recipientinfo: '{RECIPIENTINFO}',
                    house_extension: '{HOUSE_EXTENSION}',
                    house_number: '{HOUSE_NUMBER}',
                    streetaddress: '{STREETADDRESS}',
                    streetaddress2: '{STREETADDRESS2}',
                    city: '{CITY}',
                    state: '{STATE}',
                    zipcode: '{ZIPCODE}',
                    country: '{COUNTRY}',
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
                    shipto_gender: '{SHIPTO_GENDER}',
                    delivery_date: '{DELIVERY_DATE}',
                    delivery_method: '{DELIVERY_METHOD}',
                    previous_auth_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            transaction_reference: '{TRANSACTION_REFERENCE}'
                        })
                    ),
                    merchant_risk_statement: expect.jsonToBeEqual(
                        JSON.stringify({
                            email_delivery_address: '{EMAIL_DELIVERY_ADDRESS}',
                            delivery_time_frame: '{DELIVERY_TIME_FRAME}',
                            purchase_indicator: '{PURCHASE_INDICATOR}',
                            pre_order_date: '{PRE_ORDER_DATE}',
                            reorder_indicator: '{REORDER_INDICATOR}',
                            shipping_indicator: '{SHIPPING_INDICATOR}',
                            gift_card: { amount: 99.9, count: 5, currency: 'EUR' }
                        })
                    ),
                    account_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            customer: { account_change: '20230101', opening_account_date: '20220202', password_change: '20221010' },
                            purchase: { card_stored_24h: '5', count: '6', payment_attempts_1y: '64', payment_attempts_24h: '3' },
                            payment: { enrollment_date: '2021010' },
                            shipping: {
                                name_indicator: NameIndicator.IDENTICAL,
                                shipping_used_date: '20230202',
                                suspicious_activity: SuspiciousActivity.SUSPICIOUS_ACTIVITY
                            }
                        })
                    ),
                    device_channel: '{DEVICECHANNEL}',
                    recurring_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            expiration_date: '{EXPIRATION_DATE}',
                            frequency: '{FREQUENCY}'
                        })
                    ),
                    request_id: '{REQUESTID}',
                    payment_product: '{PAYMENTPRODUCT}',
                    eci: ECI.SECURE_ECOMMERCE,
                    cardtoken: '{CARD_TOKEN}',
                    authentication_indicator: AuthenticationIndicator.AVAILABLE,
                    browser_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            ipaddr: '{IPADDR}',
                            http_accept: '{HTTP_ACCEPT}',
                            http_user_agent: '{HTTP_USER_AGENT}',
                            java_enabled: '{JAVA_ENABLED}',
                            javascript_enabled: '{JAVASCRIPT_ENABLED}',
                            language: '{LANGUAGE}',
                            color_depth: '{COLOR_DEPTH}',
                            screen_height: '{SCREEN_HEIGHT}',
                            screen_width: '{SCREEN_WIDTH}',
                            timezone: '{TIMEZONE}'
                        })
                    ),
                    sales_channel: '{SALESCHANNEL}',
                    provider_data: '{PROVIDERDATA}'
                }
            });
            expect(TransactionMapper).toHaveBeenCalledWith('{RESPONSE_BODY}');
            expect(mockPIDataClient.getOrderData).toHaveBeenCalledWith('{DATA_ID}', request, '{MAPPED_OBJECT}');
            expect(mockPIDataClient.sendData).toHaveBeenCalledWith('{ORDER_DATA}');
        });

        it('requests new order with object param', async () => {
            let hiPay = new HiPay({
                apiEndpoint: '{API_ENDPOINT}'
            });

            let request = {
                customData: '{CUSTOM_DATA}',
                source: {
                    source: '{SOURCE}',
                    brand: '{BRAND}',
                    brand_version: '{BRAND_VERSION}'
                },
                basket: '{BASKET}',
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
                customerBillingInfo: new CustomerBillingInfoRequest({
                    email: '{EMAIL}',
                    phone: '{PHONE}',
                    msisdn: '{MSISDN}',
                    birthdate: '{BIRTHDATE}',
                    gender: '{GENDER}',
                    firstname: '{FIRSTNAME}',
                    lastname: '{LASTNAME}',
                    recipientinfo: '{RECIPIENTINFO}',
                    house_extension: '{HOUSE_EXTENSION}',
                    house_number: '{HOUSE_NUMBER}',
                    streetaddress: '{STREETADDRESS}',
                    streetaddress2: '{STREETADDRESS2}',
                    city: '{CITY}',
                    state: '{STATE}',
                    zipcode: '{ZIPCODE}',
                    country: '{COUNTRY}'
                }),
                customerShippingInfo: new CustomerShippingInfoRequest({
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
                }),
                deliveryInformation: new DeliveryShippingInfoRequest({
                    delivery_date: '{DELIVERY_DATE}',
                    delivery_method: '{DELIVERY_METHOD}'
                }),
                previousAuthInfo: new PreviousAuthInfo({
                    transaction_reference: '{TRANSACTION_REFERENCE}'
                }),
                merchantRiskStatement: new MerchantRiskStatement({
                    email_delivery_address: '{EMAIL_DELIVERY_ADDRESS}',
                    delivery_time_frame: '{DELIVERY_TIME_FRAME}',
                    purchase_indicator: '{PURCHASE_INDICATOR}',
                    pre_order_date: '{PRE_ORDER_DATE}',
                    reorder_indicator: '{REORDER_INDICATOR}',
                    shipping_indicator: '{SHIPPING_INDICATOR}',
                    gift_card: { amount: 99.9, count: 5, currency: 'EUR' }
                }),
                accountInfo: new AccountInfo({
                    customer: { account_change: '20230101', opening_account_date: '20220202', password_change: '20221010' },
                    purchase: { card_stored_24h: '5', count: '6', payment_attempts_1y: '64', payment_attempts_24h: '3' },
                    payment: { enrollment_date: '2021010' },
                    shipping: {
                        name_indicator: NameIndicator.IDENTICAL,
                        shipping_used_date: '20230202',
                        suspicious_activity: SuspiciousActivity.SUSPICIOUS_ACTIVITY
                    }
                }),
                deviceChannel: '{DEVICECHANNEL}',
                recurringInfo: new RecurringInfo({
                    expiration_date: '{EXPIRATION_DATE}',
                    frequency: '{FREQUENCY}'
                }),
                requestId: '{REQUESTID}',
                paymentProduct: '{PAYMENTPRODUCT}',
                paymentMethod: new CardTokenPaymentMethod({
                    eci: ECI.SECURE_ECOMMERCE,
                    cardtoken: '{CARD_TOKEN}',
                    authentication_indicator: AuthenticationIndicator.AVAILABLE
                }),
                browserInfo: new BrowserInfo({
                    ipaddr: '{IPADDR}',
                    http_accept: '{HTTP_ACCEPT}',
                    http_user_agent: '{HTTP_USER_AGENT}',
                    java_enabled: '{JAVA_ENABLED}',
                    javascript_enabled: '{JAVASCRIPT_ENABLED}',
                    language: '{LANGUAGE}',
                    color_depth: '{COLOR_DEPTH}',
                    screen_height: '{SCREEN_HEIGHT}',
                    screen_width: '{SCREEN_WIDTH}',
                    timezone: '{TIMEZONE}'
                }),
                salesChannel: '{SALESCHANNEL}',
                providerData: '{PROVIDERDATA}'
            };

            mockPIDataClient.getDataId.mockReturnValue('{DATA_ID}');
            mockHttpClient.request.mockResolvedValue({
                body: '{RESPONSE_BODY}'
            });
            mockPIDataClient.getOrderData.mockReturnValue('{ORDER_DATA}');

            expect(await hiPay.requestNewOrder(request)).toEqual('{MAPPED_OBJECT}');
            expect(PIDataClient).toHaveBeenCalledWith(mockHttpClient);
            expect(mockPIDataClient.getDataId).toHaveBeenCalledWith(null);
            expect(mockHttpClient.request).toHaveBeenCalledWith(HiPay.METHOD_NEW_ORDER, HiPay.ENDPOINT_NEW_ORDER, {
                baseUrl: '{API_ENDPOINT}',
                body: {
                    custom_data: '{CUSTOM_DATA}',
                    source: JSON.stringify({
                        source: '{SOURCE}',
                        brand: '{BRAND}',
                        brand_version: '{BRAND_VERSION}'
                    }),
                    basket: '{BASKET}',
                    orderid: '{ORDERID}',
                    operation: '{OPERATION}',
                    description: '{DESCRIPTION}',
                    long_description: '{LONGDESCRIPTION}',
                    currency: '{CURRENCY}',
                    amount: '{AMOUNT}',
                    shipping: '{SHIPPING}',
                    tax: '{TAX}',
                    tax_rate: '{TAXRATE}',
                    cid: '{CID}',
                    ipaddr: '{IPADDR}',
                    accept_url: '{ACCEPTURL}',
                    decline_url: '{DECLINEURL}',
                    pending_url: '{PENDINGURL}',
                    exception_url: '{EXCEPTIONURL}',
                    cancel_url: '{CANCELURL}',
                    notify_url: '{NOTIFYURL}',
                    http_accept: '{HTTPACCEPT}',
                    http_user_agent: '{HTTPUSERAGENT}',
                    device_fingerprint: '{DEVICEFINGERPRINT}',
                    language: '{LANGUAGE}',
                    email: '{EMAIL}',
                    phone: '{PHONE}',
                    msisdn: '{MSISDN}',
                    birthdate: '{BIRTHDATE}',
                    gender: '{GENDER}',
                    firstname: '{FIRSTNAME}',
                    lastname: '{LASTNAME}',
                    recipientinfo: '{RECIPIENTINFO}',
                    house_extension: '{HOUSE_EXTENSION}',
                    house_number: '{HOUSE_NUMBER}',
                    streetaddress: '{STREETADDRESS}',
                    streetaddress2: '{STREETADDRESS2}',
                    city: '{CITY}',
                    state: '{STATE}',
                    zipcode: '{ZIPCODE}',
                    country: '{COUNTRY}',
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
                    shipto_gender: '{SHIPTO_GENDER}',
                    delivery_date: '{DELIVERY_DATE}',
                    delivery_method: '{DELIVERY_METHOD}',
                    previous_auth_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            transaction_reference: '{TRANSACTION_REFERENCE}'
                        })
                    ),
                    merchant_risk_statement: expect.jsonToBeEqual(
                        JSON.stringify({
                            email_delivery_address: '{EMAIL_DELIVERY_ADDRESS}',
                            delivery_time_frame: '{DELIVERY_TIME_FRAME}',
                            purchase_indicator: '{PURCHASE_INDICATOR}',
                            pre_order_date: '{PRE_ORDER_DATE}',
                            reorder_indicator: '{REORDER_INDICATOR}',
                            shipping_indicator: '{SHIPPING_INDICATOR}',
                            gift_card: { amount: 99.9, count: 5, currency: 'EUR' }
                        })
                    ),
                    account_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            customer: { account_change: '20230101', opening_account_date: '20220202', password_change: '20221010' },
                            purchase: { card_stored_24h: '5', count: '6', payment_attempts_1y: '64', payment_attempts_24h: '3' },
                            payment: { enrollment_date: '2021010' },
                            shipping: {
                                name_indicator: NameIndicator.IDENTICAL,
                                shipping_used_date: '20230202',
                                suspicious_activity: SuspiciousActivity.SUSPICIOUS_ACTIVITY
                            }
                        })
                    ),
                    device_channel: '{DEVICECHANNEL}',
                    recurring_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            expiration_date: '{EXPIRATION_DATE}',
                            frequency: '{FREQUENCY}'
                        })
                    ),
                    request_id: '{REQUESTID}',
                    payment_product: '{PAYMENTPRODUCT}',
                    eci: ECI.SECURE_ECOMMERCE,
                    cardtoken: '{CARD_TOKEN}',
                    authentication_indicator: AuthenticationIndicator.AVAILABLE,
                    browser_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            ipaddr: '{IPADDR}',
                            http_accept: '{HTTP_ACCEPT}',
                            http_user_agent: '{HTTP_USER_AGENT}',
                            java_enabled: '{JAVA_ENABLED}',
                            javascript_enabled: '{JAVASCRIPT_ENABLED}',
                            language: '{LANGUAGE}',
                            color_depth: '{COLOR_DEPTH}',
                            screen_height: '{SCREEN_HEIGHT}',
                            screen_width: '{SCREEN_WIDTH}',
                            timezone: '{TIMEZONE}'
                        })
                    ),
                    sales_channel: '{SALESCHANNEL}',
                    provider_data: '{PROVIDERDATA}'
                }
            });
            expect(TransactionMapper).toHaveBeenCalledWith('{RESPONSE_BODY}');
            expect(mockPIDataClient.getOrderData).toHaveBeenCalledWith(
                '{DATA_ID}',
                { ...request, softDescriptor: null, oneClick: null },
                '{MAPPED_OBJECT}'
            );
            expect(mockPIDataClient.sendData).toHaveBeenCalledWith('{ORDER_DATA}');
        });

        it('requests new order with custom data id', async () => {
            let hiPay = new HiPay({
                apiEndpoint: '{API_ENDPOINT}'
            });

            let request = new OrderRequest({
                customData: '{CUSTOM_DATA}',
                source: {
                    source: '{SOURCE}',
                    brand: '{BRAND}',
                    brand_version: '{BRAND_VERSION}'
                },
                basket: '{BASKET}',
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
                customerBillingInfo: {
                    email: '{EMAIL}',
                    phone: '{PHONE}',
                    msisdn: '{MSISDN}',
                    birthdate: '{BIRTHDATE}',
                    gender: '{GENDER}',
                    firstname: '{FIRSTNAME}',
                    lastname: '{LASTNAME}',
                    recipientinfo: '{RECIPIENTINFO}',
                    house_extension: '{HOUSE_EXTENSION}',
                    house_number: '{HOUSE_NUMBER}',
                    streetaddress: '{STREETADDRESS}',
                    streetaddress2: '{STREETADDRESS2}',
                    city: '{CITY}',
                    state: '{STATE}',
                    zipcode: '{ZIPCODE}',
                    country: '{COUNTRY}'
                },
                customerShippingInfo: {
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
                },
                deliveryInformation: {
                    delivery_date: '{DELIVERY_DATE}',
                    delivery_method: '{DELIVERY_METHOD}'
                },
                previousAuthInfo: {
                    transaction_reference: '{TRANSACTION_REFERENCE}'
                },
                merchantRiskStatement: {
                    email_delivery_address: '{EMAIL_DELIVERY_ADDRESS}',
                    delivery_time_frame: '{DELIVERY_TIME_FRAME}',
                    purchase_indicator: '{PURCHASE_INDICATOR}',
                    pre_order_date: '{PRE_ORDER_DATE}',
                    reorder_indicator: '{REORDER_INDICATOR}',
                    shipping_indicator: '{SHIPPING_INDICATOR}',
                    gift_card: { amount: 99.9, count: 5, currency: 'EUR' }
                },
                accountInfo: {
                    customer: { account_change: '20230101', opening_account_date: '20220202', password_change: '20221010' },
                    purchase: { card_stored_24h: '5', count: '6', payment_attempts_1y: '64', payment_attempts_24h: '3' },
                    payment: { enrollment_date: '2021010' },
                    shipping: {
                        name_indicator: NameIndicator.IDENTICAL,
                        shipping_used_date: '20230202',
                        suspicious_activity: SuspiciousActivity.SUSPICIOUS_ACTIVITY
                    }
                },
                deviceChannel: '{DEVICECHANNEL}',
                recurringInfo: {
                    expiration_date: '{EXPIRATION_DATE}',
                    frequency: '{FREQUENCY}'
                },
                requestId: '{REQUESTID}',
                paymentProduct: '{PAYMENTPRODUCT}',
                paymentMethod: new CardTokenPaymentMethod({
                    eci: ECI.SECURE_ECOMMERCE,
                    cardtoken: '{CARD_TOKEN}',
                    authentication_indicator: AuthenticationIndicator.AVAILABLE
                }),
                browserInfo: {
                    ipaddr: '{IPADDR}',
                    http_accept: '{HTTP_ACCEPT}',
                    http_user_agent: '{HTTP_USER_AGENT}',
                    java_enabled: '{JAVA_ENABLED}',
                    javascript_enabled: '{JAVASCRIPT_ENABLED}',
                    language: '{LANGUAGE}',
                    color_depth: '{COLOR_DEPTH}',
                    screen_height: '{SCREEN_HEIGHT}',
                    screen_width: '{SCREEN_WIDTH}',
                    timezone: '{TIMEZONE}'
                },
                salesChannel: '{SALESCHANNEL}',
                providerData: '{PROVIDERDATA}'
            });

            mockPIDataClient.getDataId.mockReturnValue('{DATA_ID}');
            mockHttpClient.request.mockResolvedValue({
                body: '{RESPONSE_BODY}'
            });
            mockPIDataClient.getOrderData.mockReturnValue('{ORDER_DATA}');

            expect(await hiPay.requestNewOrder(request, { dataId: '{RAW_DATA_ID}' })).toEqual('{MAPPED_OBJECT}');
            expect(PIDataClient).toHaveBeenCalledWith(mockHttpClient);
            expect(mockPIDataClient.getDataId).toHaveBeenCalledWith('{RAW_DATA_ID}');
            expect(mockHttpClient.request).toHaveBeenCalledWith(HiPay.METHOD_NEW_ORDER, HiPay.ENDPOINT_NEW_ORDER, {
                baseUrl: '{API_ENDPOINT}',
                body: {
                    custom_data: '{CUSTOM_DATA}',
                    source: JSON.stringify({
                        source: '{SOURCE}',
                        brand: '{BRAND}',
                        brand_version: '{BRAND_VERSION}'
                    }),
                    basket: '{BASKET}',
                    orderid: '{ORDERID}',
                    operation: '{OPERATION}',
                    description: '{DESCRIPTION}',
                    long_description: '{LONGDESCRIPTION}',
                    currency: '{CURRENCY}',
                    amount: '{AMOUNT}',
                    shipping: '{SHIPPING}',
                    tax: '{TAX}',
                    tax_rate: '{TAXRATE}',
                    cid: '{CID}',
                    ipaddr: '{IPADDR}',
                    accept_url: '{ACCEPTURL}',
                    decline_url: '{DECLINEURL}',
                    pending_url: '{PENDINGURL}',
                    exception_url: '{EXCEPTIONURL}',
                    cancel_url: '{CANCELURL}',
                    notify_url: '{NOTIFYURL}',
                    http_accept: '{HTTPACCEPT}',
                    http_user_agent: '{HTTPUSERAGENT}',
                    device_fingerprint: '{DEVICEFINGERPRINT}',
                    language: '{LANGUAGE}',
                    email: '{EMAIL}',
                    phone: '{PHONE}',
                    msisdn: '{MSISDN}',
                    birthdate: '{BIRTHDATE}',
                    gender: '{GENDER}',
                    firstname: '{FIRSTNAME}',
                    lastname: '{LASTNAME}',
                    recipientinfo: '{RECIPIENTINFO}',
                    house_extension: '{HOUSE_EXTENSION}',
                    house_number: '{HOUSE_NUMBER}',
                    streetaddress: '{STREETADDRESS}',
                    streetaddress2: '{STREETADDRESS2}',
                    city: '{CITY}',
                    state: '{STATE}',
                    zipcode: '{ZIPCODE}',
                    country: '{COUNTRY}',
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
                    shipto_gender: '{SHIPTO_GENDER}',
                    delivery_date: '{DELIVERY_DATE}',
                    delivery_method: '{DELIVERY_METHOD}',
                    previous_auth_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            transaction_reference: '{TRANSACTION_REFERENCE}'
                        })
                    ),
                    merchant_risk_statement: expect.jsonToBeEqual(
                        JSON.stringify({
                            email_delivery_address: '{EMAIL_DELIVERY_ADDRESS}',
                            delivery_time_frame: '{DELIVERY_TIME_FRAME}',
                            purchase_indicator: '{PURCHASE_INDICATOR}',
                            pre_order_date: '{PRE_ORDER_DATE}',
                            reorder_indicator: '{REORDER_INDICATOR}',
                            shipping_indicator: '{SHIPPING_INDICATOR}',
                            gift_card: { amount: 99.9, count: 5, currency: 'EUR' }
                        })
                    ),
                    account_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            customer: { account_change: '20230101', opening_account_date: '20220202', password_change: '20221010' },
                            purchase: { card_stored_24h: '5', count: '6', payment_attempts_1y: '64', payment_attempts_24h: '3' },
                            payment: { enrollment_date: '2021010' },
                            shipping: {
                                name_indicator: NameIndicator.IDENTICAL,
                                shipping_used_date: '20230202',
                                suspicious_activity: SuspiciousActivity.SUSPICIOUS_ACTIVITY
                            }
                        })
                    ),
                    device_channel: '{DEVICECHANNEL}',
                    recurring_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            expiration_date: '{EXPIRATION_DATE}',
                            frequency: '{FREQUENCY}'
                        })
                    ),
                    request_id: '{REQUESTID}',
                    payment_product: '{PAYMENTPRODUCT}',
                    eci: ECI.SECURE_ECOMMERCE,
                    cardtoken: '{CARD_TOKEN}',
                    authentication_indicator: AuthenticationIndicator.AVAILABLE,
                    browser_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            ipaddr: '{IPADDR}',
                            http_accept: '{HTTP_ACCEPT}',
                            http_user_agent: '{HTTP_USER_AGENT}',
                            java_enabled: '{JAVA_ENABLED}',
                            javascript_enabled: '{JAVASCRIPT_ENABLED}',
                            language: '{LANGUAGE}',
                            color_depth: '{COLOR_DEPTH}',
                            screen_height: '{SCREEN_HEIGHT}',
                            screen_width: '{SCREEN_WIDTH}',
                            timezone: '{TIMEZONE}'
                        })
                    ),
                    sales_channel: '{SALESCHANNEL}',
                    provider_data: '{PROVIDERDATA}'
                }
            });
            expect(TransactionMapper).toHaveBeenCalledWith('{RESPONSE_BODY}');
            expect(mockPIDataClient.getOrderData).toHaveBeenCalledWith('{DATA_ID}', request, '{MAPPED_OBJECT}');
            expect(mockPIDataClient.sendData).toHaveBeenCalledWith('{ORDER_DATA}');
        });

        it('requests new order with undefined values', async () => {
            let hiPay = new HiPay({
                apiEndpoint: '{API_ENDPOINT}'
            });

            let request = new OrderRequest({
                customData: '{CUSTOM_DATA}',
                source: {
                    source: '{SOURCE}',
                    brand: '{BRAND}',
                    brand_version: '{BRAND_VERSION}'
                },
                basket: '{BASKET}',
                orderid: '{ORDERID}',
                operation: '{OPERATION}',
                description: '{DESCRIPTION}',
                longDescription: undefined,
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                shipping: '{SHIPPING}',
                tax: '{TAX}',
                taxRate: '{TAXRATE}',
                cid: null,
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
                customerBillingInfo: {
                    email: '{EMAIL}',
                    phone: '{PHONE}',
                    msisdn: '{MSISDN}',
                    birthdate: '{BIRTHDATE}',
                    gender: '{GENDER}',
                    firstname: '{FIRSTNAME}',
                    lastname: '{LASTNAME}',
                    recipientinfo: '{RECIPIENTINFO}',
                    house_extension: '{HOUSE_EXTENSION}',
                    house_number: '{HOUSE_NUMBER}',
                    streetaddress: '{STREETADDRESS}',
                    streetaddress2: '{STREETADDRESS2}',
                    city: '{CITY}',
                    state: '{STATE}',
                    zipcode: '{ZIPCODE}',
                    country: '{COUNTRY}'
                },
                customerShippingInfo: {
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
                },
                deliveryInformation: {
                    delivery_date: '{DELIVERY_DATE}',
                    delivery_method: '{DELIVERY_METHOD}'
                },
                previousAuthInfo: {
                    transaction_reference: null
                },
                merchantRiskStatement: {
                    email_delivery_address: '{EMAIL_DELIVERY_ADDRESS}',
                    delivery_time_frame: '{DELIVERY_TIME_FRAME}',
                    purchase_indicator: '{PURCHASE_INDICATOR}',
                    pre_order_date: '{PRE_ORDER_DATE}',
                    reorder_indicator: '{REORDER_INDICATOR}',
                    shipping_indicator: '{SHIPPING_INDICATOR}',
                    gift_card: { amount: 99.9, count: 5, currency: 'EUR' }
                },
                accountInfo: {
                    customer: { account_change: '20230101', opening_account_date: '20220202', password_change: '20221010' },
                    purchase: { card_stored_24h: '5', count: '6', payment_attempts_1y: '64', payment_attempts_24h: '3' },
                    payment: { enrollment_date: '2021010' },
                    shipping: {
                        name_indicator: NameIndicator.IDENTICAL,
                        shipping_used_date: '20230202',
                        suspicious_activity: SuspiciousActivity.SUSPICIOUS_ACTIVITY
                    }
                },
                deviceChannel: '{DEVICECHANNEL}',
                recurringInfo: {
                    expiration_date: '{EXPIRATION_DATE}',
                    frequency: '{FREQUENCY}'
                },
                requestId: '{REQUESTID}',
                paymentProduct: '{PAYMENTPRODUCT}',
                paymentMethod: new CardTokenPaymentMethod({
                    eci: ECI.SECURE_ECOMMERCE,
                    cardtoken: '{CARD_TOKEN}',
                    authentication_indicator: AuthenticationIndicator.AVAILABLE
                }),
                browserInfo: {
                    ipaddr: '{IPADDR}',
                    http_accept: '{HTTP_ACCEPT}',
                    http_user_agent: '{HTTP_USER_AGENT}',
                    java_enabled: '{JAVA_ENABLED}',
                    javascript_enabled: '{JAVASCRIPT_ENABLED}',
                    language: '{LANGUAGE}',
                    color_depth: '{COLOR_DEPTH}',
                    screen_height: '{SCREEN_HEIGHT}',
                    screen_width: '{SCREEN_WIDTH}',
                    timezone: '{TIMEZONE}'
                },
                salesChannel: '{SALESCHANNEL}',
                providerData: '{PROVIDERDATA}'
            });

            mockPIDataClient.getDataId.mockReturnValue('{DATA_ID}');
            mockHttpClient.request.mockResolvedValue({
                body: '{RESPONSE_BODY}'
            });
            mockPIDataClient.getOrderData.mockReturnValue('{ORDER_DATA}');

            expect(await hiPay.requestNewOrder(request)).toEqual('{MAPPED_OBJECT}');
            expect(PIDataClient).toHaveBeenCalledWith(mockHttpClient);
            expect(mockPIDataClient.getDataId).toHaveBeenCalledWith(null);
            expect(mockHttpClient.request).toHaveBeenCalledWith(HiPay.METHOD_NEW_ORDER, HiPay.ENDPOINT_NEW_ORDER, {
                baseUrl: '{API_ENDPOINT}',
                body: {
                    custom_data: '{CUSTOM_DATA}',
                    source: JSON.stringify({
                        source: '{SOURCE}',
                        brand: '{BRAND}',
                        brand_version: '{BRAND_VERSION}'
                    }),
                    basket: '{BASKET}',
                    orderid: '{ORDERID}',
                    operation: '{OPERATION}',
                    description: '{DESCRIPTION}',
                    currency: '{CURRENCY}',
                    amount: '{AMOUNT}',
                    shipping: '{SHIPPING}',
                    tax: '{TAX}',
                    tax_rate: '{TAXRATE}',
                    ipaddr: '{IPADDR}',
                    accept_url: '{ACCEPTURL}',
                    decline_url: '{DECLINEURL}',
                    pending_url: '{PENDINGURL}',
                    exception_url: '{EXCEPTIONURL}',
                    cancel_url: '{CANCELURL}',
                    notify_url: '{NOTIFYURL}',
                    http_accept: '{HTTPACCEPT}',
                    http_user_agent: '{HTTPUSERAGENT}',
                    device_fingerprint: '{DEVICEFINGERPRINT}',
                    language: '{LANGUAGE}',
                    email: '{EMAIL}',
                    phone: '{PHONE}',
                    msisdn: '{MSISDN}',
                    birthdate: '{BIRTHDATE}',
                    gender: '{GENDER}',
                    firstname: '{FIRSTNAME}',
                    lastname: '{LASTNAME}',
                    recipientinfo: '{RECIPIENTINFO}',
                    house_extension: '{HOUSE_EXTENSION}',
                    house_number: '{HOUSE_NUMBER}',
                    streetaddress: '{STREETADDRESS}',
                    streetaddress2: '{STREETADDRESS2}',
                    city: '{CITY}',
                    state: '{STATE}',
                    zipcode: '{ZIPCODE}',
                    country: '{COUNTRY}',
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
                    shipto_gender: '{SHIPTO_GENDER}',
                    delivery_date: '{DELIVERY_DATE}',
                    delivery_method: '{DELIVERY_METHOD}',
                    merchant_risk_statement: expect.jsonToBeEqual(
                        JSON.stringify({
                            email_delivery_address: '{EMAIL_DELIVERY_ADDRESS}',
                            delivery_time_frame: '{DELIVERY_TIME_FRAME}',
                            purchase_indicator: '{PURCHASE_INDICATOR}',
                            pre_order_date: '{PRE_ORDER_DATE}',
                            reorder_indicator: '{REORDER_INDICATOR}',
                            shipping_indicator: '{SHIPPING_INDICATOR}',
                            gift_card: { amount: 99.9, count: 5, currency: 'EUR' }
                        })
                    ),
                    account_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            customer: { account_change: '20230101', opening_account_date: '20220202', password_change: '20221010' },
                            purchase: { card_stored_24h: '5', count: '6', payment_attempts_1y: '64', payment_attempts_24h: '3' },
                            payment: { enrollment_date: '2021010' },
                            shipping: {
                                name_indicator: NameIndicator.IDENTICAL,
                                shipping_used_date: '20230202',
                                suspicious_activity: SuspiciousActivity.SUSPICIOUS_ACTIVITY
                            }
                        })
                    ),
                    device_channel: '{DEVICECHANNEL}',
                    recurring_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            expiration_date: '{EXPIRATION_DATE}',
                            frequency: '{FREQUENCY}'
                        })
                    ),
                    request_id: '{REQUESTID}',
                    payment_product: '{PAYMENTPRODUCT}',
                    eci: ECI.SECURE_ECOMMERCE,
                    cardtoken: '{CARD_TOKEN}',
                    authentication_indicator: AuthenticationIndicator.AVAILABLE,
                    browser_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            ipaddr: '{IPADDR}',
                            http_accept: '{HTTP_ACCEPT}',
                            http_user_agent: '{HTTP_USER_AGENT}',
                            java_enabled: '{JAVA_ENABLED}',
                            javascript_enabled: '{JAVASCRIPT_ENABLED}',
                            language: '{LANGUAGE}',
                            color_depth: '{COLOR_DEPTH}',
                            screen_height: '{SCREEN_HEIGHT}',
                            screen_width: '{SCREEN_WIDTH}',
                            timezone: '{TIMEZONE}'
                        })
                    ),
                    sales_channel: '{SALESCHANNEL}',
                    provider_data: '{PROVIDERDATA}'
                }
            });
            expect(TransactionMapper).toHaveBeenCalledWith('{RESPONSE_BODY}');
            expect(mockPIDataClient.getOrderData).toHaveBeenCalledWith('{DATA_ID}', request, '{MAPPED_OBJECT}');
            expect(mockPIDataClient.sendData).toHaveBeenCalledWith('{ORDER_DATA}');
        });

        it('requests new order sending no data if data-id could not be generated', async () => {
            let hiPay = new HiPay({
                apiEndpoint: '{API_ENDPOINT}'
            });

            let request = new OrderRequest({
                customData: '{CUSTOM_DATA}',
                source: {
                    source: '{SOURCE}',
                    brand: '{BRAND}',
                    brand_version: '{BRAND_VERSION}'
                },
                basket: '{BASKET}',
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
                customerBillingInfo: {
                    email: '{EMAIL}',
                    phone: '{PHONE}',
                    msisdn: '{MSISDN}',
                    birthdate: '{BIRTHDATE}',
                    gender: '{GENDER}',
                    firstname: '{FIRSTNAME}',
                    lastname: '{LASTNAME}',
                    recipientinfo: '{RECIPIENTINFO}',
                    house_extension: '{HOUSE_EXTENSION}',
                    house_number: '{HOUSE_NUMBER}',
                    streetaddress: '{STREETADDRESS}',
                    streetaddress2: '{STREETADDRESS2}',
                    city: '{CITY}',
                    state: '{STATE}',
                    zipcode: '{ZIPCODE}',
                    country: '{COUNTRY}'
                },
                customerShippingInfo: {
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
                },
                deliveryInformation: {
                    delivery_date: '{DELIVERY_DATE}',
                    delivery_method: '{DELIVERY_METHOD}'
                },
                previousAuthInfo: {
                    transaction_reference: '{TRANSACTION_REFERENCE}'
                },
                merchantRiskStatement: {
                    email_delivery_address: '{EMAIL_DELIVERY_ADDRESS}',
                    delivery_time_frame: '{DELIVERY_TIME_FRAME}',
                    purchase_indicator: '{PURCHASE_INDICATOR}',
                    pre_order_date: '{PRE_ORDER_DATE}',
                    reorder_indicator: '{REORDER_INDICATOR}',
                    shipping_indicator: '{SHIPPING_INDICATOR}',
                    gift_card: { amount: 99.9, count: 5, currency: 'EUR' }
                },
                accountInfo: {
                    customer: { account_change: '20230101', opening_account_date: '20220202', password_change: '20221010' },
                    purchase: { card_stored_24h: '5', count: '6', payment_attempts_1y: '64', payment_attempts_24h: '3' },
                    payment: { enrollment_date: '2021010' },
                    shipping: {
                        name_indicator: NameIndicator.IDENTICAL,
                        shipping_used_date: '20230202',
                        suspicious_activity: SuspiciousActivity.SUSPICIOUS_ACTIVITY
                    }
                },
                deviceChannel: '{DEVICECHANNEL}',
                recurringInfo: {
                    expiration_date: '{EXPIRATION_DATE}',
                    frequency: '{FREQUENCY}'
                },
                requestId: '{REQUESTID}',
                paymentProduct: '{PAYMENTPRODUCT}',
                paymentMethod: new CardTokenPaymentMethod({
                    eci: ECI.SECURE_ECOMMERCE,
                    cardtoken: '{CARD_TOKEN}',
                    authentication_indicator: AuthenticationIndicator.AVAILABLE
                }),
                browserInfo: {
                    ipaddr: '{IPADDR}',
                    http_accept: '{HTTP_ACCEPT}',
                    http_user_agent: '{HTTP_USER_AGENT}',
                    java_enabled: '{JAVA_ENABLED}',
                    javascript_enabled: '{JAVASCRIPT_ENABLED}',
                    language: '{LANGUAGE}',
                    color_depth: '{COLOR_DEPTH}',
                    screen_height: '{SCREEN_HEIGHT}',
                    screen_width: '{SCREEN_WIDTH}',
                    timezone: '{TIMEZONE}'
                },
                salesChannel: '{SALESCHANNEL}',
                providerData: '{PROVIDERDATA}'
            });

            mockPIDataClient.getDataId.mockReturnValue(null);
            mockHttpClient.request.mockResolvedValue({
                body: '{RESPONSE_BODY}'
            });
            mockPIDataClient.getOrderData.mockReturnValue('{ORDER_DATA}');

            expect(await hiPay.requestNewOrder(request)).toEqual('{MAPPED_OBJECT}');
            expect(PIDataClient).toHaveBeenCalledWith(mockHttpClient);
            expect(mockPIDataClient.getDataId).toHaveBeenCalledWith(null);
            expect(mockHttpClient.request).toHaveBeenCalledWith(HiPay.METHOD_NEW_ORDER, HiPay.ENDPOINT_NEW_ORDER, {
                baseUrl: '{API_ENDPOINT}',
                body: {
                    custom_data: '{CUSTOM_DATA}',
                    source: JSON.stringify({
                        source: '{SOURCE}',
                        brand: '{BRAND}',
                        brand_version: '{BRAND_VERSION}'
                    }),
                    basket: '{BASKET}',
                    orderid: '{ORDERID}',
                    operation: '{OPERATION}',
                    description: '{DESCRIPTION}',
                    long_description: '{LONGDESCRIPTION}',
                    currency: '{CURRENCY}',
                    amount: '{AMOUNT}',
                    shipping: '{SHIPPING}',
                    tax: '{TAX}',
                    tax_rate: '{TAXRATE}',
                    cid: '{CID}',
                    ipaddr: '{IPADDR}',
                    accept_url: '{ACCEPTURL}',
                    decline_url: '{DECLINEURL}',
                    pending_url: '{PENDINGURL}',
                    exception_url: '{EXCEPTIONURL}',
                    cancel_url: '{CANCELURL}',
                    notify_url: '{NOTIFYURL}',
                    http_accept: '{HTTPACCEPT}',
                    http_user_agent: '{HTTPUSERAGENT}',
                    device_fingerprint: '{DEVICEFINGERPRINT}',
                    language: '{LANGUAGE}',
                    email: '{EMAIL}',
                    phone: '{PHONE}',
                    msisdn: '{MSISDN}',
                    birthdate: '{BIRTHDATE}',
                    gender: '{GENDER}',
                    firstname: '{FIRSTNAME}',
                    lastname: '{LASTNAME}',
                    recipientinfo: '{RECIPIENTINFO}',
                    house_extension: '{HOUSE_EXTENSION}',
                    house_number: '{HOUSE_NUMBER}',
                    streetaddress: '{STREETADDRESS}',
                    streetaddress2: '{STREETADDRESS2}',
                    city: '{CITY}',
                    state: '{STATE}',
                    zipcode: '{ZIPCODE}',
                    country: '{COUNTRY}',
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
                    shipto_gender: '{SHIPTO_GENDER}',
                    delivery_date: '{DELIVERY_DATE}',
                    delivery_method: '{DELIVERY_METHOD}',
                    previous_auth_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            transaction_reference: '{TRANSACTION_REFERENCE}'
                        })
                    ),
                    merchant_risk_statement: expect.jsonToBeEqual(
                        JSON.stringify({
                            email_delivery_address: '{EMAIL_DELIVERY_ADDRESS}',
                            delivery_time_frame: '{DELIVERY_TIME_FRAME}',
                            purchase_indicator: '{PURCHASE_INDICATOR}',
                            pre_order_date: '{PRE_ORDER_DATE}',
                            reorder_indicator: '{REORDER_INDICATOR}',
                            shipping_indicator: '{SHIPPING_INDICATOR}',
                            gift_card: { amount: 99.9, count: 5, currency: 'EUR' }
                        })
                    ),
                    account_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            customer: { account_change: '20230101', opening_account_date: '20220202', password_change: '20221010' },
                            purchase: { card_stored_24h: '5', count: '6', payment_attempts_1y: '64', payment_attempts_24h: '3' },
                            payment: { enrollment_date: '2021010' },
                            shipping: {
                                name_indicator: NameIndicator.IDENTICAL,
                                shipping_used_date: '20230202',
                                suspicious_activity: SuspiciousActivity.SUSPICIOUS_ACTIVITY
                            }
                        })
                    ),
                    device_channel: '{DEVICECHANNEL}',
                    recurring_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            expiration_date: '{EXPIRATION_DATE}',
                            frequency: '{FREQUENCY}'
                        })
                    ),
                    request_id: '{REQUESTID}',
                    payment_product: '{PAYMENTPRODUCT}',
                    eci: ECI.SECURE_ECOMMERCE,
                    cardtoken: '{CARD_TOKEN}',
                    authentication_indicator: AuthenticationIndicator.AVAILABLE,
                    browser_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            ipaddr: '{IPADDR}',
                            http_accept: '{HTTP_ACCEPT}',
                            http_user_agent: '{HTTP_USER_AGENT}',
                            java_enabled: '{JAVA_ENABLED}',
                            javascript_enabled: '{JAVASCRIPT_ENABLED}',
                            language: '{LANGUAGE}',
                            color_depth: '{COLOR_DEPTH}',
                            screen_height: '{SCREEN_HEIGHT}',
                            screen_width: '{SCREEN_WIDTH}',
                            timezone: '{TIMEZONE}'
                        })
                    ),
                    sales_channel: '{SALESCHANNEL}',
                    provider_data: '{PROVIDERDATA}'
                }
            });
            expect(TransactionMapper).toHaveBeenCalledWith('{RESPONSE_BODY}');
            expect(mockPIDataClient.getOrderData).not.toHaveBeenCalled();
            expect(mockPIDataClient.sendData).not.toHaveBeenCalled();
        });
    });

    describe('requests new hosted payment page', () => {
        it('requests new hosted payment page', async () => {
            let hiPay = new HiPay({});

            let request = new HostedPaymentPageRequest({
                customData: '{CUSTOM_DATA}',
                source: {
                    source: '{SOURCE}',
                    brand: '{BRAND}',
                    brand_version: '{BRAND_VERSION}'
                },
                basket: '{BASKET}',
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
                customerBillingInfo: {
                    email: '{EMAIL}',
                    phone: '{PHONE}',
                    msisdn: '{MSISDN}',
                    birthdate: '{BIRTHDATE}',
                    gender: '{GENDER}',
                    firstname: '{FIRSTNAME}',
                    lastname: '{LASTNAME}',
                    recipientinfo: '{RECIPIENTINFO}',
                    house_extension: '{HOUSE_EXTENSION}',
                    house_number: '{HOUSE_NUMBER}',
                    streetaddress: '{STREETADDRESS}',
                    streetaddress2: '{STREETADDRESS2}',
                    city: '{CITY}',
                    state: '{STATE}',
                    zipcode: '{ZIPCODE}',
                    country: '{COUNTRY}'
                },
                customerShippingInfo: {
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
                },
                deliveryInformation: {
                    delivery_date: '{DELIVERY_DATE}',
                    delivery_method: '{DELIVERY_METHOD}'
                },
                previousAuthInfo: {
                    transaction_reference: '{TRANSACTION_REFERENCE}'
                },
                merchantRiskStatement: {
                    email_delivery_address: '{EMAIL_DELIVERY_ADDRESS}',
                    delivery_time_frame: '{DELIVERY_TIME_FRAME}',
                    purchase_indicator: '{PURCHASE_INDICATOR}',
                    pre_order_date: '{PRE_ORDER_DATE}',
                    reorder_indicator: '{REORDER_INDICATOR}',
                    shipping_indicator: '{SHIPPING_INDICATOR}',
                    gift_card: { amount: 99.9, count: 5, currency: 'EUR' }
                },
                accountInfo: {
                    customer: { account_change: '20230101', opening_account_date: '20220202', password_change: '20221010' },
                    purchase: { card_stored_24h: '5', count: '6', payment_attempts_1y: '64', payment_attempts_24h: '3' },
                    payment: { enrollment_date: '2021010' },
                    shipping: {
                        name_indicator: NameIndicator.IDENTICAL,
                        shipping_used_date: '20230202',
                        suspicious_activity: SuspiciousActivity.SUSPICIOUS_ACTIVITY
                    }
                },
                deviceChannel: '{DEVICECHANNEL}',
                recurringInfo: {
                    expiration_date: '{EXPIRATION_DATE}',
                    frequency: '{FREQUENCY}'
                },
                requestId: '{REQUESTID}',
                paymentProductList: '{PAYMENTPRODUCTLIST}',
                paymentProductCategoryList: '{PAYMENTPRODUCTCATEGORYLIST}',
                template: '{TEMPLATE}',
                timeLimitToPay: '{TIMELIMITTOPAY}',
                multiUse: '{MULTIUSE}',
                merchantDisplayName: '{MERCHANTDISPLAYNAME}',
                css: '{CSS}',
                displaySelector: '{DISPLAYSELECTOR}',
                eci: '{ECI}',
                authenticationIndicator: '{AUTHENTICATIONINDICATOR}',
                expirationLimit: '{EXPIRATIONLIMIT}',
                orderCategoryCode: '{ORDERCATEGORYCODE}',
                carrierDescription: '{CARRIERDESCRIPTION}',
                salesChannel: '{SALESCHANNEL}',
                softDescriptor: '{SOFTDESCRIPTOR}',
                themeCode: '{THEMECODE}',
                displayCancelButton: '{DISPLAYCANCELBUTTON}'
            });

            mockPIDataClient.getDataId.mockReturnValue('{DATA_ID}');
            mockHttpClient.request.mockResolvedValue({
                body: '{RESPONSE_BODY}'
            });
            mockPIDataClient.getOrderData.mockReturnValue('{ORDER_DATA}');

            expect(await hiPay.requestHostedPaymentPage(request)).toEqual('{MAPPED_OBJECT}');
            expect(PIDataClient).toHaveBeenCalledWith(mockHttpClient);
            expect(mockPIDataClient.getDataId).toHaveBeenCalledWith(null);
            expect(mockHttpClient.request).toHaveBeenCalledWith(HiPay.METHOD_HOSTED_PAYMENT_PAGE, HiPay.ENDPOINT_HOSTED_PAYMENT_PAGE_V2, {
                baseUrl: '{HPAYMENT_API_ENDPOINT}',
                body: {
                    custom_data: '{CUSTOM_DATA}',
                    source: JSON.stringify({
                        source: '{SOURCE}',
                        brand: '{BRAND}',
                        brand_version: '{BRAND_VERSION}'
                    }),
                    basket: '{BASKET}',
                    orderid: '{ORDERID}',
                    operation: '{OPERATION}',
                    description: '{DESCRIPTION}',
                    long_description: '{LONGDESCRIPTION}',
                    currency: '{CURRENCY}',
                    amount: '{AMOUNT}',
                    shipping: '{SHIPPING}',
                    tax: '{TAX}',
                    tax_rate: '{TAXRATE}',
                    cid: '{CID}',
                    ipaddr: '{IPADDR}',
                    accept_url: '{ACCEPTURL}',
                    decline_url: '{DECLINEURL}',
                    pending_url: '{PENDINGURL}',
                    exception_url: '{EXCEPTIONURL}',
                    cancel_url: '{CANCELURL}',
                    notify_url: '{NOTIFYURL}',
                    http_accept: '{HTTPACCEPT}',
                    http_user_agent: '{HTTPUSERAGENT}',
                    device_fingerprint: '{DEVICEFINGERPRINT}',
                    language: '{LANGUAGE}',
                    email: '{EMAIL}',
                    phone: '{PHONE}',
                    msisdn: '{MSISDN}',
                    birthdate: '{BIRTHDATE}',
                    gender: '{GENDER}',
                    firstname: '{FIRSTNAME}',
                    lastname: '{LASTNAME}',
                    recipientinfo: '{RECIPIENTINFO}',
                    house_extension: '{HOUSE_EXTENSION}',
                    house_number: '{HOUSE_NUMBER}',
                    streetaddress: '{STREETADDRESS}',
                    streetaddress2: '{STREETADDRESS2}',
                    city: '{CITY}',
                    state: '{STATE}',
                    zipcode: '{ZIPCODE}',
                    country: '{COUNTRY}',
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
                    shipto_gender: '{SHIPTO_GENDER}',
                    delivery_date: '{DELIVERY_DATE}',
                    delivery_method: '{DELIVERY_METHOD}',
                    previous_auth_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            transaction_reference: '{TRANSACTION_REFERENCE}'
                        })
                    ),
                    merchant_risk_statement: expect.jsonToBeEqual(
                        JSON.stringify({
                            email_delivery_address: '{EMAIL_DELIVERY_ADDRESS}',
                            delivery_time_frame: '{DELIVERY_TIME_FRAME}',
                            purchase_indicator: '{PURCHASE_INDICATOR}',
                            pre_order_date: '{PRE_ORDER_DATE}',
                            reorder_indicator: '{REORDER_INDICATOR}',
                            shipping_indicator: '{SHIPPING_INDICATOR}',
                            gift_card: { amount: 99.9, count: 5, currency: 'EUR' }
                        })
                    ),
                    account_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            customer: { account_change: '20230101', opening_account_date: '20220202', password_change: '20221010' },
                            purchase: { card_stored_24h: '5', count: '6', payment_attempts_1y: '64', payment_attempts_24h: '3' },
                            payment: { enrollment_date: '2021010' },
                            shipping: {
                                name_indicator: NameIndicator.IDENTICAL,
                                shipping_used_date: '20230202',
                                suspicious_activity: SuspiciousActivity.SUSPICIOUS_ACTIVITY
                            }
                        })
                    ),
                    device_channel: '{DEVICECHANNEL}',
                    recurring_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            expiration_date: '{EXPIRATION_DATE}',
                            frequency: '{FREQUENCY}'
                        })
                    ),
                    request_id: '{REQUESTID}',
                    payment_product_list: '{PAYMENTPRODUCTLIST}',
                    payment_product_category_list: '{PAYMENTPRODUCTCATEGORYLIST}',
                    template: '{TEMPLATE}',
                    time_limit_to_pay: '{TIMELIMITTOPAY}',
                    multi_use: '{MULTIUSE}',
                    merchant_display_name: '{MERCHANTDISPLAYNAME}',
                    css: '{CSS}',
                    display_selector: '{DISPLAYSELECTOR}',
                    eci: '{ECI}',
                    authentication_indicator: '{AUTHENTICATIONINDICATOR}',
                    expiration_limit: '{EXPIRATIONLIMIT}',
                    order_category_code: '{ORDERCATEGORYCODE}',
                    carrier_description: '{CARRIERDESCRIPTION}',
                    sales_channel: '{SALESCHANNEL}',
                    soft_descriptor: '{SOFTDESCRIPTOR}',
                    theme_code: '{THEMECODE}',
                    display_cancel_button: '{DISPLAYCANCELBUTTON}'
                },
                additionalHeaders: {
                    ['X-HIPAY-DATA-ID']: '{DATA_ID}'
                }
            });
            expect(HostedPaymentPageMapper).toHaveBeenCalledWith('{RESPONSE_BODY}');
            expect(mockPIDataClient.getOrderData).toHaveBeenCalledWith('{DATA_ID}', request, '{MAPPED_OBJECT}');
            expect(mockPIDataClient.sendData).toHaveBeenCalledWith('{ORDER_DATA}');
        });

        it('requests new hosted payment page with object param', async () => {
            let hiPay = new HiPay({});

            let request = {
                customData: '{CUSTOM_DATA}',
                source: {
                    source: '{SOURCE}',
                    brand: '{BRAND}',
                    brand_version: '{BRAND_VERSION}'
                },
                basket: '{BASKET}',
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
                customerBillingInfo: new CustomerBillingInfoRequest({
                    email: '{EMAIL}',
                    phone: '{PHONE}',
                    msisdn: '{MSISDN}',
                    birthdate: '{BIRTHDATE}',
                    gender: '{GENDER}',
                    firstname: '{FIRSTNAME}',
                    lastname: '{LASTNAME}',
                    recipientinfo: '{RECIPIENTINFO}',
                    house_extension: '{HOUSE_EXTENSION}',
                    house_number: '{HOUSE_NUMBER}',
                    streetaddress: '{STREETADDRESS}',
                    streetaddress2: '{STREETADDRESS2}',
                    city: '{CITY}',
                    state: '{STATE}',
                    zipcode: '{ZIPCODE}',
                    country: '{COUNTRY}'
                }),
                customerShippingInfo: new CustomerShippingInfoRequest({
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
                }),
                deliveryInformation: new DeliveryShippingInfoRequest({
                    delivery_date: '{DELIVERY_DATE}',
                    delivery_method: '{DELIVERY_METHOD}'
                }),
                previousAuthInfo: new PreviousAuthInfo({
                    transaction_reference: '{TRANSACTION_REFERENCE}'
                }),
                merchantRiskStatement: new MerchantRiskStatement({
                    email_delivery_address: '{EMAIL_DELIVERY_ADDRESS}',
                    delivery_time_frame: '{DELIVERY_TIME_FRAME}',
                    purchase_indicator: '{PURCHASE_INDICATOR}',
                    pre_order_date: '{PRE_ORDER_DATE}',
                    reorder_indicator: '{REORDER_INDICATOR}',
                    shipping_indicator: '{SHIPPING_INDICATOR}',
                    gift_card: { amount: 99.9, count: 5, currency: 'EUR' }
                }),
                accountInfo: new AccountInfo({
                    customer: { account_change: '20230101', opening_account_date: '20220202', password_change: '20221010' },
                    purchase: { card_stored_24h: '5', count: '6', payment_attempts_1y: '64', payment_attempts_24h: '3' },
                    payment: { enrollment_date: '2021010' },
                    shipping: {
                        name_indicator: NameIndicator.IDENTICAL,
                        shipping_used_date: '20230202',
                        suspicious_activity: SuspiciousActivity.SUSPICIOUS_ACTIVITY
                    }
                }),
                deviceChannel: '{DEVICECHANNEL}',
                recurringInfo: new RecurringInfo({
                    expiration_date: '{EXPIRATION_DATE}',
                    frequency: '{FREQUENCY}'
                }),
                requestId: '{REQUESTID}',
                paymentProductList: '{PAYMENTPRODUCTLIST}',
                paymentProductCategoryList: '{PAYMENTPRODUCTCATEGORYLIST}',
                template: '{TEMPLATE}',
                timeLimitToPay: '{TIMELIMITTOPAY}',
                multiUse: '{MULTIUSE}',
                merchantDisplayName: '{MERCHANTDISPLAYNAME}',
                css: '{CSS}',
                displaySelector: '{DISPLAYSELECTOR}',
                eci: '{ECI}',
                authenticationIndicator: '{AUTHENTICATIONINDICATOR}',
                expirationLimit: '{EXPIRATIONLIMIT}',
                orderCategoryCode: '{ORDERCATEGORYCODE}',
                carrierDescription: '{CARRIERDESCRIPTION}',
                salesChannel: '{SALESCHANNEL}',
                softDescriptor: '{SOFTDESCRIPTOR}',
                themeCode: '{THEMECODE}',
                displayCancelButton: '{DISPLAYCANCELBUTTON}'
            };

            mockPIDataClient.getDataId.mockReturnValue('{DATA_ID}');
            mockHttpClient.request.mockResolvedValue({
                body: '{RESPONSE_BODY}'
            });
            mockPIDataClient.getOrderData.mockReturnValue('{ORDER_DATA}');

            expect(await hiPay.requestHostedPaymentPage(request)).toEqual('{MAPPED_OBJECT}');
            expect(PIDataClient).toHaveBeenCalledWith(mockHttpClient);
            expect(mockPIDataClient.getDataId).toHaveBeenCalledWith(null);
            expect(mockHttpClient.request).toHaveBeenCalledWith(HiPay.METHOD_HOSTED_PAYMENT_PAGE, HiPay.ENDPOINT_HOSTED_PAYMENT_PAGE_V2, {
                baseUrl: '{HPAYMENT_API_ENDPOINT}',
                body: {
                    custom_data: '{CUSTOM_DATA}',
                    source: JSON.stringify({
                        source: '{SOURCE}',
                        brand: '{BRAND}',
                        brand_version: '{BRAND_VERSION}'
                    }),
                    basket: '{BASKET}',
                    orderid: '{ORDERID}',
                    operation: '{OPERATION}',
                    description: '{DESCRIPTION}',
                    long_description: '{LONGDESCRIPTION}',
                    currency: '{CURRENCY}',
                    amount: '{AMOUNT}',
                    shipping: '{SHIPPING}',
                    tax: '{TAX}',
                    tax_rate: '{TAXRATE}',
                    cid: '{CID}',
                    ipaddr: '{IPADDR}',
                    accept_url: '{ACCEPTURL}',
                    decline_url: '{DECLINEURL}',
                    pending_url: '{PENDINGURL}',
                    exception_url: '{EXCEPTIONURL}',
                    cancel_url: '{CANCELURL}',
                    notify_url: '{NOTIFYURL}',
                    http_accept: '{HTTPACCEPT}',
                    http_user_agent: '{HTTPUSERAGENT}',
                    device_fingerprint: '{DEVICEFINGERPRINT}',
                    language: '{LANGUAGE}',
                    email: '{EMAIL}',
                    phone: '{PHONE}',
                    msisdn: '{MSISDN}',
                    birthdate: '{BIRTHDATE}',
                    gender: '{GENDER}',
                    firstname: '{FIRSTNAME}',
                    lastname: '{LASTNAME}',
                    recipientinfo: '{RECIPIENTINFO}',
                    house_extension: '{HOUSE_EXTENSION}',
                    house_number: '{HOUSE_NUMBER}',
                    streetaddress: '{STREETADDRESS}',
                    streetaddress2: '{STREETADDRESS2}',
                    city: '{CITY}',
                    state: '{STATE}',
                    zipcode: '{ZIPCODE}',
                    country: '{COUNTRY}',
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
                    shipto_gender: '{SHIPTO_GENDER}',
                    delivery_date: '{DELIVERY_DATE}',
                    delivery_method: '{DELIVERY_METHOD}',
                    previous_auth_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            transaction_reference: '{TRANSACTION_REFERENCE}'
                        })
                    ),
                    merchant_risk_statement: expect.jsonToBeEqual(
                        JSON.stringify({
                            email_delivery_address: '{EMAIL_DELIVERY_ADDRESS}',
                            delivery_time_frame: '{DELIVERY_TIME_FRAME}',
                            purchase_indicator: '{PURCHASE_INDICATOR}',
                            pre_order_date: '{PRE_ORDER_DATE}',
                            reorder_indicator: '{REORDER_INDICATOR}',
                            shipping_indicator: '{SHIPPING_INDICATOR}',
                            gift_card: { amount: 99.9, count: 5, currency: 'EUR' }
                        })
                    ),
                    account_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            customer: { account_change: '20230101', opening_account_date: '20220202', password_change: '20221010' },
                            purchase: { card_stored_24h: '5', count: '6', payment_attempts_1y: '64', payment_attempts_24h: '3' },
                            payment: { enrollment_date: '2021010' },
                            shipping: {
                                name_indicator: NameIndicator.IDENTICAL,
                                shipping_used_date: '20230202',
                                suspicious_activity: SuspiciousActivity.SUSPICIOUS_ACTIVITY
                            }
                        })
                    ),
                    device_channel: '{DEVICECHANNEL}',
                    recurring_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            expiration_date: '{EXPIRATION_DATE}',
                            frequency: '{FREQUENCY}'
                        })
                    ),
                    request_id: '{REQUESTID}',
                    payment_product_list: '{PAYMENTPRODUCTLIST}',
                    payment_product_category_list: '{PAYMENTPRODUCTCATEGORYLIST}',
                    template: '{TEMPLATE}',
                    time_limit_to_pay: '{TIMELIMITTOPAY}',
                    multi_use: '{MULTIUSE}',
                    merchant_display_name: '{MERCHANTDISPLAYNAME}',
                    css: '{CSS}',
                    display_selector: '{DISPLAYSELECTOR}',
                    eci: '{ECI}',
                    authentication_indicator: '{AUTHENTICATIONINDICATOR}',
                    expiration_limit: '{EXPIRATIONLIMIT}',
                    order_category_code: '{ORDERCATEGORYCODE}',
                    carrier_description: '{CARRIERDESCRIPTION}',
                    sales_channel: '{SALESCHANNEL}',
                    soft_descriptor: '{SOFTDESCRIPTOR}',
                    theme_code: '{THEMECODE}',
                    display_cancel_button: '{DISPLAYCANCELBUTTON}'
                },
                additionalHeaders: {
                    ['X-HIPAY-DATA-ID']: '{DATA_ID}'
                }
            });
            expect(HostedPaymentPageMapper).toHaveBeenCalledWith('{RESPONSE_BODY}');
            expect(mockPIDataClient.getOrderData).toHaveBeenCalledWith('{DATA_ID}', request, '{MAPPED_OBJECT}');
            expect(mockPIDataClient.sendData).toHaveBeenCalledWith('{ORDER_DATA}');
        });

        it('requests new hosted payment page with custom data id', async () => {
            let hiPay = new HiPay({});

            let request = new HostedPaymentPageRequest({
                customData: '{CUSTOM_DATA}',
                source: {
                    source: '{SOURCE}',
                    brand: '{BRAND}',
                    brand_version: '{BRAND_VERSION}'
                },
                basket: '{BASKET}',
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
                customerBillingInfo: {
                    email: '{EMAIL}',
                    phone: '{PHONE}',
                    msisdn: '{MSISDN}',
                    birthdate: '{BIRTHDATE}',
                    gender: '{GENDER}',
                    firstname: '{FIRSTNAME}',
                    lastname: '{LASTNAME}',
                    recipientinfo: '{RECIPIENTINFO}',
                    house_extension: '{HOUSE_EXTENSION}',
                    house_number: '{HOUSE_NUMBER}',
                    streetaddress: '{STREETADDRESS}',
                    streetaddress2: '{STREETADDRESS2}',
                    city: '{CITY}',
                    state: '{STATE}',
                    zipcode: '{ZIPCODE}',
                    country: '{COUNTRY}'
                },
                customerShippingInfo: {
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
                },
                deliveryInformation: {
                    delivery_date: '{DELIVERY_DATE}',
                    delivery_method: '{DELIVERY_METHOD}'
                },
                previousAuthInfo: {
                    transaction_reference: '{TRANSACTION_REFERENCE}'
                },
                merchantRiskStatement: {
                    email_delivery_address: '{EMAIL_DELIVERY_ADDRESS}',
                    delivery_time_frame: '{DELIVERY_TIME_FRAME}',
                    purchase_indicator: '{PURCHASE_INDICATOR}',
                    pre_order_date: '{PRE_ORDER_DATE}',
                    reorder_indicator: '{REORDER_INDICATOR}',
                    shipping_indicator: '{SHIPPING_INDICATOR}',
                    gift_card: { amount: 99.9, count: 5, currency: 'EUR' }
                },
                accountInfo: {
                    customer: { account_change: '20230101', opening_account_date: '20220202', password_change: '20221010' },
                    purchase: { card_stored_24h: '5', count: '6', payment_attempts_1y: '64', payment_attempts_24h: '3' },
                    payment: { enrollment_date: '2021010' },
                    shipping: {
                        name_indicator: NameIndicator.IDENTICAL,
                        shipping_used_date: '20230202',
                        suspicious_activity: SuspiciousActivity.SUSPICIOUS_ACTIVITY
                    }
                },
                deviceChannel: '{DEVICECHANNEL}',
                recurringInfo: {
                    expiration_date: '{EXPIRATION_DATE}',
                    frequency: '{FREQUENCY}'
                },
                requestId: '{REQUESTID}',
                paymentProductList: '{PAYMENTPRODUCTLIST}',
                paymentProductCategoryList: '{PAYMENTPRODUCTCATEGORYLIST}',
                template: '{TEMPLATE}',
                timeLimitToPay: '{TIMELIMITTOPAY}',
                multiUse: '{MULTIUSE}',
                merchantDisplayName: '{MERCHANTDISPLAYNAME}',
                css: '{CSS}',
                displaySelector: '{DISPLAYSELECTOR}',
                eci: '{ECI}',
                authenticationIndicator: '{AUTHENTICATIONINDICATOR}',
                expirationLimit: '{EXPIRATIONLIMIT}',
                orderCategoryCode: '{ORDERCATEGORYCODE}',
                carrierDescription: '{CARRIERDESCRIPTION}',
                salesChannel: '{SALESCHANNEL}',
                softDescriptor: '{SOFTDESCRIPTOR}',
                themeCode: '{THEMECODE}',
                displayCancelButton: '{DISPLAYCANCELBUTTON}'
            });

            mockPIDataClient.getDataId.mockReturnValue('{DATA_ID}');
            mockHttpClient.request.mockResolvedValue({
                body: '{RESPONSE_BODY}'
            });
            mockPIDataClient.getOrderData.mockReturnValue('{ORDER_DATA}');

            expect(await hiPay.requestHostedPaymentPage(request, { dataId: '{RAW_DATA_ID}' })).toEqual('{MAPPED_OBJECT}');
            expect(PIDataClient).toHaveBeenCalledWith(mockHttpClient);
            expect(mockPIDataClient.getDataId).toHaveBeenCalledWith('{RAW_DATA_ID}');
            expect(mockHttpClient.request).toHaveBeenCalledWith(HiPay.METHOD_HOSTED_PAYMENT_PAGE, HiPay.ENDPOINT_HOSTED_PAYMENT_PAGE_V2, {
                baseUrl: '{HPAYMENT_API_ENDPOINT}',
                body: {
                    custom_data: '{CUSTOM_DATA}',
                    source: JSON.stringify({
                        source: '{SOURCE}',
                        brand: '{BRAND}',
                        brand_version: '{BRAND_VERSION}'
                    }),
                    basket: '{BASKET}',
                    orderid: '{ORDERID}',
                    operation: '{OPERATION}',
                    description: '{DESCRIPTION}',
                    long_description: '{LONGDESCRIPTION}',
                    currency: '{CURRENCY}',
                    amount: '{AMOUNT}',
                    shipping: '{SHIPPING}',
                    tax: '{TAX}',
                    tax_rate: '{TAXRATE}',
                    cid: '{CID}',
                    ipaddr: '{IPADDR}',
                    accept_url: '{ACCEPTURL}',
                    decline_url: '{DECLINEURL}',
                    pending_url: '{PENDINGURL}',
                    exception_url: '{EXCEPTIONURL}',
                    cancel_url: '{CANCELURL}',
                    notify_url: '{NOTIFYURL}',
                    http_accept: '{HTTPACCEPT}',
                    http_user_agent: '{HTTPUSERAGENT}',
                    device_fingerprint: '{DEVICEFINGERPRINT}',
                    language: '{LANGUAGE}',
                    email: '{EMAIL}',
                    phone: '{PHONE}',
                    msisdn: '{MSISDN}',
                    birthdate: '{BIRTHDATE}',
                    gender: '{GENDER}',
                    firstname: '{FIRSTNAME}',
                    lastname: '{LASTNAME}',
                    recipientinfo: '{RECIPIENTINFO}',
                    house_extension: '{HOUSE_EXTENSION}',
                    house_number: '{HOUSE_NUMBER}',
                    streetaddress: '{STREETADDRESS}',
                    streetaddress2: '{STREETADDRESS2}',
                    city: '{CITY}',
                    state: '{STATE}',
                    zipcode: '{ZIPCODE}',
                    country: '{COUNTRY}',
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
                    shipto_gender: '{SHIPTO_GENDER}',
                    delivery_date: '{DELIVERY_DATE}',
                    delivery_method: '{DELIVERY_METHOD}',
                    previous_auth_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            transaction_reference: '{TRANSACTION_REFERENCE}'
                        })
                    ),
                    merchant_risk_statement: expect.jsonToBeEqual(
                        JSON.stringify({
                            email_delivery_address: '{EMAIL_DELIVERY_ADDRESS}',
                            delivery_time_frame: '{DELIVERY_TIME_FRAME}',
                            purchase_indicator: '{PURCHASE_INDICATOR}',
                            pre_order_date: '{PRE_ORDER_DATE}',
                            reorder_indicator: '{REORDER_INDICATOR}',
                            shipping_indicator: '{SHIPPING_INDICATOR}',
                            gift_card: { amount: 99.9, count: 5, currency: 'EUR' }
                        })
                    ),
                    account_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            customer: { account_change: '20230101', opening_account_date: '20220202', password_change: '20221010' },
                            purchase: { card_stored_24h: '5', count: '6', payment_attempts_1y: '64', payment_attempts_24h: '3' },
                            payment: { enrollment_date: '2021010' },
                            shipping: {
                                name_indicator: NameIndicator.IDENTICAL,
                                shipping_used_date: '20230202',
                                suspicious_activity: SuspiciousActivity.SUSPICIOUS_ACTIVITY
                            }
                        })
                    ),
                    device_channel: '{DEVICECHANNEL}',
                    recurring_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            expiration_date: '{EXPIRATION_DATE}',
                            frequency: '{FREQUENCY}'
                        })
                    ),
                    request_id: '{REQUESTID}',
                    payment_product_list: '{PAYMENTPRODUCTLIST}',
                    payment_product_category_list: '{PAYMENTPRODUCTCATEGORYLIST}',
                    template: '{TEMPLATE}',
                    time_limit_to_pay: '{TIMELIMITTOPAY}',
                    multi_use: '{MULTIUSE}',
                    merchant_display_name: '{MERCHANTDISPLAYNAME}',
                    css: '{CSS}',
                    display_selector: '{DISPLAYSELECTOR}',
                    eci: '{ECI}',
                    authentication_indicator: '{AUTHENTICATIONINDICATOR}',
                    expiration_limit: '{EXPIRATIONLIMIT}',
                    order_category_code: '{ORDERCATEGORYCODE}',
                    carrier_description: '{CARRIERDESCRIPTION}',
                    sales_channel: '{SALESCHANNEL}',
                    soft_descriptor: '{SOFTDESCRIPTOR}',
                    theme_code: '{THEMECODE}',
                    display_cancel_button: '{DISPLAYCANCELBUTTON}'
                },
                additionalHeaders: {
                    ['X-HIPAY-DATA-ID']: '{DATA_ID}'
                }
            });
            expect(HostedPaymentPageMapper).toHaveBeenCalledWith('{RESPONSE_BODY}');
            expect(mockPIDataClient.getOrderData).toHaveBeenCalledWith('{DATA_ID}', request, '{MAPPED_OBJECT}');
            expect(mockPIDataClient.sendData).toHaveBeenCalledWith('{ORDER_DATA}');
        });

        it('requests new hosted payment page sending no data if data-id could not be generated', async () => {
            let hiPay = new HiPay({});

            let request = new HostedPaymentPageRequest({
                customData: '{CUSTOM_DATA}',
                source: {
                    source: '{SOURCE}',
                    brand: '{BRAND}',
                    brand_version: '{BRAND_VERSION}'
                },
                basket: '{BASKET}',
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
                customerBillingInfo: {
                    email: '{EMAIL}',
                    phone: '{PHONE}',
                    msisdn: '{MSISDN}',
                    birthdate: '{BIRTHDATE}',
                    gender: '{GENDER}',
                    firstname: '{FIRSTNAME}',
                    lastname: '{LASTNAME}',
                    recipientinfo: '{RECIPIENTINFO}',
                    house_extension: '{HOUSE_EXTENSION}',
                    house_number: '{HOUSE_NUMBER}',
                    streetaddress: '{STREETADDRESS}',
                    streetaddress2: '{STREETADDRESS2}',
                    city: '{CITY}',
                    state: '{STATE}',
                    zipcode: '{ZIPCODE}',
                    country: '{COUNTRY}'
                },
                customerShippingInfo: {
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
                },
                deliveryInformation: {
                    delivery_date: '{DELIVERY_DATE}',
                    delivery_method: '{DELIVERY_METHOD}'
                },
                previousAuthInfo: {
                    transaction_reference: '{TRANSACTION_REFERENCE}'
                },
                merchantRiskStatement: {
                    email_delivery_address: '{EMAIL_DELIVERY_ADDRESS}',
                    delivery_time_frame: '{DELIVERY_TIME_FRAME}',
                    purchase_indicator: '{PURCHASE_INDICATOR}',
                    pre_order_date: '{PRE_ORDER_DATE}',
                    reorder_indicator: '{REORDER_INDICATOR}',
                    shipping_indicator: '{SHIPPING_INDICATOR}',
                    gift_card: { amount: 99.9, count: 5, currency: 'EUR' }
                },
                accountInfo: {
                    customer: { account_change: '20230101', opening_account_date: '20220202', password_change: '20221010' },
                    purchase: { card_stored_24h: '5', count: '6', payment_attempts_1y: '64', payment_attempts_24h: '3' },
                    payment: { enrollment_date: '2021010' },
                    shipping: {
                        name_indicator: NameIndicator.IDENTICAL,
                        shipping_used_date: '20230202',
                        suspicious_activity: SuspiciousActivity.SUSPICIOUS_ACTIVITY
                    }
                },
                deviceChannel: '{DEVICECHANNEL}',
                recurringInfo: {
                    expiration_date: '{EXPIRATION_DATE}',
                    frequency: '{FREQUENCY}'
                },
                requestId: '{REQUESTID}',
                paymentProductList: '{PAYMENTPRODUCTLIST}',
                paymentProductCategoryList: '{PAYMENTPRODUCTCATEGORYLIST}',
                template: '{TEMPLATE}',
                timeLimitToPay: '{TIMELIMITTOPAY}',
                multiUse: '{MULTIUSE}',
                merchantDisplayName: '{MERCHANTDISPLAYNAME}',
                css: '{CSS}',
                displaySelector: '{DISPLAYSELECTOR}',
                eci: '{ECI}',
                authenticationIndicator: '{AUTHENTICATIONINDICATOR}',
                expirationLimit: '{EXPIRATIONLIMIT}',
                orderCategoryCode: '{ORDERCATEGORYCODE}',
                carrierDescription: '{CARRIERDESCRIPTION}',
                salesChannel: '{SALESCHANNEL}',
                softDescriptor: '{SOFTDESCRIPTOR}',
                themeCode: '{THEMECODE}',
                displayCancelButton: '{DISPLAYCANCELBUTTON}'
            });

            mockPIDataClient.getDataId.mockReturnValue(null);
            mockHttpClient.request.mockResolvedValue({
                body: '{RESPONSE_BODY}'
            });
            mockPIDataClient.getOrderData.mockReturnValue('{ORDER_DATA}');

            expect(await hiPay.requestHostedPaymentPage(request)).toEqual('{MAPPED_OBJECT}');
            expect(PIDataClient).toHaveBeenCalledWith(mockHttpClient);
            expect(mockPIDataClient.getDataId).toHaveBeenCalledWith(null);
            expect(mockHttpClient.request).toHaveBeenCalledWith(HiPay.METHOD_HOSTED_PAYMENT_PAGE, HiPay.ENDPOINT_HOSTED_PAYMENT_PAGE_V2, {
                baseUrl: '{HPAYMENT_API_ENDPOINT}',
                body: {
                    custom_data: '{CUSTOM_DATA}',
                    source: JSON.stringify({
                        source: '{SOURCE}',
                        brand: '{BRAND}',
                        brand_version: '{BRAND_VERSION}'
                    }),
                    basket: '{BASKET}',
                    orderid: '{ORDERID}',
                    operation: '{OPERATION}',
                    description: '{DESCRIPTION}',
                    long_description: '{LONGDESCRIPTION}',
                    currency: '{CURRENCY}',
                    amount: '{AMOUNT}',
                    shipping: '{SHIPPING}',
                    tax: '{TAX}',
                    tax_rate: '{TAXRATE}',
                    cid: '{CID}',
                    ipaddr: '{IPADDR}',
                    accept_url: '{ACCEPTURL}',
                    decline_url: '{DECLINEURL}',
                    pending_url: '{PENDINGURL}',
                    exception_url: '{EXCEPTIONURL}',
                    cancel_url: '{CANCELURL}',
                    notify_url: '{NOTIFYURL}',
                    http_accept: '{HTTPACCEPT}',
                    http_user_agent: '{HTTPUSERAGENT}',
                    device_fingerprint: '{DEVICEFINGERPRINT}',
                    language: '{LANGUAGE}',
                    email: '{EMAIL}',
                    phone: '{PHONE}',
                    msisdn: '{MSISDN}',
                    birthdate: '{BIRTHDATE}',
                    gender: '{GENDER}',
                    firstname: '{FIRSTNAME}',
                    lastname: '{LASTNAME}',
                    recipientinfo: '{RECIPIENTINFO}',
                    house_extension: '{HOUSE_EXTENSION}',
                    house_number: '{HOUSE_NUMBER}',
                    streetaddress: '{STREETADDRESS}',
                    streetaddress2: '{STREETADDRESS2}',
                    city: '{CITY}',
                    state: '{STATE}',
                    zipcode: '{ZIPCODE}',
                    country: '{COUNTRY}',
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
                    shipto_gender: '{SHIPTO_GENDER}',
                    delivery_date: '{DELIVERY_DATE}',
                    delivery_method: '{DELIVERY_METHOD}',
                    previous_auth_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            transaction_reference: '{TRANSACTION_REFERENCE}'
                        })
                    ),
                    merchant_risk_statement: expect.jsonToBeEqual(
                        JSON.stringify({
                            email_delivery_address: '{EMAIL_DELIVERY_ADDRESS}',
                            delivery_time_frame: '{DELIVERY_TIME_FRAME}',
                            purchase_indicator: '{PURCHASE_INDICATOR}',
                            pre_order_date: '{PRE_ORDER_DATE}',
                            reorder_indicator: '{REORDER_INDICATOR}',
                            shipping_indicator: '{SHIPPING_INDICATOR}',
                            gift_card: { amount: 99.9, count: 5, currency: 'EUR' }
                        })
                    ),
                    account_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            customer: { account_change: '20230101', opening_account_date: '20220202', password_change: '20221010' },
                            purchase: { card_stored_24h: '5', count: '6', payment_attempts_1y: '64', payment_attempts_24h: '3' },
                            payment: { enrollment_date: '2021010' },
                            shipping: {
                                name_indicator: NameIndicator.IDENTICAL,
                                shipping_used_date: '20230202',
                                suspicious_activity: SuspiciousActivity.SUSPICIOUS_ACTIVITY
                            }
                        })
                    ),
                    device_channel: '{DEVICECHANNEL}',
                    recurring_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            expiration_date: '{EXPIRATION_DATE}',
                            frequency: '{FREQUENCY}'
                        })
                    ),
                    request_id: '{REQUESTID}',
                    payment_product_list: '{PAYMENTPRODUCTLIST}',
                    payment_product_category_list: '{PAYMENTPRODUCTCATEGORYLIST}',
                    template: '{TEMPLATE}',
                    time_limit_to_pay: '{TIMELIMITTOPAY}',
                    multi_use: '{MULTIUSE}',
                    merchant_display_name: '{MERCHANTDISPLAYNAME}',
                    css: '{CSS}',
                    display_selector: '{DISPLAYSELECTOR}',
                    eci: '{ECI}',
                    authentication_indicator: '{AUTHENTICATIONINDICATOR}',
                    expiration_limit: '{EXPIRATIONLIMIT}',
                    order_category_code: '{ORDERCATEGORYCODE}',
                    carrier_description: '{CARRIERDESCRIPTION}',
                    sales_channel: '{SALESCHANNEL}',
                    soft_descriptor: '{SOFTDESCRIPTOR}',
                    theme_code: '{THEMECODE}',
                    display_cancel_button: '{DISPLAYCANCELBUTTON}'
                },
                additionalHeaders: {
                    ['X-HIPAY-DATA-ID']: null
                }
            });
            expect(HostedPaymentPageMapper).toHaveBeenCalledWith('{RESPONSE_BODY}');
            expect(mockPIDataClient.getOrderData).not.toHaveBeenCalled();
            expect(mockPIDataClient.sendData).not.toHaveBeenCalled();
        });

        it('requests new legacy hosted payment page', async () => {
            let hiPay = new HiPay({});

            let request = new HostedPaymentPageRequest({
                customData: '{CUSTOM_DATA}',
                source: {
                    source: '{SOURCE}',
                    brand: '{BRAND}',
                    brand_version: '{BRAND_VERSION}'
                },
                basket: '{BASKET}',
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
                customerBillingInfo: {
                    email: '{EMAIL}',
                    phone: '{PHONE}',
                    msisdn: '{MSISDN}',
                    birthdate: '{BIRTHDATE}',
                    gender: '{GENDER}',
                    firstname: '{FIRSTNAME}',
                    lastname: '{LASTNAME}',
                    recipientinfo: '{RECIPIENTINFO}',
                    house_extension: '{HOUSE_EXTENSION}',
                    house_number: '{HOUSE_NUMBER}',
                    streetaddress: '{STREETADDRESS}',
                    streetaddress2: '{STREETADDRESS2}',
                    city: '{CITY}',
                    state: '{STATE}',
                    zipcode: '{ZIPCODE}',
                    country: '{COUNTRY}'
                },
                customerShippingInfo: {
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
                },
                deliveryInformation: {
                    delivery_date: '{DELIVERY_DATE}',
                    delivery_method: '{DELIVERY_METHOD}'
                },
                previousAuthInfo: {
                    transaction_reference: '{TRANSACTION_REFERENCE}'
                },
                merchantRiskStatement: {
                    email_delivery_address: '{EMAIL_DELIVERY_ADDRESS}',
                    delivery_time_frame: '{DELIVERY_TIME_FRAME}',
                    purchase_indicator: '{PURCHASE_INDICATOR}',
                    pre_order_date: '{PRE_ORDER_DATE}',
                    reorder_indicator: '{REORDER_INDICATOR}',
                    shipping_indicator: '{SHIPPING_INDICATOR}',
                    gift_card: { amount: 99.9, count: 5, currency: 'EUR' }
                },
                accountInfo: {
                    customer: { account_change: '20230101', opening_account_date: '20220202', password_change: '20221010' },
                    purchase: { card_stored_24h: '5', count: '6', payment_attempts_1y: '64', payment_attempts_24h: '3' },
                    payment: { enrollment_date: '2021010' },
                    shipping: {
                        name_indicator: NameIndicator.IDENTICAL,
                        shipping_used_date: '20230202',
                        suspicious_activity: SuspiciousActivity.SUSPICIOUS_ACTIVITY
                    }
                },
                deviceChannel: '{DEVICECHANNEL}',
                recurringInfo: {
                    expiration_date: '{EXPIRATION_DATE}',
                    frequency: '{FREQUENCY}'
                },
                requestId: '{REQUESTID}',
                paymentProductList: '{PAYMENTPRODUCTLIST}',
                paymentProductCategoryList: '{PAYMENTPRODUCTCATEGORYLIST}',
                template: '{TEMPLATE}',
                timeLimitToPay: '{TIMELIMITTOPAY}',
                multiUse: '{MULTIUSE}',
                merchantDisplayName: '{MERCHANTDISPLAYNAME}',
                css: '{CSS}',
                displaySelector: '{DISPLAYSELECTOR}',
                eci: '{ECI}',
                authenticationIndicator: '{AUTHENTICATIONINDICATOR}',
                expirationLimit: '{EXPIRATIONLIMIT}',
                orderCategoryCode: '{ORDERCATEGORYCODE}',
                carrierDescription: '{CARRIERDESCRIPTION}',
                salesChannel: '{SALESCHANNEL}',
                softDescriptor: '{SOFTDESCRIPTOR}',
                themeCode: '{THEMECODE}',
                displayCancelButton: '{DISPLAYCANCELBUTTON}'
            });

            mockPIDataClient.getDataId.mockReturnValue('{DATA_ID}');
            mockHttpClient.request.mockResolvedValue({
                body: '{RESPONSE_BODY}'
            });
            mockPIDataClient.getOrderData.mockReturnValue('{ORDER_DATA}');

            expect(await hiPay.requestHostedPaymentPage(request, { legacy: true })).toEqual('{MAPPED_OBJECT}');
            expect(PIDataClient).toHaveBeenCalledWith(mockHttpClient);
            expect(mockPIDataClient.getDataId).toHaveBeenCalledWith(null);
            expect(mockHttpClient.request).toHaveBeenCalledWith(HiPay.METHOD_HOSTED_PAYMENT_PAGE, HiPay.ENDPOINT_HOSTED_PAYMENT_PAGE, {
                baseUrl: '{API_ENDPOINT}',
                body: {
                    custom_data: '{CUSTOM_DATA}',
                    source: JSON.stringify({
                        source: '{SOURCE}',
                        brand: '{BRAND}',
                        brand_version: '{BRAND_VERSION}'
                    }),
                    basket: '{BASKET}',
                    orderid: '{ORDERID}',
                    operation: '{OPERATION}',
                    description: '{DESCRIPTION}',
                    long_description: '{LONGDESCRIPTION}',
                    currency: '{CURRENCY}',
                    amount: '{AMOUNT}',
                    shipping: '{SHIPPING}',
                    tax: '{TAX}',
                    tax_rate: '{TAXRATE}',
                    cid: '{CID}',
                    ipaddr: '{IPADDR}',
                    accept_url: '{ACCEPTURL}',
                    decline_url: '{DECLINEURL}',
                    pending_url: '{PENDINGURL}',
                    exception_url: '{EXCEPTIONURL}',
                    cancel_url: '{CANCELURL}',
                    notify_url: '{NOTIFYURL}',
                    http_accept: '{HTTPACCEPT}',
                    http_user_agent: '{HTTPUSERAGENT}',
                    device_fingerprint: '{DEVICEFINGERPRINT}',
                    language: '{LANGUAGE}',
                    email: '{EMAIL}',
                    phone: '{PHONE}',
                    msisdn: '{MSISDN}',
                    birthdate: '{BIRTHDATE}',
                    gender: '{GENDER}',
                    firstname: '{FIRSTNAME}',
                    lastname: '{LASTNAME}',
                    recipientinfo: '{RECIPIENTINFO}',
                    house_extension: '{HOUSE_EXTENSION}',
                    house_number: '{HOUSE_NUMBER}',
                    streetaddress: '{STREETADDRESS}',
                    streetaddress2: '{STREETADDRESS2}',
                    city: '{CITY}',
                    state: '{STATE}',
                    zipcode: '{ZIPCODE}',
                    country: '{COUNTRY}',
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
                    shipto_gender: '{SHIPTO_GENDER}',
                    delivery_date: '{DELIVERY_DATE}',
                    delivery_method: '{DELIVERY_METHOD}',
                    previous_auth_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            transaction_reference: '{TRANSACTION_REFERENCE}'
                        })
                    ),
                    merchant_risk_statement: expect.jsonToBeEqual(
                        JSON.stringify({
                            email_delivery_address: '{EMAIL_DELIVERY_ADDRESS}',
                            delivery_time_frame: '{DELIVERY_TIME_FRAME}',
                            purchase_indicator: '{PURCHASE_INDICATOR}',
                            pre_order_date: '{PRE_ORDER_DATE}',
                            reorder_indicator: '{REORDER_INDICATOR}',
                            shipping_indicator: '{SHIPPING_INDICATOR}',
                            gift_card: { amount: 99.9, count: 5, currency: 'EUR' }
                        })
                    ),
                    account_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            customer: { account_change: '20230101', opening_account_date: '20220202', password_change: '20221010' },
                            purchase: { card_stored_24h: '5', count: '6', payment_attempts_1y: '64', payment_attempts_24h: '3' },
                            payment: { enrollment_date: '2021010' },
                            shipping: {
                                name_indicator: NameIndicator.IDENTICAL,
                                shipping_used_date: '20230202',
                                suspicious_activity: SuspiciousActivity.SUSPICIOUS_ACTIVITY
                            }
                        })
                    ),
                    device_channel: '{DEVICECHANNEL}',
                    recurring_info: expect.jsonToBeEqual(
                        JSON.stringify({
                            expiration_date: '{EXPIRATION_DATE}',
                            frequency: '{FREQUENCY}'
                        })
                    ),
                    request_id: '{REQUESTID}',
                    payment_product_list: '{PAYMENTPRODUCTLIST}',
                    payment_product_category_list: '{PAYMENTPRODUCTCATEGORYLIST}',
                    template: '{TEMPLATE}',
                    time_limit_to_pay: '{TIMELIMITTOPAY}',
                    multi_use: '{MULTIUSE}',
                    merchant_display_name: '{MERCHANTDISPLAYNAME}',
                    css: '{CSS}',
                    display_selector: '{DISPLAYSELECTOR}',
                    eci: '{ECI}',
                    authentication_indicator: '{AUTHENTICATIONINDICATOR}',
                    expiration_limit: '{EXPIRATIONLIMIT}',
                    order_category_code: '{ORDERCATEGORYCODE}',
                    carrier_description: '{CARRIERDESCRIPTION}',
                    sales_channel: '{SALESCHANNEL}',
                    soft_descriptor: '{SOFTDESCRIPTOR}',
                    theme_code: '{THEMECODE}',
                    display_cancel_button: '{DISPLAYCANCELBUTTON}'
                },
                additionalHeaders: {
                    ['X-HIPAY-DATA-ID']: '{DATA_ID}'
                }
            });
            expect(HostedPaymentPageMapper).toHaveBeenCalledWith('{RESPONSE_BODY}');
            expect(mockPIDataClient.getOrderData).toHaveBeenCalledWith('{DATA_ID}', request, '{MAPPED_OBJECT}');
            expect(mockPIDataClient.sendData).toHaveBeenCalledWith('{ORDER_DATA}');
        });
    });

    describe('requests maintenance', () => {
        it('requests maintenance', async () => {
            let hiPay = new HiPay({
                apiEndpoint: '{API_ENDPOINT}'
            });

            let request = new MaintenanceRequest({
                customData: '{CUSTOM_DATA}',
                source: {
                    source: '{SOURCE}',
                    brand: '{BRAND}',
                    brand_version: '{BRAND_VERSION}'
                },
                basket: '{BASKET}',
                operation: '{OPERATION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                operation_id: '{OPERATION_ID}',
                sub_transaction_reference: '{SUB_TRANSACTION_REFERENCE}'
            });

            mockHttpClient.request.mockResolvedValue({
                body: '{RESPONSE_BODY}'
            });

            expect(await hiPay.requestMaintenanceOperation(request, '{TRX_REF}')).toEqual('{MAPPED_OBJECT}');
            expect(mockHttpClient.request).toHaveBeenCalledWith(
                HiPay.METHOD_MAINTENANCE_OPERATION,
                HiPay.ENDPOINT_MAINTENANCE_OPERATION.split('{transaction}').join('{TRX_REF}'),
                {
                    baseUrl: '{API_ENDPOINT}',
                    body: {
                        custom_data: '{CUSTOM_DATA}',
                        source: JSON.stringify({
                            source: '{SOURCE}',
                            brand: '{BRAND}',
                            brand_version: '{BRAND_VERSION}'
                        }),
                        basket: '{BASKET}',
                        operation: '{OPERATION}',
                        currency: '{CURRENCY}',
                        amount: '{AMOUNT}',
                        operation_id: '{OPERATION_ID}',
                        sub_transaction_reference: '{SUB_TRANSACTION_REFERENCE}'
                    }
                }
            );
            expect(OperationMapper).toHaveBeenCalledWith('{RESPONSE_BODY}');
        });

        it('requests maintenance with object param', async () => {
            let hiPay = new HiPay({
                apiEndpoint: '{API_ENDPOINT}'
            });

            let request = {
                customData: '{CUSTOM_DATA}',
                source: {
                    source: '{SOURCE}',
                    brand: '{BRAND}',
                    brand_version: '{BRAND_VERSION}'
                },
                basket: '{BASKET}',
                operation: '{OPERATION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                operation_id: '{OPERATION_ID}',
                sub_transaction_reference: '{SUB_TRANSACTION_REFERENCE}'
            };

            mockHttpClient.request.mockResolvedValue({
                body: '{RESPONSE_BODY}'
            });

            expect(await hiPay.requestMaintenanceOperation(request, '{TRX_REF}')).toEqual('{MAPPED_OBJECT}');
            expect(mockHttpClient.request).toHaveBeenCalledWith(
                HiPay.METHOD_MAINTENANCE_OPERATION,
                HiPay.ENDPOINT_MAINTENANCE_OPERATION.split('{transaction}').join('{TRX_REF}'),
                {
                    baseUrl: '{API_ENDPOINT}',
                    body: {
                        custom_data: '{CUSTOM_DATA}',
                        source: JSON.stringify({
                            source: '{SOURCE}',
                            brand: '{BRAND}',
                            brand_version: '{BRAND_VERSION}'
                        }),
                        basket: '{BASKET}',
                        operation: '{OPERATION}',
                        currency: '{CURRENCY}',
                        amount: '{AMOUNT}',
                        operation_id: '{OPERATION_ID}',
                        sub_transaction_reference: '{SUB_TRANSACTION_REFERENCE}'
                    }
                }
            );
            expect(OperationMapper).toHaveBeenCalledWith('{RESPONSE_BODY}');
        });

        it('requests maintenance errors if no transaction id is sent', async () => {
            let hiPay = new HiPay({
                apiEndpoint: '{API_ENDPOINT}'
            });

            let request = new MaintenanceRequest({
                customData: '{CUSTOM_DATA}',
                source: {
                    source: '{SOURCE}',
                    brand: '{BRAND}',
                    brand_version: '{BRAND_VERSION}'
                },
                basket: '{BASKET}',
                operation: '{OPERATION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                operation_id: '{OPERATION_ID}',
                sub_transaction_reference: '{SUB_TRANSACTION_REFERENCE}'
            });

            mockHttpClient.request.mockResolvedValue({
                body: '{RESPONSE_BODY}'
            });

            await expect(hiPay.requestMaintenanceOperation(request)).rejects.toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith('Transaction reference must be a string');
            expect(mockHttpClient.request).not.toHaveBeenCalled();
            expect(OperationMapper).not.toHaveBeenCalled();
        });

        it('requests maintenance errors if transaction reference is the wrong type', async () => {
            let hiPay = new HiPay({
                apiEndpoint: '{API_ENDPOINT}'
            });

            let request = new MaintenanceRequest({
                customData: '{CUSTOM_DATA}',
                source: {
                    source: '{SOURCE}',
                    brand: '{BRAND}',
                    brand_version: '{BRAND_VERSION}'
                },
                basket: '{BASKET}',
                operation: '{OPERATION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                operation_id: '{OPERATION_ID}',
                sub_transaction_reference: '{SUB_TRANSACTION_REFERENCE}'
            });

            mockHttpClient.request.mockResolvedValue({
                body: '{RESPONSE_BODY}'
            });

            await expect(hiPay.requestMaintenanceOperation(request, true)).rejects.toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith('Transaction reference must be a string');
            expect(mockHttpClient.request).not.toHaveBeenCalled();
            expect(OperationMapper).not.toHaveBeenCalled();
        });
    });

    describe('requests transaction information', () => {
        it('requests transaction information', async () => {
            let hiPay = new HiPay({
                apiEndpoint: '{API_ENDPOINT}'
            });

            mockHttpClient.request.mockResolvedValue({
                body: {
                    transaction: {
                        value: '{RESPONSE_BODY}'
                    },
                    basket: '{BASKET}'
                }
            });

            expect(await hiPay.requestTransactionInformation('{TRX_REF}')).toEqual('{MAPPED_OBJECT}');
            expect(mockHttpClient.request).toHaveBeenCalledWith(
                HiPay.METHOD_TRANSACTION_INFORMATION,
                HiPay.ENDPOINT_TRANSACTION_INFORMATION.split('{transaction}').join('{TRX_REF}'),
                {
                    baseUrl: '{API_ENDPOINT}'
                }
            );
            expect(TransactionMapper).toHaveBeenCalledWith({
                value: '{RESPONSE_BODY}',
                basket: '{BASKET}'
            });
        });

        it('requests transaction information, returns null if transaction does not exist', async () => {
            let hiPay = new HiPay({
                apiEndpoint: '{API_ENDPOINT}'
            });

            mockHttpClient.request.mockResolvedValue({
                body: {}
            });

            expect(await hiPay.requestTransactionInformation('{TRX_REF}')).toEqual(null);
            expect(mockHttpClient.request).toHaveBeenCalledWith(
                HiPay.METHOD_TRANSACTION_INFORMATION,
                HiPay.ENDPOINT_TRANSACTION_INFORMATION.split('{transaction}').join('{TRX_REF}'),
                {
                    baseUrl: '{API_ENDPOINT}'
                }
            );
            expect(TransactionMapper).not.toHaveBeenCalled();
        });

        it('requests transaction information errors if no transaction id is sent', async () => {
            let hiPay = new HiPay({
                apiEndpoint: '{API_ENDPOINT}'
            });

            mockHttpClient.request.mockResolvedValue({
                body: {
                    transaction: {
                        value: '{RESPONSE_BODY}'
                    },
                    basket: '{BASKET}'
                }
            });

            await expect(hiPay.requestTransactionInformation()).rejects.toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith('Transaction reference must be a string');

            expect(mockHttpClient.request).not.toHaveBeenCalled();
            expect(TransactionMapper).not.toHaveBeenCalled();
        });

        it('requests transaction information errors if transaction reference is the wrong type', async () => {
            let hiPay = new HiPay({
                apiEndpoint: '{API_ENDPOINT}'
            });

            mockHttpClient.request.mockResolvedValue({
                body: {
                    transaction: {
                        value: '{RESPONSE_BODY}'
                    },
                    basket: '{BASKET}'
                }
            });

            await expect(hiPay.requestTransactionInformation(true)).rejects.toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith('Transaction reference must be a string');

            expect(mockHttpClient.request).not.toHaveBeenCalled();
            expect(TransactionMapper).not.toHaveBeenCalled();
        });
    });

    describe('requests transaction information by order id', () => {
        it('requests transaction information by order id', async () => {
            let hiPay = new HiPay({
                apiEndpoint: '{API_ENDPOINT}'
            });

            mockHttpClient.request.mockResolvedValue({
                body: {
                    transaction: {
                        state: '{TRX_STATE}'
                    },
                    basket: '{BASKET}'
                }
            });

            expect(await hiPay.requestOrderTransactionInformation('{ORDER_ID}')).toEqual(['{MAPPED_OBJECT}']);
            expect(mockHttpClient.request).toHaveBeenCalledWith(
                HiPay.METHOD_ORDER_TRANSACTION_INFORMATION,
                `${HiPay.ENDPOINT_ORDER_TRANSACTION_INFORMATION}?orderid={ORDER_ID}`,
                {
                    baseUrl: '{API_ENDPOINT}'
                }
            );
            expect(TransactionMapper).toHaveBeenCalledTimes(1);
            expect(TransactionMapper).toHaveBeenCalledWith({
                state: '{TRX_STATE}'
            });
        });

        it('requests transaction information by order id with multiple transactions found', async () => {
            let hiPay = new HiPay({
                apiEndpoint: '{API_ENDPOINT}'
            });

            mockHttpClient.request.mockResolvedValue({
                body: {
                    transaction: [
                        {
                            state: '{TRX_STATE}'
                        },
                        {
                            state: '{TRX_STATE_2}'
                        },
                        {
                            state: '{TRX_STATE_3}'
                        }
                    ]
                }
            });

            expect(await hiPay.requestOrderTransactionInformation('{ORDER_ID}')).toEqual(['{MAPPED_OBJECT}', '{MAPPED_OBJECT}', '{MAPPED_OBJECT}']);
            expect(mockHttpClient.request).toHaveBeenCalledWith(
                HiPay.METHOD_ORDER_TRANSACTION_INFORMATION,
                `${HiPay.ENDPOINT_ORDER_TRANSACTION_INFORMATION}?orderid={ORDER_ID}`,
                {
                    baseUrl: '{API_ENDPOINT}'
                }
            );
            expect(TransactionMapper).toHaveBeenCalledTimes(3);
            expect(TransactionMapper).toHaveBeenCalledWith({
                state: '{TRX_STATE}'
            });
            expect(TransactionMapper).toHaveBeenCalledWith({
                state: '{TRX_STATE_2}'
            });
            expect(TransactionMapper).toHaveBeenCalledWith({
                state: '{TRX_STATE_3}'
            });
        });

        it('requests transaction information by order id with no transactions found', async () => {
            let hiPay = new HiPay({
                apiEndpoint: '{API_ENDPOINT}'
            });

            mockHttpClient.request.mockResolvedValue({
                body: {}
            });

            expect(await hiPay.requestOrderTransactionInformation('{ORDER_ID}')).toEqual([]);
            expect(mockHttpClient.request).toHaveBeenCalledWith(
                HiPay.METHOD_ORDER_TRANSACTION_INFORMATION,
                `${HiPay.ENDPOINT_ORDER_TRANSACTION_INFORMATION}?orderid={ORDER_ID}`,
                {
                    baseUrl: '{API_ENDPOINT}'
                }
            );
            expect(TransactionMapper).not.toHaveBeenCalled();
        });

        it('requests transaction information by order id errors if no order id is sent', async () => {
            let hiPay = new HiPay({
                apiEndpoint: '{API_ENDPOINT}'
            });

            mockHttpClient.request.mockResolvedValue({
                body: {
                    transaction: {
                        value: '{RESPONSE_BODY}'
                    },
                    basket: '{BASKET}'
                }
            });

            await expect(hiPay.requestOrderTransactionInformation()).rejects.toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith('Order ID must be a string');

            expect(mockHttpClient.request).not.toHaveBeenCalled();
            expect(TransactionMapper).not.toHaveBeenCalled();
        });

        it('requests transaction information by order id errors if order id is the wrong type', async () => {
            let hiPay = new HiPay({
                apiEndpoint: '{API_ENDPOINT}'
            });

            mockHttpClient.request.mockResolvedValue({
                body: {
                    transaction: {
                        value: '{RESPONSE_BODY}'
                    },
                    basket: '{BASKET}'
                }
            });

            await expect(hiPay.requestOrderTransactionInformation(true)).rejects.toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith('Order ID must be a string');

            expect(mockHttpClient.request).not.toHaveBeenCalled();
            expect(TransactionMapper).not.toHaveBeenCalled();
        });
    });

    describe('requests transaction V3 information', () => {
        it('requests transaction V3 information', async () => {
            let hiPay = new HiPay({
                consultationApiEndpoint: '{CONSULTATION_API_ENDPOINT}'
            });

            mockHttpClient.request.mockResolvedValue({
                body: {
                    value: '{RESPONSE_BODY}'
                }
            });

            const res = await hiPay.requestTransactionV3Information('{TRX_REF}');
            expect(res).toEqual({ value: '{RESPONSE_BODY}' });
            expect(mockHttpClient.request).toHaveBeenCalledWith(
                HiPay.METHOD_TRANSACTION_V3_INFORMATION,
                HiPay.ENDPOINT_TRANSACTION_V3_INFORMATION.split('{transaction}').join('{TRX_REF}'),
                {
                    baseUrl: '{CONSULTATION_API_ENDPOINT}'
                }
            );
        });

        it('requests transaction V3 information, returns null if transaction V3 does not exist', async () => {
            let hiPay = new HiPay({
                consultationApiEndpoint: '{CONSULTATION_API_ENDPOINT}'
            });

            mockHttpClient.request.mockResolvedValue({});
            const res = await hiPay.requestTransactionV3Information('{TRX_REF}');

            expect(res).toEqual(null);
            expect(mockHttpClient.request).toHaveBeenCalledWith(
                HiPay.METHOD_TRANSACTION_V3_INFORMATION,
                HiPay.ENDPOINT_TRANSACTION_V3_INFORMATION.split('{transaction}').join('{TRX_REF}'),
                {
                    baseUrl: '{CONSULTATION_API_ENDPOINT}'
                }
            );
        });

        it('requests transaction V3 information errors if no transaction id is sent', async () => {
            let hiPay = new HiPay({
                consultationApiEndpoint: '{CONSULTATION_API_ENDPOINT}'
            });

            mockHttpClient.request.mockResolvedValue({
                body: {
                    value: '{RESPONSE_BODY}'
                }
            });

            await expect(hiPay.requestTransactionV3Information()).rejects.toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith('TransactionV3 reference must be a string');

            expect(mockHttpClient.request).not.toHaveBeenCalled();
        });

        it('requests transaction V3 information errors if transaction reference is the wrong type', async () => {
            let hiPay = new HiPay({
                apiEnconsultationApiEndpointdpoint: '{CONSULTATION_API_ENDPOINT}'
            });

            mockHttpClient.request.mockResolvedValue({
                body: {
                    value: '{RESPONSE_BODY}'
                }
            });

            await expect(hiPay.requestTransactionV3Information(true)).rejects.toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith('TransactionV3 reference must be a string');

            expect(mockHttpClient.request).not.toHaveBeenCalled();
        });
    });

    describe('requests security settings', () => {
        it('requests security settings', async () => {
            let hiPay = new HiPay({
                apiEndpoint: '{API_ENDPOINT}'
            });

            mockHttpClient.request.mockResolvedValue({
                body: '{RESPONSE_BODY}'
            });

            expect(await hiPay.requestSecuritySettings()).toEqual('{MAPPED_OBJECT}');
            expect(mockHttpClient.request).toHaveBeenCalledWith(HiPay.METHOD_SECURITY_SETTINGS, HiPay.ENDPOINT_SECURITY_SETTINGS, {
                baseUrl: '{API_ENDPOINT}'
            });
            expect(SecuritySettingsMapper).toHaveBeenCalledWith('{RESPONSE_BODY}');
        });
    });

    describe('requests lookup token', () => {
        it('requests lookup token', async () => {
            let hiPay = new HiPay({
                apiEndpoint: '{API_ENDPOINT}',
                secureVaultEndpoint: '{SECURED_ENDPOINT}'
            });

            mockHttpClient.request.mockResolvedValue({
                body: '{RESPONSE_BODY}'
            });

            expect(await hiPay.requestLookupToken('TOKEN')).toEqual('{MAPPED_OBJECT}');
            expect(mockHttpClient.request).toHaveBeenCalledWith(
                HiPay.METHOD_LOOKUP_TOKEN,
                HiPay.ENDPOINT_LOOKUP_TOKEN.replace('{token}', 'TOKEN') + '?request_id=0',
                {
                    baseUrl: '{SECURED_ENDPOINT}'
                }
            );
            expect(PaymentCardTokenMapper).toHaveBeenCalledWith('{RESPONSE_BODY}');
        });

        it('requests lookup token with request ID', async () => {
            let hiPay = new HiPay({
                apiEndpoint: '{API_ENDPOINT}',
                secureVaultEndpoint: '{SECURED_ENDPOINT}'
            });

            mockHttpClient.request.mockResolvedValue({
                body: '{RESPONSE_BODY}'
            });

            expect(await hiPay.requestLookupToken('TOKEN', '5')).toEqual('{MAPPED_OBJECT}');
            expect(mockHttpClient.request).toHaveBeenCalledWith(
                HiPay.METHOD_LOOKUP_TOKEN,
                HiPay.ENDPOINT_LOOKUP_TOKEN.replace('{token}', 'TOKEN') + '?request_id=5',
                {
                    baseUrl: '{SECURED_ENDPOINT}'
                }
            );
            expect(PaymentCardTokenMapper).toHaveBeenCalledWith('{RESPONSE_BODY}');
        });
    });
});
