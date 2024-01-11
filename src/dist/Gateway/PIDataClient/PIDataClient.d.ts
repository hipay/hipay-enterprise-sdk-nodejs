export = PIDataClient;
declare class PIDataClient {
    /**
     * endpoint to create / update a data set
     * @var {String} ENDPOINT_DATA_API
     */
    static get ENDPOINT_DATA_API(): string;
    /**
     * http method to create / update a data set
     * @var {String} METHOD_DATA_API
     */
    static get METHOD_DATA_API(): string;
    /**
     * Construct gateway client with an HTTP client
     * @param {SimpleHTTPClient} clientProvider client provider
     */
    constructor(clientProvider: SimpleHTTPClient);
    /**
     * @type {SimpleHTTPClient}
     * @private
     */
    private _clientProvider;
    _requestDate: string;
    /**
     * Execute HTTP request
     * @param {Object} data
     */
    sendData(data: any): Promise<void>;
    /**
     * Returns Order Request data
     * @param {(String|undefined)} dataId sha256 dataId
     * @param {OrderRequest} orderRequest Order Request
     * @param {Transaction} transaction Transaction
     * @returns Order parameters
     */
    getOrderData(dataId: (string | undefined), orderRequest: OrderRequest, transaction: Transaction): {
        event: string;
        transaction_id: number;
        status: any;
        eci: any;
        mid: any;
        payment_method: any;
        id: string;
        amount: number;
        currency: any;
        order_id: any;
        customer: {
            email: any;
            cid: any;
            ipaddr: any;
        };
        monitoring: {
            date_request: string;
            date_response: string;
        };
        domain: string;
        components: {
            cms: any;
            cms_version: any;
            cms_module_version: any;
            sdk_server: string;
            sdk_server_version: any;
            sdk_server_engine_version: string;
        };
    };
    /**
     * Returns HPayment Request data
     * @param {(String|undefined)} dataId sha256 dataId
     * @param {HostedPaymentPageRequest} hostedPaymentPageRequest Order Request
     * @returns Hpayment parameters
     */
    getHPaymentData(dataId: (string | undefined), hostedPaymentPageRequest: HostedPaymentPageRequest): {
        event: string;
        payment_method: any;
        merchant_display_name: any;
        components: {
            template: any;
            cms: any;
            cms_version: any;
            cms_module_version: any;
            sdk_server: string;
            sdk_server_version: any;
            sdk_server_engine_version: string;
        };
        display_cancel_button: boolean;
        id: string;
        amount: number;
        currency: any;
        order_id: any;
        customer: {
            email: any;
            cid: any;
            ipaddr: any;
        };
        monitoring: {
            date_request: string;
            date_response: string;
        };
        domain: string;
    };
    /**
     * Gets common data for every kind of request
     * @param {String} dataId
     * @param {TransactionRequest} transactionRequest
     */
    getCommonData(dataId: string, transactionRequest: TransactionRequest): {
        id: string;
        amount: number;
        currency: any;
        order_id: any;
        customer: {
            email: any;
            cid: any;
            ipaddr: any;
        };
        monitoring: {
            date_request: string;
            date_response: string;
        };
        domain: string;
        components: {
            cms: any;
            cms_version: any;
            cms_module_version: any;
            sdk_server: string;
            sdk_server_version: any;
            sdk_server_engine_version: string;
        };
    };
    /**
     * Return current HTTP client provider
     * @returns client provider
     */
    get clientProvider(): SimpleHTTPClient;
    /**
     * Generate new UTC Date
     * @returns new date
     */
    setNewDate(): string;
    /**
     * Get domain of an URL
     * @param {String} url URL
     * @returns domain
     */
    getDomainFromUrl(url: string): string;
    /**
     * Returns the data_id, or creates a new one in the form of uuid if not set
     * @returns {String} dataId
     */
    getDataId(dataId?: any): string;
}
import SimpleHTTPClient = require("../HTTP/SimpleHTTPClient");
//# sourceMappingURL=PIDataClient.d.ts.map