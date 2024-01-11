export = FraudScreening;
declare class FraudScreening extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {Number} [values.scoring]
     * @param {Number} [values.result]
     * @param {Number} [values.review]
     */
    constructor(values: {
        scoring?: number;
        result?: number;
        review?: number;
    });
    scoring: number;
    result: number;
    review: number;
}
import AbstractResponsePart = require("./AbstractResponsePart");
//# sourceMappingURL=FraudScreening.d.ts.map