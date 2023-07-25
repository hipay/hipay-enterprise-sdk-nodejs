const MaintenanceRequest = require('../../../Gateway/Request/MaintenanceRequest');
const InvalidArgumentException = require('../../../Error/InvalidArgumentException');

jest.mock('../../../Error/InvalidArgumentException');

afterEach(() => {
    InvalidArgumentException.mockReset();
});

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let maintenanceRequest;

        expect(() => {
            maintenanceRequest = new MaintenanceRequest({
                operation: '{OPERATION}',
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                operation_id: '{OPERATION_ID}',
                sub_transaction_reference: '{SUB_TRANSACTION_REFERENCE}'
            });
        }).not.toThrow();

        expect(maintenanceRequest).toBeInstanceOf(MaintenanceRequest);
        expect(maintenanceRequest.operation).toEqual('{OPERATION}');
        expect(maintenanceRequest.currency).toEqual('{CURRENCY}');
        expect(maintenanceRequest.amount).toEqual('{AMOUNT}');
        expect(maintenanceRequest.operation_id).toEqual('{OPERATION_ID}');
        expect(maintenanceRequest.sub_transaction_reference).toEqual('{SUB_TRANSACTION_REFERENCE}');
    });

    it('Initializes correctly with minimal parameters', () => {
        let maintenanceRequest;

        expect(() => {
            maintenanceRequest = new MaintenanceRequest({
                operation: '{OPERATION}'
            });
        }).not.toThrow();

        expect(maintenanceRequest).toBeInstanceOf(MaintenanceRequest);
        expect(maintenanceRequest.operation).toEqual('{OPERATION}');
        expect(maintenanceRequest.currency).toEqual(null);
        expect(maintenanceRequest.amount).toEqual(null);
        expect(maintenanceRequest.operation_id).toEqual(null);
        expect(maintenanceRequest.sub_transaction_reference).toEqual(null);
    });

    it('Errors if operation is absent', () => {
        try {
            new MaintenanceRequest({
                currency: '{CURRENCY}',
                amount: '{AMOUNT}',
                operation_id: '{OPERATION_ID}',
                sub_transaction_reference: '{SUB_TRANSACTION_REFERENCE}'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Maintenance Request must have an Operation');
    });
});
