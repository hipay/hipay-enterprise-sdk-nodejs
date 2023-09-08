const Configuration = require('../../../../Gateway/HTTP/Configuration/Configuration');
const SimpleHTTPClient = require('../../../../Gateway/HTTP/SimpleHTTPClient');
const InvalidArgumentException = require('../../../../Error/InvalidArgumentException');

jest.mock('../../../../Gateway/HTTP/Configuration/Configuration');
jest.mock('../../../../Gateway/HTTP/SimpleHTTPClient');
jest.mock('../../../../Error/InvalidArgumentException');

const { v4 } = require('uuid');
jest.mock('uuid');

const mockConfiguration = new Configuration({});
mockConfiguration.dataApiEndpoint = 'DATA_API_ENDPOINT';
const mockClientInterface = new SimpleHTTPClient();
mockClientInterface.configuration = mockConfiguration;

expect.extend({
    dateToBeGreatherOrEqual(received, date2) {
        const pass = new Date(received) >= new Date(date2);
        if (pass) {
            return {
                message: () => `expected ${received} not to be greather or equal to ${date2}`,
                pass: true
            };
        } else {
            return {
                message: () => `expected ${received} to be greather or equal to ${date2}`,
                pass: false
            };
        }
    }
});

const PIDataClient = require('../../../../Gateway/PIDataClient/PIDataClient');

afterEach(() => {
    InvalidArgumentException.mockReset();
});

describe('Test class static constants', () => {
    it('has the right values', () => {
        expect(PIDataClient.ENDPOINT_DATA_API).toEqual('/checkout-data');
        expect(PIDataClient.METHOD_DATA_API).toEqual('POST');
    });
});

describe('Test class initializer', () => {
    it('initializes correctly', () => {
        expect(() => {
            new PIDataClient(mockClientInterface);
        }).not.toThrow();

        const piDataClient = new PIDataClient(mockClientInterface);
        expect(piDataClient.clientProvider).toEqual(mockClientInterface);
        expect(piDataClient._requestDate).toEqual(expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/));
    });

    it('throws when arg is not SimpleHTTPClient', () => {
        expect(() => {
            new PIDataClient({});
        }).toThrow();

        try {
            new PIDataClient({});
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Client provider should extend SimpleHTTPClient');
    });

    it('throws when arg is not object', () => {
        expect(() => {
            new PIDataClient('Hello world');
        }).toThrow();

        try {
            new PIDataClient('Hello world');
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Client provider should extend SimpleHTTPClient');
    });
});

describe('Test dataId generation', () => {
    it('returns existing dataId', () => {
        const piDataClient = new PIDataClient(mockClientInterface);

        const dataId = piDataClient.getDataId('{DATA_ID}');
        expect(dataId).toEqual('{DATA_ID}');
    });

    it('returns new data_id', () => {
        v4.mockReturnValue('{NEW_UUID}');

        const piDataClient = new PIDataClient(mockClientInterface);

        const dataId = piDataClient.getDataId();
        expect(dataId).toEqual('{NEW_UUID}');
    });
});

describe('Test custom functions', () => {
    it('returns domain from valid URL', () => {
        const piDataClient = new PIDataClient(mockClientInterface);
        const url = 'https://www.example.com/pathname?query=ok#anchor';
        const expected = 'example.com';

        const domain = piDataClient.getDomainFromUrl(url);
        expect(domain).toEqual(expected);
    });

    it('returns nullable domain value from invalid URL', () => {
        const piDataClient = new PIDataClient(mockClientInterface);
        const url = 'myUrl';
        const expected = null;

        const domain = piDataClient.getDomainFromUrl(url);
        expect(domain).toEqual(expected);
    });
});

describe('Test API Data object', () => {
    it('returns valid API Data object from order request', () => {
        const piDataClient = new PIDataClient(mockClientInterface);
        const dateRequest = piDataClient._requestDate;
        const dataId = 'ddd6dcea9876c04e427c4bf70527e4bbfec8b47b580c3839b43d40b06c190fe4';
        const orderRequest = {
            amount: '99.05',
            currency: 'USD',
            paymentProduct: 'visa',
            customerBillingInfo: {
                email: 'john@email.com',
                cid: 'cid'
            },
            acceptUrl: 'http://example.com'
        };
        const transaction = {
            status: '116',
            eci: 7,
            transactionReference: '615381763518'
        };
        const expected = {
            id: dataId,
            event: 'request',
            amount: 99.05,
            currency: orderRequest.currency,
            order_id: orderRequest.orderid,
            transaction_id: 615381763518,
            status: transaction.status,
            eci: transaction.eci,
            payment_method: orderRequest.paymentProduct,
            customer: {
                email: orderRequest.customerBillingInfo.email,
                cid: orderRequest.cid
            },
            monitoring: {
                date_request: dateRequest,
                date_response: expect.dateToBeGreatherOrEqual(dateRequest)
            },
            domain: 'example.com',
            components: {
                cms: 'sdk_nodejs',
                cms_version: '',
                cms_module_version: '',
                sdk_server: 'nodejs',
                sdk_server_engine_version: process.version
            }
        };

        const params = piDataClient.getOrderData(dataId, orderRequest, transaction);
        expect(params).toEqual(expected);
    });
    it('returns valid API Data object from order request with full source', () => {
        const piDataClient = new PIDataClient(mockClientInterface);
        const dateRequest = piDataClient._requestDate;
        const dataId = 'ddd6dcea9876c04e427c4bf70527e4bbfec8b47b580c3839b43d40b06c190fe4';
        const orderRequest = {
            amount: '99.05',
            currency: 'USD',
            paymentProduct: 'visa',
            customerBillingInfo: {
                email: 'john@email.com',
                cid: 'cid'
            },
            acceptUrl: 'http://example.com',
            source: {
                brand: '{BRAND}',
                brandVersion: '{BRAND_VERSION}',
                integration_version: '{BRAND_MODULE_VERSION}',
                sdk_server_version: '{SDK_SERVER_VERSION}'
            }
        };
        const transaction = {
            status: '116',
            eci: 7,
            transactionReference: '615381763518'
        };
        const expected = {
            id: dataId,
            event: 'request',
            amount: 99.05,
            currency: orderRequest.currency,
            order_id: orderRequest.orderid,
            transaction_id: 615381763518,
            status: transaction.status,
            eci: transaction.eci,
            payment_method: orderRequest.paymentProduct,
            customer: {
                email: orderRequest.customerBillingInfo.email,
                cid: orderRequest.cid
            },
            monitoring: {
                date_request: dateRequest,
                date_response: expect.dateToBeGreatherOrEqual(dateRequest)
            },
            domain: 'example.com',
            components: {
                cms: '{BRAND}',
                cms_version: '{BRAND_VERSION}',
                cms_module_version: '{BRAND_MODULE_VERSION}',
                sdk_server: 'nodejs',
                sdk_server_engine_version: process.version,
                sdk_server_version: '{SDK_SERVER_VERSION}'
            }
        };

        const params = piDataClient.getOrderData(dataId, orderRequest, transaction);
        expect(params).toEqual(expected);
    });

    it('returns valid API Data object from hpayment request', () => {
        const piDataClient = new PIDataClient(mockClientInterface);
        const dateRequest = piDataClient._requestDate;
        const dataId = 'ddd6dcea9876c04e427c4bf70527e4bbfec8b47b580c3839b43d40b06c190fe4';
        const hpaymentRequest = {
            amount: '99.05',
            currency: 'USD',
            paymentProductList: 'visa,mastercard,multibanco',
            merchantDisplayName: 'MERCHANT_NAME',
            template: 'TEMPLATE',
            customerBillingInfo: {
                email: 'john@email.com',
                cid: 'cid'
            },
            acceptUrl: 'http://example.com'
        };

        const expected = {
            id: dataId,
            event: 'initHpayment',
            amount: 99.05,
            currency: hpaymentRequest.currency,
            order_id: hpaymentRequest.orderid,
            payment_method: hpaymentRequest.paymentProductList,
            merchant_display_name: 'MERCHANT_NAME',
            customer: {
                email: hpaymentRequest.customerBillingInfo.email,
                cid: hpaymentRequest.cid
            },
            monitoring: {
                date_request: dateRequest,
                date_response: expect.dateToBeGreatherOrEqual(dateRequest)
            },
            domain: 'example.com',
            components: {
                cms: 'sdk_nodejs',
                cms_version: '',
                cms_module_version: '',
                sdk_server: 'nodejs',
                sdk_server_engine_version: process.version,
                template: 'TEMPLATE'
            },
            display_cancel_button: false
        };

        const params = piDataClient.getHPaymentData(dataId, hpaymentRequest);
        expect(params).toEqual(expected);
    });
    it('returns valid API Data object from hpayment request with array product list', () => {
        const piDataClient = new PIDataClient(mockClientInterface);
        const dateRequest = piDataClient._requestDate;
        const dataId = 'ddd6dcea9876c04e427c4bf70527e4bbfec8b47b580c3839b43d40b06c190fe4';
        const hpaymentRequest = {
            amount: '99.05',
            currency: 'USD',
            paymentProductList: ['visa', 'mastercard', 'multibanco'],
            merchantDisplayName: 'MERCHANT_NAME',
            template: 'TEMPLATE',
            customerBillingInfo: {
                email: 'john@email.com',
                cid: 'cid'
            },
            acceptUrl: 'http://example.com',
            displayCancelButton: true
        };

        const expected = {
            id: dataId,
            event: 'initHpayment',
            amount: 99.05,
            currency: hpaymentRequest.currency,
            order_id: hpaymentRequest.orderid,
            payment_method: hpaymentRequest.paymentProductList.join(','),
            merchant_display_name: 'MERCHANT_NAME',
            customer: {
                email: hpaymentRequest.customerBillingInfo.email,
                cid: hpaymentRequest.cid
            },
            monitoring: {
                date_request: dateRequest,
                date_response: expect.dateToBeGreatherOrEqual(dateRequest)
            },
            domain: 'example.com',
            components: {
                cms: 'sdk_nodejs',
                cms_version: '',
                cms_module_version: '',
                sdk_server: 'nodejs',
                sdk_server_engine_version: process.version,
                template: 'TEMPLATE'
            },
            display_cancel_button: true
        };

        const params = piDataClient.getHPaymentData(dataId, hpaymentRequest);
        expect(params).toEqual(expected);
    });
});

describe('Test request to API Data', () => {
    it('sent request correctly', async () => {
        mockClientInterface.request = jest.fn();
        const piDataClient = new PIDataClient(mockClientInterface);
        const data = {
            id: 'ddd6dcea9876c04e427c4bf70527e4bbfec8b47b580c3839b43d40b06c190fe4',
            event: 'request',
            amount: 99.05,
            currency: 'EUR',
            order_id: 'orderid',
            transaction_id: 615381763518,
            status: '116',
            eci: '7',
            payment_method: 'cb',
            customer: {
                email: 'email',
                cid: 'cid'
            },
            monitoring: {
                date_request: 'dateRequest',
                date_response: 'dateResponse'
            },
            domain: 'example.com'
        };

        await piDataClient.sendData(data);
        expect(mockClientInterface.request).toHaveBeenCalledTimes(1);
        expect(mockClientInterface.request).toHaveBeenNthCalledWith(1, PIDataClient.METHOD_DATA_API, PIDataClient.ENDPOINT_DATA_API, {
            body: data,
            isData: true,
            baseUrl: 'DATA_API_ENDPOINT'
        });
    });
});
