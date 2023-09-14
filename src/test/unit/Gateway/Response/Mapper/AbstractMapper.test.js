const AbstractMapper = require('../../../../../Gateway/Response/Mapper/AbstractMapper');

describe('Test abstract mapper initialization', () => {
    it('can initialize', () => {
        class DummyClass extends AbstractMapper {
            mapResponseToModel() {
                this._modelObject = 'Hello world';
            }
        }

        expect(() => {
            new AbstractMapper({
                source_1: 'source1',
                source2: 'source2'
            });
        }).not.toThrow();

        let dummyobj = new DummyClass({
            source_1: 'source1',
            source2: 'source2'
        });

        expect(dummyobj).toBeInstanceOf(AbstractMapper);
        expect(dummyobj.source).toEqual({
            source1: 'source1',
            source2: 'source2'
        });
        expect(dummyobj.mappedObject).toEqual('Hello world');
    });
});
