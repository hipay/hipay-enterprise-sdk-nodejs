export = AbstractModel;
declare class AbstractModel extends AbstractRequestPart {
    toJson(): string;
    cleanNullValues(): boolean;
}
import AbstractRequestPart = require("../AbstractRequestPart");
//# sourceMappingURL=AbstractModel.d.ts.map