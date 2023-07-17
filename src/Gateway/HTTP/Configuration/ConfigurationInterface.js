'use strict';

const CommonInterface = require('../../../CommonInterface');

class ConfigurationInterface extends CommonInterface {
  constructor() {
    const requiredMethods = {
      apiUsername: ['get', 'set'],
      apiPassword: ['get', 'set'],
      apiEnv: ['get', 'set'],
      apiEndpointProd: ['get'],
      apiEndpointStage: ['get'],
      apiEndpoint: ['get'],
      dataApiEndpointProd: ['get'],
      dataApiEndpointStage: ['get'],
      dataApiEndpoint: ['get'],
      dataApiHttpUserAgent: ['get'],
      secureVaultEndpointProd: ['get'],
      secureVaultEndpointStage: ['get'],
      secureVaultEndpoint: ['get'],
      apiHTTPHeaderAccept: ['get', 'set'],
      proxy: ['get', 'set'],
      timeout: ['get', 'set'],
      httpUserAgent: ['get', 'set']
    };

    super(requiredMethods);
  }
}

module.exports = ConfigurationInterface;
