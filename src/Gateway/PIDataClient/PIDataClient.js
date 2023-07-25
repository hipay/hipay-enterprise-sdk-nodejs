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
            throw new InvalidArgumentException('Client provider should extend SimpleHTTPClient');
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
        await this.clientProvider.request(PIDataClient.METHOD_DATA_API, PIDataClient.ENDPOINT_DATA_API, {
            baseUrl: this._clientProvider.configuration.dataApiEndpoint,
            body: data,
            isData: true
        });
    }

    /**
     * Returns Order Request data
     * @param {(String|undefined)} dataId sha256 dataId
     * @param {OrderRequest} orderRequest Order Request
     * @param {Transaction} transaction Transaction
     * @returns {Object} Order parameters
     */
    getOrderData(dataId, orderRequest, transaction) {
        const commonData = this.getCommonData(dataId, orderRequest);

        return {
            ...commonData,
            event: 'request',
            transaction_id: Number(transaction.transactionReference),
            status: transaction.status,
            eci: transaction.eci,
            mid: transaction.mid,
            payment_method: orderRequest.paymentProduct
        };
    }

    /**
     * Returns HPayment Request data
     * @param {(String|undefined)} dataId sha256 dataId
     * @param {HostedPaymentPageRequest} hostedPaymentPageRequest Order Request
     * @returns {Object} Order parameters
     */
    getHPaymentData(dataId, hostedPaymentPageRequest) {
        const commonData = this.getCommonData(dataId, hostedPaymentPageRequest);

        return {
            ...commonData,
            event: 'initHpayment',
            payment_method: Array.isArray(hostedPaymentPageRequest.paymentProductList)
                ? hostedPaymentPageRequest.paymentProductList.join(',')
                : hostedPaymentPageRequest.paymentProductList,
            merchant_display_name: hostedPaymentPageRequest.merchantDisplayName,
            components: {
                ...commonData.components,
                template: hostedPaymentPageRequest.template
            }
        };
    }

    /**
     * Gets common data for every kind of request
     * @param {string} dataId
     * @param {TransactionRequest} transactionRequest
     */
    getCommonData(dataId, transactionRequest) {
        const sourceData = transactionRequest.source ?? {};

        return {
            id: dataId,
            amount: Number(transactionRequest.amount),
            currency: transactionRequest.currency,
            order_id: transactionRequest.orderid,
            customer: {
                email: transactionRequest.customerBillingInfo.email,
                cid: transactionRequest.cid,
                ipaddr: transactionRequest.ipaddr
            },
            monitoring: {
                date_request: this._requestDate,
                date_response: this.setNewDate()
            },
            domain: this.getDomainFromUrl(transactionRequest.acceptUrl),
            components: {
                cms: sourceData.brand ?? 'sdk_nodejs',
                cms_version: sourceData.brandVersion ?? '',
                cms_module_version: sourceData.integration_version ?? '',
                sdk_server: 'nodejs',
                // Save hipay-fullservice-sdk-nodejs version in data API (for later use)
                sdk_server_version: process.versions['hipay-fullservice-sdk-nodejs'] ?? sourceData.sdk_server_version,
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
        } catch (e) {
            return null;
        }
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
