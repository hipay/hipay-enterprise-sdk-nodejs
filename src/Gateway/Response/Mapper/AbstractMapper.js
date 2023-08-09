'use strict';

const MapperInterface = require('./MapperInterface');

class AbstractMapper extends MapperInterface {
    constructor(source) {
        super();
        this._source = source;
        this._modelObject = null;
    }

    get source() {
        return this._source;
    }

    get mappedObject() {
        this.mapResponseToModel();
        return this._modelObject;
    }
}

module.exports = AbstractMapper;
