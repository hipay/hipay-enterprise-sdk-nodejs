const HostedPaymentPageRequest = require('../../../../Gateway/Request/HostedPaymentPageRequest');
const Template = require('../../../../Enum/Transaction/Template');

const InvalidArgumentException = require('../../../../Error/InvalidArgumentException');
const { AuthenticationIndicator } = require('../../../../Enum/Transaction');
jest.mock('../../../../Error/InvalidArgumentException');

afterEach(() => {
    InvalidArgumentException.mockReset();
});

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let hpaymentRequest;

        expect(() => {
            hpaymentRequest = new HostedPaymentPageRequest({
                orderid: '{ORDERID}',
                description: '{DESCRIPTION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
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
                themeCode: '{THEMECODE}',
                displayCancelButton: '{DISPLAYCANCELBUTTON}'
            });
        }).not.toThrow();

        expect(hpaymentRequest).toBeInstanceOf(HostedPaymentPageRequest);
        expect(hpaymentRequest.orderid).toEqual('{ORDERID}');
        expect(hpaymentRequest.description).toEqual('{DESCRIPTION}');
        expect(hpaymentRequest.currency).toEqual('{CURRENCY}');
        expect(hpaymentRequest.amount).toEqual('{AMOUNT}');
        expect(hpaymentRequest.paymentProductList).toEqual('{PAYMENTPRODUCTLIST}');
        expect(hpaymentRequest.paymentProductCategoryList).toEqual('{PAYMENTPRODUCTCATEGORYLIST}');
        expect(hpaymentRequest.template).toEqual('{TEMPLATE}');
        expect(hpaymentRequest.timeLimitToPay).toEqual('{TIMELIMITTOPAY}');
        expect(hpaymentRequest.multiUse).toEqual('{MULTIUSE}');
        expect(hpaymentRequest.merchantDisplayName).toEqual('{MERCHANTDISPLAYNAME}');
        expect(hpaymentRequest.css).toEqual('{CSS}');
        expect(hpaymentRequest.displaySelector).toEqual('{DISPLAYSELECTOR}');
        expect(hpaymentRequest.eci).toEqual('{ECI}');
        expect(hpaymentRequest.authenticationIndicator).toEqual('{AUTHENTICATIONINDICATOR}');
        expect(hpaymentRequest.expirationLimit).toEqual('{EXPIRATIONLIMIT}');
        expect(hpaymentRequest.orderCategoryCode).toEqual('{ORDERCATEGORYCODE}');
        expect(hpaymentRequest.carrierDescription).toEqual('{CARRIERDESCRIPTION}');
        expect(hpaymentRequest.salesChannel).toEqual('{SALESCHANNEL}');
        expect(hpaymentRequest.themeCode).toEqual('{THEMECODE}');
        expect(hpaymentRequest.displayCancelButton).toEqual('{DISPLAYCANCELBUTTON}');
    });

    it('Initializes correctly with minimal parameters', () => {
        let hpaymentRequest;

        expect(() => {
            hpaymentRequest = new HostedPaymentPageRequest({
                orderid: '{ORDERID}',
                description: '{DESCRIPTION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}'
            });
        }).not.toThrow();

        expect(hpaymentRequest).toBeInstanceOf(HostedPaymentPageRequest);
        expect(hpaymentRequest.orderid).toEqual('{ORDERID}');
        expect(hpaymentRequest.description).toEqual('{DESCRIPTION}');
        expect(hpaymentRequest.currency).toEqual('{CURRENCY}');
        expect(hpaymentRequest.amount).toEqual('{AMOUNT}');
        expect(hpaymentRequest.paymentProductList).toEqual(null);
        expect(hpaymentRequest.paymentProductCategoryList).toEqual(null);
        expect(hpaymentRequest.template).toEqual(Template.BASIC_JS);
        expect(hpaymentRequest.timeLimitToPay).toEqual(null);
        expect(hpaymentRequest.multiUse).toEqual(null);
        expect(hpaymentRequest.merchantDisplayName).toEqual(null);
        expect(hpaymentRequest.css).toEqual(null);
        expect(hpaymentRequest.displaySelector).toEqual(null);
        expect(hpaymentRequest.eci).toEqual(null);
        expect(hpaymentRequest.authenticationIndicator).toEqual(AuthenticationIndicator.AVAILABLE);
        expect(hpaymentRequest.expirationLimit).toEqual(3);
        expect(hpaymentRequest.orderCategoryCode).toEqual(null);
        expect(hpaymentRequest.carrierDescription).toEqual(null);
        expect(hpaymentRequest.salesChannel).toEqual(null);
        expect(hpaymentRequest.themeCode).toEqual(null);
        expect(hpaymentRequest.displayCancelButton).toEqual(0);
    });

    it('Errors when orderid is absent', () => {
        let hpaymentRequest;

        expect(() => {
            hpaymentRequest = new HostedPaymentPageRequest({
                description: '{DESCRIPTION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
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
                themeCode: '{THEMECODE}',
                displayCancelButton: '{DISPLAYCANCELBUTTON}'
            });
        }).toThrow();

        try {
            new HostedPaymentPageRequest({
                description: '{DESCRIPTION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
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
                themeCode: '{THEMECODE}',
                displayCancelButton: '{DISPLAYCANCELBUTTON}'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Request must have an Order ID');
    });
    it('Errors when description is absent', () => {
        let hpaymentRequest;

        expect(() => {
            hpaymentRequest = new HostedPaymentPageRequest({
                orderid: '{ORDERID}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
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
                themeCode: '{THEMECODE}',
                displayCancelButton: '{DISPLAYCANCELBUTTON}'
            });
        }).toThrow();

        try {
            new HostedPaymentPageRequest({
                orderid: '{ORDERID}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
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
                themeCode: '{THEMECODE}',
                displayCancelButton: '{DISPLAYCANCELBUTTON}'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Request must have a description');
    });
    it('Errors when currency is absent', () => {
        let hpaymentRequest;

        expect(() => {
            hpaymentRequest = new HostedPaymentPageRequest({
                orderid: '{ORDERID}',
                description: '{DESCRIPTION}',
                amount: '{AMOUNT}',
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
                themeCode: '{THEMECODE}',
                displayCancelButton: '{DISPLAYCANCELBUTTON}'
            });
        }).toThrow();

        try {
            new HostedPaymentPageRequest({
                orderid: '{ORDERID}',
                description: '{DESCRIPTION}',
                amount: '{AMOUNT}',
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
                themeCode: '{THEMECODE}',
                displayCancelButton: '{DISPLAYCANCELBUTTON}'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Request must have a currency');
    });
    it('Errors when amount is absent', () => {
        let hpaymentRequest;

        expect(() => {
            hpaymentRequest = new HostedPaymentPageRequest({
                orderid: '{ORDERID}',
                description: '{DESCRIPTION}',
                currency: '{CURRENCY}',
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
                themeCode: '{THEMECODE}',
                displayCancelButton: '{DISPLAYCANCELBUTTON}'
            });
        }).toThrow();

        try {
            new HostedPaymentPageRequest({
                orderid: '{ORDERID}',
                description: '{DESCRIPTION}',
                currency: '{CURRENCY}',
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
                themeCode: '{THEMECODE}',
                displayCancelButton: '{DISPLAYCANCELBUTTON}'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Request must have an amount');
    });
});
