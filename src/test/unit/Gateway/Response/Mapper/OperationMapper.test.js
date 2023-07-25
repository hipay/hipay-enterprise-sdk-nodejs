const OperationMapper = require('../../../../../Gateway/Response/Mapper/OperationMapper');
const Operation = require('../../../../../Gateway/Response/Operation');

describe('Test mapper', () => {
    it('maps correctly', () => {
        let operationMapper = new OperationMapper({
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

        expect(operationMapper).toBeInstanceOf(OperationMapper);
        expect(() => {
            operationMapper.mapResponseToModel();
        }).not.toThrow();
        expect(operationMapper._modelObject).toStrictEqual(
            new Operation({
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
            })
        );
    });

    it('maps correctly with empty parameters', () => {
        let operationMapper = new OperationMapper({});

        expect(operationMapper).toBeInstanceOf(OperationMapper);
        expect(() => {
            operationMapper.mapResponseToModel();
        }).not.toThrow();
        expect(operationMapper._modelObject).toStrictEqual(new Operation({}));
    });
});
