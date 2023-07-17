'use strict';

const CommonInterface = require('../../CommonInterface');

class ClientInterface extends CommonInterface {
  constructor() {
    const requiredMethods = {
      request: []
    };

    super(requiredMethods);
  }
}

module.exports = ClientInterface;
