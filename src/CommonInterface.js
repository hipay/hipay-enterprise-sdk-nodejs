'use strict';

const InterfaceError = require('./Error/InterfaceError');

class CommonInterface {
  constructor(requiredMethods) {
    for (let method in requiredMethods) {
      if (Object.prototype.hasOwnProperty.call(requiredMethods, method)) {
        if (!(method in this)) {
          throw new InterfaceError(
            this.constructor.name + ' must implement ' + method + ' method'
          );
        } else {
          if (Array.isArray(requiredMethods[method])) {
            let actualProperties = this.getRealPropertyDescriptor(this, method);
            for (let expectedProperty of requiredMethods[method]) {
              if (
                !(expectedProperty in actualProperties) ||
                typeof actualProperties[expectedProperty] === 'undefined'
              ) {
                throw new InterfaceError(
                  this.constructor.name +
                    ' must implement ' +
                    method +
                    ' method with ' +
                    expectedProperty +
                    ' property'
                );
              }
            }
          }
        }
      }
    }
  }

  getRealPropertyDescriptor(obj, prop) {
    let desc;
    do {
      desc = Object.getOwnPropertyDescriptor(obj, prop);
    } while (!desc && (obj = Object.getPrototypeOf(obj)));
    return desc;
  }
}

module.exports = CommonInterface;
