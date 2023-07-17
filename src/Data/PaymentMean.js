'use strict';
const fs = require('fs');

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
   * @type {Array<String>}
   * @private
   */
  _checkoutFieldsMandatory = [];

  /**
   * Optional fields for this payment mean
   * @type {Array<String>}
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
    for (let prop in paymentMeanData) {
      if (this.hasOwnProperty('_' + prop)) {
        this[`_${prop}`] = paymentMeanData[prop];
      }
    }

    if (!this._paymentMeanCode && paymentMeanData.productCode) {
      this._paymentMeanCode = paymentMeanData.productCode;
    }
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
      const paymentMeanData = require(this._PAYMENT_CONFIG_FILE_PATH +
        paymentMeanCode +
        '.json');

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
      filteredData = filteredData.filter((data) =>
        categories.includes(data.category)
      );
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

  static orderByPriority(paymentMeanList = []) {
    const paymentMeanSorted = [];

    if (!paymentMeanList) {
      return null;
    }

    if (!Array.isArray(paymentMeanList)) {
      paymentMeanList = paymentMeanList.split(',');
    }

    for (let paymentMeanCode of paymentMeanList) {
      let paymentMean = this.getPaymentMean(paymentMeanCode);

      if (!paymentMean) {
        paymentMeanSorted.push(
          new PaymentMean({ productCode: paymentMeanCode.trim(), priority: 99 })
        );
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
