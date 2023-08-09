'use strict';

class DeliveryMethod {
    static _PREDEFINED_METHODS = [
        {
            code: 1,
            mode: 'STORE',
            shipping: 'STANDARD'
        },
        {
            code: 2,
            mode: 'STORE',
            shipping: 'EXPRESS'
        },
        {
            code: 3,
            mode: 'STORE',
            shipping: 'PRIORITY24H'
        },
        {
            code: 4,
            mode: 'STORE',
            shipping: 'PRIORITY2H'
        },
        {
            code: 5,
            mode: 'STORE',
            shipping: 'PRIORITY1H'
        },
        {
            code: 6,
            mode: 'STORE',
            shipping: 'INSTANT'
        },
        {
            code: 7,
            mode: 'CARRIER',
            shipping: 'STANDARD'
        },
        {
            code: 8,
            mode: 'CARRIER',
            shipping: 'EXPRESS'
        },
        {
            code: 9,
            mode: 'CARRIER',
            shipping: 'PRIORITY24H'
        },
        {
            code: 10,
            mode: 'CARRIER',
            shipping: 'PRIORITY2H'
        },
        {
            code: 11,
            mode: 'STORE',
            shipping: 'PRIORITY1H'
        },
        {
            code: 12,
            mode: 'CARRIER',
            shipping: 'INSTANT'
        },
        {
            code: 13,
            mode: 'RELAYPOINT',
            shipping: 'STANDARD'
        },
        {
            code: 14,
            mode: 'RELAYPOINT',
            shipping: 'EXPRESS'
        },
        {
            code: 15,
            mode: 'RELAYPOINT',
            shipping: 'PRIORITY24H'
        },
        {
            code: 16,
            mode: 'RELAYPOINT',
            shipping: 'PRIORITY2H'
        },
        {
            code: 17,
            mode: 'RELAYPOINT',
            shipping: 'PRIORITY1H'
        },
        {
            code: 18,
            mode: 'RELAYPOINT',
            shipping: 'INSTANT'
        },
        {
            code: 19,
            mode: 'ELECTRONIC',
            shipping: 'STANDARD'
        },
        {
            code: 20,
            mode: 'ELECTRONIC',
            shipping: 'EXPRESS'
        },
        {
            code: 21,
            mode: 'ELECTRONIC',
            shipping: 'PRIORITY24H'
        },
        {
            code: 22,
            mode: 'ELECTRONIC',
            shipping: 'PRIORITY2H'
        },
        {
            code: 23,
            mode: 'ELECTRONIC',
            shipping: 'PRIORITY1H'
        },
        {
            code: 24,
            mode: 'ELECTRONIC',
            shipping: 'INSTANT'
        },
        {
            code: 25,
            mode: 'TRAVEL',
            shipping: 'STANDARD'
        },
        {
            code: 26,
            mode: 'TRAVEL',
            shipping: 'EXPRESS'
        },
        {
            code: 27,
            mode: 'TRAVEL',
            shipping: 'PRIORITY24H'
        },
        {
            code: 28,
            mode: 'TRAVEL',
            shipping: 'PRIORITY1H'
        },
        {
            code: 29,
            mode: 'TRAVEL',
            shipping: 'INSTANT'
        }
    ];

    /**
     * Technical code
     * @type {String|Number}
     * @private
     */
    _code;

    /**
     * Shipping mode
     * @type {'STORE'|'CARRIER'|'RELAYPOINT'|'ELECTRONIC'|'TRAVEL'}
     * @private
     */
    _mode;

    /**
     * Shipping type
     * @type {'STANDARD'|'EXPRESS'|'PRIORITY24H'|'PRIORITY2H'|'PRIORITY1H'|'INSTANT'}
     * @private
     */
    _shipping;

    /**
     * Creates a new DeliveryMethod instance with the provided data
     * @param {Object} [deliveryMethodData = {}]
     */
    constructor(deliveryMethodData = {}) {
        for (let prop in deliveryMethodData) {
            if (Object.prototype.hasOwnProperty.call(this, `_${prop}`)) {
                this[`_${prop}`] = deliveryMethodData[prop];
            }
        }
    }

    /**
     * Technical code
     * @returns {String|Number}
     */
    get code() {
        return this._code;
    }

    /**
     * @param {String|Number} value
     */
    set code(value) {
        this._code = value;
    }

    /**
     * Shipping mode
     * @returns {"STORE"|"CARRIER"|"RELAYPOINT"|"ELECTRONIC"|"TRAVEL"}
     */
    get mode() {
        return this._mode;
    }

    /**
     * @param {"STORE"|"CARRIER"|"RELAYPOINT"|"ELECTRONIC"|"TRAVEL"} value
     */
    set mode(value) {
        this._mode = value;
    }

    /**
     * Shipping type
     * @returns {'STANDARD'|'EXPRESS'|'PRIORITY24H'|'PRIORITY2H'|'PRIORITY1H'|'INSTANT'}
     */
    get shipping() {
        return this._shipping;
    }

    /**
     * @param {'STANDARD'|'EXPRESS'|'PRIORITY24H'|'PRIORITY2H'|'PRIORITY1H'|'INSTANT'} value
     */
    set shipping(value) {
        this._shipping = value;
    }

    static getDeliveryMethods() {
        return this._PREDEFINED_METHODS.map((elt) => new DeliveryMethod(elt));
    }
}

module.exports = DeliveryMethod;
