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

        if (Object.hasOwn(values, 'pan')) {
            this.pan = values.pan;
        }

        if (Object.hasOwn(values, 'lastDigits')) {
            this.lastDigits = values.lastDigits;
        }

        if (Object.hasOwn(values, 'scheme')) {
            this.scheme = values.scheme;
        }

        if (Object.hasOwn(values, 'category')) {
            this.category = values.category;
        }

        if (Object.hasOwn(values, 'type')) {
            this.type = values.type;
        }

        if (Object.hasOwn(values, 'bin')) {
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
