const IssuerBankIDPaymentMethod = require('../../../../Gateway/Request/PaymentMethod/IssuerBankIDPaymentMethod');
const InvalidArgumentException = require('../../../../Error/InvalidArgumentException');

jest.mock('../../../../Error/InvalidArgumentException');

afterEach(() => {
    InvalidArgumentException.mockReset();
});

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let issuerBankIDPaymentMethod;

        expect(() => {
            issuerBankIDPaymentMethod = new IssuerBankIDPaymentMethod({
                issuer_bank_id: '{ISSUER_BANK_ID}'
            });
        }).not.toThrow();

        expect(issuerBankIDPaymentMethod).toBeInstanceOf(IssuerBankIDPaymentMethod);
        expect(issuerBankIDPaymentMethod.issuer_bank_id).toEqual('{ISSUER_BANK_ID}');
    });

    it('Errors when card token is not present', () => {
        expect(() => {
            new IssuerBankIDPaymentMethod({});
        }).toThrow();

        try {
            new IssuerBankIDPaymentMethod({});
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Issuer Bank ID must be present');
    });
});
