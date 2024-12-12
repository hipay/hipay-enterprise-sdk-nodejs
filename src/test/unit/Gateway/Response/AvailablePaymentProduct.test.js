const AvailablePaymentProduct = require('../../../../Gateway/Response/AvailablePaymentProduct');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let availablePaymentProduct;

        expect(() => {
            availablePaymentProduct = new AvailablePaymentProduct({
                id: '{ID}',
                code: '{CODE}',
                description: '{DESCRIPTION}',
                customerDescription: '{CUSTOMERDESCRIPTION}',
                paymentProductCategoryCode: '{PAYMENTPRODUCTCATEGORYCODE}',
                tokenizable: '{TOKENIZABLE}',
                options: '{OPTIONS}'
            });
        }).not.toThrow();

        expect(availablePaymentProduct).toBeInstanceOf(AvailablePaymentProduct);
        expect(availablePaymentProduct.id).toEqual('{ID}');
        expect(availablePaymentProduct.code).toEqual('{CODE}');
        expect(availablePaymentProduct.description).toEqual('{DESCRIPTION}');
        expect(availablePaymentProduct.customerDescription).toEqual('{CUSTOMERDESCRIPTION}');
        expect(availablePaymentProduct.paymentProductCategoryCode).toEqual('{PAYMENTPRODUCTCATEGORYCODE}');
        expect(availablePaymentProduct.tokenizable).toEqual('{TOKENIZABLE}');
        expect(availablePaymentProduct.options).toEqual('{OPTIONS}');
    });

    it('Initializes correctly with empty parameters', () => {
        expect(() => {
            availablePaymentProduct = new AvailablePaymentProduct({});
        }).not.toThrow();

        expect(availablePaymentProduct).toBeInstanceOf(AvailablePaymentProduct);
        expect(availablePaymentProduct.id).toEqual(null);
        expect(availablePaymentProduct.code).toEqual(null);
        expect(availablePaymentProduct.description).toEqual(null);
        expect(availablePaymentProduct.customerDescription).toEqual(null);
        expect(availablePaymentProduct.paymentProductCategoryCode).toEqual(null);
        expect(availablePaymentProduct.tokenizable).toEqual(null);
        expect(availablePaymentProduct.options).toEqual(null);
    });

    it('Initializes correctly with no parameters', () => {
        expect(() => {
            availablePaymentProduct = new AvailablePaymentProduct();
        }).not.toThrow();

        expect(availablePaymentProduct).toBeInstanceOf(AvailablePaymentProduct);
        expect(availablePaymentProduct.id).toEqual(null);
        expect(availablePaymentProduct.code).toEqual(null);
        expect(availablePaymentProduct.description).toEqual(null);
        expect(availablePaymentProduct.customerDescription).toEqual(null);
        expect(availablePaymentProduct.paymentProductCategoryCode).toEqual(null);
        expect(availablePaymentProduct.tokenizable).toEqual(null);
        expect(availablePaymentProduct.options).toEqual(null);
    });
});
