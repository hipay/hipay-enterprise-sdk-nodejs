'use strict';

const AbstractMapper = require('./AbstractMapper');
const FraudResult = require('../FraudResult');

class FraudResultMapper extends AbstractMapper {
    mapResponseToModel() {
        const values = {
            result: typeof this.source.result !== 'undefined' ? this.source.result : null,
            review: typeof this.source.review !== 'undefined' ? this.source.review : null,
            score: typeof this.source.score !== 'undefined' ? this.source.score : null
        };

        this._modelObject = new FraudResult(values);
    }
}

module.exports = FraudResultMapper;
