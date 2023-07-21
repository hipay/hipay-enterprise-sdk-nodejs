const { DeliveryMethod } = require('../../Data');

describe('DeliveryMethod', () => {
  it('constructs', () => {
    let deliveryMethod = new DeliveryMethod({
      code: 'CODE',
      mode: 'CARRIER',
      shipping: 'SHIPPING',
      dummy: 'DUMMY'
    });

    expect(deliveryMethod.code).toEqual('CODE');
    expect(deliveryMethod.mode).toEqual('CARRIER');
    expect(deliveryMethod.shipping).toEqual('SHIPPING');
    expect(deliveryMethod).not.toHaveProperty('dummy');
    expect(deliveryMethod).not.toHaveProperty('_dummy');

    deliveryMethod.code = 'CODE_2';
    deliveryMethod.mode = 'ELECTRONIC';
    deliveryMethod.shipping = 'SHIPPING_2';

    expect(deliveryMethod.code).toEqual('CODE_2');
    expect(deliveryMethod.mode).toEqual('ELECTRONIC');
    expect(deliveryMethod.shipping).toEqual('SHIPPING_2');
  });
  it('constructs empty', () => {
    let deliveryMethod = new DeliveryMethod();

    expect(deliveryMethod.code).toEqual(undefined);
    expect(deliveryMethod.mode).toEqual(undefined);
    expect(deliveryMethod.shipping).toEqual(undefined);
  });

  it('gets predefined methods', () => {
    let predefined = DeliveryMethod.getDeliveryMethods();

    expect(predefined.length).toBeGreaterThan(0);

    for (let method of predefined) {
      expect(method).toBeInstanceOf(DeliveryMethod);
    }
  });
});
