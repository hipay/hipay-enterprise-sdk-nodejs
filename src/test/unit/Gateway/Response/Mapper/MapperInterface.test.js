const MapperInterface = require('../../../../../Gateway/Response/Mapper/MapperInterface');

describe('Test MapperInterface', () => {
    it('throw on methods by default', () => {
        let mapperInterface = new MapperInterface();

        expect(mapperInterface).toBeInstanceOf(MapperInterface);
        expect(() => {
            mapperInterface.mappedObject;
        }).toThrow('You must implement this function');
        expect(() => {
            mapperInterface.source;
        }).toThrow('You must implement this function');
        expect(() => {
            mapperInterface.mapResponseToModel();
        }).toThrow('You must implement this function');
    });

    it('initializes correctly when methods are present', () => {
        class DummyClass extends MapperInterface {
            mapResponseToModel() {
                return 'Hello world';
            }

            get mappedObject() {
                return '{MAPPED_OBJECT}';
            }

            get source() {
                return '{SOURCE}';
            }
        }

        expect(() => {
            new DummyClass();
        }).not.toThrow();

        let dummyobj = new DummyClass();

        expect(dummyobj).toBeInstanceOf(MapperInterface);
    });
});
