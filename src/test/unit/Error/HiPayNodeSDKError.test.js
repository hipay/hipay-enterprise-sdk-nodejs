const HiPayNodeSDKError = require('../../../Error/HiPayNodeSDKError');

describe('HiPayNodeSDKError', () => {
    it('constructs', () => {
        let exception = new HiPayNodeSDKError();

        expect(exception).toBeInstanceOf(HiPayNodeSDKError);
        expect(exception.isHipaySDKError).toEqual(true);
    });
});
