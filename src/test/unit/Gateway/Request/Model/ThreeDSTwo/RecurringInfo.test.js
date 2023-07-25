const RecurringInfo = require('../../../../../../Gateway/Request/Model/ThreeDSTwo/RecurringInfo');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let recurringInfo;

        expect(() => {
            recurringInfo = new RecurringInfo({
                expiration_date: '{EXPIRATION_DATE}',
                frequency: '{FREQUENCY}'
            });
        }).not.toThrow();

        expect(recurringInfo).toBeInstanceOf(RecurringInfo);
        expect(recurringInfo.expiration_date).toEqual('{EXPIRATION_DATE}');
        expect(recurringInfo.frequency).toEqual('{FREQUENCY}');
    });

    it('Initializes correctly with empty parameters', () => {
        let recurringInfo;

        expect(() => {
            recurringInfo = new RecurringInfo({});
        }).not.toThrow();

        expect(recurringInfo).toBeInstanceOf(RecurringInfo);
        expect(recurringInfo.expiration_date).toEqual(null);
        expect(recurringInfo.frequency).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let recurringInfo;

        expect(() => {
            recurringInfo = new RecurringInfo();
        }).not.toThrow();

        expect(recurringInfo).toBeInstanceOf(RecurringInfo);
        expect(recurringInfo.expiration_date).toEqual(null);
        expect(recurringInfo.frequency).toEqual(null);
    });
});
