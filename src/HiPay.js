'use strict';

const Configuration = require('./Gateway/HTTP/Configuration/Configuration');
const OrderRequest = require('./Gateway/Request/OrderRequest');
const InvalidArgumentException = require('./Error/InvalidArgumentException');
const PIDataClient = require('./Gateway/PIDataClient/PIDataClient');
const TransactionMapper = require('./Gateway/Response/Mapper/TransactionMapper');
const HostedPaymentPageRequest = require('./Gateway/Request/HostedPaymentPageRequest');
const HostedPaymentPageMapper = require('./Gateway/Response/Mapper/HostedPaymentPageMapper');
const MaintenanceRequest = require('./Gateway/Request/MaintenanceRequest');
const OperationMapper = require('./Gateway/Response/Mapper/OperationMapper');
const SecuritySettingsMapper = require('./Gateway/Response/Mapper/SecuritySettingsMapper');
const AbstractRequestPart = require('./Gateway/Request/AbstractRequestPart');
const AbstractModel = require('./Gateway/Request/Model/AbstractModel');
const SimpleHTTPClient = require('./Gateway/HTTP/SimpleHTTPClient');

class HiPay {
  /**
   * @return {string} ENDPOINT_NEW_ORDER endpoint to create a new transaction order
   */
  static get ENDPOINT_NEW_ORDER() {
    return '/rest/v1/order';
  }

  /**
   * @return {string} METHOD_NEW_ORDER http method to create a new transaction order
   */
  static get METHOD_NEW_ORDER() {
    return 'POST';
  }

  /**
   * @return {string} ENDPOINT_HOSTED_PAYMENT_PAGE endpoint to call Hosted payment page
   */
  static get ENDPOINT_HOSTED_PAYMENT_PAGE() {
    return '/rest/v1/hpayment';
  }

  /**
   * @return {string} ENDPOINT_HOSTED_PAYMENT_PAGE_V2 endpoint to call new Hosted payment page
   */
  static get ENDPOINT_HOSTED_PAYMENT_PAGE_V2() {
    return '/v1/hpayment';
  }

  /**
   * @return {string} METHOD_HOSTED_PAYMENT_PAGE http method to call Hosted payment page
   */
  static get METHOD_HOSTED_PAYMENT_PAGE() {
    return 'POST';
  }

  /**
   * @return {string} ENDPOINT_MAINTENANCE_OPERATION endpoint to do a maintenance operation (capture, refund, accept, etc, ...)
   */
  static get ENDPOINT_MAINTENANCE_OPERATION() {
    return '/rest/v1/maintenance/transaction/{transaction}';
  }

  /**
   * @return {string} METHOD_MAINTENANCE_OPERATION http method to do a maintenance operation
   */
  static get METHOD_MAINTENANCE_OPERATION() {
    return 'POST';
  }

  /**
   * @return {string} ENDPOINT_TRANSACTION_DETAILS endpoint to call transaction information
   */
  static get ENDPOINT_TRANSACTION_INFORMATION() {
    return '/rest/v1/transaction/{transaction}';
  }

  /**
   * @return {string} METHOD_TRANSACTION_DETAILS http method to call transaction information
   */
  static get METHOD_TRANSACTION_INFORMATION() {
    return 'GET';
  }

  /**
   * @return {string} ENDPOINT_ORDER_TRANSACTION_INFORMATION endpoint to call transaction information
   */
  static get ENDPOINT_ORDER_TRANSACTION_INFORMATION() {
    return '/rest/v1/transaction';
  }

  /**
   * @return {string} METHOD_ORDER_TRANSACTION_INFORMATION http method to call transaction information
   */
  static get METHOD_ORDER_TRANSACTION_INFORMATION() {
    return 'GET';
  }

  /**
   * @return {string} ENDPOINT_SECURITY_SETTINGS endpoint to call security settings information
   */
  static get ENDPOINT_SECURITY_SETTINGS() {
    return '/rest/v2/security-settings';
  }

  /**
   * @return {string} METHOD_ORDER_TRANSACTION_INFORMATION http method to call transaction information
   */
  static get METHOD_SECURITY_SETTINGS() {
    return 'GET';
  }

  static get OrderRequest() {
    return OrderRequest;
  }

  static get HostedPaymentPageRequest() {
    return HostedPaymentPageRequest;
  }

  static get MaintenanceRequest() {
    return MaintenanceRequest;
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
   * @param {string} [options.apiToken=null] Your authentication token for the HiPay API. Either this or username and password must be specified.
   * @param {string} [options.apiUsername=null] Your username for the HiPay API. Either username and password or token must be specified.
   * @param {string} [options.apiPassword=null] Your password for the HiPay API. Either username and password or token must be specified.
   * @param {string} [options.apiEnv=Configuration.API_ENV_STAGE] The HiPay API environment (production or stage), defaults to stage
   * @param {string} [options.apiHTTPHeaderAccept='application/json'] The accept header to set for the requests. Defaults to JSON
   * @param {Object} [options.proxy={}] Proxy information to add to the requests
   * @param {string} [options.proxy.host] Your proxy host
   * @param {Number} [options.proxy.port] Your proxy port
   * @param {Object} [options.proxy.auth] Your proxy authentication information
   * @param {string} [options.proxy.auth.username] Proxy authentication Username
   * @param {string} [options.proxy.auth.password] Proxy authentication Password
   * @param {Number} [options.timeout=35] The timeout of the requests. Defaults to 35 seconds
   * @param {string} [options.httpUserAgent='HiPayFullservice/1.0 (SDK NodeJS)'] The user agent of the requests.
   */
  constructor(options) {
    this._configuration = new Configuration(options);
    this._clientProvider = new SimpleHTTPClient(this._configuration);
  }

  /**
   * Request New Order
   * @param {OrderRequest} orderRequest
   * @returns {Promise<Transaction>}
   */
  async requestNewOrder(orderRequest) {
    if (!(orderRequest instanceof OrderRequest)) {
      throw new InvalidArgumentException(
        'Order Request should be instance of OrderRequest class'
      );
    }

    let piDataClient = new PIDataClient(this._clientProvider);
    let piDataId = piDataClient.getDataId(
      orderRequest.deviceFingerprint,
      orderRequest.acceptUrl,
      orderRequest.orderid
    );

    let formattedParams = {};
    HiPay.#formatParams(orderRequest, formattedParams);

    let response = await this._clientProvider.request(
      HiPay.METHOD_NEW_ORDER,
      HiPay.ENDPOINT_NEW_ORDER,
      {
        baseUrl: this._configuration.apiEndpoint,
        body: formattedParams
      }
    );

    let transactionMapper = new TransactionMapper(response.body);
    let transaction = transactionMapper.mappedObject;

    if (piDataId) {
      piDataClient.sendData(
        piDataClient.getOrderData(piDataId, orderRequest, transaction)
      );
    }

    return transaction;
  }

  /**
   * Executes Hosted Payment Page request
   * @param {HostedPaymentPageRequest} pageRequest
   * @param {boolean} legacy Call the legacy payment page
   * @returns {Promise<Transaction>} Resolves generate page URL
   */
  async requestHostedPaymentPage(pageRequest, legacy = false) {
    if (!(pageRequest instanceof HostedPaymentPageRequest)) {
      pageRequest = new HostedPaymentPageRequest(pageRequest);
    }

    // Data API client
    let piDataClient = new PIDataClient(this._clientProvider);

    // Gets ID for Data API
    // If there is no device fingerprint, only uses acceptUrl
    let piDataId = piDataClient.getDataId(
      pageRequest.deviceFingerprint,
      pageRequest.acceptUrl,
      pageRequest.orderid
    );

    let formattedParams = {};
    HiPay.#formatParams(pageRequest, formattedParams);

    const endpointHpayment = legacy
      ? HiPay.ENDPOINT_HOSTED_PAYMENT_PAGE
      : HiPay.ENDPOINT_HOSTED_PAYMENT_PAGE_V2;

    const hpaymentUrl = legacy
      ? this._configuration.apiEndpoint
      : this._configuration.hpaymentApiEndpoint;

    // Call Hosted Payment Page generation endpoint
    let response = await this._clientProvider.request(
      HiPay.METHOD_HOSTED_PAYMENT_PAGE,
      endpointHpayment,
      {
        baseUrl: hpaymentUrl,
        body: formattedParams
      }
    );

    let transactionMapper = new HostedPaymentPageMapper(response.body);
    let transaction = transactionMapper.mappedObject;

    // If Data API ID was generated, send data to DATA API
    if (piDataId) {
      piDataClient.sendData(
        piDataClient.getOrderData(piDataId, pageRequest, transaction)
      );
    }

    return transaction;
  }

  /**
   * Executes a maintenance Operation
   * @param {MaintenanceRequest} maintenanceRequest
   * @param {String} transactionReference Transaction targeted by the maintenance
   * @returns {Promise<Operation>}
   */
  async requestMaintenanceOperation(maintenanceRequest, transactionReference) {
    if (!(maintenanceRequest instanceof MaintenanceRequest)) {
      throw new InvalidArgumentException(
        'Maintenance Request should be instance of MaintenanceRequest class'
      );
    }

    let formattedParams = {};
    HiPay.#formatParams(maintenanceRequest, formattedParams);

    let endPoint =
      HiPay.ENDPOINT_MAINTENANCE_OPERATION.split('{transaction}').join(
        transactionReference
      );

    let response = await this._clientProvider.request(
      HiPay.METHOD_MAINTENANCE_OPERATION,
      endPoint,
      {
        baseUrl: this._configuration.apiEndpoint,
        body: formattedParams
      }
    );

    let operationMapper = new OperationMapper(response.body);

    return operationMapper.mappedObject;
  }

  /**
   * Returns a transaction information
   *
   * @param {String} transactionReference The HiPay transaction reference
   * @returns {Promise<Transaction|null>}
   */
  async requestTransactionInformation(transactionReference) {
    let endPoint =
      HiPay.ENDPOINT_TRANSACTION_INFORMATION.split('{transaction}').join(
        transactionReference
      );

    let response = await this._clientProvider.request(
      HiPay.METHOD_TRANSACTION_INFORMATION,
      endPoint,
      {
        baseUrl: this._configuration.apiEndpoint
      }
    );

    if (response.body.transaction) {
      response.body.transaction.basket = response.body.basket;

      let transactionMapper = new TransactionMapper(response.body.transaction);

      return transactionMapper.mappedObject;
    } else {
      return null;
    }
  }

  /**
   * Returns a transaction information based on a order ID
   *
   * @param {String} orderId The order id to search for
   * @returns {Promise<Array<Transaction>|null>}
   */
  async requestOrderTransactionInformation(orderId) {
    let transactions = [];

    let endPoint = `${HiPay.ENDPOINT_ORDER_TRANSACTION_INFORMATION}?orderid=${orderId}`;

    let response = await this._clientProvider.request(
      HiPay.METHOD_ORDER_TRANSACTION_INFORMATION,
      endPoint,
      {
        baseUrl: this._configuration.apiEndpoint
      }
    );

    if (response.body.transaction) {
      // Single transaction response
      if (response.body.transaction?.state) {
        let transactionMapper = new TransactionMapper(
          response.body.transaction
        );

        transactions.push(transactionMapper.mappedObject);
      } else {
        //Array of transactions

        for (let transaction of response.body.transaction) {
          let transactionMapper = new TransactionMapper(transaction);

          transactions.push(transactionMapper.mappedObject);
        }
      }
    } else {
      return null;
    }

    return transactions;
  }

  /**
   * Returns security settings
   *
   * @returns {Promise<SecuritySettings>}
   */
  async requestSecuritySettings() {
    let response = await this._clientProvider.request(
      HiPay.METHOD_SECURITY_SETTINGS,
      HiPay.ENDPOINT_SECURITY_SETTINGS,
      {
        baseUrl: this._configuration.apiEndpoint
      }
    );

    let securitySettingsMapper = new SecuritySettingsMapper(response.body);
    return securitySettingsMapper.mappedObject;
  }

  static #formatParams(object, formattedParams) {
    for (let prop in object) {
      if (Object.prototype.hasOwnProperty.call(object, prop)) {
        let value = object[prop];

        if (typeof value !== 'undefined' && value !== null) {
          if (typeof value === 'object') {
            if (value instanceof AbstractRequestPart) {
              HiPay.#formatParams(value, formattedParams);
            } else if (value instanceof AbstractModel) {
              if (value.cleanNullValues()) {
                formattedParams[HiPay.#formatPropName(prop)] = value.toJson();
              }
            } else {
              formattedParams[HiPay.#formatPropName(prop)] =
                JSON.stringify(value);
            }
          } else {
            formattedParams[HiPay.#formatPropName(prop)] = value;
          }
        }
      }
    }
  }

  static #formatPropName(propName) {
    return propName.replace(/([A-Z])/g, '_$1').toLowerCase();
  }
}

module.exports = HiPay;
