const InvalidArgumentException = require('../../../Error/InvalidArgumentException');
const HiPayNodeSDKError = require('../../../Error/HiPayNodeSDKError');

describe('InvalidArgumentException', () => {
    it('constructs', () => {
        let exception = new InvalidArgumentException();

        expect(exception).toBeInstanceOf(InvalidArgumentException);
        expect(exception).toBeInstanceOf(HiPayNodeSDKError);
    });
});
