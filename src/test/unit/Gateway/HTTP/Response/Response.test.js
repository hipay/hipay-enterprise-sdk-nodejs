const Response = require('../../../../../Gateway/HTTP/Response/Response');

describe('Response', () => {
    it('constructs', () => {
        let resp = new Response('BODY', 'STATUS', 'HEADERS');

        expect(resp.body).toEqual('BODY');
        expect(resp.statusCode).toEqual('STATUS');
        expect(resp.headers).toEqual('HEADERS');
    });
});
