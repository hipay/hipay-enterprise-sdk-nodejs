'use strict';

const AbstractMapper = require('./AbstractMapper');
const Card = require('../Card');

class CardMapper extends AbstractMapper {
    mapResponseToModel() {
        const values = {
            pan: typeof this.source.pan !== 'undefined' ? this.source.pan : null,
            lastDigits: typeof this.source.lastDigits !== 'undefined' ? this.source.lastDigits : null,
            scheme: typeof this.source.scheme !== 'undefined' ? this.source.scheme : null,
            category: typeof this.source.category !== 'undefined' ? this.source.category : null,
            type: typeof this.source.type !== 'undefined' ? this.source.type : null,
            bin: typeof this.source.bin !== 'undefined' ? this.source.bin : null
        };

        this._modelObject = new Card(values);
    }
}

module.exports = CardMapper;
