export = Response;
declare class Response {
    /**
     * @param {Object} body
     * @param {Number} status
     * @param {Object} headers
     */
    constructor(body: any, status: number, headers: any);
    _body: any;
    _statusCode: number;
    _headers: any;
    get statusCode(): number;
    get headers(): any;
    get body(): any;
}
//# sourceMappingURL=Response.d.ts.map