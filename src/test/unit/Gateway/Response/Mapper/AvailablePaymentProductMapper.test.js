const AvailablePaymentProductMapper = require('../../../../../Gateway/Response/Mapper/AvailablePaymentProductMapper');
const AvailablePaymentProduct = require('../../../../../Gateway/Response/AvailablePaymentProduct');

describe('Test mapper', () => {
    it('maps correctly', () => {
        let availablePaymentProductMapper = new AvailablePaymentProductMapper({
            id: '{ID}',
            code: '{CODE}',
            description: '{DESCRIPTION}',
            customerDescription: '{CUSTOMERDESCRIPTION}',
            paymentProductCategoryCode: '{PAYMENTPRODUCTCATEGORYCODE}',
            tokenizable: '{TOKENIZABLE}',
            options: '{OPTIONS}'
        });

        expect(availablePaymentProductMapper).toBeInstanceOf(AvailablePaymentProductMapper);
        expect(() => {
            availablePaymentProductMapper.mapResponseToModel();
        }).not.toThrow();
        expect(availablePaymentProductMapper._modelObject).toStrictEqual(
            new AvailablePaymentProduct({
                id: '{ID}',
                code: '{CODE}',
                description: '{DESCRIPTION}',
                customerDescription: '{CUSTOMERDESCRIPTION}',
                paymentProductCategoryCode: '{PAYMENTPRODUCTCATEGORYCODE}',
                tokenizable: '{TOKENIZABLE}',
                options: '{OPTIONS}'
            })
        );
    });

    it('maps correctly with empty parameters', () => {
        let availablePaymentProductMapper = new AvailablePaymentProductMapper({});

        expect(availablePaymentProductMapper).toBeInstanceOf(AvailablePaymentProductMapper);
        expect(() => {
            availablePaymentProductMapper.mapResponseToModel();
        }).not.toThrow();
        expect(availablePaymentProductMapper._modelObject).toStrictEqual(new AvailablePaymentProduct({}));
    });
});
