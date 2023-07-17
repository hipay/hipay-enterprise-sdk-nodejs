'use strict';

const CommonInterface = require('../../CommonInterface');

class PIDataClientInterface extends CommonInterface {
  constructor() {
    const requiredMethods = {
      clientProvider: ['get'],
      sendData: [],
      getDataId: [],
      getOrderData: []
    };

    super(requiredMethods);
  }
}

module.exports = PIDataClientInterface;
