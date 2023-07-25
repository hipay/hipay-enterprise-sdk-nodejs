const Operation = require('../../../Gateway/Response/Operation');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let operation;

        expect(() => {
            operation = new Operation({
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
                operation: '{OPERATION}'
            });
        }).not.toThrow();

        expect(operation).toBeInstanceOf(Operation);
        expect(operation.mid).toEqual('{MID}');
        expect(operation.authorizationCode).toEqual('{AUTHORIZATIONCODE}');
        expect(operation.transactionReference).toEqual('{TRANSACTIONREFERENCE}');
        expect(operation.dateCreated).toEqual('{DATECREATED}');
        expect(operation.dateUpdated).toEqual('{DATEUPDATED}');
        expect(operation.dateAuthorized).toEqual('{DATEAUTHORIZED}');
        expect(operation.status).toEqual('{STATUS}');
        expect(operation.state).toEqual('{STATE}');
        expect(operation.message).toEqual('{MESSAGE}');
        expect(operation.authorizedAmount).toEqual('{AUTHORIZEDAMOUNT}');
        expect(operation.capturedAmount).toEqual('{CAPTUREDAMOUNT}');
        expect(operation.refundedAmount).toEqual('{REFUNDEDAMOUNT}');
        expect(operation.decimals).toEqual('{DECIMALS}');
        expect(operation.currency).toEqual('{CURRENCY}');
        expect(operation.operation).toEqual('{OPERATION}');
    });

    it('Initializes correctly with empty parameters', () => {
        let operation;

        expect(() => {
            operation = new Operation({});
        }).not.toThrow();

        expect(operation).toBeInstanceOf(Operation);
        expect(operation.mid).toEqual(null);
        expect(operation.authorizationCode).toEqual(null);
        expect(operation.transactionReference).toEqual(null);
        expect(operation.dateCreated).toEqual(null);
        expect(operation.dateUpdated).toEqual(null);
        expect(operation.dateAuthorized).toEqual(null);
        expect(operation.status).toEqual(null);
        expect(operation.state).toEqual(null);
        expect(operation.message).toEqual(null);
        expect(operation.authorizedAmount).toEqual(null);
        expect(operation.capturedAmount).toEqual(null);
        expect(operation.refundedAmount).toEqual(null);
        expect(operation.decimals).toEqual(null);
        expect(operation.currency).toEqual(null);
        expect(operation.operation).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let operation;

        expect(() => {
            operation = new Operation();
        }).not.toThrow();

        expect(operation).toBeInstanceOf(Operation);
        expect(operation.mid).toEqual(null);
        expect(operation.authorizationCode).toEqual(null);
        expect(operation.transactionReference).toEqual(null);
        expect(operation.dateCreated).toEqual(null);
        expect(operation.dateUpdated).toEqual(null);
        expect(operation.dateAuthorized).toEqual(null);
        expect(operation.status).toEqual(null);
        expect(operation.state).toEqual(null);
        expect(operation.message).toEqual(null);
        expect(operation.authorizedAmount).toEqual(null);
        expect(operation.capturedAmount).toEqual(null);
        expect(operation.refundedAmount).toEqual(null);
        expect(operation.decimals).toEqual(null);
        expect(operation.currency).toEqual(null);
        expect(operation.operation).toEqual(null);
    });
});
