'use strict';
const { v4: uuidv4 } = require('uuid');

const InvalidArgumentException = require('../../Error/InvalidArgumentException');
const SimpleHTTPClient = require('../HTTP/SimpleHTTPClient');

class PIDataClient {
    /**
     * endpoint to create / update a data set
     * @var {String} ENDPOINT_DATA_API
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
     * @param {Object} data
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
     * @returns Order parameters
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
            payment_method: orderRequest.paymentProduct,
            one_click: Boolean(orderRequest.one_click)
        };
    }

    /**
     * Returns HPayment Request data
     * @param {(String|undefined)} dataId sha256 dataId
     * @param {HostedPaymentPageRequest} hostedPaymentPageRequest Order Request
     * @returns Hpayment parameters
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
            },
            display_cancel_button: Boolean(hostedPaymentPageRequest.displayCancelButton)
        };
    }

    /**
     * Gets common data for every kind of request
     * @param {String} dataId
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
                email: transactionRequest.customerBillingInfo?.email,
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
                // Save hipay-enterprise-sdk-nodejs version in data API (for later use)
                sdk_server_version: process.versions['hipay-enterprise-sdk-nodejs'] ?? sourceData.sdk_server_version,
                sdk_server_engine_version: process.version
            }
        };
    }

    /**
     * Return current HTTP client provider
     * @returns client provider
     */
    get clientProvider() {
        return this._clientProvider;
    }

    /**
     * Generate new UTC Date
     * @returns new date
     */
    setNewDate() {
        return new Date().toISOString();
    }

    /**
     * Get domain of an URL
     * @param {String} url URL
     * @returns domain
     */
    getDomainFromUrl(url) {
        try {
            return new URL(url).hostname.replace(/www\./, '');
        } catch (e) {
            return null;
        }
    }

    /**
     * Returns the data_id, or creates a new one in the form of uuid if not set
     * @returns {String} dataId
     */
    getDataId(dataId = null) {
        // If dataId is not set, we generate a new one in the form of a uuid
        if (!dataId) {
            dataId = uuidv4();
        }

        return dataId;
    }
}

module.exports = PIDataClient;
