export = AbstractMapper;
declare class AbstractMapper extends MapperInterface {
    constructor(source: any);
    _source: any;
    _modelObject: any;
    get source(): any;
    get mappedObject(): any;
}
import MapperInterface = require("./MapperInterface");
//# sourceMappingURL=AbstractMapper.d.ts.map