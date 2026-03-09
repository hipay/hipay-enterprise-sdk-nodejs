'use strict';

const AbstractResponsePart = require('./AbstractResponsePart');

class Settlement extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {Number} [values.settlementid] Settlement ID
     * @param {Number} [values.amount] Settlement amount
     * @param {String} [values.currency] Settlement currency
     * @param {String} [values.dateValue] Settlement date
     * @param {String} [values.recipientName] Recipient name
     * @param {String} [values.recipientIban] Recipient IBAN
     * @param {String} [values.recipientBic] Recipient BIC
     * @param {String} [values.recipientBankCountry] Recipient bank country
     * @param {String} [values.merchantName] Merchant name
     * @param {Number} [values.merchantId] Merchant id
     * @param {Number} [values.sales] Sales amount
     * @param {Number} [values.refunds] Refunds amount
     * @param {Number} [values.fees] Fees amount
     * @param {Number} [values.chargeback] Chargebacks amount
     * @param {Number} [values.deferred] Deferred amount
     * @param {Number} [values.rolling] Rollings amount
     * @param {Number} [values.other] Other amount
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

        if (Object.hasOwn(values, 'settlementid')) {
            this.settlementid = values.settlementid;
        }

        if (Object.hasOwn(values, 'amount')) {
            this.amount = values.amount;
        }

        if (Object.hasOwn(values, 'currency')) {
            this.currency = values.currency;
        }

        if (Object.hasOwn(values, 'dateValue')) {
            this.dateValue = values.dateValue;
        }

        if (Object.hasOwn(values, 'recipientName')) {
            this.recipientName = values.recipientName;
        }

        if (Object.hasOwn(values, 'recipientIban')) {
            this.recipientIban = values.recipientIban;
        }

        if (Object.hasOwn(values, 'recipientBic')) {
            this.recipientBic = values.recipientBic;
        }

        if (Object.hasOwn(values, 'recipientBankCountry')) {
            this.recipientBankCountry = values.recipientBankCountry;
        }

        if (Object.hasOwn(values, 'merchantName')) {
            this.merchantName = values.merchantName;
        }

        if (Object.hasOwn(values, 'merchantId')) {
            this.merchantId = values.merchantId;
        }

        if (Object.hasOwn(values, 'sales')) {
            this.sales = values.sales;
        }

        if (Object.hasOwn(values, 'refunds')) {
            this.refunds = values.refunds;
        }

        if (Object.hasOwn(values, 'fees')) {
            this.fees = values.fees;
        }

        if (Object.hasOwn(values, 'chargeback')) {
            this.chargeback = values.chargeback;
        }

        if (Object.hasOwn(values, 'deferred')) {
            this.deferred = values.deferred;
        }

        if (Object.hasOwn(values, 'rolling')) {
            this.rolling = values.rolling;
        }

        if (Object.hasOwn(values, 'other')) {
            this.other = values.other;
        }
    }

    initValues() {
        super.initValues();

        this.settlementid = null;
        this.amount = null;
        this.currency = null;
        this.dateValue = null;
        this.recipientName = null;
        this.recipientIban = null;
        this.recipientBic = null;
        this.recipientBankCountry = null;
        this.merchantName = null;
        this.merchantId = null;
        this.sales = null;
        this.refunds = null;
        this.fees = null;
        this.chargeback = null;
        this.deferred = null;
        this.rolling = null;
        this.other = null;
    }
}

module.exports = Settlement;
