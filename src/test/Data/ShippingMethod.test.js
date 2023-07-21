const { ShippingMethod } = require('../../Data');

describe('ShippingMethod', () => {
  it('constructs', () => {
    let shippingMethod = new ShippingMethod({
      code: 'CODE',
      displayName: {
        EN: 'NAME_EN',
        FR: 'NAME_FR'
      },
      dummy: 'DUMMY'
    });

    expect(shippingMethod.code).toEqual('CODE');
    expect(shippingMethod.displayName).toEqual(undefined);
    expect(shippingMethod).not.toHaveProperty('dummy');
    expect(shippingMethod).not.toHaveProperty('_dummy');

    expect(shippingMethod.getDisplayName('FR')).toEqual('NAME_FR');
    expect(shippingMethod.getDisplayName('PT')).toEqual('NAME_EN');
    expect(shippingMethod.getDisplayName()).toEqual('NAME_EN');

    shippingMethod.code = 'CODE_2';
    shippingMethod.displayName = {
      EN: 'NAME_EN_2',
      FR: 'NAME_FR_2'
    };

    expect(shippingMethod.code).toEqual('CODE_2');
    expect(shippingMethod.getDisplayName('FR')).toEqual('NAME_FR_2');
    expect(shippingMethod.getDisplayName('PT')).toEqual('NAME_EN_2');
    expect(shippingMethod.getDisplayName()).toEqual('NAME_EN_2');
  });
  it('constructs empty', () => {
    let shippingMethod = new ShippingMethod();

    expect(shippingMethod.code).toEqual(undefined);
    expect(shippingMethod.getDisplayName('FR')).toEqual(undefined);
  });

  it('gets predefined methods', () => {
    let predefined = ShippingMethod.getShippingMethods();

    expect(predefined.mode.length).toBeGreaterThan(0);
    expect(predefined.shipping.length).toBeGreaterThan(0);

    for (let method of predefined.mode) {
      expect(method).toBeInstanceOf(ShippingMethod);
    }
    for (let method of predefined.shipping) {
      expect(method).toBeInstanceOf(ShippingMethod);
    }
  });
});
