const { PaymentMean } = require('../../../Data');
const { MultibancoPaymentMethod } = require('../../../Gateway/Request/PaymentMethod');
describe('PaymentMean', () => {
    it('constructs', () => {
        let paymentMean = new PaymentMean({
            paymentMeanCode: 'CODE',
            productCode: 'PRODUCT_CODE',
            brandName: 'BRAND',
            category: 'CATEGORY',
            comment: 'COMMENT',
            can3ds: true,
            canRecurring: true,
            canManualCapture: true,
            canManualCapturePartially: true,
            canRefund: true,
            canRefundPartially: true,
            basketRequired: true,
            currencies: ['CUR1', 'CUR2'],
            countries: ['COUNT1', 'COUNT2', 'COUNT3'],
            checkoutFieldsMandatory: ['Field1', 'Field2'],
            additionalFields: {
                sdkClass: 'SDK_CLASS',
                formFields: { field: 'VALUE' }
            },
            priority: 5,
            dummy: 'VALUE'
        });

        expect(paymentMean).toBeInstanceOf(PaymentMean);
        expect(paymentMean.paymentMeanCode).toEqual('CODE');
        expect(paymentMean.brandName).toEqual('BRAND');
        expect(paymentMean.category).toEqual('CATEGORY');
        expect(paymentMean.comment).toEqual('COMMENT');
        expect(paymentMean.can3ds).toEqual(true);
        expect(paymentMean.canRecurring).toEqual(true);
        expect(paymentMean.canManualCapture).toEqual(true);
        expect(paymentMean.canManualCapturePartially).toEqual(true);
        expect(paymentMean.canRefund).toEqual(true);
        expect(paymentMean.canRefundPartially).toEqual(true);
        expect(paymentMean.basketRequired).toEqual(true);
        expect(paymentMean.currencies).toEqual(['CUR1', 'CUR2']);
        expect(paymentMean.countries).toEqual(['COUNT1', 'COUNT2', 'COUNT3']);
        expect(paymentMean.checkoutFieldsMandatory).toEqual(['Field1', 'Field2']);
        expect(paymentMean.additionalFields).toEqual({
            _sdkClass: 'SDK_CLASS',
            _formFields: { field: 'VALUE' }
        });
        expect(paymentMean.additionalFields.formFields).toEqual({ field: 'VALUE' });
        expect(paymentMean.priority).toEqual(5);
        expect(paymentMean).not.toHaveProperty('dummy');
        expect(paymentMean).not.toHaveProperty('_dummy');
    });

    it('constructs legacy', () => {
        let paymentMean = new PaymentMean({
            productCode: 'PRODUCT_CODE',
            brandName: 'BRAND',
            category: 'CATEGORY',
            comment: 'COMMENT',
            can3ds: true,
            canRecurring: true,
            canManualCapture: true,
            canManualCapturePartially: true,
            canRefund: true,
            canRefundPartially: true,
            basketRequired: true,
            currencies: ['CUR1', 'CUR2'],
            countries: ['COUNT1', 'COUNT2', 'COUNT3'],
            checkoutFieldsMandatory: ['Field1', 'Field2'],
            additionalFields: {
                sdkClass: 'SDK_CLASS',
                formFields: { field: 'VALUE' }
            },
            priority: 5,
            dummy: 'VALUE'
        });

        expect(paymentMean).toBeInstanceOf(PaymentMean);
        expect(paymentMean.paymentMeanCode).toEqual('PRODUCT_CODE');
        expect(paymentMean.brandName).toEqual('BRAND');
        expect(paymentMean.category).toEqual('CATEGORY');
        expect(paymentMean.comment).toEqual('COMMENT');
        expect(paymentMean.can3ds).toEqual(true);
        expect(paymentMean.canRecurring).toEqual(true);
        expect(paymentMean.canManualCapture).toEqual(true);
        expect(paymentMean.canManualCapturePartially).toEqual(true);
        expect(paymentMean.canRefund).toEqual(true);
        expect(paymentMean.canRefundPartially).toEqual(true);
        expect(paymentMean.basketRequired).toEqual(true);
        expect(paymentMean.currencies).toEqual(['CUR1', 'CUR2']);
        expect(paymentMean.countries).toEqual(['COUNT1', 'COUNT2', 'COUNT3']);
        expect(paymentMean.checkoutFieldsMandatory).toEqual(['Field1', 'Field2']);
        expect(paymentMean.additionalFields).toEqual({
            _sdkClass: 'SDK_CLASS',
            _formFields: { field: 'VALUE' }
        });
        expect(paymentMean.priority).toEqual(5);
        expect(paymentMean).not.toHaveProperty('dummy');
        expect(paymentMean).not.toHaveProperty('_dummy');
    });

    it('constructs empty', () => {
        let paymentMean = new PaymentMean();

        expect(paymentMean).toBeInstanceOf(PaymentMean);
        expect(paymentMean.paymentMeanCode).toEqual(undefined);
        expect(paymentMean.brandName).toEqual(undefined);
        expect(paymentMean.category).toEqual(undefined);
        expect(paymentMean.comment).toEqual('');
        expect(paymentMean.can3ds).toEqual(false);
        expect(paymentMean.canRecurring).toEqual(false);
        expect(paymentMean.canManualCapture).toEqual(false);
        expect(paymentMean.canManualCapturePartially).toEqual(false);
        expect(paymentMean.canRefund).toEqual(false);
        expect(paymentMean.canRefundPartially).toEqual(false);
        expect(paymentMean.basketRequired).toEqual(false);
        expect(paymentMean.currencies).toEqual([]);
        expect(paymentMean.countries).toEqual([]);
        expect(paymentMean.checkoutFieldsMandatory).toEqual([]);
        expect(paymentMean.additionalFields).toEqual({});
        expect(paymentMean.priority).toEqual(99);
    });

    it('gets predefined mean', () => {
        let paymentMean = PaymentMean.getPaymentMean('multibanco');

        expect(paymentMean).toBeInstanceOf(PaymentMean);
        expect(paymentMean.paymentMeanCode).toEqual('multibanco');
        expect(paymentMean.brandName).toEqual('Multibanco');
        expect(paymentMean.category).toEqual('debit-card');
        expect(paymentMean.comment).toEqual('');
        expect(paymentMean.can3ds).toEqual(false);
        expect(paymentMean.canRecurring).toEqual(false);
        expect(paymentMean.canManualCapture).toEqual(false);
        expect(paymentMean.canManualCapturePartially).toEqual(false);
        expect(paymentMean.canRefund).toEqual(false);
        expect(paymentMean.canRefundPartially).toEqual(false);
        expect(paymentMean.basketRequired).toEqual(false);
        expect(paymentMean.currencies).toEqual(['EUR']);
        expect(paymentMean.countries).toEqual(['PT']);
        expect(paymentMean.checkoutFieldsMandatory).toEqual([]);
        expect(paymentMean.additionalFields).toEqual({
            _sdkClass: 'MultibancoPaymentMethod',
            _formFields: {
                expiration_limit: {
                    label: {
                        en: 'Expiration limit',
                        fr: 'Limite de paiement'
                    },
                    type: 'text',
                    required: false,
                    display: false
                },
                streetaddress: {
                    label: {
                        en: 'Street address',
                        fr: 'Adresse'
                    },
                    type: 'text',
                    required: true,
                    display: false
                },
                zipcode: {
                    label: {
                        en: 'Zipcode',
                        fr: 'Code postal'
                    },
                    type: 'text',
                    required: true,
                    display: false
                },
                phone: {
                    label: {
                        en: 'Phone',
                        fr: 'Téléphone'
                    },
                    type: 'text',
                    required: true,
                    display: false
                },
                email: {
                    label: {
                        en: 'Email',
                        fr: 'Email'
                    },
                    type: 'text',
                    required: true,
                    display: false
                }
            }
        });

        expect(paymentMean.additionalFields.sdkClass).toEqual(MultibancoPaymentMethod);
        expect(paymentMean.additionalFields.getLocalizedFields()).toEqual({
            expiration_limit: {
                label: 'Expiration limit',
                type: 'text',
                required: false,
                display: false
            },
            streetaddress: {
                label: 'Street address',
                type: 'text',
                required: true,
                display: false
            },
            zipcode: {
                label: 'Zipcode',
                type: 'text',
                required: true,
                display: false
            },
            phone: {
                label: 'Phone',
                type: 'text',
                required: true,
                display: false
            },
            email: {
                label: 'Email',
                type: 'text',
                required: true,
                display: false
            }
        });
        expect(paymentMean.additionalFields.getLocalizedFields('fr')).toEqual({
            expiration_limit: {
                label: 'Limite de paiement',
                type: 'text',
                required: false,
                display: false
            },
            streetaddress: {
                label: 'Adresse',
                type: 'text',
                required: true,
                display: false
            },
            zipcode: {
                label: 'Code postal',
                type: 'text',
                required: true,
                display: false
            },
            phone: {
                label: 'Téléphone',
                type: 'text',
                required: true,
                display: false
            },
            email: {
                label: 'Email',
                type: 'text',
                required: true,
                display: false
            }
        });
        expect(paymentMean.additionalFields.getLocalizedFields('pt')).toEqual({
            expiration_limit: {
                label: 'Expiration limit',
                type: 'text',
                required: false,
                display: false
            },
            streetaddress: {
                label: 'Street address',
                type: 'text',
                required: true,
                display: false
            },
            zipcode: {
                label: 'Zipcode',
                type: 'text',
                required: true,
                display: false
            },
            phone: {
                label: 'Phone',
                type: 'text',
                required: true,
                display: false
            },
            email: {
                label: 'Email',
                type: 'text',
                required: true,
                display: false
            }
        });
        expect(paymentMean.priority).toEqual(26);
    });

    it('gets predefined mean with no additional fields', () => {
        let paymentMean = PaymentMean.getPaymentMean('alma-3x');

        expect(paymentMean).toBeInstanceOf(PaymentMean);
        expect(paymentMean.paymentMeanCode).toEqual('alma-3x');
        expect(paymentMean.brandName).toEqual('Alma 3x');
        expect(paymentMean.category).toEqual('credit-consumption');
        expect(paymentMean.comment).toEqual('');
        expect(paymentMean.can3ds).toEqual(true);
        expect(paymentMean.canRecurring).toEqual(false);
        expect(paymentMean.canManualCapture).toEqual(true);
        expect(paymentMean.canManualCapturePartially).toEqual(false);
        expect(paymentMean.canRefund).toEqual(true);
        expect(paymentMean.canRefundPartially).toEqual(true);
        expect(paymentMean.basketRequired).toEqual(false);
        expect(paymentMean.currencies).toEqual(['EUR']);
        expect(paymentMean.countries).toEqual(['FR', 'DE', 'IT', 'BE', 'LUX', 'NL', 'IE', 'AT', 'PT', 'ES']);
        expect(paymentMean.checkoutFieldsMandatory).toEqual([]);
        expect(paymentMean.additionalFields).toEqual({
            _sdkClass: 'AbstractPaymentMethod',
            _formFields: undefined
        });

        expect(paymentMean.additionalFields.getLocalizedFields('fr')).toEqual({});
        expect(paymentMean.priority).toEqual(32);
    });

    it('gets predefined mean with no additional fields translations', () => {
        let paymentMean = PaymentMean.getPaymentMean('cb');

        expect(paymentMean).toBeInstanceOf(PaymentMean);
        expect(paymentMean.paymentMeanCode).toEqual('cb');
        expect(paymentMean.brandName).toEqual('Carte Bancaire');
        expect(paymentMean.category).toEqual('credit-card');
        expect(paymentMean.comment).toEqual('Accepted cards: Visa, MasterCard. Available only in France');
        expect(paymentMean.can3ds).toEqual(true);
        expect(paymentMean.canRecurring).toEqual(true);
        expect(paymentMean.canManualCapture).toEqual(true);
        expect(paymentMean.canManualCapturePartially).toEqual(true);
        expect(paymentMean.canRefund).toEqual(true);
        expect(paymentMean.canRefundPartially).toEqual(true);
        expect(paymentMean.basketRequired).toEqual(false);
        expect(paymentMean.currencies).toEqual(['EUR']);
        expect(paymentMean.countries).toEqual(['FR']);
        expect(paymentMean.checkoutFieldsMandatory).toEqual([]);
        expect(paymentMean.additionalFields).toEqual({
            _sdkClass: 'CardTokenPaymentMethod',
            _formFields: {
                cardtoken: {
                    type: 'text',
                    required: true,
                    display: false
                },
                eci: {
                    type: 'text',
                    required: true,
                    display: false
                },
                authentication_indicator: {
                    type: 'text',
                    required: true,
                    display: false
                }
            }
        });

        expect(paymentMean.additionalFields.getLocalizedFields('fr')).toEqual({
            cardtoken: {
                type: 'text',
                required: true,
                display: false
            },
            eci: {
                type: 'text',
                required: true,
                display: false
            },
            authentication_indicator: {
                type: 'text',
                required: true,
                display: false
            }
        });
        expect(paymentMean.priority).toEqual(1);
    });

    it('gets all predefined means for a category', () => {
        let paymentMeans = PaymentMean.getPaymentMeans(['debit-card', 'ewallet']);

        expect(paymentMeans.length).toBeGreaterThan(0);

        for (let paymentMean of paymentMeans) {
            expect(paymentMean).toBeInstanceOf(PaymentMean);
            expect(['debit-card', 'ewallet']).toContain(paymentMean.category);
        }
    });

    it('gets all predefined means', () => {
        let paymentMeans = PaymentMean.getPaymentMeans();

        expect(paymentMeans.length).toBeGreaterThan(0);

        for (let paymentMean of paymentMeans) {
            expect(paymentMean).toBeInstanceOf(PaymentMean);
        }
    });

    it('Sorts payment means', () => {
        let multibanco = PaymentMean.getPaymentMean('multibanco');
        let visa = PaymentMean.getPaymentMean('visa');
        let przelewy = PaymentMean.getPaymentMean('przelewy24');

        let sorted = PaymentMean.orderByPriority(['multibanco', 'visa', 'przelewy24']);

        expect(sorted).toEqual([visa, przelewy, multibanco]);
    });

    it('Sorts payment means with only string', () => {
        let multibanco = PaymentMean.getPaymentMean('multibanco');
        let visa = PaymentMean.getPaymentMean('visa');
        let przelewy = PaymentMean.getPaymentMean('przelewy24');

        let sorted = PaymentMean.orderByPriority('multibanco,visa,przelewy24');

        expect(sorted).toEqual([visa, przelewy, multibanco]);
    });

    it('Sorts unknown payment means', () => {
        let multibanco = PaymentMean.getPaymentMean('multibanco');
        let visa = PaymentMean.getPaymentMean('visa');
        let przelewy = PaymentMean.getPaymentMean('przelewy24');
        let unknown = new PaymentMean({ paymentMeanCode: 'unknown', priority: 99 });

        let sorted = PaymentMean.orderByPriority('multibanco,unknown,visa,przelewy24');

        expect(sorted).toEqual([visa, przelewy, multibanco, unknown]);
    });

    it('Sorts payment means when no mean asked', () => {
        let sorted = PaymentMean.orderByPriority();

        expect(sorted).toEqual([]);
    });
});
