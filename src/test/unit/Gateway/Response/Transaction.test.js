const Transaction = require('../../../../Gateway/Response/Transaction');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let transaction;

        expect(() => {
            transaction = new Transaction({
                mid: '{MID}',
                authorizationCode: '{AUTHORIZATIONCODE}',
                transactionReference: '{TRANSACTIONREFERENCE}',
                dateCreated: '{DATECREATED}',
                dateUpdated: '{DATEUPDATED}',
                dateAuthorized: '{DATEAUTHORIZED}',
                status: '{STATUS}',
                state: '{STATE}',
                message: '{MESSAGE}',
                authorizedAmount: '{AUTHORIZEDAMOUNT}',
                capturedAmount: '{CAPTUREDAMOUNT}',
                refundedAmount: '{REFUNDEDAMOUNT}',
                decimals: '{DECIMALS}',
                currency: '{CURRENCY}',
                reason: '{REASON}',
                forwardUrl: '{FORWARDURL}',
                attemptId: '{ATTEMPTID}',
                referenceToPay: '{REFERENCETOPAY}',
                ipAddress: '{IPADDRESS}',
                ipCountry: '{IPCOUNTRY}',
                deviceId: '{DEVICEID}',
                avsResult: '{AVSRESULT}',
                cvcResult: '{CVCRESULT}',
                eci: '{ECI}',
                paymentProduct: '{PAYMENTPRODUCT}',
                paymentMethod: '{PAYMENTMETHOD}',
                threeDSecure: '{THREEDSECURE}',
                fraudScreening: '{FRAUDSCREENING}',
                order: '{ORDER}',
                debitAgreement: '{DEBITAGREEMENT}',
                basket: '{BASKET}',
                operation: '{OPERATION}',
                customData: '{CUSTOMDATA}'
            });
        }).not.toThrow();

        expect(transaction).toBeInstanceOf(Transaction);
        expect(transaction.mid).toEqual('{MID}');
        expect(transaction.authorizationCode).toEqual('{AUTHORIZATIONCODE}');
        expect(transaction.transactionReference).toEqual('{TRANSACTIONREFERENCE}');
        expect(transaction.dateCreated).toEqual('{DATECREATED}');
        expect(transaction.dateUpdated).toEqual('{DATEUPDATED}');
        expect(transaction.dateAuthorized).toEqual('{DATEAUTHORIZED}');
        expect(transaction.status).toEqual('{STATUS}');
        expect(transaction.state).toEqual('{STATE}');
        expect(transaction.message).toEqual('{MESSAGE}');
        expect(transaction.authorizedAmount).toEqual('{AUTHORIZEDAMOUNT}');
        expect(transaction.capturedAmount).toEqual('{CAPTUREDAMOUNT}');
        expect(transaction.refundedAmount).toEqual('{REFUNDEDAMOUNT}');
        expect(transaction.decimals).toEqual('{DECIMALS}');
        expect(transaction.currency).toEqual('{CURRENCY}');
        expect(transaction.reason).toEqual('{REASON}');
        expect(transaction.forwardUrl).toEqual('{FORWARDURL}');
        expect(transaction.attemptId).toEqual('{ATTEMPTID}');
        expect(transaction.referenceToPay).toEqual('{REFERENCETOPAY}');
        expect(transaction.ipAddress).toEqual('{IPADDRESS}');
        expect(transaction.ipCountry).toEqual('{IPCOUNTRY}');
        expect(transaction.deviceId).toEqual('{DEVICEID}');
        expect(transaction.avsResult).toEqual('{AVSRESULT}');
        expect(transaction.cvcResult).toEqual('{CVCRESULT}');
        expect(transaction.eci).toEqual('{ECI}');
        expect(transaction.paymentProduct).toEqual('{PAYMENTPRODUCT}');
        expect(transaction.paymentMethod).toEqual('{PAYMENTMETHOD}');
        expect(transaction.threeDSecure).toEqual('{THREEDSECURE}');
        expect(transaction.fraudScreening).toEqual('{FRAUDSCREENING}');
        expect(transaction.order).toEqual('{ORDER}');
        expect(transaction.debitAgreement).toEqual('{DEBITAGREEMENT}');
        expect(transaction.basket).toEqual('{BASKET}');
        expect(transaction.operation).toEqual('{OPERATION}');
        expect(transaction.customData).toEqual('{CUSTOMDATA}');
    });

    it('Initializes correctly with empty parameters', () => {
        let transaction;

        expect(() => {
            transaction = new Transaction({});
        }).not.toThrow();

        expect(transaction).toBeInstanceOf(Transaction);
        expect(transaction.mid).toEqual(null);
        expect(transaction.authorizationCode).toEqual(null);
        expect(transaction.transactionReference).toEqual(null);
        expect(transaction.dateCreated).toEqual(null);
        expect(transaction.dateUpdated).toEqual(null);
        expect(transaction.dateAuthorized).toEqual(null);
        expect(transaction.status).toEqual(null);
        expect(transaction.state).toEqual(null);
        expect(transaction.message).toEqual(null);
        expect(transaction.authorizedAmount).toEqual(null);
        expect(transaction.capturedAmount).toEqual(null);
        expect(transaction.refundedAmount).toEqual(null);
        expect(transaction.decimals).toEqual(null);
        expect(transaction.currency).toEqual(null);
        expect(transaction.reason).toEqual(null);
        expect(transaction.forwardUrl).toEqual(null);
        expect(transaction.attemptId).toEqual(null);
        expect(transaction.referenceToPay).toEqual(null);
        expect(transaction.ipAddress).toEqual(null);
        expect(transaction.ipCountry).toEqual(null);
        expect(transaction.deviceId).toEqual(null);
        expect(transaction.avsResult).toEqual(null);
        expect(transaction.cvcResult).toEqual(null);
        expect(transaction.eci).toEqual(null);
        expect(transaction.paymentProduct).toEqual(null);
        expect(transaction.paymentMethod).toEqual(null);
        expect(transaction.threeDSecure).toEqual(null);
        expect(transaction.fraudScreening).toEqual(null);
        expect(transaction.order).toEqual(null);
        expect(transaction.debitAgreement).toEqual(null);
        expect(transaction.basket).toEqual(null);
        expect(transaction.operation).toEqual(null);
        expect(transaction.customData).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let transaction;

        expect(() => {
            transaction = new Transaction();
        }).not.toThrow();

        expect(transaction).toBeInstanceOf(Transaction);
        expect(transaction.mid).toEqual(null);
        expect(transaction.authorizationCode).toEqual(null);
        expect(transaction.transactionReference).toEqual(null);
        expect(transaction.dateCreated).toEqual(null);
        expect(transaction.dateUpdated).toEqual(null);
        expect(transaction.dateAuthorized).toEqual(null);
        expect(transaction.status).toEqual(null);
        expect(transaction.state).toEqual(null);
        expect(transaction.message).toEqual(null);
        expect(transaction.authorizedAmount).toEqual(null);
        expect(transaction.capturedAmount).toEqual(null);
        expect(transaction.refundedAmount).toEqual(null);
        expect(transaction.decimals).toEqual(null);
        expect(transaction.currency).toEqual(null);
        expect(transaction.reason).toEqual(null);
        expect(transaction.forwardUrl).toEqual(null);
        expect(transaction.attemptId).toEqual(null);
        expect(transaction.referenceToPay).toEqual(null);
        expect(transaction.ipAddress).toEqual(null);
        expect(transaction.ipCountry).toEqual(null);
        expect(transaction.deviceId).toEqual(null);
        expect(transaction.avsResult).toEqual(null);
        expect(transaction.cvcResult).toEqual(null);
        expect(transaction.eci).toEqual(null);
        expect(transaction.paymentProduct).toEqual(null);
        expect(transaction.paymentMethod).toEqual(null);
        expect(transaction.threeDSecure).toEqual(null);
        expect(transaction.fraudScreening).toEqual(null);
        expect(transaction.order).toEqual(null);
        expect(transaction.debitAgreement).toEqual(null);
        expect(transaction.basket).toEqual(null);
        expect(transaction.operation).toEqual(null);
        expect(transaction.customData).toEqual(null);
    });
});
