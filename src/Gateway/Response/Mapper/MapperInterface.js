'use strict';

const CommonInterface = require('../../../CommonInterface');

class MapperInterface extends CommonInterface {
  constructor() {
    const requiredMethods = {
      mapResponseToModel: [],
      mappedObject: ['get'],
      source: ['get']
    };

    super(requiredMethods);
  }
}

module.exports = MapperInterface;
