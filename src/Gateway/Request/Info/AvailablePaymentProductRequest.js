'use strict';

const CommonRequest = require('../CommonRequest');

class AvailablePaymentProductRequest extends CommonRequest {
    /**
     * @inheritDoc
     *
     * Common Request data to use with getAvailablePaymentProduct
     * @param {Object} values
     *
     * Inherited from CommonRequest
     * @param {Object} [values.customData] Request's custom data
     * @param {Object} [values.source] Request's source data
     * @param {'AUTO'|'SAPI'|'CONS'|'PAGE'|'TPE'|'RTRY'|'MANU'|'PREF'|'REVI'|'CMS'|'SSDK'|'CSDK'} [values.source.source] Technical source of this call
     * @param {String} [values.source.integration_version] Integration version (version of the CMS module for example)
     * @param {String} [values.source.brand] Source Brand (CMS name or Site name)
     * @param {String} [values.source.brand_version] Version of the brand (version of your site)
     * @param {Object} [values.basket] Request's basket data. You must send only items that must be captured or refunded.
     *
     * @param {Object} values.operation Transaction types
     * @param {Object} [values.payment_product] The payment products
     * @param {Object} values.eci Electronic Commerce Indicators (ECI)
     * @param {Boolean} [values.with_options] Whether to include additional options in the response
     * @param {Object} values.customer_country The country codes of the customer (ISO 3166-1 alpha-2)
     * @param {Object} values.currency Base currencies for this request. These three-character currency codes comply with ISO 4217.
     * @param {Object} values.payment_product_category The payment product categories
     */
    constructor(values) {
        super(values);

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.prototype.hasOwnProperty.call(values, 'operation')) {
            this.operation = values.operation;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'payment_product')) {
            this.payment_product = values.payment_product;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'eci')) {
            this.eci = values.eci;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'with_options')) {
            this.with_options = values.with_options;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'customer_country')) {
            this.customer_country = values.customer_country;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'currency')) {
            this.currency = values.currency;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'payment_product_category')) {
            this.payment_product_category = values.payment_product_category;
        }
    }

    initValues() {
        super.initValues();

        this.operation = ['4'];
        this.payment_product = [];
        this.eci = ['7'];
        this.with_options = false;
        this.customer_country = [];
        this.currency = [];
        this.payment_product_category = [];
    }

    toQueryString() {
        return Object.entries({
            operation: this.operation,
            payment_product: this.payment_product,
            eci: this.eci,
            with_options: this.with_options ? 'true' : 'false',
            customer_country: this.customer_country,
            currency: this.currency,
            payment_product_category: this.payment_product_category
        })
            .filter(([key, value]) => key && value != null && (!Array.isArray(value) || value.length))
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&');
    }
}

module.exports = AvailablePaymentProductRequest;
