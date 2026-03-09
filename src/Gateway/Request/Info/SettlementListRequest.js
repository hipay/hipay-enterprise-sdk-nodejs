'use strict';

const AbstractRequestPart = require('../AbstractRequestPart');

class SettlementListRequest extends AbstractRequestPart {
    /**
     * @inheritDoc
     *
     * @param {Object} [values = {}]
     * @param {Number} [values.amount] Filter settlements equal to this amount
     * @param {String} [values.currency] Filter settlements in this currency (ISO 4217)
     * @param {String} [values.dateFrom] Filter settlements after this date (YYYY-MM-DD)
     * @param {String} [values.dateTo] Filter settlements before this date (YYYY-MM-DD)
     * @param {String} [values.sort=settlementid] Sort by: settlementid, amount, currency, date_value
     * @param {Number} [values.page=1] Page number for pagination
     * @param {Number} [values.perPage=10] Number of settlements per page
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.prototype.hasOwnProperty.call(values, 'amount')) {
            this.amount = values.amount;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'currency')) {
            this.currency = values.currency;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'dateFrom')) {
            this.dateFrom = values.dateFrom;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'dateTo')) {
            this.dateTo = values.dateTo;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'sort')) {
            this.sort = values.sort;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'page')) {
            this.page = values.page;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'perPage')) {
            this.perPage = values.perPage;
        }
    }

    initValues() {
        super.initValues();

        this.amount = null;
        this.currency = null;
        this.dateFrom = null;
        this.dateTo = null;
        this.sort = 'settlementid';
        this.page = 1;
        this.perPage = 10;
    }

    toQueryString() {
        const params = {
            amount: this.amount,
            currency: this.currency,
            date_from: this.dateFrom,
            date_to: this.dateTo,
            sort: this.sort,
            page: this.page,
            per_page: this.perPage
        };

        return Object.entries(params)
            .filter(([, value]) => value != null && value !== '')
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&');
    }
}

module.exports = SettlementListRequest;
