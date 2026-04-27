'use strict';

const SettlementMapper = require('../../../../../Gateway/Response/Mapper/SettlementMapper');
const Settlement = require('../../../../../Gateway/Response/Settlement');

describe('SettlementMapper', () => {
    it('maps API response to Settlement model', () => {
        const source = {
            settlementid: 123456,
            amount: 1000.5,
            currency: 'EUR',
            date_value: '2017-01-15',
            recipient_name: 'Merchant Inc',
            recipient_iban: 'FR761234567890',
            sales: 950,
            refunds: 50,
            fees: 10,
            chargeback: 0
        };

        const mapper = new SettlementMapper(source);
        const settlement = mapper.mappedObject;

        expect(settlement).toBeInstanceOf(Settlement);
        expect(settlement.settlementid).toEqual(123456);
        expect(settlement.amount).toEqual(1000.5);
        expect(settlement.currency).toEqual('EUR');
        expect(settlement.dateValue).toEqual('2017-01-15');
        expect(settlement.recipientName).toEqual('Merchant Inc');
        expect(settlement.recipientIban).toEqual('FR761234567890');
        expect(settlement.sales).toEqual(950);
        expect(settlement.refunds).toEqual(50);
        expect(settlement.fees).toEqual(10);
        expect(settlement.chargeback).toEqual(0);
    });

    it('handles empty source', () => {
        const mapper = new SettlementMapper({});
        const settlement = mapper.mappedObject;

        expect(settlement).toBeInstanceOf(Settlement);
        expect(settlement.settlementid).toBeNull();
        expect(settlement.amount).toBeNull();
    });
});
