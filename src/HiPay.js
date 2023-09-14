'use strict';

const InvalidArgumentException = require('./Error/InvalidArgumentException');

const Configuration = require('./Gateway/HTTP/Configuration/Configuration');
const SimpleHTTPClient = require('./Gateway/HTTP/SimpleHTTPClient');

const PIDataClient = require('./Gateway/PIDataClient/PIDataClient');

const TransactionMapper = require('./Gateway/Response/Mapper/TransactionMapper');
const OperationMapper = require('./Gateway/Response/Mapper/OperationMapper');
const HostedPaymentPageMapper = require('./Gateway/Response/Mapper/HostedPaymentPageMapper');
const SecuritySettingsMapper = require('./Gateway/Response/Mapper/SecuritySettingsMapper');
const PaymentCardTokenMapper = require('./Gateway/Response/Mapper/PaymentCardTokenMapper');

const AbstractModel = require('./Gateway/Request/Model/AbstractModel');
const AbstractRequestPart = require('./Gateway/Request/AbstractRequestPart');

const OrderRequest = require('./Gateway/Request/OrderRequest');
const HostedPaymentPageRequest = require('./Gateway/Request/HostedPaymentPageRequest');
const MaintenanceRequest = require('./Gateway/Request/MaintenanceRequest');

const CustomerBillingInfoRequest = require('./Gateway/Request/Info/CustomerBillingInfoRequest');
const CustomerShippingInfoRequest = require('./Gateway/Request/Info/CustomerShippingInfoRequest');
const DeliveryShippingInfoRequest = require('./Gateway/Request/Info/DeliveryShippingInfoRequest');

const ThreeDSTwoModels = require('./Gateway/Request/Model/ThreeDSTwo');
const PaymentMethods = require('./Gateway/Request/PaymentMethod');

const TransactionEnums = require('./Enum/Transaction');
const ThreeDSTwoEnums = require('./Enum/ThreeDSTwo');
const HelperEnums = require('./Enum/Helper');
const CustomerEnums = require('./Enum/Customer');
const CartEnums = require('./Enum/Cart');

const DataCollections = require('./Data');

class HiPay {
    /**
     * @return {String} ENDPOINT_NEW_ORDER endpoint to create a new transaction order
     */
    static get ENDPOINT_NEW_ORDER() {
        return '/rest/v1/order';
    }

    /**
     * @return {String} METHOD_NEW_ORDER http method to create a new transaction order
     */
    static get METHOD_NEW_ORDER() {
        return 'POST';
    }

    /**
     * @return {String} ENDPOINT_HOSTED_PAYMENT_PAGE endpoint to call Hosted payment page
     */
    static get ENDPOINT_HOSTED_PAYMENT_PAGE() {
        return '/rest/v1/hpayment';
    }

    /**
     * @return {String} ENDPOINT_HOSTED_PAYMENT_PAGE_V2 endpoint to call new Hosted payment page
     */
    static get ENDPOINT_HOSTED_PAYMENT_PAGE_V2() {
        return '/v1/hpayment';
    }

    /**
     * @return {String} METHOD_HOSTED_PAYMENT_PAGE http method to call Hosted payment page
     */
    static get METHOD_HOSTED_PAYMENT_PAGE() {
        return 'POST';
    }

    /**
     * @return {String} ENDPOINT_MAINTENANCE_OPERATION endpoint to do a maintenance operation (capture, refund, accept, etc, ...)
     */
    static get ENDPOINT_MAINTENANCE_OPERATION() {
        return '/rest/v1/maintenance/transaction/{transaction}';
    }

    /**
     * @return {String} METHOD_MAINTENANCE_OPERATION http method to do a maintenance operation
     */
    static get METHOD_MAINTENANCE_OPERATION() {
        return 'POST';
    }

    /**
     * @return {String} ENDPOINT_TRANSACTION_DETAILS endpoint to call transaction information
     */
    static get ENDPOINT_TRANSACTION_INFORMATION() {
        return '/rest/v1/transaction/{transaction}';
    }

    /**
     * @return {String} METHOD_TRANSACTION_DETAILS http method to call transaction information
     */
    static get METHOD_TRANSACTION_INFORMATION() {
        return 'GET';
    }

    /**
     * @return {String} ENDPOINT_ORDER_TRANSACTION_INFORMATION endpoint to call transaction information
     */
    static get ENDPOINT_ORDER_TRANSACTION_INFORMATION() {
        return '/rest/v1/transaction';
    }

    /**
     * @return {String} METHOD_ORDER_TRANSACTION_INFORMATION http method to call transaction information
     */
    static get METHOD_ORDER_TRANSACTION_INFORMATION() {
        return 'GET';
    }

    /**
     * @return {String} ENDPOINT_SECURITY_SETTINGS endpoint to call security settings information
     */
    static get ENDPOINT_SECURITY_SETTINGS() {
        return '/rest/v2/security-settings';
    }

    /**
     * @return {String} METHOD_ORDER_TRANSACTION_INFORMATION http method to call transaction information
     */
    static get METHOD_SECURITY_SETTINGS() {
        return 'GET';
    }

    /**
     * @var {String} ENDPOINT_LOOKUP_TOKEN ENDPOINT_LOOKUP_TOKEN endpoint to get vault information by token
     */
    static get ENDPOINT_LOOKUP_TOKEN() {
        return 'v2/token/{token}';
    }

    /**
     * @var {String} METHOD_LOOKUP_TOKEN METHOD_LOOKUP_TOKEN http method to get vault information by token
     */
    static get METHOD_LOOKUP_TOKEN() {
        return 'GET';
    }

    static get API_ENV_STAGE() {
        return Configuration.API_ENV_STAGE;
    }

    static get API_ENV_PRODUCTION() {
        return Configuration.API_ENV_PRODUCTION;
    }

    /**
     * @type {Configuration}
     * @private
     */
    _configuration;

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
    constructor(options) {
        this._configuration = new Configuration(options);
        this._clientProvider = new SimpleHTTPClient(this._configuration);
    }

    /**
     * Request New Order
     * @param {OrderRequest} orderRequest
     * @param {Object} [options = {}] options
     * @param {String} [options.dataId=null] Custom dataId to use in call to Data API
     * @returns {Promise<import('./Gateway/Response/Transaction')>}
     */
    async requestNewOrder(orderRequest, { dataId = null } = {}) {
        if (!(orderRequest instanceof OrderRequest)) {
            orderRequest = new OrderRequest(orderRequest);
        }

        const piDataClient = new PIDataClient(this._clientProvider);
        const piDataId = piDataClient.getDataId(dataId);

        const formattedParams = {};
        HiPay.#formatParams(orderRequest, formattedParams);

        const response = await this._clientProvider.request(HiPay.METHOD_NEW_ORDER, HiPay.ENDPOINT_NEW_ORDER, {
            baseUrl: this._configuration.apiEndpoint,
            body: formattedParams
        });

        const transactionMapper = new TransactionMapper(response.body);
        const transaction = transactionMapper.mappedObject;

        if (piDataId) {
            piDataClient.sendData(piDataClient.getOrderData(piDataId, orderRequest, transaction));
        }

        return transaction;
    }

    /**
     * Executes Hosted Payment Page request
     * @param {HostedPaymentPageRequest} pageRequest
     * @param {Object} [options = {}] options
     * @param {String} [options.dataId=null] Custom dataId to use in call to Data API
     * @param {Boolean} [options.legacy=false] Call the legacy payment page
     * @returns {Promise<import('./Gateway/Response/Transaction')>} Resolves generate page URL
     */
    async requestHostedPaymentPage(pageRequest, { legacy = false, dataId = null } = {}) {
        if (!(pageRequest instanceof HostedPaymentPageRequest)) {
            pageRequest = new HostedPaymentPageRequest(pageRequest);
        }

        // Data API client
        const piDataClient = new PIDataClient(this._clientProvider);

        // Gets ID for Data API
        const piDataId = piDataClient.getDataId(dataId);

        const formattedParams = {};
        HiPay.#formatParams(pageRequest, formattedParams);

        const endpointHpayment = legacy ? HiPay.ENDPOINT_HOSTED_PAYMENT_PAGE : HiPay.ENDPOINT_HOSTED_PAYMENT_PAGE_V2;

        const hpaymentUrl = legacy ? this._configuration.apiEndpoint : this._configuration.hpaymentApiEndpoint;

        // Call Hosted Payment Page generation endpoint
        const response = await this._clientProvider.request(HiPay.METHOD_HOSTED_PAYMENT_PAGE, endpointHpayment, {
            baseUrl: hpaymentUrl,
            body: formattedParams,
            additionalHeaders: {
                ['X-HIPAY-DATA-ID']: piDataId
            }
        });

        const transactionMapper = new HostedPaymentPageMapper(response.body);
        const transaction = transactionMapper.mappedObject;

        // If Data API ID was generated, send data to DATA API
        if (piDataId) {
            piDataClient.sendData(piDataClient.getOrderData(piDataId, pageRequest, transaction));
        }

        return transaction;
    }

    /**
     * Executes a maintenance Operation
     * @param {MaintenanceRequest} maintenanceRequest
     * @param {String} transactionReference Transaction targeted by the maintenance
     * @returns {Promise<import('./Gateway/Response/Operation')>}
     */
    async requestMaintenanceOperation(maintenanceRequest, transactionReference) {
        if (!(maintenanceRequest instanceof MaintenanceRequest)) {
            maintenanceRequest = new MaintenanceRequest(maintenanceRequest);
        }

        if (!transactionReference || typeof transactionReference !== 'string') {
            throw new InvalidArgumentException('Transaction reference must be a string');
        }

        const formattedParams = {};
        HiPay.#formatParams(maintenanceRequest, formattedParams);

        const endPoint = HiPay.ENDPOINT_MAINTENANCE_OPERATION.split('{transaction}').join(transactionReference);

        const response = await this._clientProvider.request(HiPay.METHOD_MAINTENANCE_OPERATION, endPoint, {
            baseUrl: this._configuration.apiEndpoint,
            body: formattedParams
        });

        const operationMapper = new OperationMapper(response.body);

        return operationMapper.mappedObject;
    }

    /**
     * Returns a transaction information
     *
     * @param {String} transactionReference The HiPay transaction reference
     * @returns {Promise<import('./Gateway/Response/Transaction')|null>}
     */
    async requestTransactionInformation(transactionReference) {
        if (!transactionReference || typeof transactionReference !== 'string') {
            throw new InvalidArgumentException('Transaction reference must be a string');
        }

        const endPoint = HiPay.ENDPOINT_TRANSACTION_INFORMATION.split('{transaction}').join(transactionReference);

        const response = await this._clientProvider.request(HiPay.METHOD_TRANSACTION_INFORMATION, endPoint, {
            baseUrl: this._configuration.apiEndpoint
        });

        if (response.body.transaction) {
            response.body.transaction.basket = response.body.basket;

            const transactionMapper = new TransactionMapper(response.body.transaction);

            return transactionMapper.mappedObject;
        } else {
            return null;
        }
    }

    /**
     * Returns a transaction information based on a order ID
     *
     * @param {String} orderId The order id to search for
     * @returns {Promise<Array<import('./Gateway/Response/Transaction')>>}
     */
    async requestOrderTransactionInformation(orderId) {
        if (!orderId || typeof orderId !== 'string') {
            throw new InvalidArgumentException('Order ID must be a string');
        }

        const transactions = [];

        const endPoint = `${HiPay.ENDPOINT_ORDER_TRANSACTION_INFORMATION}?orderid=${orderId}`;

        const response = await this._clientProvider.request(HiPay.METHOD_ORDER_TRANSACTION_INFORMATION, endPoint, {
            baseUrl: this._configuration.apiEndpoint
        });

        if (response.body.transaction) {
            // Single transaction response
            if (response.body.transaction.state) {
                const transactionMapper = new TransactionMapper(response.body.transaction);

                transactions.push(transactionMapper.mappedObject);
            } else {
                //Array of transactions

                for (const transaction of response.body.transaction) {
                    const transactionMapper = new TransactionMapper(transaction);

                    transactions.push(transactionMapper.mappedObject);
                }
            }
        }

        return transactions;
    }

    /**
     * Returns security settings
     *
     * @returns {Promise<import('./Gateway/Response/SecuritySettings')>}
     */
    async requestSecuritySettings() {
        const response = await this._clientProvider.request(HiPay.METHOD_SECURITY_SETTINGS, HiPay.ENDPOINT_SECURITY_SETTINGS, {
            baseUrl: this._configuration.apiEndpoint
        });

        const securitySettingsMapper = new SecuritySettingsMapper(response.body);
        return securitySettingsMapper.mappedObject;
    }

    /**
     * Returns vault information by token
     *
     * @param {String} token
     * @param {String} requestId
     * @returns {Promise<import('./Gateway/Response/PaymentCardToken')>}
     */
    async requestLookupToken(token, requestId = '0') {
        let endpoint = HiPay.ENDPOINT_LOOKUP_TOKEN.replace('{token}', token);
        endpoint += `?request_id=${requestId}`;

        const response = await this._clientProvider.request(HiPay.METHOD_LOOKUP_TOKEN, endpoint, {
            baseUrl: this._configuration.secureVaultEndpoint
        });

        const paymentCardTokenMapper = new PaymentCardTokenMapper(response.body);
        return paymentCardTokenMapper.mappedObject;
    }

    /**
     * Formats parameters recursively for order API
     * @param {Object} object The object to format
     * @param {Object} formattedParams The formatted params to update
     */
    static #formatParams(object, formattedParams) {
        for (const prop in object) {
            if (Object.prototype.hasOwnProperty.call(object, prop)) {
                let value = object[prop];

                if (typeof value !== 'undefined' && value !== null) {
                    if (typeof value === 'object') {
                        if (value instanceof AbstractModel) {
                            if (value.cleanNullValues()) {
                                formattedParams[HiPay.#camelCaseToSnakeCase(prop)] = value.toJson();
                            }
                        } else if (value instanceof AbstractRequestPart) {
                            HiPay.#formatParams(value, formattedParams);
                        } else {
                            formattedParams[HiPay.#camelCaseToSnakeCase(prop)] = JSON.stringify(value);
                        }
                    } else {
                        formattedParams[HiPay.#camelCaseToSnakeCase(prop)] = value;
                    }
                }
            }
        }
    }

    /**
     * Transforms a camelCase string into a snake_case string
     * @param {String} propName
     */
    static #camelCaseToSnakeCase(propName) {
        return propName.replace(/([A-Z])/g, '_$1').toLowerCase();
    }
}

HiPay.OrderRequest = OrderRequest;
HiPay.HostedPaymentPageRequest = HostedPaymentPageRequest;
HiPay.MaintenanceRequest = MaintenanceRequest;

HiPay.CustomerBillingInfoRequest = CustomerBillingInfoRequest;
HiPay.CustomerShippingInfoRequest = CustomerShippingInfoRequest;
HiPay.DeliveryShippingInfoRequest = DeliveryShippingInfoRequest;

HiPay.PaymentMethods = PaymentMethods;

HiPay.Transaction = TransactionEnums;
HiPay.ThreeDSTwo = {
    ...ThreeDSTwoEnums,
    ...ThreeDSTwoModels
};
HiPay.Helper = HelperEnums;
HiPay.Customer = CustomerEnums;
HiPay.Cart = CartEnums;

HiPay.DataCollections = DataCollections;

module.exports = HiPay;
