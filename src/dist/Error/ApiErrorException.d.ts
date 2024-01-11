export = ApiErrorException;
declare class ApiErrorException extends HiPayNodeSDKError {
    constructor(message: any, status: any, code: any, description: any, ...args: any[]);
    message: any;
    status: any;
    code: any;
    description: any;
}
import HiPayNodeSDKError = require("./HiPayNodeSDKError");
//# sourceMappingURL=ApiErrorException.d.ts.map