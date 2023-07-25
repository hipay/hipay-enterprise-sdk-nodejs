const SEPADirectDebitPaymentMethod = require('../../../../Gateway/Request/PaymentMethod/SEPADirectDebitPaymentMethod');
const InvalidArgumentException = require('../../../../Error/InvalidArgumentException');

jest.mock('../../../../Error/InvalidArgumentException');

afterEach(() => {
    InvalidArgumentException.mockReset();
});

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let sepaDirectDebitPaymentMethod;

        expect(() => {
            sepaDirectDebitPaymentMethod = new SEPADirectDebitPaymentMethod({
                issuer_bank_id: '{ISSUER_BANK_ID}',
                debit_agreement_id: '{DEBIT_AGREEMENT_ID}',
                recurring_payment: '{RECURRING_PAYMENT}',
                bank_name: '{BANK_NAME}',
                iban: '{IBAN}'
            });
        }).not.toThrow();

        expect(sepaDirectDebitPaymentMethod).toBeInstanceOf(SEPADirectDebitPaymentMethod);
        expect(sepaDirectDebitPaymentMethod.issuer_bank_id).toEqual('{ISSUER_BANK_ID}');
        expect(sepaDirectDebitPaymentMethod.debit_agreement_id).toEqual('{DEBIT_AGREEMENT_ID}');
        expect(sepaDirectDebitPaymentMethod.recurring_payment).toEqual('{RECURRING_PAYMENT}');
        expect(sepaDirectDebitPaymentMethod.bank_name).toEqual('{BANK_NAME}');
        expect(sepaDirectDebitPaymentMethod.iban).toEqual('{IBAN}');
    });

    it('Initializes correctly with minimal parameters', () => {
        let sepaDirectDebitPaymentMethod;

        expect(() => {
            sepaDirectDebitPaymentMethod = new SEPADirectDebitPaymentMethod({
                issuer_bank_id: '{ISSUER_BANK_ID}',
                bank_name: '{BANK_NAME}',
                iban: '{IBAN}'
            });
        }).not.toThrow();

        expect(sepaDirectDebitPaymentMethod).toBeInstanceOf(SEPADirectDebitPaymentMethod);
        expect(sepaDirectDebitPaymentMethod.issuer_bank_id).toEqual('{ISSUER_BANK_ID}');
        expect(sepaDirectDebitPaymentMethod.debit_agreement_id).toEqual(null);
        expect(sepaDirectDebitPaymentMethod.recurring_payment).toEqual(0);
        expect(sepaDirectDebitPaymentMethod.bank_name).toEqual('{BANK_NAME}');
        expect(sepaDirectDebitPaymentMethod.iban).toEqual('{IBAN}');
    });

    it('Errors when issuer bank id is absent', () => {
        expect(() => {
            new SEPADirectDebitPaymentMethod({
                debit_agreement_id: '{DEBIT_AGREEMENT_ID}',
                recurring_payment: '{RECURRING_PAYMENT}',
                bank_name: '{BANK_NAME}',
                iban: '{IBAN}'
            });
        }).toThrow();

        try {
            new SEPADirectDebitPaymentMethod({
                debit_agreement_id: '{DEBIT_AGREEMENT_ID}',
                recurring_payment: '{RECURRING_PAYMENT}',
                bank_name: '{BANK_NAME}',
                iban: '{IBAN}'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Issuer Bank ID must be present');
    });

    it('Errors when bank name is absent', () => {
        expect(() => {
            new SEPADirectDebitPaymentMethod({
                issuer_bank_id: '{ISSUER_BANK_ID}',
                debit_agreement_id: '{DEBIT_AGREEMENT_ID}',
                recurring_payment: '{RECURRING_PAYMENT}',
                iban: '{IBAN}'
            });
        }).toThrow();

        try {
            new SEPADirectDebitPaymentMethod({
                issuer_bank_id: '{ISSUER_BANK_ID}',
                debit_agreement_id: '{DEBIT_AGREEMENT_ID}',
                recurring_payment: '{RECURRING_PAYMENT}',
                iban: '{IBAN}'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Bank name must be present');
    });

    it('Errors when IBAN is absent', () => {
        expect(() => {
            new SEPADirectDebitPaymentMethod({
                issuer_bank_id: '{ISSUER_BANK_ID}',
                debit_agreement_id: '{DEBIT_AGREEMENT_ID}',
                recurring_payment: '{RECURRING_PAYMENT}',
                bank_name: '{BANK_NAME}'
            });
        }).toThrow();

        try {
            new SEPADirectDebitPaymentMethod({
                issuer_bank_id: '{ISSUER_BANK_ID}',
                debit_agreement_id: '{DEBIT_AGREEMENT_ID}',
                recurring_payment: '{RECURRING_PAYMENT}',
                bank_name: '{BANK_NAME}'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('IBAN must be present');
    });
});
