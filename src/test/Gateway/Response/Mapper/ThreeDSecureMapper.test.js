const ThreeDSecureMapper = require('../../../../Gateway/Response/Mapper/ThreeDSecureMapper');
const ThreeDSecure = require('../../../../Gateway/Response/ThreeDSecure');

describe('Test mapper', () => {
    it('maps correctly', () => {
        let threeDSecureMapper = new ThreeDSecureMapper({
            eci: '{ECI}',
            enrollmentStatus: '{ENROLLMENTSTATUS}',
            enrollmentMessage: '{ENROLLMENTMESSAGE}',
            authenticationStatus: '{AUTHENTICATIONSTATUS}',
            authenticationMessage: '{AUTHENTICATIONMESSAGE}',
            authenticationToken: '{AUTHENTICATIONTOKEN}',
            xid: '{XID}'
        });

        expect(threeDSecureMapper).toBeInstanceOf(ThreeDSecureMapper);
        expect(() => {
            threeDSecureMapper.mapResponseToModel();
        }).not.toThrow();
        expect(threeDSecureMapper._modelObject).toStrictEqual(
            new ThreeDSecure({
                eci: '{ECI}',
                enrollmentStatus: '{ENROLLMENTSTATUS}',
                enrollmentMessage: '{ENROLLMENTMESSAGE}',
                authenticationStatus: '{AUTHENTICATIONSTATUS}',
                authenticationMessage: '{AUTHENTICATIONMESSAGE}',
                authenticationToken: '{AUTHENTICATIONTOKEN}',
                xid: '{XID}'
            })
        );
    });

    it('maps correctly with empty parameters', () => {
        let threeDSecureMapper = new ThreeDSecureMapper({});

        expect(threeDSecureMapper).toBeInstanceOf(ThreeDSecureMapper);
        expect(() => {
            threeDSecureMapper.mapResponseToModel();
        }).not.toThrow();
        expect(threeDSecureMapper._modelObject).toStrictEqual(new ThreeDSecure({}));
    });
});
