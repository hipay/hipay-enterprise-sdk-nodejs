const HostedPaymentPageRequest = require('../../../../Gateway/Request/HostedPaymentPageRequest');
const Template = require('../../../../Enum/Transaction/Template');

const InvalidArgumentException = require('../../../../Error/InvalidArgumentException');
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
                displaySelector: '{DISPLAYSELECTOR}'
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
                displaySelector: '{DISPLAYSELECTOR}'
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
                displaySelector: '{DISPLAYSELECTOR}'
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
                displaySelector: '{DISPLAYSELECTOR}'
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
                displaySelector: '{DISPLAYSELECTOR}'
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
                displaySelector: '{DISPLAYSELECTOR}'
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
                displaySelector: '{DISPLAYSELECTOR}'
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
                displaySelector: '{DISPLAYSELECTOR}'
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
                displaySelector: '{DISPLAYSELECTOR}'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Request must have an amount');
    });
});
