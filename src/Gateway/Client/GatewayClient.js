'use strict';

const GatewayClientInterface = require('./GatewayClientInterface');
const ClientInterface = require('../HTTP/ClientInterface');
const InvalidArgumentException = require('../../Error/InvalidArgumentException');
const OrderRequest = require('../Request/OrderRequest');
const AbstractRequestPart = require('../Request/AbstractRequestPart');
const AbstractModel = require('../Request/Model/AbstractModel');
const TransactionMapper = require('../Response/Mapper/TransactionMapper');
const PIDataClient = require('../PIDataClient/PIDataClient');

class GatewayClient extends GatewayClientInterface {
  /**
   *
   * @var string ENDPOINT_NEW_ORDER endpoint to create a new transaction order
   */
  static get ENDPOINT_NEW_ORDER() {
    return '/rest/v1/order';
  }

  /**
   *
   * @var string METHOD_NEW_ORDER http method to create a new transaction order
   */
  static get METHOD_NEW_ORDER() {
    return 'POST';
  }

  /**
   *
   * @var string ENDPOINT_HOSTED_PAYMENT_PAGE endpoint to call Hosted payment page
   */
  static get ENDPOINT_HOSTED_PAYMENT_PAGE() {
    return '/rest/v1/hpayment';
  }

  /**
   *
   * @var string METHOD_HOSTED_PAYMENT_PAGE http method to call Hosted payment page
   */
  static get METHOD_HOSTED_PAYMENT_PAGE() {
    return 'POST';
  }

  /**
   *
   * @var string ENDPOINT_MAINTENANCE_OPERATION endpoint to do a maintenance operation (capture, refund, accept, etc, ...)
   */
  static get ENDPOINT_MAINTENANCE_OPERATION() {
    return '/rest/v1/maintenance/transaction/{transaction}';
  }

  /**
   *
   * @var string METHOD_MAINTENANCE_OPERATION http method to do a maintenance operation
   */
  static get METHOD_MAINTENANCE_OPERATION() {
    return 'POST';
  }

  /**
   * @var string ENDPOINT_TRANSACTION_DETAILS endpoint to call transaction information
   */
  static get ENDPOINT_TRANSACTION_INFORMATION() {
    return '/rest/v1/transaction/{transaction}';
  }

  /**
   * @var string METHOD_TRANSACTION_DETAILS http method to call transaction information
   */
  static get METHOD_TRANSACTION_INFORMATION() {
    return 'GET';
  }

  /**
   * @var string ENDPOINT_ORDER_TRANSACTION_INFORMATION endpoint to call transaction information
   */
  static get ENDPOINT_ORDER_TRANSACTION_INFORMATION() {
    return '/rest/v1/transaction';
  }

  /**
   * @var string METHOD_ORDER_TRANSACTION_INFORMATION http method to call transaction information
   */
  static get METHOD_ORDER_TRANSACTION_INFORMATION() {
    return 'GET';
  }

  /**
   * @var string ENDPOINT_SECURITY_SETTINGS endpoint to call security settings information
   */
  static get ENDPOINT_SECURITY_SETTINGS() {
    return '/rest/v2/security-settings';
  }

  /**
   * @var string METHOD_ORDER_TRANSACTION_INFORMATION http method to call transaction information
   */
  static get METHOD_SECURITY_SETTINGS() {
    return 'GET';
  }

  /**
   *
   * @param clientProvider ClientInterface
   */
  constructor(clientProvider) {
    super();

    if (!(clientProvider instanceof ClientInterface)) {
      throw new InvalidArgumentException(
        'Client provider should extend ClientInterface'
      );
    } else {
      this._clientProvider = clientProvider;
    }
  }

  /**
   * Request New Order
   * @param {OrderRequest} orderRequest
   * @param {Request} req
   * @returns {Transaction}
   */
  async requestNewOrder(orderRequest, req) {
    if (!(orderRequest instanceof OrderRequest)) {
      throw new InvalidArgumentException(
        'Order Request should be instance of OrderRequest class'
      );
    }

    let piDataClient = new PIDataClient(this.clientProvider);
    let piDataId = piDataClient.getDataId(req);

    let formattedParams = {};
    this.formatParams(orderRequest, formattedParams);

    let response = await this.clientProvider.request(
      GatewayClient.METHOD_NEW_ORDER,
      GatewayClient.ENDPOINT_NEW_ORDER,
      formattedParams
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

  get clientProvider() {
    return this._clientProvider;
  }

  formatParams(object, formattedParams) {
    for (let prop in object) {
      if (Object.prototype.hasOwnProperty.call(object, prop)) {
        let value = object[prop];

        if (typeof value !== 'undefined' && value !== null) {
          if (typeof value === 'object') {
            if (value instanceof AbstractRequestPart) {
              this.formatParams(value, formattedParams);
            } else if (value instanceof AbstractModel) {
              if (value.cleanNullValues()) {
                formattedParams[this.formatPropName(prop)] = value.toJson();
              }
            } else {
              formattedParams[this.formatPropName(prop)] = JSON.stringify(
                value
              );
            }
          } else {
            formattedParams[this.formatPropName(prop)] = value;
          }
        }
      }
    }
  }

  formatPropName(propName) {
    return propName.replace(/([A-Z])/g, '_$1').toLowerCase();
  }
}

module.exports = GatewayClient;
