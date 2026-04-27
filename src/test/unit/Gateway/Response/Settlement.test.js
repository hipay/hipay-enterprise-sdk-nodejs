'use strict';

const Settlement = require('../../../../Gateway/Response/Settlement');

describe('Settlement', () => {
    it('initializes with default values', () => {
        const settlement = new Settlement({});

        expect(settlement).toBeInstanceOf(Settlement);
        expect(settlement.settlementid).toBeNull();
        expect(settlement.amount).toBeNull();
        expect(settlement.currency).toBeNull();
        expect(settlement.dateValue).toBeNull();
        expect(settlement.sales).toBeNull();
        expect(settlement.refunds).toBeNull();
    });

    it('initializes with values', () => {
        const settlement = new Settlement({
            settlementid: 123456,
            amount: 1000.5,
            currency: 'EUR',
            dateValue: '2017-01-15',
            recipientName: 'Merchant Inc',
            sales: 950,
            refunds: 50,
            fees: 10
        });

        expect(settlement.settlementid).toEqual(123456);
        expect(settlement.amount).toEqual(1000.5);
        expect(settlement.currency).toEqual('EUR');
        expect(settlement.dateValue).toEqual('2017-01-15');
        expect(settlement.recipientName).toEqual('Merchant Inc');
        expect(settlement.sales).toEqual(950);
        expect(settlement.refunds).toEqual(50);
        expect(settlement.fees).toEqual(10);
    });
});
