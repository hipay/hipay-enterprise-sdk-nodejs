'use strict';

const CommonInterface = require('../../CommonInterface');

class GatewayClientInterface extends CommonInterface {
  constructor() {
    const requiredMethods = {
      requestNewOrder: [],
      clientProvider: ['get']
    };

    super(requiredMethods);
  }
}

module.exports = GatewayClientInterface;
