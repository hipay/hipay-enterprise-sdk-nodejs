const InterfaceError = require('../../Error/InterfaceError');
const HiPayNodeSDKError = require('../../Error/HiPayNodeSDKError');

describe('InterfaceError', () => {
  it('constructs', () => {
    let exception = new InterfaceError();

    expect(exception).toBeInstanceOf(InterfaceError);
    expect(exception).toBeInstanceOf(HiPayNodeSDKError);
  });
});
