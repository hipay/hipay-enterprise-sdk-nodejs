'use strict';

class FraudScreening {
  constructor(values) {
    if (typeof values !== 'object') {
      values = {};
    }

    this.initValues();

    if (Object.prototype.hasOwnProperty.call(values, 'scoring')) {
      this.scoring = values.scoring;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'result')) {
      this.result = values.result;
    }
    if (Object.prototype.hasOwnProperty.call(values, 'review')) {
      this.review = values.review;
    }
  }

  initValues() {
    this.scoring = null;
    this.result = null;
    this.review = null;
  }
}

module.exports = FraudScreening;
