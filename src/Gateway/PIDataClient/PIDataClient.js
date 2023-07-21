'use strict';

const InvalidArgumentException = require('../../Error/InvalidArgumentException');
const crypto = require('crypto');
const SimpleHTTPClient = require('../HTTP/SimpleHTTPClient');

class PIDataClient {
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
   * @param {SimpleHTTPClient} clientProvider client provider
   */
  constructor(clientProvider) {
    if (!(clientProvider instanceof SimpleHTTPClient)) {
      throw new InvalidArgumentException(
        'Client provider should extend SimpleHTTPClient'
      );
    } else {
      /**
       * @type {SimpleHTTPClient}
       * @private
       */
      this._clientProvider = clientProvider;
    }
    this._requestDate = this.setNewDate();
  }

  /**
   * Execute HTTP request
   * @param data
   * @returns {Promise<void>}
   */
  async sendData(data) {
    await this.clientProvider.request(
      PIDataClient.METHOD_DATA_API,
      PIDataClient.ENDPOINT_DATA_API,
      {
        baseUrl: this._clientProvider.configuration.dataApiEndpoint,
        body: data,
        isData: true
      }
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
    const sourceData = orderRequest.source ?? {};
    Ò;
    return {
      id: dataId,
      event: 'initHpayment',
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
      domain: this.getDomainFromUrl(orderRequest.acceptUrl),
      components: {
        cms: sourceData.brand ?? 'sdk_nodejs',
        cms_version: sourceData.brandVersion ?? '',
        cms_module_version: sourceData.integration_version ?? '',
        sdk_server: 'nodejs',
        // Save hipay-fullservice-sdk-nodejs version in data API (for later use)
        sdk_server_version:
          process.versions['hipay-fullservice-sdk-nodejs'] ??
          sourceData.sdk_server_version,
        sdk_server_engine_version: process.version
      }
    };
  }

  /**
   * Return current HTTP client provider
   * @returns {SimpleHTTPClient} client provider
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
    } catch (e) {}
  }

  /**
   * Encrypt on sha256 string with the following format: device_fingerprint:host_domain
   * @param {String} deviceFingerprint Device Fingerprint
   * @param {String} acceptUrl Accept URL
   * @param {String} orderId Order ID
   * @returns {(String|undefined)} sha256 dataId
   */
  getDataId(deviceFingerprint, acceptUrl, orderId) {
    // If device fingerprint is available, add it in ID, otherwise only use orderId
    if (deviceFingerprint) {
      let domain = this.getDomainFromUrl(acceptUrl);
      return crypto
        .createHash('sha256')
        .update(deviceFingerprint + (domain ? ':' + domain : ''), 'utf8')
        .digest('hex');
    } else {
      return crypto.createHash('sha256').update(orderId, 'utf8').digest('hex');
    }
  }
}

module.exports = PIDataClient;
