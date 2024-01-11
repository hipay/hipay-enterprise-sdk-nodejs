export = SecuritySettings;
declare class SecuritySettings extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {String} [values.hashingAlgorithm]
     */
    constructor(values: {
        hashingAlgorithm?: string;
    });
    hashingAlgorithm: string;
}
import AbstractResponsePart = require("./AbstractResponsePart");
//# sourceMappingURL=SecuritySettings.d.ts.map