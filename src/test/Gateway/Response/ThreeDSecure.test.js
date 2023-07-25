const ThreeDSecure = require('../../../Gateway/Response/ThreeDSecure');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let threeDSecure;

        expect(() => {
            threeDSecure = new ThreeDSecure({
                eci: '{ECI}',
                enrollmentStatus: '{ENROLLMENTSTATUS}',
                enrollmentMessage: '{ENROLLMENTMESSAGE}',
                authenticationStatus: '{AUTHENTICATIONSTATUS}',
                authenticationMessage: '{AUTHENTICATIONMESSAGE}',
                authenticationToken: '{AUTHENTICATIONTOKEN}',
                xid: '{XID}'
            });
        }).not.toThrow();

        expect(threeDSecure).toBeInstanceOf(ThreeDSecure);
        expect(threeDSecure.eci).toEqual('{ECI}');
        expect(threeDSecure.enrollmentStatus).toEqual('{ENROLLMENTSTATUS}');
        expect(threeDSecure.enrollmentMessage).toEqual('{ENROLLMENTMESSAGE}');
        expect(threeDSecure.authenticationStatus).toEqual('{AUTHENTICATIONSTATUS}');
        expect(threeDSecure.authenticationMessage).toEqual('{AUTHENTICATIONMESSAGE}');
        expect(threeDSecure.authenticationToken).toEqual('{AUTHENTICATIONTOKEN}');
        expect(threeDSecure.xid).toEqual('{XID}');
    });

    it('Initializes correctly with empty parameters', () => {
        let threeDSecure;

        expect(() => {
            threeDSecure = new ThreeDSecure({});
        }).not.toThrow();

        expect(threeDSecure).toBeInstanceOf(ThreeDSecure);
        expect(threeDSecure.eci).toEqual(null);
        expect(threeDSecure.enrollmentStatus).toEqual(null);
        expect(threeDSecure.enrollmentMessage).toEqual(null);
        expect(threeDSecure.authenticationStatus).toEqual(null);
        expect(threeDSecure.authenticationMessage).toEqual(null);
        expect(threeDSecure.authenticationToken).toEqual(null);
        expect(threeDSecure.xid).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let threeDSecure;

        expect(() => {
            threeDSecure = new ThreeDSecure();
        }).not.toThrow();

        expect(threeDSecure).toBeInstanceOf(ThreeDSecure);
        expect(threeDSecure.eci).toEqual(null);
        expect(threeDSecure.enrollmentStatus).toEqual(null);
        expect(threeDSecure.enrollmentMessage).toEqual(null);
        expect(threeDSecure.authenticationStatus).toEqual(null);
        expect(threeDSecure.authenticationMessage).toEqual(null);
        expect(threeDSecure.authenticationToken).toEqual(null);
        expect(threeDSecure.xid).toEqual(null);
    });
});
