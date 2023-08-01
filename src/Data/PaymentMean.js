'use strict';
const fs = require('fs');

class PaymentMeanAdditionalFields {
    /**
     * Name of the SDK Class for this payment mean
     *
     * @type {string}
     * @private
     */
    _sdkClass;

    /**
     * Additional fields available for this payment mean
     * @type {Object}
     * @private
     */
    _formFields = [];

    /**
     *
     * @param {Object} [additionalFields]
     * @param {string} [additionalFields.sdkClass] Name of the SDK Class for this payment mean
     * @param {Object} [additionalFields.formFields] Additional fields available for this payment mean
     */
    constructor(additionalFields = {}) {
        this._sdkClass = additionalFields.sdkClass;
        this._formFields = additionalFields.formFields;
    }

    get sdkClass() {
        return require('../Gateway/Request/PaymentMethod/' + this._sdkClass);
    }

    get formFields() {
        return this._formFields;
    }

    getLocalizedFields(language = 'en') {
        let localizedFields = {};

        for (let fieldKey in this._formFields) {
            localizedFields[fieldKey] = { ...this._formFields[fieldKey] };

            if (localizedFields[fieldKey].label) {
                localizedFields[fieldKey].label = localizedFields[fieldKey].label[language] ?? localizedFields[fieldKey].label['en'];
            }
        }

        return localizedFields;
    }
}

/**
 * The collection of all payment means handled by this SDK
 */
class PaymentMean {
    static _PAYMENT_CONFIG_FILE_PATH = __dirname + '/../PaymentConfigFiles/';

    /**
     * The technical code of the payment mean
     * @type {string}
     * @private
     */
    _paymentMeanCode;

    /**
     * Human readable name of the payment mean
     * @type {string}
     * @private
     */
    _brandName;

    /**
     * Payment mean's category
     * @type {string}
     * @private
     */
    _category;

    /**
     * Short payment mean description
     * @type {string}
     * @private
     */
    _comment = '';

    /**
     * Can use 3DS security
     * @type {boolean}
     * @private
     */
    _can3ds = false;

    /**
     * Can be used for recurring payment
     * @type {boolean}
     * @private
     */
    _canRecurring = false;

    /**
     * Can be captured manually
     * @type {boolean}
     * @private
     */
    _canManualCapture = false;

    /**
     * Can be captured partially
     * @type {boolean}
     * @private
     */
    _canManualCapturePartially = false;

    /**
     * Can be refunded
     * @type {boolean}
     * @private
     */
    _canRefund = false;

    /**
     * Can be refunded partially
     * @type {boolean}
     * @private
     */
    _canRefundPartially = false;

    /**
     * Is the basket description required
     * @type {boolean}
     * @private
     */
    _basketRequired = false;

    /**
     * Accepted currencies for this payment mean
     * @type {Array<String>}
     * @private
     */
    _currencies = [];

    /**
     * Accepted countries for this payment mean
     * @type {Array<String>}
     * @private
     */
    _countries = [];

    /**
     * Mandatory fields for this payment mean
     * @type {Array<Object>}
     * @private
     */
    _checkoutFieldsMandatory = [];

    /**
     * Optional fields for this payment mean
     * @type {Array<Object>}
     * @private
     */
    _additionalFields = [];

    /**
     * Payment mean priority in the payment page
     * @type {number}
     * @private
     */
    _priority = 99;

    /**
     * Creates a new PaymentMean instance with the provided data
     * @param {Object} [paymentMeanData = {}]
     */
    constructor(paymentMeanData = {}) {
        this._paymentMeanCode = paymentMeanData.paymentMeanCode ?? paymentMeanData.productCode;
        this._brandName = paymentMeanData.brandName;
        this._category = paymentMeanData.category;
        this._comment = paymentMeanData.comment ?? '';
        this._can3ds = Boolean(paymentMeanData.can3ds);
        this._canRecurring = Boolean(paymentMeanData.canRecurring);
        this._canManualCapture = Boolean(paymentMeanData.canManualCapture);
        this._canManualCapturePartially = Boolean(paymentMeanData.canManualCapturePartially);
        this._canRefund = Boolean(paymentMeanData.canRefund);
        this._canRefundPartially = Boolean(paymentMeanData.canRefundPartially);
        this._basketRequired = Boolean(paymentMeanData.basketRequired);

        this._currencies = paymentMeanData.currencies ?? [];
        this._countries = paymentMeanData.countries ?? [];

        this._checkoutFieldsMandatory = paymentMeanData.checkoutFieldsMandatory ?? [];
        this._additionalFields = new PaymentMeanAdditionalFields(paymentMeanData.additionalFields);

        this._priority = paymentMeanData.priority ?? 99;
    }

    /**
     * The technical code of the payment mean
     * @returns {string}
     */
    get paymentMeanCode() {
        return this._paymentMeanCode;
    }

    /**
     * Human readable name of the payment mean
     * @returns {string}
     */
    get brandName() {
        return this._brandName;
    }

    /**
     * Payment mean's category
     * @returns {string}
     */
    get category() {
        return this._category;
    }

    /**
     * Short payment mean description
     * @returns {string}
     */
    get comment() {
        return this._comment;
    }

    /**
     * Can use 3DS security
     * @returns {boolean}
     */
    get can3ds() {
        return this._can3ds;
    }

    /**
     * Can be used for recurring payment
     * @returns {boolean}
     */
    get canRecurring() {
        return this._canRecurring;
    }

    /**
     * Can be captured manually
     * @returns {boolean}
     */
    get canManualCapture() {
        return this._canManualCapture;
    }

    /**
     * Can be captured partially
     * @returns {boolean}
     */
    get canManualCapturePartially() {
        return this._canManualCapturePartially;
    }

    /**
     * Can be refunded
     * @returns {boolean}
     */
    get canRefund() {
        return this._canRefund;
    }

    /**
     * Can be refunded partially
     * @returns {boolean}
     */
    get canRefundPartially() {
        return this._canRefundPartially;
    }

    /**
     * Is the basket description required
     * @returns {boolean}
     */
    get basketRequired() {
        return this._basketRequired;
    }

    /**
     * Accepted currencies for this payment mean
     * @returns {Array<String>}
     */
    get currencies() {
        return this._currencies;
    }

    /**
     * Accepted countries for this payment mean
     * @returns {Array<String>}
     */
    get countries() {
        return this._countries;
    }

    /**
     * Mandatory fields for this payment mean
     * @returns {Array<String>}
     */
    get checkoutFieldsMandatory() {
        return this._checkoutFieldsMandatory;
    }

    /**
     * Optional fields for this payment mean
     * @returns {Array<String>}
     */
    get additionalFields() {
        return this._additionalFields;
    }

    /**
     * Payment mean priority in the payment page
     * @returns {number}
     */
    get priority() {
        return this._priority;
    }

    /**
     * Returns the payment mean with the specified payment mean code, or null if the payment mean does not exist
     * @param {String} paymentMeanCode A payment mean code
     * @returns {PaymentMean|null}
     */
    static getPaymentMean(paymentMeanCode) {
        try {
            const paymentMeanData = require(this._PAYMENT_CONFIG_FILE_PATH + paymentMeanCode + '.json');

            return new PaymentMean(paymentMeanData);
        } catch (e) {
            return null;
        }
    }

    /**
     * Returns all payment means in the selected categories, or all payment means if no category is sent
     * @param {Array<String>} categories An array of payment means categories
     */
    static getPaymentMeans(categories = null) {
        const allData = this._getPaymentMeansData();
        let filteredData = allData.map((data) => new PaymentMean(data));

        if (categories) {
            filteredData = filteredData.filter((data) => categories.includes(data.category));
        }

        return filteredData;
    }

    static _getPaymentMeansData() {
        const allData = [];
        const allFiles = fs.readdirSync(this._PAYMENT_CONFIG_FILE_PATH);

        for (let file of allFiles) {
            if (file.endsWith('.json')) {
                allData.push(require(this._PAYMENT_CONFIG_FILE_PATH + file));
            }
        }

        return allData;
    }

    /**
     * Sorts payment mean code list by priority and returns associated Payment Means
     *
     * @param {Array<String>} paymentMeanList
     * @returns {Array<PaymentMean>}
     */
    static orderByPriority(paymentMeanList = []) {
        const paymentMeanSorted = [];

        if (!Array.isArray(paymentMeanList)) {
            paymentMeanList = paymentMeanList.split(',');
        }

        for (let paymentMeanCode of paymentMeanList) {
            let paymentMean = this.getPaymentMean(paymentMeanCode);

            if (!paymentMean) {
                paymentMeanSorted.push(new PaymentMean({ productCode: paymentMeanCode.trim(), priority: 99 }));
            } else {
                paymentMeanSorted.push(paymentMean);
            }
        }

        return paymentMeanSorted.sort((a, b) => {
            return a.priority < b.priority ? -1 : 1;
        });
    }
}

module.exports = PaymentMean;
