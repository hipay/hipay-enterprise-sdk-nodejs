const SEPADirectDebitPaymentMethod = require('../../../../../Gateway/Request/PaymentMethod/SEPADirectDebitPaymentMethod');
const InvalidArgumentException = require('../../../../../Error/InvalidArgumentException');

jest.mock('../../../../../Error/InvalidArgumentException');

afterEach(() => {
    InvalidArgumentException.mockReset();
});

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let sepaDirectDebitPaymentMethod;

        expect(() => {
            sepaDirectDebitPaymentMethod = new SEPADirectDebitPaymentMethod({
                issuerBankId: '{ISSUER_BANK_ID}',
                debitAgreementId: '{DEBIT_AGREEMENT_ID}',
                recurringPayment: '{RECURRING_PAYMENT}',
                bankName: '{BANK_NAME}',
                iban: '{IBAN}'
            });
        }).not.toThrow();

        expect(sepaDirectDebitPaymentMethod).toBeInstanceOf(SEPADirectDebitPaymentMethod);
        expect(sepaDirectDebitPaymentMethod.issuerBankId).toEqual('{ISSUER_BANK_ID}');
        expect(sepaDirectDebitPaymentMethod.debitAgreementId).toEqual('{DEBIT_AGREEMENT_ID}');
        expect(sepaDirectDebitPaymentMethod.recurringPayment).toEqual('{RECURRING_PAYMENT}');
        expect(sepaDirectDebitPaymentMethod.bankName).toEqual('{BANK_NAME}');
        expect(sepaDirectDebitPaymentMethod.iban).toEqual('{IBAN}');
    });

    it('Initializes correctly with minimal parameters', () => {
        let sepaDirectDebitPaymentMethod;

        expect(() => {
            sepaDirectDebitPaymentMethod = new SEPADirectDebitPaymentMethod({
                issuerBankId: '{ISSUER_BANK_ID}',
                bankName: '{BANK_NAME}',
                iban: '{IBAN}'
            });
        }).not.toThrow();

        expect(sepaDirectDebitPaymentMethod).toBeInstanceOf(SEPADirectDebitPaymentMethod);
        expect(sepaDirectDebitPaymentMethod.issuerBankId).toEqual('{ISSUER_BANK_ID}');
        expect(sepaDirectDebitPaymentMethod.debitAgreementId).toEqual(null);
        expect(sepaDirectDebitPaymentMethod.recurringPayment).toEqual(0);
        expect(sepaDirectDebitPaymentMethod.bankName).toEqual('{BANK_NAME}');
        expect(sepaDirectDebitPaymentMethod.iban).toEqual('{IBAN}');
    });

    it('Errors when issuer bank id is absent', () => {
        expect(() => {
            new SEPADirectDebitPaymentMethod({
                debitAgreementId: '{DEBIT_AGREEMENT_ID}',
                recurringPayment: '{RECURRING_PAYMENT}',
                bankName: '{BANK_NAME}',
                iban: '{IBAN}'
            });
        }).toThrow();

        try {
            new SEPADirectDebitPaymentMethod({
                debitAgreementId: '{DEBIT_AGREEMENT_ID}',
                recurringPayment: '{RECURRING_PAYMENT}',
                bankName: '{BANK_NAME}',
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
                issuerBankId: '{ISSUER_BANK_ID}',
                debitAgreementId: '{DEBIT_AGREEMENT_ID}',
                recurringPayment: '{RECURRING_PAYMENT}',
                iban: '{IBAN}'
            });
        }).toThrow();

        try {
            new SEPADirectDebitPaymentMethod({
                issuerBankId: '{ISSUER_BANK_ID}',
                debitAgreementId: '{DEBIT_AGREEMENT_ID}',
                recurringPayment: '{RECURRING_PAYMENT}',
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
                issuerBankId: '{ISSUER_BANK_ID}',
                debitAgreementId: '{DEBIT_AGREEMENT_ID}',
                recurringPayment: '{RECURRING_PAYMENT}',
                bankName: '{BANK_NAME}'
            });
        }).toThrow();

        try {
            new SEPADirectDebitPaymentMethod({
                issuerBankId: '{ISSUER_BANK_ID}',
                debitAgreementId: '{DEBIT_AGREEMENT_ID}',
                recurringPayment: '{RECURRING_PAYMENT}',
                bankName: '{BANK_NAME}'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('IBAN must be present');
    });
});
