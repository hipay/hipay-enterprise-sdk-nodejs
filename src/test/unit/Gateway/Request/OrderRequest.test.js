const OrderRequest = require('../../../../Gateway/Request/OrderRequest');

const { BrowserInfo } = require('../../../../Gateway/Request/Model/ThreeDSTwo');
const { AbstractPaymentMethod } = require('../../../../Gateway/Request/PaymentMethod');

const InvalidArgumentException = require('../../../../Error/InvalidArgumentException');
jest.mock('../../../../Error/InvalidArgumentException');

afterEach(() => {
    InvalidArgumentException.mockReset();
});

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let orderRequest;

        let browserInfo = new BrowserInfo();
        let paymentMethod = new AbstractPaymentMethod();

        expect(() => {
            orderRequest = new OrderRequest({
                orderid: '{ORDERID}',
                description: '{DESCRIPTION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                paymentProduct: '{PAYMENTPRODUCT}',
                paymentMethod: paymentMethod,
                browserInfo: browserInfo,
                salesChannel: '{SALESCHANNEL}',
                providerData: '{PROVIDERDATA}'
            });
        }).not.toThrow();

        expect(orderRequest).toBeInstanceOf(OrderRequest);
        expect(orderRequest.orderid).toEqual('{ORDERID}');
        expect(orderRequest.description).toEqual('{DESCRIPTION}');
        expect(orderRequest.currency).toEqual('{CURRENCY}');
        expect(orderRequest.amount).toEqual('{AMOUNT}');
        expect(orderRequest.paymentProduct).toEqual('{PAYMENTPRODUCT}');
        expect(orderRequest.paymentMethod).toStrictEqual(paymentMethod);
        expect(orderRequest.browserInfo).toStrictEqual(browserInfo);
        expect(orderRequest.salesChannel).toEqual('{SALESCHANNEL}');
        expect(orderRequest.providerData).toEqual('{PROVIDERDATA}');
    });

    it('Initializes correctly with plain object', () => {
        let orderRequest;

        let browserInfo = {
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
        };

        let paymentMethod = new AbstractPaymentMethod();

        expect(() => {
            orderRequest = new OrderRequest({
                orderid: '{ORDERID}',
                description: '{DESCRIPTION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                paymentProduct: '{PAYMENTPRODUCT}',
                paymentMethod: paymentMethod,
                browserInfo: browserInfo,
                salesChannel: '{SALESCHANNEL}',
                providerData: {
                    paypal_id: '3G784840JJ573503S'
                }
            });
        }).not.toThrow();

        expect(orderRequest).toBeInstanceOf(OrderRequest);
        expect(orderRequest.orderid).toEqual('{ORDERID}');
        expect(orderRequest.description).toEqual('{DESCRIPTION}');
        expect(orderRequest.currency).toEqual('{CURRENCY}');
        expect(orderRequest.amount).toEqual('{AMOUNT}');
        expect(orderRequest.paymentProduct).toEqual('{PAYMENTPRODUCT}');
        expect(orderRequest.paymentMethod).toStrictEqual(paymentMethod);
        expect(orderRequest.browserInfo).toBeInstanceOf(BrowserInfo);
        expect(orderRequest.browserInfo).toEqual(browserInfo);
        expect(orderRequest.salesChannel).toEqual('{SALESCHANNEL}');
        expect(orderRequest.providerData).toEqual('{"paypal_id":"3G784840JJ573503S"}');
    });

    it('Initializes correctly with minimal parameters', () => {
        let orderRequest;

        expect(() => {
            orderRequest = new OrderRequest({
                orderid: '{ORDERID}',
                description: '{DESCRIPTION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                paymentProduct: '{PAYMENTPRODUCT}'
            });
        }).not.toThrow();

        expect(orderRequest).toBeInstanceOf(OrderRequest);
        expect(orderRequest.orderid).toEqual('{ORDERID}');
        expect(orderRequest.description).toEqual('{DESCRIPTION}');
        expect(orderRequest.currency).toEqual('{CURRENCY}');
        expect(orderRequest.amount).toEqual('{AMOUNT}');
        expect(orderRequest.paymentProduct).toEqual('{PAYMENTPRODUCT}');
        expect(orderRequest.paymentMethod).toEqual(null);
        expect(orderRequest.browserInfo).toEqual(null);
        expect(orderRequest.salesChannel).toEqual(null);
        expect(orderRequest.providerData).toEqual(null);
    });

    it('Errors when orderid is absent', () => {
        let orderRequest;

        let browserInfo = new BrowserInfo();

        expect(() => {
            orderRequest = new OrderRequest({
                description: '{DESCRIPTION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                paymentProduct: '{PAYMENTPRODUCT}',
                paymentMethod: '{PAYMENTMETHOD}',
                browserInfo: browserInfo,
                salesChannel: '{SALESCHANNEL}',
                providerData: '{PROVIDERDATA}'
            });
        }).toThrow();

        try {
            new OrderRequest({
                description: '{DESCRIPTION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                paymentProduct: '{PAYMENTPRODUCT}',
                paymentMethod: '{PAYMENTMETHOD}',
                browserInfo: browserInfo,
                salesChannel: '{SALESCHANNEL}',
                providerData: '{PROVIDERDATA}'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Request must have an Order ID');
    });
    it('Errors when description is absent', () => {
        let orderRequest;

        let browserInfo = new BrowserInfo();

        expect(() => {
            orderRequest = new OrderRequest({
                orderid: '{ORDERID}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                paymentProduct: '{PAYMENTPRODUCT}',
                paymentMethod: '{PAYMENTMETHOD}',
                browserInfo: browserInfo,
                salesChannel: '{SALESCHANNEL}',
                providerData: '{PROVIDERDATA}'
            });
        }).toThrow();

        try {
            new OrderRequest({
                orderid: '{ORDERID}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                paymentProduct: '{PAYMENTPRODUCT}',
                paymentMethod: '{PAYMENTMETHOD}',
                browserInfo: browserInfo,
                salesChannel: '{SALESCHANNEL}',
                providerData: '{PROVIDERDATA}'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Request must have a description');
    });
    it('Errors when currency is absent', () => {
        let orderRequest;

        let browserInfo = new BrowserInfo();

        expect(() => {
            orderRequest = new OrderRequest({
                orderid: '{ORDERID}',
                description: '{DESCRIPTION}',
                amount: '{AMOUNT}',
                paymentProduct: '{PAYMENTPRODUCT}',
                paymentMethod: '{PAYMENTMETHOD}',
                browserInfo: browserInfo,
                salesChannel: '{SALESCHANNEL}',
                providerData: '{PROVIDERDATA}'
            });
        }).toThrow();

        try {
            new OrderRequest({
                orderid: '{ORDERID}',
                description: '{DESCRIPTION}',
                amount: '{AMOUNT}',
                paymentProduct: '{PAYMENTPRODUCT}',
                paymentMethod: '{PAYMENTMETHOD}',
                browserInfo: browserInfo,
                salesChannel: '{SALESCHANNEL}',
                providerData: '{PROVIDERDATA}'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Request must have a currency');
    });
    it('Errors when amount is absent', () => {
        let orderRequest;

        let browserInfo = new BrowserInfo();

        expect(() => {
            orderRequest = new OrderRequest({
                orderid: '{ORDERID}',
                description: '{DESCRIPTION}',
                currency: '{CURRENCY}',
                paymentProduct: '{PAYMENTPRODUCT}',
                paymentMethod: '{PAYMENTMETHOD}',
                browserInfo: browserInfo,
                salesChannel: '{SALESCHANNEL}',
                providerData: '{PROVIDERDATA}'
            });
        }).toThrow();

        try {
            new OrderRequest({
                orderid: '{ORDERID}',
                description: '{DESCRIPTION}',
                currency: '{CURRENCY}',
                paymentProduct: '{PAYMENTPRODUCT}',
                paymentMethod: '{PAYMENTMETHOD}',
                browserInfo: browserInfo,
                salesChannel: '{SALESCHANNEL}',
                providerData: '{PROVIDERDATA}'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Request must have an amount');
    });
    it('Errors when paymentProduct is absent', () => {
        let orderRequest;

        let browserInfo = new BrowserInfo();

        expect(() => {
            orderRequest = new OrderRequest({
                orderid: '{ORDERID}',
                description: '{DESCRIPTION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                paymentMethod: '{PAYMENTMETHOD}',
                browserInfo: browserInfo,
                salesChannel: '{SALESCHANNEL}',
                providerData: '{PROVIDERDATA}'
            });
        }).toThrow();

        try {
            new OrderRequest({
                orderid: '{ORDERID}',
                description: '{DESCRIPTION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                paymentMethod: '{PAYMENTMETHOD}',
                browserInfo: browserInfo,
                salesChannel: '{SALESCHANNEL}',
                providerData: '{PROVIDERDATA}'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Order Request must have a Payment Product');
    });
    it('Errors when paymentMethod is wrong type', () => {
        let orderRequest;

        let browserInfo = new BrowserInfo();

        expect(() => {
            orderRequest = new OrderRequest({
                orderid: '{ORDERID}',
                description: '{DESCRIPTION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                paymentProduct: '{PAYMENTPRODUCT}',
                paymentMethod: '{PAYMENTMETHOD}',
                browserInfo: browserInfo,
                salesChannel: '{SALESCHANNEL}',
                providerData: '{PROVIDERDATA}'
            });
        }).toThrow();

        try {
            new OrderRequest({
                orderid: '{ORDERID}',
                description: '{DESCRIPTION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                paymentProduct: '{PAYMENTPRODUCT}',
                paymentMethod: '{PAYMENTMETHOD}',
                browserInfo: browserInfo,
                salesChannel: '{SALESCHANNEL}',
                providerData: '{PROVIDERDATA}'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('paymentMethod must be instance of AbstractPaymentMethod');
    });
});
