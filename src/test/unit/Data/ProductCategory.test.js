const { ProductCategory } = require('../../../Data');

describe('ProductCategory', () => {
    it('constructs', () => {
        let productCategory = new ProductCategory({
            code: 'CODE',
            name: 'NAME',
            locals: {
                EN: 'Games (physical goods)',
                FR: 'Jeux (version physique)'
            },
            dummy: 'DUMMY'
        });

        expect(productCategory.code).toEqual('CODE');
        expect(productCategory.name).toEqual('NAME');
        expect(productCategory.locals).toEqual({
            EN: 'Games (physical goods)',
            FR: 'Jeux (version physique)'
        });
        expect(productCategory).not.toHaveProperty('dummy');
        expect(productCategory).not.toHaveProperty('_dummy');

        expect(productCategory.getLocal('FR')).toEqual('Jeux (version physique)');
        expect(productCategory.getLocal('PT')).toEqual('Games (physical goods)');
        expect(productCategory.getLocal()).toEqual('Games (physical goods)');

        productCategory.locals = 'LOCALS_2';

        expect(productCategory.code).toEqual('CODE');
        expect(productCategory.name).toEqual('NAME');
        expect(productCategory.locals).toEqual('LOCALS_2');
    });
    it('constructs empty', () => {
        let productCategory = new ProductCategory();

        expect(productCategory.code).toEqual(undefined);
        expect(productCategory.name).toEqual(undefined);
        expect(productCategory.locals).toEqual(undefined);
    });

    it('gets predefined categories', () => {
        let predefined = ProductCategory.getProductCategories();

        expect(predefined.length).toBeGreaterThan(0);

        for (let method of predefined) {
            expect(method).toBeInstanceOf(ProductCategory);
        }
    });
});
