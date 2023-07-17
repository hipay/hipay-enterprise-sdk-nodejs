'use strict';

const PIDataClientInterface = require('./PIDataClientInterface');
const ClientInterface = require('../HTTP/ClientInterface');
const InvalidArgumentException = require('../../Error/InvalidArgumentException');
const crypto = require('crypto');

class PIDataClient extends PIDataClientInterface {
  /**
   * endpoint to create / update a data set
   * @var {string} ENDPOINT_DATA_API
   */
  static get ENDPOINT_DATA_API() {
    return '/checkout-data';
  }

  /**
   * http method to create / update a data set
   * @var {String} METHOD_DATA_API
   */
  static get METHOD_DATA_API() {
    return 'POST';
  }

  /**
   * Construct gateway client with an HTTP client
   * @param {ClientInterface} clientProvider client provider
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
    this._requestDate = this.setNewDate();
  }

  async sendData(data) {
    await this.clientProvider.request(
      PIDataClient.METHOD_DATA_API,
      PIDataClient.ENDPOINT_DATA_API,
      data,
      false,
      true
    );
  }

  /**
   * Returns Order Request data
   * @param {(String|undefined)} dataId sha256 dataId
   * @param {Object} orderRequest Order Request
   * @param {Object} transaction Transaction
   * @returns {Object} Order parameters
   */
  getOrderData(dataId, orderRequest, transaction) {
    let params = {
      id: dataId,
      event: 'request',
      amount: Number(orderRequest.amount),
      currency: orderRequest.currency,
      order_id: orderRequest.orderid,
      transaction_id: Number(transaction.transactionReference),
      status: transaction.status,
      eci: transaction.eci,
      mid: transaction.mid,
      payment_method: orderRequest.paymentProduct,
      customer: {
        email: orderRequest.customerBillingInfo.email,
        cid: orderRequest.cid,
        ipaddr: orderRequest.ipaddr
      },
      merchant_display_name: orderRequest.merchant_display_name,
      monitoring: {
        date_request: this._requestDate,
        date_response: this.setNewDate()
      },
      domain: this.getDomainFromUrl(orderRequest.acceptUrl)
    };

    return params;
  }

  /**
   * Return current HTTP client provider
   * @returns {ClientInterface} client provider
   */
  get clientProvider() {
    return this._clientProvider;
  }

  /**
   * Generate new UTC Date
   * @returns {Date} new date
   */
  setNewDate() {
    return new Date().toISOString();
  }

  /**
   * Get domain of an URL
   * @param {String} url URL
   * @returns {(String|undefined)} domain
   */
  getDomainFromUrl(url) {
    try {
      return new URL(url).hostname.replace(/www\./, '');
    } catch (e) {
      return;
    }
  }

  /**
   * Encrypt on sha256 header Referer
   * @param {Request} req
   * @returns {(String|undefined)} sha256 dataId
   */
  getDataId(req) {
    if (req.originalReferer) {
      return crypto
        .createHash('sha256')
        .update(req.originalReferer, 'utf8')
        .digest('hex');
    }
  }
}

module.exports = PIDataClient;
