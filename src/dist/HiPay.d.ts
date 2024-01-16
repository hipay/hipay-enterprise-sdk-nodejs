export = HiPay;
declare class HiPay {
    /**
     * @return {String} ENDPOINT_NEW_ORDER endpoint to create a new transaction order
     */
    static get ENDPOINT_NEW_ORDER(): string;
    /**
     * @return {String} METHOD_NEW_ORDER http method to create a new transaction order
     */
    static get METHOD_NEW_ORDER(): string;
    /**
     * @return {String} ENDPOINT_HOSTED_PAYMENT_PAGE endpoint to call Hosted payment page
     */
    static get ENDPOINT_HOSTED_PAYMENT_PAGE(): string;
    /**
     * @return {String} ENDPOINT_HOSTED_PAYMENT_PAGE_V2 endpoint to call new Hosted payment page
     */
    static get ENDPOINT_HOSTED_PAYMENT_PAGE_V2(): string;
    /**
     * @return {String} METHOD_HOSTED_PAYMENT_PAGE http method to call Hosted payment page
     */
    static get METHOD_HOSTED_PAYMENT_PAGE(): string;
    /**
     * @return {String} ENDPOINT_MAINTENANCE_OPERATION endpoint to do a maintenance operation (capture, refund, accept, etc, ...)
     */
    static get ENDPOINT_MAINTENANCE_OPERATION(): string;
    /**
     * @return {String} METHOD_MAINTENANCE_OPERATION http method to do a maintenance operation
     */
    static get METHOD_MAINTENANCE_OPERATION(): string;
    /**
     * @return {String} ENDPOINT_TRANSACTION_DETAILS endpoint to call transaction information
     */
    static get ENDPOINT_TRANSACTION_INFORMATION(): string;
    /**
     * @return {String} METHOD_TRANSACTION_DETAILS http method to call transaction information
     */
    static get METHOD_TRANSACTION_INFORMATION(): string;
    /**
     * @return {String} ENDPOINT_ORDER_TRANSACTION_INFORMATION endpoint to call transaction information
     */
    static get ENDPOINT_ORDER_TRANSACTION_INFORMATION(): string;
    /**
     * @return {String} METHOD_ORDER_TRANSACTION_INFORMATION http method to call transaction information
     */
    static get METHOD_ORDER_TRANSACTION_INFORMATION(): string;
    /**
     * @return {String} ENDPOINT_SECURITY_SETTINGS endpoint to call security settings information
     */
    static get ENDPOINT_SECURITY_SETTINGS(): string;
    /**
     * @return {String} METHOD_ORDER_TRANSACTION_INFORMATION http method to call transaction information
     */
    static get METHOD_SECURITY_SETTINGS(): string;
    /**
     * @var {String} ENDPOINT_LOOKUP_TOKEN ENDPOINT_LOOKUP_TOKEN endpoint to get vault information by token
     */
    static get ENDPOINT_LOOKUP_TOKEN(): string;
    /**
     * @var {String} METHOD_LOOKUP_TOKEN METHOD_LOOKUP_TOKEN http method to get vault information by token
     */
    static get METHOD_LOOKUP_TOKEN(): string;
    static get API_ENV_STAGE(): string;
    static get API_ENV_PRODUCTION(): string;
    /**
     * Formats parameters recursively for order API
     * @param {Object} object The object to format
     * @param {Object} formattedParams The formatted params to update
     */
    static "__#2@#formatParams"(object: any, formattedParams: any): void;
    /**
     * Transforms a camelCase string into a snake_case string
     * @param {String} propName
     */
    static "__#2@#camelCaseToSnakeCase"(propName: string): string;
    /**
     * Creates an instance of the SDK
     *
     * @param {Object} options
     * @param {String} [options.apiToken=null] Your authentication token for the HiPay API. Either this or username and password must be specified.
     * @param {String} [options.apiUsername=null] Your username for the HiPay API. Either username and password or token must be specified.
     * @param {String} [options.apiPassword=null] Your password for the HiPay API. Either username and password or token must be specified.
     * @param {String} [options.apiEnv=Configuration.API_ENV_STAGE] The HiPay API environment (production or stage), defaults to stage
     * @param {String} [options.apiHTTPHeaderAccept='application/json'] The accept header to set for the requests. Defaults to JSON
     * @param {Object} [options.proxy={}] Proxy information to add to the requests
     * @param {String} [options.proxy.host] Your proxy host
     * @param {Number} [options.proxy.port] Your proxy port
     * @param {Object} [options.proxy.auth] Your proxy authentication information
     * @param {String} [options.proxy.auth.username] Proxy authentication Username
     * @param {String} [options.proxy.auth.password] Proxy authentication Password
     * @param {Number} [options.timeout=35] The timeout of the requests. Defaults to 35 seconds
     * @param {String} [options.httpUserAgent='HiPayEnterprise/1.0 (SDK NodeJS)'] The user agent of the requests.
     */
    constructor(options: {
        apiToken?: string;
        apiUsername?: string;
        apiPassword?: string;
        apiEnv?: string;
        apiHTTPHeaderAccept?: string;
        proxy?: {
            host?: string;
            port?: number;
            auth?: {
                username?: string;
                password?: string;
            };
        };
        timeout?: number;
        httpUserAgent?: string;
    });
    /**
     * @type {Configuration}
     * @private
     */
    private _configuration;
    _clientProvider: SimpleHTTPClient;
    /**
     * Request New Order
     * @param {OrderRequest} orderRequest
     * @param {Object} [options = {}] options
     * @param {String} [options.dataId=null] Custom dataId to use in call to Data API
     * @returns {Promise<import('./Gateway/Response/Transaction')>}
     */
    requestNewOrder(orderRequest: OrderRequest, { dataId }?: {
        dataId?: string;
    }): Promise<import('./Gateway/Response/Transaction')>;
    /**
     * Executes Hosted Payment Page request
     * @param {HostedPaymentPageRequest} pageRequest
     * @param {Object} [options = {}] options
     * @param {String} [options.dataId=null] Custom dataId to use in call to Data API
     * @param {Boolean} [options.legacy=false] Call the legacy payment page
     * @returns {Promise<import('./Gateway/Response/Transaction')>} Resolves generate page URL
     */
    requestHostedPaymentPage(pageRequest: HostedPaymentPageRequest, { legacy, dataId }?: {
        dataId?: string;
        legacy?: boolean;
    }): Promise<import('./Gateway/Response/Transaction')>;
    /**
     * Executes a maintenance Operation
     * @param {MaintenanceRequest} maintenanceRequest
     * @param {String} transactionReference Transaction targeted by the maintenance
     * @returns {Promise<import('./Gateway/Response/Operation')>}
     */
    requestMaintenanceOperation(maintenanceRequest: MaintenanceRequest, transactionReference: string): Promise<import('./Gateway/Response/Operation')>;
    /**
     * Returns a transaction information
     *
     * @param {String} transactionReference The HiPay transaction reference
     * @returns {Promise<import('./Gateway/Response/Transaction')|null>}
     */
    requestTransactionInformation(transactionReference: string): Promise<import('./Gateway/Response/Transaction') | null>;
    /**
     * Returns a transaction information based on a order ID
     *
     * @param {String} orderId The order id to search for
     * @returns {Promise<Array<import('./Gateway/Response/Transaction')>>}
     */
    requestOrderTransactionInformation(orderId: string): Promise<Array<import('./Gateway/Response/Transaction')>>;
    /**
     * Returns security settings
     *
     * @returns {Promise<import('./Gateway/Response/SecuritySettings')>}
     */
    requestSecuritySettings(): Promise<import('./Gateway/Response/SecuritySettings')>;
    /**
     * Returns vault information by token
     *
     * @param {String} token
     * @param {String} requestId
     * @returns {Promise<import('./Gateway/Response/PaymentCardToken')>}
     */
    requestLookupToken(token: string, requestId?: string): Promise<import('./Gateway/Response/PaymentCardToken')>;
}
declare namespace HiPay {
    export { OrderRequest };
    export { HostedPaymentPageRequest };
    export { MaintenanceRequest };
    export { CustomerBillingInfoRequest };
    export { CustomerShippingInfoRequest };
    export { DeliveryShippingInfoRequest };
    export { PaymentMethods };
    export { Transaction };
    export { Operation };
    export let ThreeDSTwo: {
        AccountInfo: typeof ThreeDSTwoModels.AccountInfo;
        BrowserInfo: typeof ThreeDSTwoModels.BrowserInfo;
        MerchantRiskStatement: typeof ThreeDSTwoModels.MerchantRiskStatement;
        PreviousAuthInfo: typeof ThreeDSTwoModels.PreviousAuthInfo;
        RecurringInfo: typeof ThreeDSTwoModels.RecurringInfo;
        DeliveryTimeFrame: {
            ELECTRONIC_DELIVERY: number;
            SAME_DAY_SHIPPING: number;
            OVERNIGHT_SHIPPING: number;
            TWO_DAY_OR_MORE_SHIPPING: number;
        };
        DeviceChannel: {
            APP_BASED: number;
            BROWSER: number;
            THREE_DS_REQUESTOR_INITIATED: number;
        };
        NameIndicator: {
            IDENTICAL: number;
            DIFFERENT: number;
        };
        PurchaseIndicator: {
            MERCHANDISE_AVAILABLE: number;
            FUTURE_AVAILABILITY: number;
        };
        ReorderIndicator: {
            FIRST_TIME_ORDERED: number;
            REORDERED: number;
        };
        SalesChannel: {
            DEFAULT: number;
            ECOMMERCE_API: number;
            HOSTED_PAYMENT_PAGE: number;
            POS: number;
        };
        ShippingIndicator: {
            SHIP_TO_CARDHOLDER_BILLING_ADDRESS: number;
            SHIP_TO_VERIFIED_ADDRESS: number;
            SHIP_TO_DIFFERENT_ADDRESS: number;
            SHIP_TO_STORE: number;
            DIGITAL_GOODS: number;
            DIGITAL_TRAVEL_EVENT_TICKETS: number;
            OTHER: number;
        };
        SuspiciousActivity: {
            NO_SUSPICIOUS_ACTIVITY: number;
            SUSPICIOUS_ACTIVITY: number;
        };
    };
    export { HelperEnums as Helper };
    export { CustomerEnums as Customer };
    export { CartEnums as Cart };
    export { DataCollections };
    export { HiPayNodeSDKError };
}
import SimpleHTTPClient = require("./Gateway/HTTP/SimpleHTTPClient");
import OrderRequest = require("./Gateway/Request/OrderRequest");
import HostedPaymentPageRequest = require("./Gateway/Request/HostedPaymentPageRequest");
import MaintenanceRequest = require("./Gateway/Request/MaintenanceRequest");
import CustomerBillingInfoRequest = require("./Gateway/Request/Info/CustomerBillingInfoRequest");
import CustomerShippingInfoRequest = require("./Gateway/Request/Info/CustomerShippingInfoRequest");
import DeliveryShippingInfoRequest = require("./Gateway/Request/Info/DeliveryShippingInfoRequest");
import PaymentMethods = require("./Gateway/Request/PaymentMethod");
import Transaction = require("./Gateway/Response/Transaction");
import Operation = require("./Gateway/Response/Operation");
import ThreeDSTwoModels = require("./Gateway/Request/Model/ThreeDSTwo");
import HelperEnums = require("./Enum/Helper");
import CustomerEnums = require("./Enum/Customer");
import CartEnums = require("./Enum/Cart");
import DataCollections = require("./Data");
import HiPayNodeSDKError = require("./Error/HiPayNodeSDKError");
//# sourceMappingURL=HiPay.d.ts.map