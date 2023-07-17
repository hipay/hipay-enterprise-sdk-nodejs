'use strict';

const AbstractMapper = require('./AbstractMapper');
const FraudScreening = require('../FraudScreening');

class FraudScreeningMapper extends AbstractMapper {
  mapResponseToModel() {
    let values = {
      scoring:
        typeof this.source.scoring !== 'undefined' ? this.source.scoring : null,
      result:
        typeof this.source.result !== 'undefined' ? this.source.result : null,
      review:
        typeof this.source.review !== 'undefined' ? this.source.review : null
    };

    this._modelObject = new FraudScreening(values);
  }
}

module.exports = FraudScreeningMapper;
