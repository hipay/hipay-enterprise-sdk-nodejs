const AbstractMapper = require('../../../../Gateway/Response/Mapper/AbstractMapper');

describe('Test abstract mapper initialization', () => {
    it('can initialize', () => {
        class DummyClass extends AbstractMapper {
            mapResponseToModel() {
                this._modelObject = 'Hello world';
            }
        }

        expect(() => {
            new AbstractMapper('{SOURCE}');
        }).not.toThrow();

        let dummyobj = new DummyClass('{SOURCE}');

        expect(dummyobj).toBeInstanceOf(AbstractMapper);
        expect(dummyobj.source).toEqual('{SOURCE}');
        expect(dummyobj.mappedObject).toEqual('Hello world');
    });
});
