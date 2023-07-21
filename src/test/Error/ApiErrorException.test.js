const ApiErrorException = require('../../Error/ApiErrorException');
const HiPayNodeSDKError = require('../../Error/HiPayNodeSDKError');

describe('ApiErrorException', () => {
  it('constructs', () => {
    let exception = new ApiErrorException(
      'MESSAGE',
      'STATUS',
      'CODE',
      'DESCRIPTION'
    );

    expect(exception).toBeInstanceOf(ApiErrorException);
    expect(exception).toBeInstanceOf(HiPayNodeSDKError);
    expect(exception.message).toEqual('MESSAGE');
    expect(exception.status).toEqual('STATUS');
    expect(exception.code).toEqual('CODE');
    expect(exception.description).toEqual('DESCRIPTION');
  });
});
