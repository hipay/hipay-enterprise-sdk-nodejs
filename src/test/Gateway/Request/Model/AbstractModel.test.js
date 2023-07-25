const AbstractModel = require('../../../../Gateway/Request/Model/AbstractModel');

describe('Test Jsonification', () => {
    it('Jsonifies correctly', () => {
        let dummyObj = new AbstractModel();
        dummyObj.property = 'value';
        dummyObj.objProperty = {
            subProp1: 'Hello',
            subProp2: 1
        };

        expect(dummyObj.toJson()).toEqual('{"property":"value","objProperty":{"subProp1":"Hello","subProp2":1}}');
    });
});

describe('Test cleaning', () => {
    it('cleans null values with all kinds of properties', () => {
        let dummyObj = new AbstractModel();
        dummyObj.property = 'value';
        dummyObj.objProperty = {
            subProp1: 'Hello',
            subProp2: 1,
            subProp3: null
        };
        dummyObj.nullValue = null;

        let dummySubObj = new AbstractModel();
        dummySubObj.subProp1 = 'Hello';
        dummySubObj.subProp2 = 1;
        dummySubObj.subProp3 = null;

        dummyObj.subModel = dummySubObj;

        let dummySubObj2 = new AbstractModel();
        dummySubObj2.subProp1 = null;
        dummySubObj2.subProp3 = null;

        dummyObj.subModel2 = dummySubObj2;

        let expectedObj = new AbstractModel();
        expectedObj.property = 'value';
        expectedObj.objProperty = {
            subProp1: 'Hello',
            subProp2: 1,
            subProp3: null
        };

        let expectedSubObj = new AbstractModel();
        expectedSubObj.subProp1 = 'Hello';
        expectedSubObj.subProp2 = 1;

        expectedObj.subModel = expectedSubObj;

        expect(dummyObj.cleanNullValues()).toEqual(true);
        expect(dummyObj).toStrictEqual(expectedObj);
    });

    it('returns false when object is left empty', () => {
        let dummyObj = new AbstractModel();
        dummyObj.property = null;

        let dummySubObj = new AbstractModel();
        dummySubObj.subProp1 = null;
        dummySubObj.subProp3 = null;

        dummyObj.subModel2 = dummySubObj;

        expect(dummyObj.cleanNullValues()).toEqual(false);
    });
});
