'use strict';

const AbstractResponsePart = require('../AbstractResponsePart');

class Card extends AbstractResponsePart {
    /**
     * @param {Object} values
     * @param {String} [values.pan]
     * @param {String} [values.lastDigits]
     * @param {String} [values.scheme]
     * @param {String} [values.category]
     * @param {String} [values.type]
     * @param {Number} [values.bin]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

        if (Object.prototype.hasOwnProperty.call(values, 'pan')) {
            this.pan = values.pan;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'lastDigits')) {
            this.lastDigits = values.lastDigits;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'scheme')) {
            this.scheme = values.scheme;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'category')) {
            this.category = values.category;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'type')) {
            this.type = values.type;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'bin')) {
            this.bin = values.bin;
        }
    }

    initValues() {
        super.initValues();

        this.pan = null;
        this.lastDigits = null;
        this.scheme = null;
        this.category = null;
        this.type = null;
        this.bin = null;
    }
}

module.exports = Card;
