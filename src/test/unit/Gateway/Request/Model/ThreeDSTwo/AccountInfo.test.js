const AccountInfo = require('../../../../../../Gateway/Request/Model/ThreeDSTwo/AccountInfo');
const Customer = require('../../../../../../Gateway/Request/Model/ThreeDSTwo/AccountInfo/Customer');
const Purchase = require('../../../../../../Gateway/Request/Model/ThreeDSTwo/AccountInfo/Purchase');
const Payment = require('../../../../../../Gateway/Request/Model/ThreeDSTwo/AccountInfo/Payment');
const Shipping = require('../../../../../../Gateway/Request/Model/ThreeDSTwo/AccountInfo/Shipping');
const { NameIndicator, SuspiciousActivity } = require('../../../../../../Enum/ThreeDSTwo');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let accountInfo;

        let customer = new Customer();
        let purchase = new Purchase();
        let payment = new Payment();
        let shipping = new Shipping();

        expect(() => {
            accountInfo = new AccountInfo({
                customer,
                purchase,
                payment,
                shipping
            });
        }).not.toThrow();

        expect(accountInfo).toBeInstanceOf(AccountInfo);
        expect(accountInfo.customer).toStrictEqual(customer);
        expect(accountInfo.purchase).toStrictEqual(purchase);
        expect(accountInfo.payment).toStrictEqual(payment);
        expect(accountInfo.shipping).toStrictEqual(shipping);
    });

    it('Initializes correctly with full customer data', () => {
        let accountInfo;

        expect(() => {
            accountInfo = new AccountInfo({
                customer: { accountChange: '20230101', openingAccountDate: '20220202', passwordChange: '20221010' },
                purchase: { cardStored24h: '5', count: '6', paymentAttempts1y: '64', paymentAttempts24h: '3' },
                payment: { enrollmentDate: '2021010' },
                shipping: {
                    nameIndicator: NameIndicator.IDENTICAL,
                    shippingUsedDate: '20230202',
                    suspiciousActivity: SuspiciousActivity.SUSPICIOUS_ACTIVITY
                }
            });
        }).not.toThrow();

        expect(accountInfo).toBeInstanceOf(AccountInfo);
        expect(accountInfo.customer).toBeInstanceOf(Customer);
        expect(accountInfo.customer).toEqual({ accountChange: '20230101', openingAccountDate: '20220202', passwordChange: '20221010' });
        expect(accountInfo.purchase).toBeInstanceOf(Purchase);
        expect(accountInfo.purchase).toEqual({ cardStored24h: '5', count: '6', paymentAttempts1y: '64', paymentAttempts24h: '3' });
        expect(accountInfo.payment).toBeInstanceOf(Payment);
        expect(accountInfo.payment).toEqual({ enrollmentDate: '2021010' });
        expect(accountInfo.shipping).toBeInstanceOf(Shipping);
        expect(accountInfo.shipping).toEqual({
            nameIndicator: NameIndicator.IDENTICAL,
            shippingUsedDate: '20230202',
            suspiciousActivity: SuspiciousActivity.SUSPICIOUS_ACTIVITY
        });
    });

    it('Initializes correctly with empty parameters', () => {
        let accountInfo;

        expect(() => {
            accountInfo = new AccountInfo({});
        }).not.toThrow();

        expect(accountInfo).toBeInstanceOf(AccountInfo);
        expect(accountInfo.customer).toEqual(null);
        expect(accountInfo.purchase).toEqual(null);
        expect(accountInfo.payment).toEqual(null);
        expect(accountInfo.shipping).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let accountInfo;

        expect(() => {
            accountInfo = new AccountInfo();
        }).not.toThrow();

        expect(accountInfo).toBeInstanceOf(AccountInfo);
        expect(accountInfo.customer).toEqual(null);
        expect(accountInfo.purchase).toEqual(null);
        expect(accountInfo.payment).toEqual(null);
        expect(accountInfo.shipping).toEqual(null);
    });
});
