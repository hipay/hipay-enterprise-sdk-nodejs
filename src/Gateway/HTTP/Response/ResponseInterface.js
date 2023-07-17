'use strict';

const CommonInterface = require('../../../CommonInterface');

class ResponseInterface extends CommonInterface {
  constructor() {
    const requiredMethods = {
      statusCode: ['get'],
      body: ['get'],
      headers: ['get']
    };

    super(requiredMethods);
  }
}

module.exports = ResponseInterface;
