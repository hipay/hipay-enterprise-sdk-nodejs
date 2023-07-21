'use strict';

class MapperInterface {
  get mappedObject() {
    throw new Error('You must implement this function');
  }

  get source() {
    throw new Error('You must implement this function');
  }

  mapResponseToModel() {
    throw new Error('You must implement this function');
  }
}

module.exports = MapperInterface;
