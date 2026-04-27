'use strict';

const SettlementListRequest = require('../../../../../Gateway/Request/Info/SettlementListRequest');

describe('SettlementListRequest', () => {
    it('initializes with default values', () => {
        const request = new SettlementListRequest();

        expect(request).toBeInstanceOf(SettlementListRequest);
        expect(request.amount).toBeNull();
        expect(request.currency).toBeNull();
        expect(request.dateFrom).toBeNull();
        expect(request.dateTo).toBeNull();
        expect(request.sort).toEqual('settlementid');
        expect(request.page).toEqual(1);
        expect(request.perPage).toEqual(10);
    });

    it('initializes with custom values', () => {
        const request = new SettlementListRequest({
            amount: 19.9,
            currency: 'EUR',
            dateFrom: '2016-11-22',
            dateTo: '2017-01-05',
            sort: 'date_value',
            page: 2,
            perPage: 20
        });

        expect(request.amount).toEqual(19.9);
        expect(request.currency).toEqual('EUR');
        expect(request.dateFrom).toEqual('2016-11-22');
        expect(request.dateTo).toEqual('2017-01-05');
        expect(request.sort).toEqual('date_value');
        expect(request.page).toEqual(2);
        expect(request.perPage).toEqual(20);
    });

    it('toQueryString returns query string with default params when only defaults', () => {
        const request = new SettlementListRequest();
        const qs = request.toQueryString();
        expect(qs).toContain('sort=settlementid');
        expect(qs).toContain('page=1');
        expect(qs).toContain('per_page=10');
    });

    it('toQueryString builds query with snake_case params', () => {
        const request = new SettlementListRequest({
            amount: 19.9,
            currency: 'EUR',
            dateFrom: '2016-11-22',
            dateTo: '2017-01-05',
            sort: 'amount',
            page: 1,
            perPage: 10
        });

        const qs = request.toQueryString();
        expect(qs).toContain('date_from=2016-11-22');
        expect(qs).toContain('date_to=2017-01-05');
        expect(qs).toContain('amount=19.9');
        expect(qs).toContain('currency=EUR');
        expect(qs).toContain('sort=amount');
        expect(qs).toContain('page=1');
        expect(qs).toContain('per_page=10');
    });
});
